import * as React from 'react';
import {
  Route,
  RouteProps,
  Switch,
} from 'react-router';
import { Home } from '../home/Home';

const routes = [
  {
    path: '/',
    component: Home,
    title: 'Homepage',
    key: 'home',
    exact: true,
  },
];

const getRouterRoutes = () => {
  return routes.map((route: RouteProps, idx: number) => (
    <Route {...route} key={idx} />
  ));
};


export class Root extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        {getRouterRoutes()}
      </Switch>
    )
  }
}