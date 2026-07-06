import axios from "axios";
const apiUrl = "http://localhost:5001/lignedefacture";
export async function createinvoi(invoicedata){
    const response =axios.post(`${apiUrl}/createinvoice`,invoicedata)
    return response;
}