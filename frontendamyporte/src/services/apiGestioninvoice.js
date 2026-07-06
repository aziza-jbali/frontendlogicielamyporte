import axios from "axios";
const apiUrl = "http://localhost:5001/invoice";
export async function createinvoi(idclientt,datee){
    const response =axios.post(`${apiUrl}/createinvoice`,idclientt,datee)
    return response;
}