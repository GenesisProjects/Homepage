import React from 'react'
import { Icon } from 'antd';
import TweenOne from 'rc-tween-one';
import { Element } from 'rc-scroll-anim'

export default function Banner(props) {
  return (
    <Element id="home" className="allWidth">
      <TweenOne
        animation={{ fontSize: 64, yoyo: false, repeat: 0, duration: 1000 }}
        style={{ fontSize: 120 }}
      >
        <div className="canvas-wrap allWidth">
          <div
            className="canvas-content relative textCenter allHeight"
            style={{
              fontFamily: 'Avenir-Black',
              color: '#3A4E7F',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            NEXT GENERATION BLOCKCHAIN
            <br/>
            Self-Evolving Virtual World
            <br/>
            <div
              className="flex alignCenter justifyCenter whiteColor fs20 pointer hoverBigger"
              style={{
                marginTop: 90,
                width: 360,
                height: 60,
                background: '#3A4E7F',
                borderRadius: 100,
              }}
            >
              Download The whitepaper
              <div
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
              </div>
            </div>
          </div>
          <div id="canvasBanner" className="gradient"></div>
        </div>
      </TweenOne>
    </Element>
  )
}
