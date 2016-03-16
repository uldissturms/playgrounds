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
