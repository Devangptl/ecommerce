import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};
// console.log(params);
export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_STRIPE_APP_URL + url,
            params
        );
      return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};