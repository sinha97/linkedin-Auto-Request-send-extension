const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log(tabs)
   chrome.tabs.executeScript(tabs[0].id, { file: "scriptfile.js" });;
  });
});

