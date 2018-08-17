import React from 'react';
import ROUTES from '../configs/routes.config';
import { Route, Redirect } from 'react-router-dom';

const Main = () => {
  const routes = ROUTES.map((route, i) => {
    return(
      <Route
        key={i}
        path={route.path}
        exact = {route.exact}
        render={props => (
          <route.component {...props} />
        )}
      />
    );
  });
  return (
    <main>
      <Redirect from="/" to="/trainings" />
      {routes}
    </main>
  );
};

export default Main;