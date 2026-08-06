document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Add money received");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);

    const pin = document.getElementById("add-pin").value;
    const avilableBalance = parseInt(
      document.getElementById("availble-balance").innerText,
    );

    console.log(avilableBalance);

    const totalNewAvailableBalance = amount + avilableBalance;

    document.getElementById("availble-balance").innerText =
      totalNewAvailableBalance;
  });
