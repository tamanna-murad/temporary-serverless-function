const { default: axios } = require("axios");

// const { default: axios } = require('axios');
const result = document.querySelector('.result');
const fetchData = async () => {
    // console.log('fetch data called');
    try {
        // const data = await axios.get('/.netlify/functions/1-hello');
        // console.log(data);
        // const { data } = await axios.get('/.netlify/functions/1-hello');
        const { data } = await axios.get('/api/1-hello');
        result.textContent = data;
    } catch (error) {
        console.log(error.response.data);
        result.textContent = error.response.data;
    }
}
fetchData();