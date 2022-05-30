const BillInput = document.querySelector("#bill-amount");
const cashInput = document.querySelector("#cash-given");
const btnClick = document.querySelector("#btn-click");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function calculateBillAndCashAmount() {
  message.style.display = "none";
  if (BillInput.value > 0) {
    if (parseInt(cashInput.value) >= parseInt(BillInput.value)) {
      const amountToBeReturned = cashInput.value - BillInput.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash given should equal to or more the bill amount");
    }
  } else {
    showMessage("Bill amount should be valid number");
  }
}
btnClick.addEventListener("click", calculateBillAndCashAmount);

//Function to calculate net amount to return
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
