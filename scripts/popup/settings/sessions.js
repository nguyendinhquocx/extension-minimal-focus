(async () => {
  await ensureInitialized();
  const rangeInputs = document.querySelectorAll("range-input");

  // ---------------------------------------------------------------------------------------------------------------------------------
  // RANGE INPUTS --------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------------------
  const rangeWorkLength = document.getElementById("rangeWorkLength");
  const rangeBreakLength = document.getElementById("rangeBreakLength");

  updateRangeInput(rangeWorkLength);
  updateRangeInput(rangeBreakLength);

  // FUNCTIONS -----------------------------------------------------------------------------------------------------------------------
  function updateRangeInput(element) {
    if (!element) return; // Safety check

    const type = element.getAttribute("type");
    const key = element.getAttribute("key");

    if (!SETTINGS.sessionLength[key]) return; // Safety check

    const val = (SETTINGS.sessionLength[key] - TIMER_PADDING) / 60 / 1000;
    type === "mins"
      ? element.setAttribute("value", val)
      : element.setAttribute("value", SETTINGS[key]);

    element.addEventListener("range-input", (event) => {
      const val = event.detail.value * 60 * 1000 + TIMER_PADDING;
      type === "mins"
        ? (SETTINGS.sessionLength[key] = val)
        : (SETTINGS[key] = event.detail.value);
      sendMessage("update_settings", SETTINGS);
    });
  }

  // ---------------------------------------------------------------------------------------------------------------------------------
  // CHECKBOXES ----------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------------------
  const soundOnNotification = document.getElementById("soundOnNotification");

  updateCheckbox(soundOnNotification, true, "soundOnNotification");

  // FUNCTIONS -----------------------------------------------------------------------------------------------------------------------
  /** Updates "checked" state of checkbox whenever clicked, matches SETTINGS */
  function updateCheckbox(element, checkedValue, settingsAttribute, onClick) {
    if (SETTINGS[settingsAttribute] === checkedValue) {
      element.setAttribute("checked", "true");
    }
    element.addEventListener("checkbox-input", async (event) => {
      onClick
        ? onClick(event.detail.value)
        : (SETTINGS[settingsAttribute] = !SETTINGS[settingsAttribute]);
      sendMessage("update_settings", SETTINGS);
    });
  }
})();
