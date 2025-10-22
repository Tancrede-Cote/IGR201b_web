const logElement = document.getElementById("log");
const inputElement = document.getElementById("temp");
const factorElement= document.getElementById("factor");
inputElement.addEventListener("keyup", () => {
  logElement.innerText = `${inputElement.value*factorElement.value}`;
});
factorElement.addEventListener("keyup", () => {
  logElement.innerText = `${inputElement.value*factorElement.value}`;
});
$("pre").css({"display":"inline","margin":"0"});