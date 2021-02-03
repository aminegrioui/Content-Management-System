import React, { Component } from 'react'
import serviceArtikel from '../ArtikelService/serviceArtikel'
import {options} from '../DataOfSelect/data'

export default class AddArtikelComponent extends Component {
      
       constructor(args){
           super(args)
           this.state={
            id:this.props.match.params.id,
            artiklsname:'',
            autorname:'',
            content:'',
            categorie:''
           }
           this.handelChangeArtiklname=this.handelChangeArtiklname.bind(this)
           this.handelChangeAutorName=this.handelChangeAutorName.bind(this)
           this.handelChangeCategorie=this.handelChangeCategorie.bind(this)
           this.handelChangeContent=this.handelChangeContent.bind(this)
           this.saveArticle=this.saveArticle.bind(this)
           this.getAllList=this.getAllList.bind(this)
          
       }
      
       getAllList(){
        this.props.history.push("/")
      }
    handelChangeArtiklname(event){
        this.setState({artiklsname:event.target.value})
    }
    handelChangeAutorName(event){
        this.setState({autorname:event.target.value})
    }
    handelChangeCategorie(event){
        this.setState({categorie:event.target.value})
    }
    handelChangeContent(event){
        this.setState({content:event.target.value})
    }
    componentDidMount(){
        if(this.state.id === -1){
            return
        }
        else{
            serviceArtikel.getArtikleById(this.state.id).then((resp) =>{
                let artikle=resp.data
                this.setState({artiklsname:artikle.artiklsname, autorname:artikle.autorname, categorie:artikle.categorie,content:artikle.content})
                 console.log(artikle)
            })
        }
    }
    saveArticle(e){
        e.preventDefault()
        let artikle={artiklsname:this.state.artiklsname, autorname:this.state.autorname, content:this.state.content, categorie:this.state.categorie}
        console.log(artikle)
        if(this.state.id ==-1){
            serviceArtikel.saveArticle(artikle).then((resp) =>{
                this.props.history.push("/")
          })
        }
        else{
            serviceArtikel.updateArtikleById(this.state.id,artikle).then((resp)=>{
                this.props.history.push("/")
            })
        }
       
    
    }
    render() {
        return (  <div class="container">
           
              <form>
    <div class="row">
      <div class="col-25">
        <label for="autorname">Autor </label>
      </div>
      <div class="col-75">
      <input type="text" id="autorname" name="autorname"
                value={this.state.autorname}
                onChange={this.handelChangeAutorName}
                placeholder="Autor .."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
      <label for="artiklsname">Name of Article </label>
      </div>
      <div class="col-75">
      <input type="text" name="artiklsname" id="artiklsname"
                placeholder="Artikel Name .." 
                value={this.state.artiklsname}
                onChange={this.handelChangeArtiklname}>
                </input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
      <label for="categorie">Categorie of Article</label>
      </div>
      <div class="col-75">
      <select type="text" id="categorie" name="categorie"
                value={this.state.categorie} onChange={this.handelChangeCategorie}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
      <label for="content">Content of Article</label>
      </div>
      <div class="col-75">
                <textarea type="text" id="content" name="content"
                value={this.state.content}
                onChange={this.handelChangeContent}
                placeholder="Write something.."></textarea>
      </div>
    </div>
    <div class="row">
     
      <button className="btn" type="submit" onClick={this.saveArticle}>  Save Article </button>
      <span> </span>
      <button className="btn" onClick={this.getAllList}> Home </button>
   
 </div>
  </form>
</div>

           
                
            
     
        
       )
    }
}
