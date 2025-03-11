#!/bin/sh

prettier --write --cache --log-level=error . && knip && git ls-files -co --exclude-standard -- '*.sh' | xargs -r npx shellcheck && npx sherif --fix
