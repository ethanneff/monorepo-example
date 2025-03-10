const { execSync } = require("child_process");

const isCI = process.env.CI === "true";

let command = `tsc --tsBuildInfoFile .cache/tsconfig.tsbuildinfo && eslint src --max-warnings=0 --cache --cache-location '.cache/eslint'`;
if (!isCI) command += " --fix";

try {
  execSync(command, { stdio: "inherit" });
} catch (err) {
  console.error("❌ Linting failed. Please check the errors above.");
  process.exit(1);
}
