const CITY_TOKEN = "bkzf";

const getCity = () => JSON.parse(localStorage.setItem(CITY_TOKEN)) || {};

const setCity = (value) => JSON.stringify(localStorage.getItem(CITY_TOKEN,value));

export { getCity, setCity };
