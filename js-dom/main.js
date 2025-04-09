const lampSwitchButton = document.getElementById("lamp-switch-button");
const lampOff = document.getElementById("lamp-off");
const lampOn = document.getElementById("lamp-on");
lampOn.style.display = "none";
lampOff.style.display = "block";

// #### esercizio principale da decommentare ####

// lampSwitchButton.addEventListener("click", function () {
//   if (lampOff.style.display === "none") {
//     lampOff.style.display = "block";
//   } else {
//     lampOff.style.display = "none";
//   }

//   return lampSwitchButton;
// });

// #### bonus ####

lampSwitchButton.addEventListener("click", function () {
  if (lampOff.style.display === "none") {
    (lampOff.style.display = "block") &&
      (lampOn.style.display = "none") &&
      (lampSwitchButton.textContent = "Spento");
  } else {
    (lampOff.style.display = "none") &&
      (lampOn.style.display = "block") &&
      (lampSwitchButton.textContent = "Acceso");
  }

  return lampSwitchButton;
});
