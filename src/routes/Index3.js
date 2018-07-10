import React from 'react'
import { Element } from 'rc-scroll-anim'
import { OverPack } from 'rc-scroll-anim';
import roadMap from '../assets/roadmap.png'
import roadMapMobile from  '../assets/roadmapmobile.png'
import TweenOne from 'rc-tween-one';
import Card from './Card';

export default function Index3(props) {
  const { getCommonValue, isMobile } = props
  return (
    <Element
      id="index3"
      targetId="root"
      className="relative allWidth roadmap columnFlex alignCenter"
      style={{
        padding: '150px 0px 150px',
        width: '100%',
      }}
    >
      <div
        className="textCenter"
        style={{
          marginBottom: 55,
          fontFamily: 'Avenir-Heavy',
          color: '#3A4E7F',
          fontSize: getCommonValue('fontSize', 64),
        }}
      >
        Roadmap
      </div>
      <div className="flex1">
        <OverPack playScale={0.3} style={{ overflow: 'hidden', height: '100%', width: '100%' }} >
          <TweenOne key="0" animation={{ opacity: 1 }}
            className="code-box-shape"
            style={{
              opacity: 0,
              margin: '10px 20px',
            }}
          >
            <img
              src={isMobile ? roadMapMobile : roadMap}
              alt="roadmap"
              style={{
                width: 'auto',
                height: 'auto',
                maxHeight: '100%',
                maxWidth: isMobile ? '100%' : '1200px',
                marginRight: isMobile ? '' : '-180px'
              }}
            />
          </TweenOne>
        </OverPack>
      </div>
    </Element>
  )
}
