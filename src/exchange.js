export class ExchangeService {
  async getExchangeInfo(currency) {
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/${currency}`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}

export function verifyInput(amount) {
  if (isNaN(amount) || amount <= 0) {
    return false;
  }  else {
    return true;
  }
}

export function attemptAlchemy(input1, input2, outcome) {
  if (input1 === "human" || input2 === "human" || outcome === "human") {
    return "HUMAN TRANSMUTATION IS FORBIDDEN!";
  }
}