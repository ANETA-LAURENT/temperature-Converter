const convertForm = document
  .querySelector(".btn-dark")
  .addEventListener("click", function (e) {
    document.getElementById("results").style.display = "none";
    document.getElementById("loading").style.display = "block";

    setTimeout(convertResultsF, 1000);

    /*     setTimeout(convertResultsC, 1000); */
    e.preventDefault();
  });

/* const changeBtn = document.querySelector(".btn-primary");
changeBtn.addEventListener("click", changeType); */

const resetForm = document
  .querySelector(".btn-secondary")
  .addEventListener("click", function (e) {
    clearTimeout();
    document.getElementById("results").style.display = "none";
    document.getElementById("loading").style.display = "none";
    fahrenheit.value = "";
    e.preventDefault();
  });

function convertResultsF() {
  const fahrenheit = document.getElementById("fahrenheit");
  const celcius = document.getElementById("celcius");

  const principal = parseFloat(fahrenheit.value);
  //Convert
  const convF = ((principal - 32) * 5) / 9;

  if (isFinite(convF)) {
    celcius.value = convF.toFixed(2);
    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
    fahrenheit.value = "";
  }
}

/* function convertResultsC() {
  //Convert
  const convC = (principal * 9) / 5 + 32;

  if (isFinite(convC)) {
    celcius.value = convC.toFixed(2);
    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
} */

function showError() {
  const errorDiv = document.createElement("div");
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode("Please check your numbers"));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 2500);
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";
}

function clearError() {
  document.querySelector(".alert").remove();
}
/* 
function changeType(e) {
  // console.log("Changing...");
  const f = document.getElementById("basic-addon1");
  const fPlaceholder = document.getElementById("fahrenheit");
  const c = document.getElementById("basic-addon2");

  if (e.target.value === "Fahrenheit into Celsius") {
    e.target.value = "Celsius into Fahrenheit";
    changeBtn.style.backgroundColor = "gray";
    f.innerHTML = "C°";
    c.innerHTML = "F°";
    fPlaceholder.placeholder = "Celcius";
  } else {
    e.target.value = "Fahrenheit into Celsius";
    changeBtn.style.backgroundColor = "#0275d8";
    f.innerHTML = "F°";
    c.innerHTML = "C°";
    fPlaceholder.placeholder = "Fahrenheit";
  }

  e.preventDefault();
  console.log(celcius.value);
}
 */
