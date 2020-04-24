import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeService } from "./../src/exchange";
import { verifyInput } from "./../src/exchange";
import { attemptAlchemy } from "./../src/exchange";

$(document).ready(function() {
  $("#convert").click(function(event) {
    event.preventDefault();
    const amount = $("#amount").val();
    const inputCurrency = $("#input-currency").val();
    const newCurrency = $("#new-currency").val();

    if (verifyInput(amount)) {
      (async () => {
        let exhangeService = new ExchangeService();
        let response = await exhangeService.getExchangeInfo(inputCurrency);
        convertCurrencyDisplay(response);
      })();
    } else {
      $(".results").hide();
      $("#error-type").html("<h3>INPUT ERROR</h3>");
      $("#error-message").html("<p>Please enter a valid positive number.</p>");
      $(".errors").show();
    }

   

    function convertCurrencyDisplay(response) {
      if(response.result === undefined) {
        $(".results").hide();
        $("#error-type").html("<h3>API ERROR</h3> <p>Sorry, your API request was not performed. Please check the url of your request.</p>");
        $("#error-message").html(`<p>${response}</p>`);
        $(".errors").show();
      } else if (response.result === "error") {
        $(".results").hide();
        $("#error-type").html("<h3>API ERROR</h3> <p>Sorry, your API request was not fufilled. Please check your API key and your input currency.</p>");
        $("#error-message").html(`<p>Error: ${response.error}</p>`);
        $(".errors").show();
      } else if (response.result === "success" && response.conversion_rates[newCurrency] && response.conversion_rates[inputCurrency]) {
        let rate = response.conversion_rates[newCurrency];
        $(".errors").hide();
        let conversion = (amount * rate).toFixed(2);
        $("#conversion-results").text(amount + " " + inputCurrency + " is equivalent to " + conversion + " "  + newCurrency);
        $("#rate").text(rate);
        $(".results").show();
      } else if (response.result === "success" && !response.conversion_rates[newCurrency]) {
        $(".results").hide();
        $("#error-type").html("<h3>UNIT ERROR</h3> <p>Sorry, your API request was not fufilled. Please check your currency request.</p>");
        $("#error-message").html(`<p>Error: ${response.error}</p>`);
        $(".errors").show();
      } else {
        $("#error-type").html("<h3>ERROR</h3>");
        $("#error-message").html(`<p>Error: An unexpected error occured</p> <p>Error:${response}</p>`);
        $(".errors").show();
      }
    }
  });

  $("#transmute").click(function(event) {
    event.preventDefault();
    const input1 = parseInt($("#input-alchemy-1").val());
    const input2 = parseInt($("#input-alchemy-2").val());
    const output = parseInt($("#output-alchemy").val());

    let result = attemptAlchemy(input1, input2, output);
    console.log(input1);
    console.log(typeof(input1));
    console.log(result);
    $("#alchemy-conversion-results").text(result);
    $(".alchemy-results").show();
  });
});