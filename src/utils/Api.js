import axios from "axios";

const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fetch Username
export const fetchUser = async () => {
    return fetchData(process.env.REACT_APP_RANDOMUSER);
};

// Fetch BTC Prices
export const fetchBTCPrice = async () => {
    return fetchData(process.env.REACT_APP_BTC_PRICES);
};

// Fetch Images
export const fetchImages = async () => {
    return fetchData(process.env.REACT_APP_IMAGES_URL);
};
