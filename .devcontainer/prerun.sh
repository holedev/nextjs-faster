#!/bin/bash

echo "==> START INSTALL <=="
echo "==> Current user: $(whoami)"

echo "==> Install latest corepack ..."
sudo npm install -g corepack@latest

echo "==> Enable pnpm ..."
corepack prepare --activate

echo "==> Install package ..."
pnpm install

echo "==> END INSTALL <=="