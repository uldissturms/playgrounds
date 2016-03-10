provider "aws" {
  region = "eu-west-1"
}

resource "aws_instance" "web" {
  ami = "ami-971a65e0"
  instance_type = "t1.micro"
}

resource "aws_eip" "ip" {
  instance = "${aws_instance.web.id}"
}
