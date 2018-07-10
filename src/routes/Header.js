import React from 'react'
import { Link } from 'rc-scroll-anim'
import { Icon } from 'antd'
import logoImg from '../assets/logo.png'

export default class Header extends React.Component {
  render() {
    const { isMobile, getCommonValue, menuExpand, changeMenuExpand } = this.props
    const { clientHeight } = document.body
    return (
      <div
        className="header flex justifyCenter allWidth alignCenter relative"
        style={{
          position: 'fixed',
          top: 0,
          height: 80,
          zIndex: 2001,
          background: this.props.scrollTop > clientHeight ? '#fdfdfd' : 'rgba(203,203,203,0.1)',
        }}
      >
        <div className="flex justifyBetween allWidth alignCenter" style={{ maxWidth: 1200 }}>
          <div className="textCenter marginLeft20" style={{ width: `${getCommonValue('width', 23)}%`, height: 38, flex: 'none' }}>
            <img src={logoImg} alt="logo" style={{ width: 'auto', height: 'auto',  maxHeight: '100%', maxWidth: '100%' }} />
          </div>
          {
            isMobile
              ? (
                <Icon
                  className={`munuIcon ${menuExpand ? 'open' : ''}`}
                  style={{ right: menuExpand ? '45%' : '20px'}}
                  type="menu-fold"
                  onClick={() => changeMenuExpand()}
                />
              )
              : (
                <div className="flex alignCenter marginRight20">
                  <div
                    className="fs14 marginLeft20 pointer"
                    style={{ color: '#3A4E7F' }}
                  >
                    <Link targetId="root" to="home">HOME</Link>
                  </div>
                  <div
                    className="fs14 marginLeft20 pointer"
                    style={{ color: '#3A4E7F' }}
                  >
                    <Link targetId="root" to="index1">ABOUT</Link>
                  </div>
                  {/* <div
                    className="fs14 marginLeft20 pointer"
                    style={{ color: '#3A4E7F' }}
                  >
                    <Link targetId="root" to="index2">TOKENSALE</Link>
                  </div> */}
                  <div
                    className="fs14 marginLeft20 pointer"
                    style={{ color: '#3A4E7F' }}
                  >
                    <Link targetId="root" to="index3">ROADMAP</Link>
                  </div>
                  <div
                    className="fs14 marginLeft20 pointer"
                    style={{ color: '#3A4E7F' }}
                  >
                    <Link targetId="root" to="index4">TEAM</Link>
                  </div>
                </div>
              )
          }
        </div>
        <div
          className={`menu ${menuExpand ? 'expand' : ''} ${isMobile ? '' : 'hidden'}`}
          style={{ height: document.body.clientHeight}}
        >
          <div className="allHeight columnFlex alignCenter justifyBetween">
            <div
              className="fs12"
              style={{ color: '#3A4E7F' }}
              onClick={() => changeMenuExpand(false)}
            >
              <Link targetId="root" to="home">HOME</Link>
            </div>
            <div
              className="fs12"
              style={{ color: '#3A4E7F', fontSize: '1rem' }}
              onClick={() => changeMenuExpand(false)}
            >
              <Link targetId="root" to="index1">ABOUT</Link>
            </div>
            <div
              className="fs12"
              style={{ color: '#3A4E7F' }}
              onClick={() => changeMenuExpand(false)}
            >
              <Link targetId="root" to="index2">TOKENSALE</Link>
            </div>
            <div
              className="fs12"
              style={{ color: '#3A4E7F' }}
              onClick={() => changeMenuExpand(false)}
            >
              <Link targetId="root" to="index3">ROADMAP</Link>
            </div>
            <div
              className="fs12"
              style={{ color: '#3A4E7F' }}
              onClick={() => changeMenuExpand(false)}
            >
              <Link targetId="root" to="index4">TEAM</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
