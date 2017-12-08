import React from 'react';
import glamorous from 'glamorous';

import StackTransitionGroup from './StackTransitionGroup';

export const StackTransitionGroupComponent = glamorous.div({
  backgroundColor: '#fff',
  position: 'relative',
  overflowX: 'hidden',
  flex: 1,
  alignSelf: 'stretch',
  display: 'flex',
});

export const StackTransitionGroupContainer = (props) => (
  <StackTransitionGroup component={StackTransitionGroupComponent} {...props} />
);