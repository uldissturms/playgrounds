echo '=== ECS clusters ==='

aws ecs describe-clusters --cluster default | jq
aws ecs describe-clusters --cluster custom | jq

echo '=== ECS instances ==='
aws ecs list-container-instances --cluster default | jq
aws ecs list-container-instances --cluster custom | jq

echo '=== ECS tasks ==='
aws ecs list-task-definitions | jq
aws ecs list-task-definitions | jq

echo '=== ECS services ==='
aws ecs list-services --cluster default | jq
aws ecs list-services --cluster custom | jq
