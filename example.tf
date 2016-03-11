provider "aws" {
  region = "${var.region}"
}

resource "aws_instance" "web" {
  ami = "${lookup(var.amis, var.region)}"
  instance_type = "t1.micro"
  key_name = "terraform"
  provisioner "local-exec" {
    command = "echo ${aws_instance.web.public_ip} > file.txt"
  }
}

resource "aws_eip" "ip" {
  instance = "${aws_instance.web.id}"
}

output "ip" {
  value = "${aws_eip.ip.public_ip}"
}
