/** To show the latest "time" for some time. ex: show 1:00 for 0.990 seconds before continuing */
const TIMER_PADDING = 990;
const ANGLE_DIFF_GENERATE_ICON = 5;

/** @type {"firefox" | "chrome" | "unknown"} */
let BROWSER = "unknown";
if (typeof browser !== "undefined" && typeof browser.runtime !== "undefined") {
  BROWSER = "firefox";
} else if (
  typeof chrome !== "undefined" &&
  typeof chrome.runtime !== "undefined"
) {
  BROWSER = "chrome";
}

const SETTINGS = {
  sessionRounds: 4,
  sessionInputRangeStep: 1,
  sessionAutoPauseAfterWork: true,
  sessionAutoPauseAfterBreak: true,
  sessionLength: {
    WORK: 25 * 60 * 1000 + TIMER_PADDING,
    BREAK: 5 * 60 * 1000 + TIMER_PADDING,
    LONG_BREAK: 15 * 60 * 1000 + TIMER_PADDING,
  },
  colors: {
    background: "#ffffff",
    gray: "#666666",

    WORK: "#000000",
    BREAK: "#000000",
    LONG_BREAK: "#000000",
  },

  soundOnNotification: true,
};

const STATE = {
  isPaused: true,
  startTime: 0,
  pauseStartTime: null,
  storedPausedDuration: 0,
  shortPausedDuration: 0,
  totalPausedDuration: 0,
  sessionType: "WORK", // 'WORK', 'BREAK', 'LONG_BREAK',
  sessionRound: 1,
  isFinished: false,

  get sessionLength() {
    return SETTINGS.sessionLength[this.sessionType];
  },
  get color() {
    return SETTINGS.colors[this.sessionType];
  },
  set sessionLength(_) {},
  set color(_) {},

  softReset: function () {
    this.startTime = Date.now();
    this.totalPausedDuration = 0;
    this.storedPausedDuration = 0;
    this.shortPausedDuration = 0;
    this.isFinished = false;
    this.isPaused = true; // Always pause after reset
    this.pauseStartTime = null;
  },

  hardReset: function () {
    this.softReset();
    this.isPaused = true;
    this.sessionType = "WORK";
    this.sessionRound = 1;
    this.isFinished = false;
  },
};
