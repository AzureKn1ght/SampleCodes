//Line by line printer function
var expenseAlert = (entertainment, eatout, transport) => {
  if (entertainment > 500) {
    console.log("ENTERTAINMENT spending has exceeded $500.");
  }
  if (entertainment > 300) {
    if (eatout > 250) {
      console.log(
        "ENTERTAINMENT spending exceeded $300, and EATING-OUT spending exceeded $250."
      );
    }
    if (transport > 400) {
      console.log(
        "ENTERTAINMENT spending exceeded $300, and TRANSPORT spending exceeded $400."
      );
    }
  }
};

//TEST
expenseAlert(300, 250, 400); //no alerts
expenseAlert(501, 250, 400); //entertainment alert
expenseAlert(301, 251, 400); //entertainment + eatout alert
expenseAlert(301, 250, 401); //entertainment + transport alert
