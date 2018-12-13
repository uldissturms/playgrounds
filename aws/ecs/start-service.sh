aws ecs register-task-definition --cli-input-json file://nginx-task-definition.json
aws ecs create-service --cluster custom --service-name nginx --task-definition nginx --desired-count 1
