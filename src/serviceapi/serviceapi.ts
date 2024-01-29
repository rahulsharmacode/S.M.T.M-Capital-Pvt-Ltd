import axios from "axios";

export const portfolioApi = async () =>{
    try{
        let response = await axios.get(`${import.meta.env.VITE_API}/api/v1/portfolio`);
        return response.data;
    }
    catch(err:any){
        return err.response.data;
    }
}

export const portfolioValuesApi = async () =>{
    try{
        let response = await axios.get(`${import.meta.env.VITE_API}/api/v1/portfoliovalues`);
        return response.data;
    }
    catch(err:any){
        return err.response.data;
    }
}