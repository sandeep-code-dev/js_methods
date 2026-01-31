const simulatedArgs = ["--env=production", "--port=8080", "start"];

function parseCommandLiveArgs(args) {
  const options = {};
  while (args.length > 0) {
    const arg = args.shift();
    if (arg.startsWith("--")) {
      const [key, value] = arg.substring(2).split("=");
      options[key] = value || true;
    } else {
      options.command = arg;
    }
  }
  return options;
}

const config = parseCommandLiveArgs(simulatedArgs);
console.log("Parsed config:", config);
