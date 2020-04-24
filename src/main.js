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
      if(response.result === undefined) {
        $("#error-type").html("<h3>API ERROR</h3> <p>Sorry, your API request was not performed. Please check the url of your request.</p>");
        $("#error-message").html(`<p>${response}</p>`);
        $(".errors").show();
      } else if (response.result === "error") {
        $("#error-type").html("<h3>API ERROR</h3> <p>Sorry, your API request was not fufilled. Please check your key.</p>");
        $("#error-message").html(`<p>Error: ${response.error}</p>`);
        $(".errors").show();
      } else if (response.result === "success" && response.conversion_rates[newCurrency]) {
        let rate = response.conversion_rates[newCurrency];
        $(".errors").hide();
        let conversion = (amount * rate).toFixed(2);
        $("#conversion").text(conversion + " "  + newCurrency);
        $("#rate").text(rate);
        $(".results").show();
      } else if (response.result === "success" && !response.conversion_rates[newCurrency]) {
        $(".results").hide();
        $("#error-type").html("<h3>UNIT ERROR</h3> <p>Sorry, your API request was not fufilled. Please check your currency request.</p>");
        $("#error-message").html(`<p>Error: ${response.error}</p>`);
        $(".errors").show();
      } else {
        $("#error-type").html("<h3>ERROR</h3>");
        $("#error-message").html(`<p>Error: An unexpected error occured</p>`);
        $(".errors").show();
      }
    }
  });
});