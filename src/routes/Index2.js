import React from 'react'
import { Element } from 'rc-scroll-anim'
import icon1 from '../assets/voting.png'
import icon2 from '../assets/dapps.png'
import icon3 from '../assets/proof.png'
import icon4 from '../assets/side-chains.png'

export default function Index2(props) {
  const sysTemFeature = [
    {
      url: icon1,
      title: 'Voting',
      content: 'All community rules are decided by user voting. Hard forking only when consensus is reached with majority users.',
    },
    {
      url: icon2,
      title: 'DApps',
      content: 'Developers can easily publish DApps on the side chain. ',
    },
    {
      url: icon3,
      title: 'Proof Of Comprehension',
      content: 'PoC is Genesis’s revolutionary consensus mechanism, which uses hashing power normally wasted in PoW to train deep learning models.',
    },
    {
      url: icon4,
      title: 'Side Chains',
      content: 'Side chain technology is used in Genesis to the provide extensibility and scalability that limits traditional blockchains.',
    },
  ]
  return (
    <Element
      id="index2"
      className="allWidth flex justifyCenter"
      style={{
        height: 750,
        width: '100%',
        background: '#f4f5f6',
      }}
    >
      <div style={{ maxWidth: 1200 }} className="allWidth allHeight">
        <div
          className="textCenter"
          style={{
            marginTop: 63,
            marginBottom: 96,
            fontFamily: 'Avenir-Heavy',
            fontSize: 64,
            color: '#3A4E7F',
          }}
        >
          System Features
        </div>
        <div className="flex">
          {
            sysTemFeature.map((el, index) => (
              <div
                key={index}
                className="hoverBigger columnFlex alignCenter"
                style={{
                  background: 'white',
                  height:  360,
                  width: 285,
                  marginLeft: index !== 0 ? 20 : 0,
                }}
              >
                <div
                  className="textCenter"
                  style={{
                    marginTop: 50,
                    marginBottom: 22,
                    width: 100,
                    height: 100,
                  }}
                >
                  <img src={el.url} alt="img" width={100} height={100} />
                </div>
                <div
                  className="fs20"
                  style={{
                    color: '#3A4E7F',
                    fontFamily: 'PingFangSC-Medium',
                    height: 28,
                    marginBottom: 30,
                  }}
                >
                  {el.title}
                </div>
                <div
                  className="fs14"
                  style={{
                    width: 250,
                    opacity: 0.6,
                    lineHeight: '20px',
                    fontFamily: 'PingFangSC-Regular',

                  }}
                >
                  {el.content}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Element>
  )
}
