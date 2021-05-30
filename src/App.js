import { useState } from "react";
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home/Home';
import Basic from './basic/Basic';
import Full from './full/Full';

import './app.scss';

const App = () => {
    const [] = useState();
    return <Router>
        <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/basic">Basic Example</Link>
            <Link to="/full">Full Example</Link>
        </div>
        <Switch>
            <Route path="/basic">
                <Basic />
            </Route>
            <Route path="/full">
                <Full />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>;
};

export default App;
