import axios from "axios";
const apiUrl = "http://localhost:5001/clients";
export async function getallclients(){
    return  axios.get(`${apiUrl}/getclients`)
}



// export async function getallclient() {
//   return await axios.get(`${apiUrl}/getClients`);
// }
