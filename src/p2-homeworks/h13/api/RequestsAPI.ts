import axios from "axios"

export const RequestsAPI = {
    getRequest() {
        return axios.get("https://neko-cafe-back.herokuapp.com/auth/test")
    },
    postMethod(success: boolean){
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success})
    }
}