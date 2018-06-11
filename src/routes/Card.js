import React from 'react'
import TweenOne from 'rc-tween-one';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: { y: '0%', yoyo: false, repeat: 1, duration: 500 },
    }
  }

  render() {
    return (
      <TweenOne
        style={{ height: '100%' }}
        animation={this.state.animation}
        onMouseEnter={() => this.setState({ animation: { ...this.animation, y: '-100%' } })}
        onMouseLeave={() => this.setState({ animation: { ...this.animation, y: '0%' } })}
      >
        {this.props.children}
      </TweenOne>
    );
  }
}
export default Card
