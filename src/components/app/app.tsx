import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Detail } from 'pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
