javascript:(function(){
  // Prompt the user for input
  const userInput = prompt("Search for keywords:");
  
  // Only proceed if user provided input (didn't press Cancel)
  if (userInput !== null && userInput !== "") {
    // URL encode the user input
    const encodedInput = encodeURIComponent(userInput);
    
    // Construct the target URL with the encoded input
    const url = `https://gov-search.service.gov.uk/?selected-words=${encodedInput}&publishing-application=publisher`;
    
    // Open the URL in a new tab
    window.open(url, '_blank');
  }
})();
