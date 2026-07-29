import axios from "axios"
const apiUrl="http://localhost:5001/paiements"

export async function pay(paydata){
    const response =axios.post(`${apiUrl}/payer`,paydata)
    return response;
}
export async function getpay(idinvoice){
    try {
    const response=axios.get(`${apiUrl}/getinvoicewithligne/${idinvoice}`)
        return response;
    } catch (error) {
         console.error("Error fetching user by ID:", error);
    throw error;
    }
}