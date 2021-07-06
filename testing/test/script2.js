const fetch = require('node-fetch');

const getPeoplePromise = (fetch) => {
  // Example of dependency injection(In Actual, here argument is not required)
  return fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.dev/api/people');
  const data = await getRequest.json();
  // console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};

// getPeople(fetch);
module.exports = {
  getPeople,
  getPeoplePromise
}