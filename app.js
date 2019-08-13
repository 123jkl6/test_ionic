const inputReason = document.querySelector("#inputReason");
const inputAmount = document.querySelector("#inputAmount");
const btnCancel = document.querySelector("#btnCancel");
const btnConfirm = document.querySelector("#btnConfirm");
const expensesList = document.querySelector("#expensesList");
const totalExpenses = document.querySelector("#totalExpenses");
const alertCtrl = document.querySelector("ion-alert-controller");

let totalExpensesValue = 0;

const clear = () => {
    inputReason.value = "";
    inputAmount.value = "";
};

btnConfirm.addEventListener("click", () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;

    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount.trim().length <= 0 ||
        enteredAmount.trim() < 0
    ) {
        //not default html
        alertCtrl.create({
            message: "Please enter valid reason and amount!",
            header: "Invalid inputs.",
            buttons: ["Okay"],
        }).then((alertElement) => {
            //to present on the screen. 
            alertElement.present();
        });
        console.log("invalid input");
        //stop execution
        return;
    } else {
        console.log("valid input");
        const newItem = document.createElement("ion-item");
        newItem.textContent = enteredReason + ": $" + enteredAmount;

        expensesList.appendChild(newItem);
        totalExpensesValue += Number(enteredAmount);
        totalExpenses.textContent = totalExpensesValue;
        clear();
    }
});

btnCancel.addEventListener("click", clear);
