import React from 'react'
import { Element } from 'rc-scroll-anim'
import { OverPack } from 'rc-scroll-anim';
import roadMap from '../assets/roadmap.png'
import TweenOne from 'rc-tween-one';
import Card from './Card';

export default function Index3(props) {
  return (
    <Element
      id="index3"
      className="relative allWidth roadmap columnFlex alignCenter"
      style={{
        height: 820,
      }}
    >
      <div
        className="textCenter"
        style={{
          marginTop: 73,
          marginBottom: 55,
          fontFamily: 'Avenir-Heavy',
          color: '#3A4E7F',
          fontSize: 64,
        }}
      >
        Roadmap
      </div>
      <img src={roadMap} alt="roadmap" height={520} />
    </Element>
  )
}
