import axios from "axios";
const apiUrl="http://localhost:5001/lignedefacture"
export async function costwind(windata){
    const response =axios.post(`${apiUrl}/costwindowaluminium`,windata)
    return response;
}