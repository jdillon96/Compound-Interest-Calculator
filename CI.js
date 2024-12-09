const PrincipalBox = document.querySelector("#principal");
const InterestSlider = document.querySelector("#interest");
const FrequencyDropdown = document.querySelector("#frequency");
const TimeBox = document.querySelector("#time");
const profitOutput = document.querySelector("#profit");
const totalOutput = document.querySelector("#total");
const interestOutput = document.querySelector("#intout");

[PrincipalBox, InterestSlider, FrequencyDropdown, TimeBox].forEach((input) => {
  input.addEventListener("input", updateCash);
});

interestOutput.textContent = InterestSlider.value; //shows the initial interest rate
InterestSlider.addEventListener("input", (e) => {
  interestOutput.textContent = InterestSlider.value;
});
Button.addEventListener("click", updateCash); //activates calculation once the button is pushed

function updateCash() {
  const principal = Number(PrincipalBox.value);
  const interest = Number(InterestSlider.value);
  const frequency = Number(FrequencyDropdown.value);
  const time = Number(TimeBox.value);
  const inside = 1 + interest / frequency / 100;
  const exponent = frequency * time;
  const parentheses = Math.pow(inside, exponent);
  const total = principal * parentheses;
  const profit = total - principal;
  totalOutput.textContent = total.toFixed(2);
  profitOutput.textContent = profit.toFixed(2);
}
