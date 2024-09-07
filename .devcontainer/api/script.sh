#!/bin/bash

echo >> ~/.bashrc
echo "alias l=\"ls -lah --color --group-directories-first\"" >> ~/.bashrc
echo "alias c=\"clear\"" >> ~/.bashrc

echo >> ~/.zshrc
echo "alias l=\"ls -lah --color --group-directories-first\"" >> ~/.zshrc
echo "alias c=\"clear\"" >> ~/.zshrc

exit 0