import axios from 'axios'

const url="http://localhost:8080/"

class ArtikelService{
    getAllArtikels(){
        return axios.get(url)
    }
    saveArticle(article){
        return axios.post(url,article)
    }
    getArtikelsOfCategorie(categorie){
        return axios.get(url + "/" + categorie)
    }
    deleteArtikle(id){
        return axios.delete(url + "/" + id)
    }
    getArtikleById(id){
        return axios.get(url + "getArtikle/" + id)
    }
    updateArtikleById(id, artikle){
        return axios.put(url + "/" + id, artikle)
    }
}
export default new ArtikelService()