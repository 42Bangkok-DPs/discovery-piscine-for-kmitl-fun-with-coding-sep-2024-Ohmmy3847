#!/bin/bash

if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
else
    for i in "$@"; do
        mkdir "$i"
    done
fi