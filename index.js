// Project 1 - Digital clock -----------------------------------------

import { time } from "./projectscripts/project1-clock.js";

  //Calling the function

  time();


// Project 2 - Random quote generator --------------------------------

const quoteButton = document.querySelector("#quote-button");

// Grabs the button from the HTML file

quoteButton.addEventListener("click", getQuote);

// Listens for the click event of the quote button

const endpointProjectTwo = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

// Adding the api link as a variable to make it more organized

// Using async so that I can use the await keyword to pause the function while waiting for the response. 

async function getQuote() {
  try {
    const response = await fetch(endpointProjectTwo); 
    if(!response.ok) {
      throw Error(response.statusText);
    }

// Try and catch block is used to look for errors. This will execute the code 
// within the error block if the response is not successful. 
// if(!response.ok) checks if the response is okay. 
// If not okay, an error message will be displayed on the page, while the 
// actual error will be logged in the console. 
// If block is skipped in the event of 200 OK, and the next line will 
// executed. 

// response.json reads to complete response and converts it to JSON. 
// await is used here for the same reason as earlier. If the promise is not 
// resolved, the error block will be executed. 

    const json = await response.json();
    displayQuote(json.message);
  } catch (err) {
    console.log(err)
    alert("Failed to entertain you with a quote!");
  }

  // Function to display the quote on the actual webpage

  function displayQuote(quote) {
    const quoteText = document.getElementById("trump-quote");
    quoteText.innerHTML = `"${quote}"`;
}
}


// Project 3 ------------------------------------------------------