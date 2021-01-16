// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const countrySelect = document.querySelector(".js-select");
const USER_CT = "country";

function saveCountry() {
  localStorage.setItem("country", countrySelect.value);
}

function loadCountry() {
  const currentCountry = localStorage.getItem(USER_CT);
  if (currentCountry !== null) {
    countrySelect.value = currentCountry;
  }
}

function init() {
  countrySelect.addEventListener("change", saveCountry);
  loadCountry();
}

init();
