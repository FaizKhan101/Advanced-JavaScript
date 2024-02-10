const nameInputElement = document.getElementById("name");
const remainingCountElement = document.getElementById("remaining-count")

const maxAllowedCount = nameInputElement.maxLength;

console.log(maxAllowedCount);
function updateRemainingCount() {
  const enteredValue = nameInputElement.value;

  const remainingCount = maxAllowedCount - enteredValue.length;

  remainingCountElement.textContent = remainingCount;

  if (remainingCount <= 10) {
    remainingCountElement.classList.add("warning");
    nameInputElement.classList.add("warning");
  } else {
    nameInputElement.classList.remove("warning");
    remainingCountElement.classList.remove("warning")
  }
}

nameInputElement.addEventListener("input", updateRemainingCount);
