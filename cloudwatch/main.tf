resource "aws_cloudwatch_event_rule" "cloud_formation" {
  name = "capture-aws-cloud-formation"
  description = "Capture each AWS CloudFormation"
  event_pattern = <<PATTERN
{
  "detail-type": [
    "AWS API Call via CloudTrail"
  ],
  "detail": {
    "eventSource": [
      "cloudformation.amazonaws.com"
    ]
  }
}
PATTERN
}

resource "aws_cloudwatch_event_target" "sns" {
  rule = "${aws_cloudwatch_event_rule.cloud_formation.name}"
  target_id = "SendToSNS"
  arn = "${aws_sns_topic.aws_cloud_formation_runs.arn}"
}

resource "aws_sns_topic" "aws_cloud_formation_runs" {
  name = "aws-cloud-formation-runs"
}
