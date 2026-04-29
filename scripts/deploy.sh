#!/bin/bash

docker stop cicd-app || true
docker rm cicd-app || true

docker run -d -p 3000:3000 --name cicd-app cicd-project