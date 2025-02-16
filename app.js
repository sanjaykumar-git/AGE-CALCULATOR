document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.querySelector("#calculate-btn");
  calculateBtn.addEventListener("click", calculateAge);
});

const calculateAge = () => {
  const dobInput = document.querySelector("#dob");
  const resultDisplay = document.querySelector("#result");

  if (!dobInput.value) return alert("Please select your Date of Birth");

  const birthDate = new Date(dobInput.value);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    const lastMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageDays += lastMonthDays;
    ageMonths--;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  resultDisplay.innerHTML = `
      <span class="text-purple-700 font-bold">${ageYears}</span> Years, 
      <span class="text-green-600 font-bold">${ageMonths}</span> Months, 
      <span class="text-red-500 font-bold">${ageDays}</span> Days
  `;
};
