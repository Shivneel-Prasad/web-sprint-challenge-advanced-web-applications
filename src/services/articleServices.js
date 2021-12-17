import axiosWithAuth from "../utils/axiosWithAuth";

const articleServices = () => {
    return axiosWithAuth().get(`http://localhost:5000/api/articles/${id}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

export default articleServices
