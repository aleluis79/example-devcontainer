#!/bin/bash

npm install -g @angular/cli@18

npm install

echo >> ~/.bashrc
echo "alias l=\"ls -lah --color --group-directories-first\"" >> ~/.bashrc
echo "alias c=\"clear\"" >> ~/.bashrc

exit 0