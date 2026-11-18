// human-browser-bot — config.js
// All timing parameters and configuration for the custom redirect method

// Wait time ranges (in milliseconds)
// Step 1: Go to website and wait before clicking Open
const step1WaitBeforeOpen = {
  min: 5000,   // 5 sec
  max: 60000,  // 60 sec
};

// Step 2: Wait after clicking Open before clicking Next
const step2WaitAfterOpen = {
  min: 10000,  // 10 sec
  max: 25000,  // 25 sec
};

// Step 2 optional: Scroll down appears and click
const step2ScrollWait = {
  min: 5000,   // 5 sec
  max: 10000,  // 10 sec
};

// Step 3: Click Open, reload, 67/100 probability, wait
const step3WaitAfterClick = {
  min: 3000,   // 3 sec
  max: 13000,  // 13 sec
};

// Step 3 probability - 67% chance to proceed
const step3Probability = 67; // 67 out of 100

// Step 4: Click Continue and wait
const step4WaitAfterContinue = {
  min: 3000,   // 3 sec
  max: 7000,   // 7 sec
};

// Step 5: Click Go to Link and wait
const step5WaitAfterGoToLink = {
  min: 2000,   // 2 sec
  max: 12000,  // 12 sec
};

// Step 6: Click Open Link and continue browsing
const step6WaitBeforeBrowse = {
  min: 1000,   // 1 sec (minimum)
  max: 5000,   // 5 sec
};

// Mouse movement humanization settings
const humanization = {
  // Overshoot probability (25% chance to overshoot target)
  overshootProbability: 0.25,
  // Steps for curved mouse path
  minSteps: 8,
  maxSteps: 25,
  // Speed range for mouse movement
  minSpeed: 0.7,
  maxSpeed: 1.3,
};

// Console debug mode
const debug = false;

// Export all config
module.exports = {
  step1WaitBeforeOpen,
  step2WaitAfterOpen,
  step2ScrollWait,
  step3WaitAfterClick,
  step3Probability,
  step4WaitAfterContinue,
  step5WaitAfterGoToLink,
  step6WaitBeforeBrowse,
  humanization,
  debug,
  
  // Get random value from range
  randMinMax: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  
  // Get random probability check
  checkProbability: (percentage) => Math.random() * 100 < percentage,
};