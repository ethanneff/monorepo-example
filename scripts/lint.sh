#!/bin/sh

# Check if the CI environment variable is set to 'true'
if [ "$CI" = "true" ]; then
  command="tsc --tsBuildInfoFile .cache/tsconfig.tsbuildinfo && eslint src --max-warnings=0 --cache --cache-location '.cache/eslint'"
else
  command="tsc --tsBuildInfoFile .cache/tsconfig.tsbuildinfo && eslint src --max-warnings=0 --cache --cache-location '.cache/eslint' --fix"
fi

# Execute the command
sh -c "$command"
