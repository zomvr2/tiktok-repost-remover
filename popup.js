document.getElementById('start').addEventListener('click', () => {
  document.getElementById('status').textContent = 'Working... Please wait.';

  chrome.runtime.sendMessage({ command: 'start' });
});
