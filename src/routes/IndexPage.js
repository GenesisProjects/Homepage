import React from 'react';
import { connect } from 'dva';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import Header from './Header'
import Banner from './Banner'
import Index1 from './Index1'
import Index2 from './Index2'
import Index3 from './Index3'
import Index4 from './Index4'
import Index5 from './Index5'
import Footer from './Footer'

import Card from './Card';
import './IndexPage.css';


class IndexPage extends React.Component {
  state={
    scrollTop: 0,
  }
  componentDidMount() {
    document.body.addEventListener('scroll', (e) => {
      this.setState({
        scrollTop: e.target.scrollTop,
      })
    })
  }
  render() {

    return (
      <div className="allWidth relative columnFlex alignCenter">
        <Header scrollTop={this.state.scrollTop} />
        <Banner />
        <Index1 />
        <Index2 />
        <Index3 />
        <Index4 />
        <Index5 />
        <Footer />
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
