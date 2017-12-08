import React from 'react';
import {CardSlideContainer} from './CardSlide';
import {StackTransitionGroupContainer} from './StackTransitionGroupContainer';
import {StackNavigator} from './StackNavigator';

function wrapTest (Comp) {
  class WrapTest extends React.Component {
    componentDidMount() {
      console.log('componentDidMount', this.props.route.unique_key);
    }
    componentWillUnmount() {
      console.log('componentWillUnmount', this.props.route.unique_key);
    }
    render() {
      return <Comp {...this.props} />;
    }
  }
  return WrapTest;
}

export const TestStackNav = StackNavigator({
  Page1: {
    screen: wrapTest((props) => (
      <div {...props.styles}>
        <div><strong>{props.route.unique_key}</strong></div>
        <div onClick={e => { e.preventDefault(); props.navigation.navigate('Page2')}}>go to Page2</div>
        <div>{props.anim}</div>
        <div>{props.status}</div>
        <div>{props.in ? 'IN' : 'OUT'}</div>
        <div style={{height: 200}} />
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    )),
  },
  Page2: {
    screen: wrapTest((props) => (
      <div {...props.styles}>
        <div><strong>{props.route.unique_key}</strong></div>
        <div onClick={e => { e.preventDefault(); props.navigation.navigate('Page3')}}>go to Page3</div>
        <div onClick={e => { e.preventDefault(); props.navigation.goBack()}}>go back</div>
        <div>{props.anim}</div>
        <div>{props.status}</div>
        <div>{props.in ? 'IN' : 'OUT'}</div>
        <div style={{height: 200}} />
        <div>Test test test test</div>
        <div>Test test test test</div>
        <div>Test test test test</div>
      </div>
    )),
  },
  Page3: {
    screen: wrapTest((props) => (
      <div {...props.styles}>
        <div><strong>{props.route.unique_key}</strong></div>
        <div onClick={e => { e.preventDefault(); props.navigation.navigate('Page4')}}>go to Page4</div>
        <div onClick={e => { e.preventDefault(); props.navigation.goBack()}}>go back</div>
        <div>{props.anim}</div>
        <div>{props.status}</div>
        <div>{props.in ? 'IN' : 'OUT'}</div>
        <div style={{height: 400}} />
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    )),
  },
  Page4: {
    screen: wrapTest((props) => (
      <div {...props.styles}>
        <div><strong>{props.route.unique_key}</strong></div>
        <div onClick={e => { e.preventDefault(); props.navigation.navigate('Page5')}}>go to Page5</div>
        <div onClick={e => { e.preventDefault(); props.navigation.goBack()}}>go back</div>
        <div>{props.anim}</div>
        <div>{props.status}</div>
        <div>{props.in ? 'IN' : 'OUT'}</div>
        <div style={{height: 600}} />
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    )),
  },
  Page5: {
    screen: wrapTest((props) => (
      <div {...props.styles}>
        <div><strong>{props.route.unique_key}</strong></div>
        <div onClick={e => { e.preventDefault(); props.navigation.navigate('Page6')}}>go to Page6</div>
        <div onClick={e => { e.preventDefault(); props.navigation.goBack()}}>go back</div>
        <div>{props.anim}</div>
        <div>{props.status}</div>
        <div>{props.in ? 'IN' : 'OUT'}</div>
        <div style={{height: 200}} />
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    )),
  },
  Page6: {
    screen: wrapTest((props) => (
      <div {...props.styles}>
        <div><strong>{props.route.unique_key}</strong></div>
        <div onClick={e => { e.preventDefault(); props.navigation.navigate('Page7')}}>go to Page7</div>
        <div onClick={e => { e.preventDefault(); props.navigation.goBack()}}>go back</div>
        <div>{props.anim}</div>
        <div>{props.status}</div>
        <div>{props.in ? 'IN' : 'OUT'}</div>
        <div style={{height: 800}} />
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    )),
  },
  Page7: {
    screen: wrapTest((props) => (
      <div {...props.styles}>
        <div><strong>{props.route.unique_key}</strong></div>
        <div onClick={e => { e.preventDefault(); props.navigation.navigate('Page8')}}>go to Page8</div>
        <div onClick={e => { e.preventDefault(); props.navigation.goBack()}}>go back</div>
        <div>{props.anim}</div>
        <div>{props.status}</div>
        <div>{props.in ? 'IN' : 'OUT'}</div>
        <div style={{height: 200}} />
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    )),
  },
  Page8: {
    screen: wrapTest((props) => (
      <div {...props.styles}>
        <div><strong>{props.route.unique_key}</strong></div>
        <div onClick={e => { e.preventDefault(); props.navigation.goBack()}}>go back</div>
        <div>{props.anim}</div>
        <div>{props.status}</div>
        <div>{props.in ? 'IN' : 'OUT'}</div>
        <div style={{height: 900}} />
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    )),
  },
}, {
  Card: CardSlideContainer,
  Container: StackTransitionGroupContainer,
});
