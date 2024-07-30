


const numInput = document.getElementById('numInput');
const startInput = document.getElementById('numStartInput');
const endInput = document.getElementById('numEndInput');
const generateBtn = document.getElementById('generateBtn');
const outputDiv = document.getElementById('output');

generateBtn.addEventListener('click', generateTable);

function generateTable() {
  const number = numInput.value;
  const start = parseInt(startInput.value);
  const end = parseInt(endInput.value);

  if (number === '') {
    outputDiv.innerHTML = '<p>Please enter a number.</p>';
    return;
  }
  if (isNaN(start) || isNaN(end)) {
    outputDiv.innerHTML = '<p>Please enter valid start and end values.</p>';
    return;
  }

  let tableHTML = '<table border="1"><tr><th>Number</th><th>Multiplier</th><th>Result</th></tr>';
  for (let i = start; i <= end; i++) {
    tableHTML += `<tr><td>${number}</td><td>${i}</td><td>${number * i}</td></tr>`;
  }
  tableHTML += '</table>';

  outputDiv.innerHTML = tableHTML;
}
