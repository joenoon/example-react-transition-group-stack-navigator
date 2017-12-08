import React from 'react';
import {observer} from 'mobx-react';
import {observable, action } from 'mobx';

const getInitialRoute = (routes) => {
  const key = Object.keys(routes)[0];
  const route = routes[key];
  return {
    ...route,
    key,
    params: route.navigationOptions && route.navigationOptions.initialParams || {},
    i: 0,
    unique_key: `${key}-0`,
  };
};

export const StackNavigator = (routes, options) => {
  @observer
  class Nav extends React.Component {
    @observable routes = routes;
    @observable options = options;
    @observable stack = [
      getInitialRoute(routes),
    ];
    @observable current_i = 0;

    @action navigate = (key, params = {}) => {
      const {routes,stack} = this;
      const i = this.current_i += 1;
      const unique_key = `${key}-${i}`;
      stack.push({...routes[key], key, params, i, unique_key});
    };

    @action goBack = () => {
      this.stack.pop();
    };

    @action setParams = (params) => {
      const {stack} = this;
      const route = stack[stack.length - 1];
      route.params = {...route.params, ...params};
    };

    render() {
      const {stack,current_i,options,navigate,goBack,setParams} = this;
      const lastIndex = stack.length - 1;
      const navigation = {navigate,goBack,setParams};
      const {Container,Card} = options;
      return (
        <Container>
          {stack.map((route, i) => (
            <Card key={route.unique_key} initialin={!!(route.i === 0)} mountOnEnter={true} unmountOnExit={false} enter={true} exit={true} appear={!(route.i === 0)} first={route.i === 0} last={i === lastIndex} route={route} navigation={navigation}>
              {React.createElement(route.screen, {route, navigation})}
            </Card>
          ))}
        </Container>
      );
    }
  }
  return Nav;
};
