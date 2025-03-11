#!/bin/sh

# Find and remove specific directories safely
find . -type d \( \
    -name '.cache' -o \
    -name '.next' -o \
    -name '.expo' -o \
    -name '.turbo' -o \
    -name 'dist' -o \
    -name 'build' -o \
    -name 'Pods' -o \
    -name 'node_modules' \
\) -prune -exec rm -rf {} +

# Run turbo clean in parallel
turbo run clean --parallel