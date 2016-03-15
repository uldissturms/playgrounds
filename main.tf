provider "aws" {
  region = "${var.region}"
}

resource "aws_instance" "web" {
  ami = "${lookup(var.amis, var.region)}"
  instance_type = "t1.micro"
  key_name = "terraform"
  security_groups = ["${aws_security_group.terraform.name}"]
  provisioner "local-exec" {
    command = "echo ${aws_instance.web.public_ip} > file.txt"
  }
}

resource "aws_eip" "ip" {
  instance = "${aws_instance.web.id}"
}

resource "aws_security_group" "terraform" {
  name = "terraform"
  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

module "cloudtrail" {
  source = "./cloudtrail"
}

module "cloudwatch" {
  source = "./cloudwatch"
}
