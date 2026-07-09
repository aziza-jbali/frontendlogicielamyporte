import axios from "axios";
const apiUrl="http://localhost:5001/lignedefacture"
export async function costwind(windata){
    const response =axios.post(`${apiUrl}/costwindowaluminium`,windata)
    return response;
}
export async function costporte(portedata){
    const response =axios.post(`${apiUrl}/costporte`,portedata)
    return response;
}