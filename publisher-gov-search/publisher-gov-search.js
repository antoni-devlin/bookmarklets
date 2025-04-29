javascript:(function(){
  // Create a container for our custom input form
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2147483647;
  `;
  
  // Create the form elements
  const formBox = document.createElement('div');
  formBox.style.cssText = `
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    width: 300px;
    max-width: 90%;
  `;
  
  const heading = document.createElement('h3');
  heading.textContent = 'Publisher GOV Search';
  heading.style.cssText = `
    margin-top: 0;
    color: #333;
  `;
  
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search for keywords';
  input.style.cssText = `
    display: block;
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  `;
  input.focus(); // Auto-focus the input
  
  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    display: flex;
    justify-content: space-between;
  `;
  
  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.style.cssText = `
    padding: 8px 16px;
    background-color: #0b0c0c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;
  
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.style.cssText = `
    padding: 8px 16px;
    background-color: #f3f3f3;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  `;
  
  // Add event handlers
  cancelButton.addEventListener('click', function() {
    document.body.removeChild(container);
  });

  const performSearch = function() {
    const userInput = input.value.trim();
    if (userInput !== "") {
      const encodedInput = encodeURIComponent(userInput);
      const url = `https://gov-search.service.gov.uk/?selected-words=${encodedInput}&publishing-application=publisher`;
      // Check if the current page is on the gov-search domain
    const currentDomain = window.location.hostname;
      if (currentDomain === "gov-search.service.gov.uk") {
      // If already on the gov-search domain, use the current tab
      window.location.href = url;
    } else {
      // If on a different domain, open in a new tab
      window.open(url, '_blank');
    }
    }
    document.body.removeChild(container);
  };
  
  searchButton.addEventListener('click', performSearch);
  
  // Allow Enter key to trigger search
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // Assemble and add the elements to the page
  buttonContainer.appendChild(cancelButton);
  buttonContainer.appendChild(searchButton);
  
  formBox.appendChild(heading);
  formBox.appendChild(input);
  formBox.appendChild(buttonContainer);
  container.appendChild(formBox);
  
  document.body.appendChild(container);
})();
