provider "aws" {
  region = "eu-west-1"
}

resource "aws_instance" "web" {
  ami = "ami-971a65e0"
  instance_type = "t1.micro"
  key_name = "terraform"
  provisioner "local-exec" {
    command = "echo ${aws_instance.web.public_ip} > file.txt"
  }
}

resource "aws_eip" "ip" {
  instance = "${aws_instance.web.id}"
}
