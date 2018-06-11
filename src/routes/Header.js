import React from 'react'
import { Link } from 'rc-scroll-anim'
import logoImg from '../assets/logo.png'

export default function Header(props) {
  return (
    <div
      className="flex justifyCenter allWidth alignCenter"
      style={{
        position: 'fixed',
        top: 0,
        height: 80,
        zIndex: 2001,
        background: props.scrollTop > 800 ? '#fdfdfd' : 'rgba(203,203,203,0.1',
      }}
    >
      <div className="flex justifyBetween allWidth" style={{ maxWidth: 1200 }}>
        <img src={logoImg} alt="logo" width={278} height={38} />
        <div className="flex alignCenter marginRight20">
          <div className="fs14 marginLeft20 pointer" style={{ color: '#3A4E7F' }}>
            <Link to="home">HOME</Link>
          </div>
          <div className="fs14 marginLeft20 pointer" style={{ color: '#3A4E7F' }}>
            <Link to="index1">ABOUT</Link>
          </div>
          <div className="fs14 marginLeft20 pointer" style={{ color: '#3A4E7F' }}>
            <Link to="index2">ROADMAP</Link>
          </div>
          <div className="fs14 marginLeft20 pointer" style={{ color: '#3A4E7F' }}>
            <Link to="index3">TOKENSALE</Link>
          </div>
          <div className="fs14 marginLeft20 pointer" style={{ color: '#3A4E7F' }}>
            <Link to="index4">TEAM</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
