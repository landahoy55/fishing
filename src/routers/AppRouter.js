import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

//Components
import FrontPage from '../components/FrontPage';
import AddSession from '../components/AddSession';
import EditSession from '../components/EditSession';
import AddSessionPlymouth from '../components/AddSessionPlymouth';
import AddSessionExmouth from '../components/AddSessionExmouth';
import ChooseLocation from '../components/ChooseLocation';
import LivePage from '../components/LivePage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


//notice the dynamic url parameter within edit.
//props are only passed down to items in the switch
const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header />  
      <Switch>
        <Route path="/" component={FrontPage} exact={true}/>
        <Route path="/location" component={ChooseLocation} />
        <Route path="/plymouth" component={AddSessionPlymouth} />
        <Route path="/torquay" component={AddSession} />
        <Route path="/exmouth" component={AddSessionExmouth} />
        <Route path="/session" component={AddSession}/>
        <Route path="/edit/:id" component={EditSession}/>
        <Route path="/live" component={LivePage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);
  //browserRouter sets up routes. Routes configs and redirects them. Switch, like Route diaplys one, like a Switch
  //exact set to true will only show route when matches correctly.
  //need div to encapsulate other components
  
  export default AppRouter;