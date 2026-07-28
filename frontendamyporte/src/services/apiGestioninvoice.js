import axios from "axios";
const apiUrl = "http://localhost:5001/invoice";
export async function createinvoi(idclientt,datee){
    const response =axios.post(`${apiUrl}/createinvoice`,idclientt,datee)
    return response;
}
export async function getalllignesoffacture(idinvoice){
    try {
    const response=axios.get(`${apiUrl}/getinvoicewithligne/${idinvoice}`)
        return response;
    } catch (error) {
         console.error("Error fetching user by ID:", error);
    throw error;
    }
}
// export async function getUserById(id) {
//   try {
//     return await axios.get(`${apiUrl}/getUserById/${id}`);
//   } catch (error) {
    // console.error("Error fetching user by ID:", error);
    // throw error;
//   }
// }