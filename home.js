const validPin = 1234;

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
