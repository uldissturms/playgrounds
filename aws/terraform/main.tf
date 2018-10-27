provider "aws" {
  region = "${var.region}"
}

resource "aws_instance" "web" {
  ami = "${lookup(var.amis, var.region)}"
  instance_type = "t1.micro"
  key_name = "terraform"
  security_groups = ["${aws_security_group.internal_web.name}"]
  tags {
    Name = "WebHost"
  }
  provisioner "remote-exec" {
    script = "./scripts/install.sh"
    connection {
      user = "admin"
      private_key = "${file("terraform.pem")}"
    }
  }
}

resource "aws_elb" "web" {
  name = "web-elb"
  availability_zones = ["${var.region}a", "${var.region}b", "${var.region}c"]
  listener {
    instance_port = 80
    instance_protocol = "http"
    lb_port = 80
    lb_protocol = "http"
  }
  instances = ["${aws_instance.web.id}"]
  tags {
    Name = "LoadBalancer"
  }
}

resource "aws_route53_zone" "primary" {
  name = "uldissturms.com"
}

resource "aws_security_group" "internal_web" {
  name = "internal_web"
  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

module "cloudtrail" {
  source = "./cloudtrail"
}

module "cloudwatch" {
  source = "./cloudwatch"
}

module "dynamodb" {
  source = "./dynamodb"
}

module "ecs" {
  source = "./ecs"
}
