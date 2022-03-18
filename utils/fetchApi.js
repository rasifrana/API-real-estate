import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const res = await axios.get((url), {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key": "732c2325f4mshd87563eb11536dcp12b658jsn4b9b7583600b"
        }
    })
    return res.data;
}

