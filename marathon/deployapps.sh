#!/usr/bin/env bash

MARATHON=http://192.168.33.10:8080

for i in ./apps/*.json
do
  curl -X POST $MARATHON/v2/apps -d @$i -H "Content-Type: application/json"
done
