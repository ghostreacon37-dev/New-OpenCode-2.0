// bot/config.js - Timing ranges and probability configuration

module.exports = {
  step1WaitBeforeOpen: { min: 5000, max: 60000 },    // 5-60 seconds
  step2WaitAfterOpen: { min: 10000, max: 25000 },   // 10-25 seconds
  step3WaitAfterClick: { min: 3000, max: 13000 },    // 3-13 seconds
  step3Probability: 67,                              // 67 out of 100
  step4WaitAfterContinue: { min: 3000, max: 7000 }, // 3-7 seconds
  step5WaitAfterGoToLink: { min: 2000, max: 12000 }, // 2-12 seconds
  step6WaitBeforeBrowse: { min: 1000, max: 5000 },   // 1-5 seconds
  checkProbability: (p) => Math.random() * 100 < p,
  randMinMax: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
};