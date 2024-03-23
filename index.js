function toggle() {
  //getting current mode
  const currentMode = localStorage.getItem("mode");
  //changing the mode
  const newMode = currentMode === "dark" ? "light" : "dark";
  body.classList.remove(currentMode);
  body.classList.add(newMode);
  localStorage.setItem("mode", newMode);
}

//Check and set the mode on page load with local storage
function checkMode() {
  const body = document.body;
  const saveMode =
    (localStorage.getItem("mode") === "dark") | "light"
      ? localStorage.getItem("mode")
      : "light";
  body.classList.add(saveMode);
}
