const form = document.querySelector('form');
// using this outside will give the empty values
// const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const resultsmessage = document.querySelector('#resultsmessage');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      resultsmessage.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi <= 24.9 && bmi >= 18.6) {
      resultsmessage.innerHTML = `<span>Normal Range</span>`;
    } else {
      resultsmessage.innerHTML = `<span>Over Weight</span>`;
    }
  }
});
