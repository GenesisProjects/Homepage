import React from 'react'
import { Element } from 'rc-scroll-anim'
import systemImg from '../assets/pic.png'

export default function Index1(props) {
  const { clientWidth } = document.body
  const { isMobile, getCommonValue } = props

  return (
    <Element
      id="index1"
      targetId="root"
      className="allWidth"
      style={{
        maxWidth: 1200,
        padding: '120px 20px 50px 20px',
      }}
    >
      {/* <div
        style={{
          color: '#3A4E7F',
          fontSize: getCommonValue('fontSize', 36),
          opacity: 0.4,
          marginBottom: 28,
          fontFfamily: 'PingFangSC-Semibold',
      }}
      >
        About Genesis Space
      </div> */}
      <div className="flex flexWrap allWidth">
        <div
          style={{
            maxWidth: Math.min(520, clientWidth - 40),
            flex: 'none',
          }}
        >
          <div
            style={{
              fontSize: getCommonValue('fontSize', 64),
              color: '#3A4E7F',
              fontFamily: 'Avenir-Heavy',
              lineHeight: `${getCommonValue('lineHeight', 84)}px`,
            }}>
            Decentralized<br />Autonomous<br />Organization<br />(DAO)
          </div>
          <div
            style={{
              marginTop: 60,
              color: '#3A4E7F',
              fontSize: getCommonValue('fontSize', 24),
              opacity: 0.6,
              fontFamily: 'PingFangSC-Regular',
              lineHeight: `${getCommonValue('lineHeight', 40)}px`,
            }}>
            Genesis is a DAO (decentralized autonomous organization) based on blockchain. In Genesis, users (nodes) vote to update community rules and blockchain protocols. Genesis has multiple side chains providing functions like file storage and dapp store.
          </div>
        </div>
        <div className="flex1 allWidth" style={{ paddingLeft: !isMobile ? 100 : 0 }}>
          <div className="textCenter allWidth" style={{ height: 336, minWidth: 350 }}>
            <img src={systemImg} alt="img" style={{ width: '100%' }} />
          </div>
          {/* <div
            style={{
              fontFamily: 'PingFangSC-Regular',
              fontSize: getCommonValue('fontSize', 36),
              color: '#3A4E7F',
            }}
          >
            Genesis Social System
          </div>
          <div
            style={{
              marginTop: 10,
              color: '#3A4E7F',
              fontSize: getCommonValue('fontSize', 24),
              opacity: 0.6,
              fontFamily: 'PingFangSC-Regular',
              lineHeight: `${getCommonValue('lineHeight', 40)}px`,
            }}
          >
            Genesis is a DAO (decentralized autonomous organization) based on blockchain. In Genesis, users (nodes) vote to update community rules and blockchain protocols. 没翻译
          </div> */}
        </div>
      </div>
    </Element>
  )
}
