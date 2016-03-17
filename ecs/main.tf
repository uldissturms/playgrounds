resource "aws_instance" "docker_host" {
  ami = "ami-03238b70"
  instance_type = "t2.micro"
  tags {
    Name = "DockerHost"
  }
  iam_instance_profile = "${aws_iam_instance_profile.ecs_instance_profile.name}"
  key_name = "terraform"
}

resource "aws_iam_instance_profile" "ecs_instance_profile" {
  name = "EcsInstanceProfile"
  roles = ["${aws_iam_role.ecs_instance_role.name}"]
}

resource "aws_iam_role" "ecs_instance_role" {
  name = "EcsInstanceRole"
  path = "/system/"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy_attachment" "ecs_instance_policy_attachment" {
  name = "attach-ecs-policy"
  roles = ["${aws_iam_role.ecs_instance_role.name}"]
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
}

resource "aws_iam_policy_attachment" "s3_policy_attachment" {
  name = "attach-s3-policy"
  roles = ["${aws_iam_role.ecs_instance_role.name}"]
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess"
}

resource "aws_ecs_cluster" "tf_cluster" {
  name = "default"
}

resource "aws_ecs_service" "hello_world" {
  name = "hello-world"
  cluster = "${aws_ecs_cluster.tf_cluster.id}"
  task_definition = "${aws_ecs_task_definition.hello_world.arn}"
  desired_count = 1
}

resource "aws_ecs_task_definition" "hello_world" {
  family = "hello-world"
  container_definitions = "${file("${path.module}/task-definitions/hello-world.json")}"
}
