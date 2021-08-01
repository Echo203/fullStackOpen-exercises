import axios from "axios";

const BASE_URL = "http://localhost:3001/numbers";

const getAll = () => {
  const request = axios.get(BASE_URL);
  return request.then((res) => res.data);
};

const createNewNumber = (newNumber) => {
  const request = axios.post(BASE_URL, newNumber);
  return request.then((res) => res.data);
};

const removeNumber = (id) => {
  const request = axios.delete(`${BASE_URL}/${id}`);
  return request.then((res) => res);
};

const update = (id, updatedNumber) => {
  const request = axios.put(`${BASE_URL}/${id}`, updatedNumber);
  return request.then((res) => res.data);
};

export default { getAll, createNewNumber, removeNumber, update };
