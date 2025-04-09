const lampSwitchButton = document.getElementById("lamp-switch-button");
const lampOff = document.getElementById("lamp-off");
const lampOn = document.getElementById("lamp-on");
lampOn.style.display = "none";
lampOff.style.display = "block";

lampSwitchButton.addEventListener("click", function () {
  if (lampOff.style.display === "none") {
    lampOff.style.display = "block";
  } else {
    lampOff.style.display = "none";
  }

  return lampSwitchButton;
});
