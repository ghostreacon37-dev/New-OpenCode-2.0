// config.js - Configuration parser for the human browser bot

function parseArgs() {
  const args = process.argv.slice(2);
  const cfg = {
    target: '',
    referrer: '',
    confirmOwned: false,
    proxyMode: false,
    proxyFile: null,
    uaFile: 'ua.txt',
    fixedInstances: null,
    oneBrowserPerTab: false,
    minTabs: 2,
    maxTabs: 5,
    interval: 30000,
    forever: false,
    headless: true
  };
  
  // Parse --confirm-owned flag first
  if (args.includes('--confirm-owned')) {
    cfg.confirmOwned = true;
  }
  
  // Find target and referrer as the first two non-flag arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg.startsWith('--')) {
      // This is a positional argument
      if (!cfg.target) {
        cfg.target = arg;
      } else if (!cfg.referrer) {
        cfg.referrer = arg;
      }
    }
  }
  
  // Validate required fields
  if (!cfg.target || !cfg.referrer) {
    console.error(usage());
    process.exit(1);
  }
}

function usage() {
  return 'Usage: node testbot.js <target_url> <referrer_url> [options]\n\nOptions:\n  --confirm-owned   Required safety check\n  --proxy           Enable proxy mode\n  --proxy-file=FILE Use specified proxy file\n  --ua-file=FILE    Use specified UA file\n  --runs=N          Number of runs (default: 1)\n  --interval=ms     Milliseconds between runs (default: 30000)\n  --forever         Run continuously\n  --headless        Run in headless mode (default)';
}

module.exports = {
  parseArgs,
  usage
};