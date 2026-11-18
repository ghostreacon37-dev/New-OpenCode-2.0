// profileManager.js - User Agent Profile Manager

const fs = require('fs');

const defaultProfiles = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x62) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/16.0 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/16.0 Safari/605.1.15'
];

let uaList = [];

function loadUaFile(uaFile) {
  if (uaFile && fs.existsSync(uaFile)) {
    try {
      const data = fs.readFileSync(uaFile, 'utf8');
      uaList = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      console.log(`Loaded ${uaList.length} UA profiles from ${uaFile}`);
    } catch (e) {
      console.error('Error loading UA file:', e);
      uaList = defaultProfiles;
    }
  } else {
    uaList = defaultProfiles;
    if (!uaFile) console.log('Using default UA profiles');
  }
}

function getUaList() {
  return uaList;
}

function getProfile() {
  const list = getUaList();
  if (!list.length) {
    return { ua: 'Mozilla/5.0', vp: { width: 1366, height: 768 } };
  }
  const idx = Math.floor(Math.random() * list.length);
  const ua = list[idx];
  return { ua, vp: { width: 1366, height: 768 } };
}

module.exports = {
  loadUaFile,
  getUaList,
  getProfile
};