import React from 'react'
import { Icon } from 'antd';
import TweenOne from 'rc-tween-one';
import { Element } from 'rc-scroll-anim'

const downloadLink = 'https://s3.us-east-2.amazonaws.com/thegenesisspace/Genesis+%E7%99%BD%E7%9A%AE%E4%B9%A6(%E4%B8%AD%E6%96%87).pdf';

export default function Banner(props) {
  const { clientWidth, clientHeight } = document.body
  const fontSize = Math.floor(Math.min(clientWidth, 1200) / 20)
  const { getCommonValue, isMobile } = props
  return (
    <Element id="home" className="allWidth">
      <TweenOne
        animation={{ fontSize: isMobile ? 40 : 60, yoyo: false, repeat: 0, duration: 1000 }}
        style={{ fontSize: 120 }}
      >
        <div className="canvas-wrap allWidth" style={{ height: clientHeight }}>
          <div
            className="canvas-content relative textCenter allHeight"
            style={{
              fontFamily: 'Avenir-Black',
              color: '#3A4E7F',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            NEXT{isMobile ? <br /> : ' '}GENERATION{isMobile ? <br /> : ' '}BLOCKCHAIN
            <br/>
            <div style={{ fontSize: isMobile ? '20px' : ''}}>Self-Evolving Virtual World</div>
            <br/>
            <a href={downloadLink}
              className="flex alignCenter justifyCenter whiteColor fs20 pointer hoverBigger"
              style={{
                marginTop: 90,
                width: 360,
                height: 60,
                background: '#3A4E7F',
                borderRadius: 100,
                display: clientWidth < 1200 ? 'none' : '',
                color: '#ffffff !important'
              }}
            >
              Download whitepaper
              <span
                className="textCenter marginLeft20"
                style={{
                  background: 'white',
                  color: '#777777',
                  height: 42,
                  width: 42,
                  borderRadius: '50%',
                }}
              >
                <Icon type="download" />
              </span>
            </a>
          </div>
          <div id="canvasBanner" className="gradient" style={{ height: clientHeight }}></div>
        </div>
      </TweenOne>
    </Element>
  )
}
