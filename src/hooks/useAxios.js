import { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    
    const fetchData = async (endpoint = "") => {
        try {
            const url = baseUrl + endpoint;
            const res = await axios.get(url);
            const newData = { ...res.data, id: uuid() };
            setData(prevData => [...prevData, newData]);
        }catch(error) {
            console.log("Error fetching data:", error);
        }
    };
    return [data, fetchData]
};

export default useAxios;