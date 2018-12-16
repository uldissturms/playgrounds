AMI=$(aws ssm get-parameters --names /aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id --region eu-west-1 --query 'Parameters[0].Value' --output text)

aws ec2 run-instances --image-id $AMI --count 1 --instance-type t2.micro --iam-instance-profile Name=ecsInstanceRole --key-name acloud --user-data file://instance-user-data.sh --security-groups ec2-ecs-sg | jq
