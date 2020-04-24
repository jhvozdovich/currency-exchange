//API REQUEST AND DISPLAY RESULTS ONLY

export class ExchangeService {
  async getExchangeInfo() {
    try {
      console.log(process.env.API_KEY);
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false
    }
  }
}