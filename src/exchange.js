//API REQUEST AND DISPLAY RESULTS ONLY

export class ExchangeService {
  async getExchangeInfo() {
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
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
  if(isNaN(amount) || amount <= 0) {
    return false;
  }  else {
    return true;
  }
}
