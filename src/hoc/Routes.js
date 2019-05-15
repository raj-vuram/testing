import React,{Component} from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "../container/home/Home";
import Second from "../container/second/Second";
import NavBar from '../component/navbar/NavBar';

class Routes extends Component{
render(){
return(
    <div>
        <NavBar/>
<Switch>
            <Route
              path={"/"}
              exact
              render={() => <Home />}
            />
            <Route
              path={"/s"}
              exact
              render={() => <Second />}/>
</Switch>
</div>
)
}
}
export default Routes;