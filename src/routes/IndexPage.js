import React from 'react';
import { connect } from 'dva';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import Header from './Header'
import Banner from './Banner'
import Index1 from './Index1'
import Index2 from './Index2'
import Index3 from './Index3'
import Index3x from './Index3x'
import Index4 from './Index4'
import Index5 from './Index5'
import Footer from './Footer'

import Card from './Card';
import './IndexPage.less';


class IndexPage extends React.Component {
  state={
    scrollTop: 0,
    isMobile: false,
    menuExpand: false,
  }
  componentDidMount() {
    document.querySelector('#root').addEventListener('scroll', (e) => {
      this.setState({
        scrollTop: e.target.scrollTop,
      })
    })
    const width = document.body.clientWidth
    console.log(width)
    if (width < 1200) {
      document.querySelector('html').style.fontSize = '10px'
      this.setState({
        isMobile: true,
      })
    }
  }
  changeMenuExpand = (menuExpand) => {
    console.log(menuExpand)
    this.setState({
      menuExpand: menuExpand === undefined ? !this.state.menuExpand : menuExpand,
    })
  }
  render() {
    const { isMobile, menuExpand } = this.state
    const common = {
      width: {
        23: [23, 40],
      },
      fontSize: {
        16: [16, 16],
        20: [20, 20],
        24: [24, 18],
        36: [36, 30],
        64: [64, 35],
      },
      lineHeight: {
        20: [20, 20],
        40: [40, 30],
        64: [64, 64],
        84: [84, 50],
      },
    }
    const getCommonValue = (key, pcValue, index = +isMobile) => common[key][pcValue][index]
    return (
      <div className="allWidth relative columnFlex alignCenter overflowHidden">
        <Header
          isMobile={isMobile}
          scrollTop={this.state.scrollTop}
          getCommonValue={getCommonValue}
          menuExpand={menuExpand}
          changeMenuExpand={this.changeMenuExpand}
        />
        <div
          className="allWidth columnFlex alignCenter relative"
          onClick={() => this.changeMenuExpand(false)}
        >
          <Banner isMobile={isMobile} getCommonValue={getCommonValue} />
          <Index1 isMobile={isMobile} getCommonValue={getCommonValue} />
          <Index2 isMobile={isMobile} getCommonValue={getCommonValue} />
          <Index3x isMobile={isMobile} getCommonValue={getCommonValue} />
          <Index3 isMobile={isMobile} getCommonValue={getCommonValue} />
          <Index4 isMobile={isMobile} getCommonValue={getCommonValue} />
          {/* <Index5 isMobile={isMobile} getCommonValue={getCommonValue} /> */}
          <Footer isMobile={isMobile} getCommonValue={getCommonValue} />

        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
