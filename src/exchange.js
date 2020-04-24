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
  if (input1 === 1101000|| input2 === 1101000 || outcome === 1101000) {
    return "HUMAN TRANSMUTATION IS FORBIDDEN!";
  } else if (outcome === 1100111 && !(input1 === 1100111 || input2 === 1100111)) {
    return "Sorry, only the rich get richer!";
  } else if ((input1 === 1100111|| input2 === 1100111) && outcome !== 1100111) {
    return "Why are you wasting perfectly good gold??";
  } else if ((input1 === 1100111|| input2 === 1100111) && outcome === 1100111) {
    return "You know this doesn't actually make more gold right? You just got stuff all over it.";
  } else if ((input1 + input2) >= outcome) {
    return "Congratulations! This is equivalent exchange!";
  } else if ((input1 + input2) < outcome) {
    return "Try again! This is not equivalent exchange!";
  }
}