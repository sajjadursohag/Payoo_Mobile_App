const validPin = 1234;
// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Add money received");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);

    const pin = parseInt(document.getElementById("add-pin").value);

    const avilableBalance = parseInt(
      document.getElementById("availble-balance").innerText,
    );

    console.log(amount, avilableBalance);

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("please provid valid pin number ");
      return;
    }

    const totalNewAvailableBalance = amount + avilableBalance;

    document.getElementById("availble-balance").innerText =
      totalNewAvailableBalance;
  });

// cashOut money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const availableBalance = parseInt(
    document.getElementById("availble-balance").innerText,
  );

  const totalNewAvailbleBalance = availableBalance - amount;

  console.log(totalNewAvailbleBalance);

  document.getElementById("availble-balance").innerText =
    totalNewAvailbleBalance;
});

// toggling feature

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
