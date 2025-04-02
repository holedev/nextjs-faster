#!/bin/bash

echo "==> START INSTALL <=="
echo "==> Current user: $(whoami)"

echo "==> Install latest corepack ..."
sudo npm install -g corepack@latest

echo "==> Enable pnpm ..."
corepack prepare --activate

echo "==> Change owner of node_modules ..."
sudo chown -R $(whoami):$(whoami) node_modules

echo "==> Install package ..."
pnpm install

pnpm install sharp@0.32.6

echo "==> END INSTALL <=="