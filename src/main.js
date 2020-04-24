import $ from "jquery";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeService } from "./../src/exchange";

//FORM INPUT ONLY

$(document).ready(function() {
  $("#convert").click(function(event) {
    event.preventDefault();
    const amount = $("#amount").val();
    const newCurrency = $("#new-currency").val();
    console.log(newCurrency);

    (async () => {
      let exhangeService = new ExchangeService();
      let response = await exhangeService.getExchangeInfo();
      console.log(response);
      convertCurrency(response);
    })();

    function convertCurrency(response) {
      if (response) {
        console.log(response.conversion_rates[newCurrency]);
        return amount * response.conversion_rates[newCurrency];
      } else {
        return "ERROR";
      }
    }
  });
});