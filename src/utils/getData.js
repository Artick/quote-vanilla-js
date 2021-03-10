const API = process.env.API;

const getData = async () => {
  const apiURL = `${API}random?count=1`;
  try {
    const response = await fetch (apiURL);
    const data = await response.json ();
    return data.quotes[0];
  } catch (error) {
    console.log ('Fetch Error:', error);
  }
};

export default getData;
