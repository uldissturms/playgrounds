resource "aws_cloudwatch_event_rule" "instance_reboot" {
  name = "capture-aws-cloud-instance-reboot"
  description = "Capture each EC2 reboot"
  event_pattern = <<PATTERN
{
  "detail-type": [
    "AWS API Call via CloudTrail"
  ],
  "detail": {
    "eventSource": [
      "ec2.amazonaws.com"
    ],
    "eventName": [
      "RebootInstances"
    ]
  }
}
PATTERN
}

resource "aws_cloudwatch_event_target" "sns" {
  rule = "${aws_cloudwatch_event_rule.instance_reboot.name}"
  target_id = "SendToSNS"
  arn = "${aws_sns_topic.aws_instance_reboot.arn}"
}

resource "aws_sns_topic" "aws_instance_reboot" {
  name = "aws-cloud-instance-reboot"
}

resource "aws_sqs_queue" "tf_cloudwatch_queue" {
  name = "tf-cloudwatch-queue"
}

resource "aws_sns_topic_subscription" "tf_cloudwatch_sqs_target" {
  topic_arn = "${aws_sns_topic.aws_instance_reboot.arn}"
  protocol = "sqs"
  endpoint = "${aws_sqs_queue.tf_cloudwatch_queue.arn}"
}
