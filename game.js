//Navbar functionality
function openPage(pageName, elmnt, color) {
  let i, tabcontent, tablinks, pageNameID;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  pageNameID = document.getElementById(pageName);
  pageNameID.style.display = "flex";
  pageNameID.style.justifyContent = "space-around";
  pageNameID.style.alignItems = "center";

  elmnt.style.backgroundColor = color;
}

//Opens resource section on start
document.getElementById("defaultOpen").click();

//DOM variables
const metalAmountHeading = document.getElementById("metal-amount");
const metalBtn = document.getElementById("metal-btn");
const energyAmountHeading = document.getElementById("energy-amount");
const energyBtn = document.getElementById("energy-btn");
const powerplantHeading = document.getElementById("powerplants");
const powerplantCostHeading = document.getElementById("powerplant-cost");
//Product DOM variables
const productHeading = document.getElementById("product-heading");
const productCostHeading = document.getElementById("product-cost");
const productBtn = document.getElementById("product-btn");

//Game variables
let metal = 0;
let metalIncrement = 1000;
let energy = 0;
let powerplantCost = 50;
let powerplants = 0;
//Product vars
let product = 0;
let productMetalCost = 10;
let productEnergyCost = 20;

//Event listener
metalBtn.addEventListener("click", function () {
  metal += metalIncrement;
  updateUI();
});

energyBtn.addEventListener("click", function () {
  if (metal >= powerplantCost) {
    metal -= powerplantCost;
    powerplantCost = Math.floor(powerplantCost * 1.5);
    powerplants += 1;
  }
  updateUI();
});

//Product AddEventListeners
productBtn.addEventListener("click", function () {
  if (metal >= productMetalCost && energy >= productEnergyCost) {
    product += 1;
    metal -= productMetalCost;
    energy -= productEnergyCost;
  }
  updateUI();
});

//Game function
function updateUI() {
  metalAmountHeading.innerText = `Metal: ${metal}`;
  energyAmountHeading.innerText = `Energy: ${energy}`;
  powerplantCostHeading.innerText = `Power Plant Cost: ${powerplantCost}`;
  powerplantHeading.innerText = `Power Plants: ${powerplants}`;
  productCostHeading.innerText = `Product Cost: Metal ${productMetalCost} : Energy ${productEnergyCost}`;
  productHeading.innerText = `Product: ${product}`;
}

function updateEnergyPerSecond() {
  energy += powerplants;
}

//Game loop per second
window.setInterval(function () {
  updateEnergyPerSecond();
  updateUI();
}, 1000);
