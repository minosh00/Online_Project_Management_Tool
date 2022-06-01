import axios from 'axios';


let AuthURL = "http://localhost:8080/user/auth/";



export async function auth(token) { 
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}




