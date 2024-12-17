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

export const auth = (data, callback,res) => {
    const apiURL = import.meta.env.VITE_API_URL;
    axios
      .post(`${apiURL}/auth/login`, data)
      .then((res) => {
          callback(true, res.data.token)
      })
      .catch((error) => {
        callback(false, error);
      });
  }