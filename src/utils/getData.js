const { API } = process.env;

export const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  const response = await fetch(apiURl);
  const data = await response.json();
  return data.results[0];
};
