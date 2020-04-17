import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import  { Provider } from 'react-redux';
import { store } from './REDUX/store';
import './index.css';
import Manage from './components/DeltaBox/Manage';
import NewList from './components/DeltaBox/NewList';
import Share from './components/DeltaBox/Share';
import { Banner } from './components/Banner';
import AddTo from './components/AddBox/AddTo';
import  View  from './components/DeltaBox/View';
import ListList from './components/ListList';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Banner />
        <div className="nav">
          <Link to="/" className="menuOption"><h3>New List</h3></Link>
          <Link to="/manage" className="menuOption"><h3>Manage</h3></Link>
          <Link to="/share" className="menuOption"><h3>Share Lists</h3></Link>      
        </div>
        <ListList /> 
        <div class="functionBox">
          <div class="functionBoxGrid">
            <AddTo />
            <Switch className="Delta">
              <Route exact path="/" component={NewList} />
              <Route path="/manage" component={Manage} />
              <Route path="/share" component={Share} />
              <Route path="/view" component={View}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </Provider>  
);

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
