# **Currency Exchange**

### _Asynchrony and APIs- Week 6 Project at Epicodus_

#### Author: **_Jessica Hvozdovich_**
#### April 24, 2020

### Description

_The purpose of this project is to use calls to an exchange rate API in order to convert a user inputs of USD to another currency of their choice._

### Instructions for use:

1. Clone this repository from GitHub.
2. Open the downloaded directory in a text editor of your choice. (VSCode, Atom, etc.)
3. Go to [ExchangeRate-API](https://www.exchangerate-api.com/) and read the instructions to acquire a free API key.
4. Create a .env folder in the main directory of the repository with your new api key listed as API_KEY = _/your api key here/_ as the only line in .env.
5. Download node and node package manager if they are not already installed on your device. You can find further instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript-8d3b52cf-3755-481d-80c5-46f1d3a8ffeb/installing-node-js-14f2721a-61e0-44b3-af1f-73f17348c8f4).
5. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
6. The command npm run start will build and open the compiled code in a browser of your choice using a local host.

### Known Bugs

No bugs have been identified at the time of this update.

### Support and Contact Information

Please contact me with any suggestions or questions at jhvozdovich@gmail.com. Thank you for your input!  
_Have a bug or an issue with this application? [Open a new issue](https://github.com/jhvozdovich/currency-exchange/issues) here on GitHub._

### Technologies Used

* HTML
* CSS with Bootstrap Framework
* Git and GitHub
* JavaScript with jQuery Library
* Webpack with Babel, ESLint, and Node Package Manager
* ExchangeRate-API
* Jest

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **Accepts a numerical value for currency in USD** | User Input:”10.00 USD” | Output: “$10.00 USD”” |
| **Accepts a currency to convert the USD input** | User Input:”Convert to- Euro” | Output: “USD to Euro” |
| **Returns the converted value with the most recent exchange rate** | User Input:”10.00 USD to Euro” | Output: “10.00 USD - 0.93 Euro” |
| **Provides a selection of different currencies to convert** | User Input:”Click-Select Currency” | Output: “Euro, British Pound, Indian Rupee, Australian Dollar, Canadian Dollar” |
| **Returns an error if there was a problem processing the request** | User Input:”Click-Convert” | Output: “Your request could not be completed, please check your API Key. (Print full error message.)” |
| **Returns an error if the currency input was not found** | User Input:”Click-Convert” | Output: “Your currency was not found, please check your spelling. (Print full error message.)” |
| **Returns an error if no request was made** | User Input:”Click-Convert” | Output: “Your request was not performed, please check your API url and .env setup. (Print full error message.)” |
| **Returns an error for invalid negative inputs** | User Input:”-1” | Output: “Please enter a valid positive number.” |
| **Returns an error for invalid non-numerical inputs** | User Input:”Eleven” | Output: “Please enter a valid positive number.” |
| **Adds option to attempt human alchemy** | User Input:”Human + Gold = Human” | Output: "HUMAN TRANSMUTATION IS FORBIDDEN!" |
| **Adds option to attempt to make gold** | User Input:”Steel + Dirt = Gold” | Output: "Sorry you can't make gold!" |
| **Adds option to attempt to make more gold** | User Input:”Steel + Gold = Gold” | Output: "Sorry you can't make more gold!" |
| **Adds option to attempt to make something from gold** | User Input:”Steel + Gold = Dirt” | Output: "Why would you waste gold??" |
| **Adds response for equivalent exchange** | User Input:”Steel + Ceramic = Dirt” | Output: "Equivalent Exchange!" |
| **Adds response for in-equivalent exchange** | User Input:”Dirt + Dirt = Steel” | Output: "IN-Equivalent Exchange!" |

#### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Jessica Hvozdovich_**