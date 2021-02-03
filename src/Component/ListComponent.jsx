import React, { Component } from 'react'
import serviceArtikel from '../ArtikelService/serviceArtikel'
import {options} from '../DataOfSelect/data'
export default class ListComponent extends Component {
    constructor(args){
         super(args)
         this.state ={
             categorie:"",
             artikels:[]
         }
         this.saveArtikle=this.saveArtikle.bind(this)
       
         this.handelChangeCategorie=this.handelChangeCategorie.bind(this)
         this.filterCategorie=this.filterCategorie.bind(this)
         this.deleteArtikle=this.deleteArtikle.bind(this)
         this.editArtikle=this.editArtikle.bind(this)
         
    }
   
    editArtikle(id){
        this.props.history.push(`/add_artikle/${id}`)
    }
    deleteArtikle(id){
      
          serviceArtikel.deleteArtikle(id).then((resp)=>{
            this.props.history.push("/")
            window.location.reload(false);
          }) 
          
   }
    filterCategorie(categorie){
      this.props.history.push(`/${categorie}`)
    }
    
    componentDidMount(){
      serviceArtikel.getAllArtikels().then((resp) =>{
            this.setState({artikels:resp.data})
           
        })
        }   
    saveArtikle(){
      this.props.history.push("/add_artikle/-1")
    }
    
  handelChangeCategorie(event){
    this.setState({categorie:event.target.value})
}
    render() {
            return (<>
                 <div>
                 
                <label for="categorie">Categorie of Article</label>
               <select type="text" id="categorie" name="categorie"
                value={this.state.categorie} onChange={this.handelChangeCategorie}
               
           >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select><br></br><br></br>
          <button className="btn" onClick={() =>this.filterCategorie(this.state.categorie)}>Filter</button>
          <br></br><br></br>
              </div>
                <table id="customers">
                  <thead>
                  <tr>
                  <th>Autor </th>
                  <th>Name of Artikel</th>
                  <th>Content of Artikel</th>
                  <th>Categorie</th>
                 <th>Action</th>
                 
                </tr>
                  </thead>
                
                {
                  this.state.artikels.map((artikel) =>{
                    return <tr key={artikel.id}>
                         <td>{artikel.autorname}</td>
                         <td>{artikel.artiklsname}</td>
                         <td>{artikel.content}</td>
                         <td>{artikel.categorie}</td>
                         
                  <td>
                    <button onClick={() =>this.deleteArtikle(artikel.id)}>Delete</button>
                    <button onClick={() =>this.editArtikle(artikel.id)}>Edit</button>                   
                     </td>
                  
                         
                    </tr>
                  })
                }
              </table>
              <div>
              <button className="btn" onClick={this.saveArtikle}>Add an Artikle </button>
            
              </div>
              
             </>
              )
        
    }
}
