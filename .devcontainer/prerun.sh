#!/bin/bash

echo "==> START INSTALL <=="
echo "==> Current user: $(whoami)"

echo "==> Install package ..."
pnpm install

pnpm install sharp@0.32.6

echo "==> END INSTALL <=="