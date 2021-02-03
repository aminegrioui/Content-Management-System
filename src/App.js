import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ComponentList from './Component/ListComponent'
import ListCategorieComponent from './Component/ListCategorieComponent'
import AddArtikleComponent from './Component/AddArtikelComponent'
function App() {
  return (<div>
      <Router>
          <Switch>
            <Route path="/"  exact component={ComponentList}></Route>
            <Route  path="/add_artikle/:id" component={AddArtikleComponent}></Route>
             <Route path="/:categorie" component={ListCategorieComponent}></Route>
          </Switch>
           
   </Router>
 </div>
   
  );
}

export default App;
