// proxyManager.js - Proxy Management Module

let proxies = [];
let proxyMode = false;
let proxyRotation = 'round-robin';

function hasProxies() {
  return proxyMode && proxies.length > 0;
}

function setProxies(newProxies) {
  proxies = newProxies;
  proxyMode = proxies.length > 0;
}

function addProxy(proxy) {
  if (proxies.includes(proxy) === false) {
    proxies.push(proxy);
  }
}

function setProxyRotation(mode) {
  proxyRotation = mode;
}

module.exports = {
  hasProxies,
  setProxies,
  addProxy,
  setProxyRotation,
  proxies
};