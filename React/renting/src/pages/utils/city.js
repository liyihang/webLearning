const CITY_TOKEN = "bkzf";

const getCity = () => JSON.parse(localStorage.getItem(CITY_TOKEN)) || {};

const setCity = (value) => JSON.stringify(localStorage.setItem(CITY_TOKEN,value));

export { getCity, setCity };
