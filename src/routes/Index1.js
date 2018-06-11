import React from 'react'
import { Element } from 'rc-scroll-anim'
import systemImg from '../assets/pic.png'

export default function Index1(props) {
  return (
    <Element
      id="index1"
      className="allWidth"
      style={{
        height: 970,
        maxWidth: 1200,
        paddingTop: 113,
      }}
    >
      <div
        style={{
          color: '#3A4E7F',
          fontSize: 36,
          opacity: 0.4,
          marginBottom: 28,
          fontFfamily: 'PingFangSC-Semibold',
      }}
      >
        About Genesis Space
      </div>
      <div className="flex">
        <div
          style={{
            width: 520,
            flex: 'none',
          }}
        >
          <div
            style={{
              fontSize: 64,
              color: '#3A4E7F',
              fontFamily: 'Avenir-Heavy',
              lineHeight: '84px',
            }}>
            Decentralized Autonomous Organization (DAO)
          </div>
          <div
            style={{
              marginTop: 60,
              color: '#3A4E7F',
              fontSize: 24,
              opacity: 0.6,
              fontFamily: 'PingFangSC-Regular',
              lineHeight: '40px',
            }}>
            Genesis is a DAO (decentralized autonomous organization) based on blockchain. In Genesis, users (nodes) vote to update community rules and blockchain protocols. Genesis has multiple side chains providing functions like file storage and dapp store.time
          </div>
        </div>
        <div className="flex1" style={{ paddingLeft: 100 }}>
          <div style={{ height: 336 }}>
            <img src={systemImg} alt="img" style={{ width: '100%' }} />
          </div>
          <div
            style={{
              fontFamily: 'PingFangSC-Regular',
              fontSize: 36,
              color: '#3A4E7F',
            }}
          >
            Genesis Social System
          </div>
          <div
            style={{
              marginTop: 10,
              color: '#3A4E7F',
              fontSize: 24,
              opacity: 0.6,
              fontFamily: 'PingFangSC-Regular',
              lineHeight: '40px',
            }}
          >
            Genesis is a DAO (decentralized autonomous organization) based on blockchain. In Genesis, users (nodes) vote to update community rules and blockchain protocols. 没翻译
          </div>
        </div>
      </div>
    </Element>
  )
}
