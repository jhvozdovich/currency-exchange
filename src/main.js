import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeService } from "./../src/exchange";

//FORM INPUT ONLY

$(document).ready(function() {
  $("#convert").click(function() {
    const amount = $("#amount").val();
    const newCurrency = $("#new-currency").val();
    
    (async () => {
      let exhangeService = new ExchangeService();
      let response = await exhangeService.getExchangeInfo();
      console.log(convertCurrency(response));
    });

    function convertCurrency(response) {
      if (response) {
        return amount * response.conversion_rates[newCurrency];
      } else {
        return "ERROR";
      }
    }
  });
});