import React from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'; //from node_modules
import {Provider} from './context';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager"/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
