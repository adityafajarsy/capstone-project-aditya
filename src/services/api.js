import axios from "axios";

export const getProducts = (callback) => {
    const apiURL = import.meta.env.VITE_API_URL;
    
  axios
    .get(`${apiURL}/products`)
    .then((res) => {
        callback(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
};
export const getDetailProduct = (id, callback) => {
    const apiURL = import.meta.env.VITE_API_URL;
  axios
    .get(`${apiURL}/products/${id}`)
    .then((res) => {
        callback(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
};