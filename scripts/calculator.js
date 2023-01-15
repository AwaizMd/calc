//percentage calculators

function percentage(number, total) {
  return (number / total) * 100;
}

function percentageDifference(number1, number2) {
  return ((number1 - number2) / number1) * 100;
}

function percentageChange(number1, number2) {
  return ((number2 - number1) / number1) * 100;
}

//financial calculators

/* 
Simple interest calculator: This algorithm calculates the interest on a loan or an investment based on
 the principal amount, the interest rate, and the number of periods.
*/
function simpleInterest(principal, rate, periods) {
  return (principal * rate * periods) / 100;
}
/* 
Compound interest calculator: This algorithm calculates the compound interest on a loan or an 
investment based on the principal amount, the interest rate, and the number of periods.
*/
function compoundInterest(principal, rate, periods) {
  return principal * Math.pow(1 + rate / 100, periods) - principal;
}
/* 
Future value calculator: This algorithm calculates the future value of an investment based on 
the present value, the interest rate, and the number of periods.
*/
function futureValue(presentValue, rate, periods) {
  return presentValue * Math.pow(1 + rate / 100, periods);
}
/* 
Present value calculator: This algorithm calculates the present value of an investment based on the
 future value, the interest rate,and the number of periods.
*/
function presentValue(futureValue, rate, periods) {
  return futureValue / Math.pow(1 + rate / 100, periods);
}
/* 
Mortgage calculator: This algorithm calculates the monthly payment on a mortgage based on the loan amount, 
the interest rate, and the number of periods.
*/
function mortgagePayment(loanAmount, rate, periods) {
  return (loanAmount * rate) / (1 - Math.pow(1 + rate, -periods));
}

//paypal fee calculator

function calculatePaypalFee(amount, country) {
  let percentage;
  let fixedFee;

  // Set the percentage and fixed fees based on the country
  if (country === 'US') {
    percentage = 0.029;
    fixedFee = 0.30;
  } else if (country === 'UK') {
    percentage = 0.034;
    fixedFee = 0.20;
  } else {
    // Set default fees for other countries
    percentage = 0.029;
    fixedFee = 0.30;
  }

  // Calculate the fee
  const fee = (amount * percentage) + fixedFee;

  return fee;
}

// Example usage
const transactionAmount = 100;
const recipientCountry = 'US';
const fee = calculatePaypalFee(transactionAmount, recipientCountry);
console.log(`Fee: $${fee}`);

// Time calculators

// Initialize a moment object
const now = moment();

// Calculate the number of seconds until the end of the day
const secondsUntilEndOfDay = now.endOf('day').diff(now, 'seconds');

// Calculate the number of days between two dates
const daysBetween = moment("2022-01-01").diff(moment("2021-01-01"), 'days');

// Calculating the difference between two timestamps:
function diffTimestamps(timestamp1, timestamp2) {
  const difference = timestamp1 - timestamp2;
  return Math.floor(difference / 1000);
}

//Adding a certain number of seconds to a timestamp:
function addSeconds(timestamp, seconds) {
  return timestamp + (seconds * 1000);
}


/* Converting a timestamp to a human-readable format and This function converts
 a timestamp to a human-readable string, using the device's local timezone. */
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}


//Converting a human-readable string to a timestamp:
function parseTimestamp(timestampString) {
  return Date.parse(timestampString);
}

/* 
EX:-
This function converts a human-readable string to a timestamp. The string should be in a 
format that can be parsed by the Date.parse() function, such as "2022-01-01T00:00:00".
*/