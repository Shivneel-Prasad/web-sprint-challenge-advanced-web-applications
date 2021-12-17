import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = () => {
    return axiosWithAuth()
      .get(`http://localhost:5000/api/articles/${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
}

export default articleService;
