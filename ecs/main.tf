resource "aws_iam_role" "ecs_cluster" {
  name = "EcsCluster"
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

resource "aws_ecs_cluster" "tf_cluster" {
  name = "tf-cluster"
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
