import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const API_URL = 'https://restcountries.com/v3.1/all';
const inputEl = document.getElementById('search-box');

// fetchCountries(name);

fetch(API_URL)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
  .then(data => {
    console.log(data[5].name.common);
  })
  .catch(error => {
    console.log('zjebało się');
  });
