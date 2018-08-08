import React from 'react';
import ROUTES from '../configs/routes.config';
import { Route } from 'react-router-dom';

const Main = () => {
  const routes = ROUTES.map((route, i) => {
    return(
      <Route
        key={i}
        path={route.path}
        render={props => (
          <route.component {...props} />
        )}
      />
    );
  });
  return (
    <main>
      {routes}
    </main>
  );
};

export default Main;