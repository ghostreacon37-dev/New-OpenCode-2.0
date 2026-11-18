// testbot.js - Human-like browser automation bot
// Compatible with Ubuntu Node.js environment

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const { rand, randFloat, sleep, chance, clamp } = require('./bot/utils');

// Parse command line arguments
const args = process.argv.slice(2);
let target = '';
let referrer = '';
let confirmOwned = false;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--confirm-owned') {
    confirmOwned = true;
  } else if (!target) {
    target = arg;
  } else if (!referrer) {
    referrer = arg;
  }
}

if (!target || !referrer) {
  console.error('Usage: node testbot.js <target_url> <referrer_url> --confirm-owned');
  process.exit(1);
}

if (!confirmOwned) {
  console.error('ERROR: This script requires --confirm-owned. Only run on domains you own or have permission to test.');
  process.exit(1);
}

console.log(`Starting human browser bot - target: ${target}, referrer: ${referrer}`);
console.log(`Confirm-owned: ${confirmOwned}`);

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });

  const { runTabFlow } = require('./bot/flows');

  await runTabFlow({ page, target, referrer, confirmOwned });

  console.log('Run completed');
  await browser.close();
  process.exit(0);
}

main();