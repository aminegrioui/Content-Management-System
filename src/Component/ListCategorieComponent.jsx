import React, { Component } from 'react'
import serviceArtikel from '../ArtikelService/serviceArtikel'

export default class ListComponent extends Component {
    constructor(args){
         super(args)
         this.state ={
             categorie:this.props.match.params.categorie,
             artikels:[]
         }
        
         this.getAllArtikls=this.getAllArtikls.bind(this)
         
    }
    getAllArtikls(){
      this.props.history.push("/")
    }
    
    componentDidMount(){
        console.log(this.state.categorie)
        serviceArtikel.getArtikelsOfCategorie(this.state.categorie).then((resp)=>{
            this.setState({artikels:resp.data})
          })
  }
    render() {
            return (<>
                
                <table id="customers">
                  <thead>
                  <tr>
                  <th>Autor </th>
                  <th>Name of Artikel</th>
                  <th>Content of Artikel</th>
                  <th>Categorie</th>
                </tr>
                  </thead>
                
                {
                  this.state.artikels.map((artikel) =>{
                    return <tr key={artikel.id}>
                         <td>{artikel.autorname}</td>
                         <td>{artikel.artiklsname}</td>
                         <td>{artikel.content}</td>
                         <td>{artikel.categorie}</td>
                         
                    </tr>
                  })
                }
              </table>
              
              <div>
                  <button className="btn" type="button"  onClick={this.getAllArtikls}>Go to the List </button>

             </div>
             </>
              )
        
    }
}
