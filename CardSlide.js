import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {observable, action } from 'mobx';
import {css} from 'glamor'
import {Transition} from 'react-transition-group';

@observer
export const CardSlide = class CardSlide extends React.Component {

  static propTypes = {
    navigation: PropTypes.any.isRequired,
    route: PropTypes.any.isRequired,
  };

  @observable state = {
    anim: 'slideInFromRight'
  };

  componentWillReceiveProps(nextProps) {
    const {props} = this;
    const was = props.appearance;
    const now = nextProps.appearance;
    // console.log({was, now});
    if (now === 'gone') {
      this.state.anim = 'slideOutToRight';
    } else if (was === 'behind' && now === 'front') {
      this.state.anim = 'slideInFromLeft';
    } else if (now == 'behind') {
      this.state.anim = 'slideOutToLeft';
    }
  }

  render() {
    const {children, duration, ...props} = this.props;
    const {anim} = this.state;

    const defaultStyle = {
      transition: `${duration}ms ease-in`,
      transitionProperty: 'opacity, transform',
      width: '100%',
      backgroundColor: '#fff',
      opacity: 0,
      boxShadow: ' 0 0 5px -2px #888',
    }

    const outsideRight = {
      transform: 'translateX(100%)',
      position: 'absolute',
      top: 0,
      bottom: 0,
      opacity: 0.5,
      overflow: 'hidden',
    };
    const outsideLeft = {
      transform: 'translateX(-100%)',
      position: 'absolute',
      top: 0,
      bottom: 0,
      opacity: 0.5,
      overflow: 'hidden',
    };
    const middle = {
      transform: 'translateX(0)',
      position: 'relative',
      top: 0,
      bottom: 0,
      opacity: 1,
      // backgroundColor: 'yellow',
    };

    const transitionStyles = {
      entering: outsideRight,
      entered: middle,
      exiting: outsideRight,
      exited: outsideRight,
    };

    if (anim === 'slideOutToLeft') {
      Object.assign(transitionStyles, {
        entering: outsideLeft,
        entered: outsideLeft,
        exiting: outsideLeft,
        exited: outsideLeft,
      });
    } else if (anim === 'slideInFromLeft') {
      Object.assign(transitionStyles, {
        entering: outsideLeft,
      });
    } else if (anim === 'slideOutToRight') {
      Object.assign(transitionStyles, {
        entered: outsideRight,
      });
    }

    return (
      <Transition
        timeout={{
          // Set 'enter' timeout to '0' so that enter animation
          // will start immediately.
          enter: 0,

          // Set 'exit' timeout to 'duration' so that the 'exited'
          // status won't be applied until animation completes.
          exit: duration
        }}
        {...props}
      >
        {
          // Children is a function that receives the current
          // status of the animation.
          (status) => {
            // console.log('status', this.props.route.unique_key, status);

            // Apply different styles to children based
            // on the current value of 'status'. 
            const currentStyles = transitionStyles[status];
            const styles = css({
              ...defaultStyle,
              ...currentStyles
            });
            return React.cloneElement(children, {
              styles,
              anim,
              status,
              in: props.in,
            })
          }
        }
      </Transition>
    )
  }

}

export const CardSlideContainer = (props) => (
  <CardSlide key={props.route.unique_key} duration={300} {...props} />
);
