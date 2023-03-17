const generateNumberBtn = document.getElementById("generate-number-btn");
const randomNumberContainer = document.getElementById("random-number-container");

generateNumberBtn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 99999999) + 1;
  randomNumberContainer.innerHTML = '';

  randomNum.toString().split('').forEach((digit) => {
    const digitBox = document.createElement('span');
    digitBox.classList.add('digit-box');
    digitBox.textContent = digit;
    randomNumberContainer.appendChild(digitBox);
  });

  randomNumberContainer.querySelectorAll('.digit-box').forEach((digitBox) => {
    digitBox.style.color = "#7c1eff";

    // Pop up animation
    digitBox.style.animation = "pop-up 1s ease-in-out forwards";

    // Glowing animation
    setTimeout(() => {
      digitBox.style.animation = "glow 2s ease-in-out infinite";
    }, 1000);
  });
});
