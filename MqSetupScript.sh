#!/bin/sh
sudo apt-get update -y
sudo apt-get install curl gnupg -y
curl -fsSL https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc | sudo apt-key add -
sudo apt-get install apt-transport-https
sudo tee /etc/apt/sources.list.d/bintray.rabbitmq.list <<EOF
## Installs the latest Erlang 22.x release.
## Change component to "erlang-21.x" to install the latest 21.x version.
## "bionic" as distribution name should work for any later Ubuntu or Debian release.
## See the release to distribution mapping table in RabbitMQ doc guides to learn more.
deb https://dl.bintray.com/rabbitmq-erlang/debian bionic erlang
deb https://dl.bintray.com/rabbitmq/debian bionic main
EOF

## Update package indices
sudo apt-get update -y
## Install rabbitmq-server and its dependencies
sudo apt-get install rabbitmq-server -y --fix-missing