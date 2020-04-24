import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeService } from "./../src/exchange";

//FORM INPUT ONLY

$(document).ready(function() {
  $("#convert").click(function(event) {
    event.preventDefault();
    const amount = $("#amount").val();
    const newCurrency = $("#new-currency").val();

    (async () => {
      let exhangeService = new ExchangeService();
      let response = await exhangeService.getExchangeInfo();
      convertCurrency(response);
    })();

    function convertCurrency(response) {
      if (response.result === "error") {
        $("#error-type").html("<h3>API ERROR</h3> <p>Sorry, your API request was not fufilled. Please check your key.</p>");
        $("#error-message").html(`<p>Error: ${response.error}</p>`)
      } else if (response.result === "success") {
        return amount * response.conversion_rates[newCurrency];
      } else {
        return "ERROR";
      }
    }
  });
});