import axios from "axios";
const apiUrl = "http://localhost:5001/clients";
export async function getallclients(){
    return  axios.get(`${apiUrl}/getclients`)
}
export async function addclient(clientData){
      const response = await axios.post(`${apiUrl}/createclient`, clientData);
      return response.data;

}


// export async function getallclient() {
//   return await axios.get(`${apiUrl}/getClients`);
// }
// export async function addClient(clientData) {
//   const response = await axios.post(`${apiUrl}/createclient`, clientData);
//   return response.data;
// }