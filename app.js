function isRunNian(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

document.getElementById('yearForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const year = parseInt(document.getElementById('year').value, 10);

  // Validate the year input
  if (isNaN(year) || year < 0 || year > 9999) {
    document.getElementById('result').textContent = 'Please enter a valid year between 0 and 9999.';
    return;
  }

  const result = isRunNian(year) ? `${year} is a leap year.` : `${year} is not a leap year.`;
  document.getElementById('result').textContent = result;
});