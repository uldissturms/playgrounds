set -e

LbSg=$(aws ec2 create-security-group --group-name alb-sg --description 'ALB SG to communicate with Container Instances on Random ports')
LbSgId=$(echo $LbSg | jq '.GroupId' -r)

InsSg=$(aws ec2 create-security-group --group-name ec2-ecs-sg --description 'ECS EC2 instance SG')
InsSgId=$(echo $InsSg | jq '.GroupId' -r)

aws ec2 authorize-security-group-ingress --group-id $LbSgId --protocol tcp --port 80 --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress --group-id $InsSgId --protocol tcp --port 0-65535 --source-group $LbSgId

Lb=$(aws elbv2 create-load-balancer --name nginx-lb --subnets subnet-9006e6c9 subnet-eb17da9c subnet-e51eb980 --security-groups $LbSgId)
LbArn=$(echo $Lb | jq '.LoadBalancers[].LoadBalancerArn' -r)

Tg=$(aws elbv2 create-target-group --name nginx-tg --protocol HTTP --port 80 --vpc-id vpc-82bd44e7)

TgArn=$(echo $Tg | jq '.TargetGroups[].TargetGroupArn' -r)

aws elbv2 create-listener --load-balancer-arn $LbArn --protocol HTTP --port 80 --default-actions Type=forward,TargetGroupArn=$TgArn | jq
