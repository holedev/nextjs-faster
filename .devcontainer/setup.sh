#!/bin/bash

ZSH_CUSTOM="$CONTAINER_HOME/.oh-my-zsh/custom"
ZSHRC_PATH="$CONTAINER_HOME/.zshrc"
CMD_HISTORY_PATH="$CONTAINER_HOME/commandhistory"
HISTFILE_PATH="$CONTAINER_HOME/commandhistory/.zsh_history"

echo "==> START CONFIGURATION <=="
echo "==> Current user: $(whoami)"

echo "==> Setting zsh..."

echo "==> Installing Oh My Zsh plugins..."
if [ -d "$ZSH_CUSTOM/plugins/zsh-autosuggestions" ]; then
  echo "==> zsh-autosuggestions already installed."
else
  git clone https://github.com/zsh-users/zsh-autosuggestions "$ZSH_CUSTOM/plugins/zsh-autosuggestions"
fi

if [ -d "$ZSH_CUSTOM/plugins/zsh-syntax-highlighting" ]; then
  echo "==> zsh-syntax-highlighting already installed."
else
  git clone https://github.com/zsh-users/zsh-syntax-highlighting "$ZSH_CUSTOM/plugins/zsh-syntax-highlighting"
fi

if ! grep -q "zsh-autosuggestions" "$ZSHRC_PATH"; then
  echo "==> Adding zsh-autosuggestions to .zshrc..."
  echo "plugins=(git zsh-autosuggestions zsh-syntax-highlighting)" >> "$ZSHRC_PATH"
  echo "source \$ZSH/oh-my-zsh.sh" >> "$ZSHRC_PATH"
fi

echo "==> Setting up history file..."

if [ ! -d "$CMD_HISTORY_PATH" ]; then
  mkdir -p "$CMD_HISTORY_PATH"
  echo "==> Created $CMD_HISTORY_PATH directory."
fi

if [ ! -f "$HISTFILE_PATH" ]; then
  touch "$HISTFILE_PATH"
  echo "==> Created .zsh_history file at $CMD_HISTORY_PATH."
fi

if ! grep -q "HISTFILE" "$ZSHRC_PATH"; then
  echo "==> Adding HISTFILE to .zshrc..."
  echo "export HISTFILE=$HISTFILE_PATH" >> "$ZSHRC_PATH"
fi

echo "==> Reloading .zshrc..."
zsh -c "source $ZSHRC_PATH"

echo "==> Setup zsh done!"

echo "==> END CONFIGURATION <=="
