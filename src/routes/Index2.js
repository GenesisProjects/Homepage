import React from 'react'
import { Element } from 'rc-scroll-anim'
import icon1 from '../assets/voting.png'
import icon2 from '../assets/dapps.png'
import icon3 from '../assets/proof.png'
import icon4 from '../assets/side-chains.png'

let Card
export default class Index2 extends React.Component {
  state = {
    rotateIndex: 1,
  }
  changeRotateIndex = rotateIndex => {
    this.setState({
      rotateIndex,
    })
  }
  render() {
    const { getCommonValue, isMobile } = this.props
    const { rotateIndex } = this.state
    const sysTemFeature = [
      {
        url: icon3,
        title: 'DDOPS',
        content: `Democratic DPoS preserve the  DPOS's high-speed tps while avoiding DPOS's problem of "richer are richer".`
      },
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
        url: icon4,
        title: 'Side Chains',
        content: 'Side chain technology is used in Genesis to the provide extensibility and scalability that limits traditional blockchains.',
      },
    ]
    return (
      <Element
        id="index2"
        targetId="root"
        className="allWidth flex justifyCenter"
        style={{
          width: '100%',
          paddingBottom: 150,
          background: '#f4f5f6',
        }}
      >
        <div style={{ maxWidth: 1200, perspective: '3000px' }} className="allWidth allHeight">
          <div
            className="textCenter"
            style={{
              marginTop: 83,
              marginBottom: 66,
              fontFamily: 'Avenir-Heavy',
              fontSize: getCommonValue('fontSize', 64),
              color: '#3A4E7F',
            }}
          >
            System Features
          </div>
          <div
            className={`flex flexWrap justifyCenter ${isMobile ? 'rotateBox' : ''}`}
            style={{
              transform: isMobile ? `rotateX(-15deg) rotateY(${-rotateIndex * 90}deg)` : '',
            }}
            onTouchStart={e => {
              const touchStartTime = Date.now()
              const touchStartPositionX = e.changedTouches[0].screenX
              this.setState({
                touchStartTime,
                touchStartPositionX,
              })
            }}
            onTouchEnd={e => {
              const touchEndTime = Date.now()
              const touchEndPositionX = e.changedTouches[0].screenX
              const { touchStartPositionX, touchStartTime, rotateIndex } = this.state
              if (touchEndTime - touchStartTime < 500) {
                if (touchEndPositionX - touchStartPositionX > 50) {
                  this.setState({
                    rotateIndex: rotateIndex - 1,
                    touchStartTime: 0,
                  })
                }
                if (touchEndPositionX - touchStartPositionX < -50) {
                  this.setState({
                    rotateIndex: rotateIndex + 1,
                    touchStartTime: 0,
                  })
                }
              }
            }}
          >
            {
              sysTemFeature.map((el, index) => (
                <Card
                  el={el}
                  isMobile={isMobile}
                  index={index}
                  key={index}
                  active={((rotateIndex % 4) + 4) % 4 === index}
                  getCommonValue={getCommonValue}
                  onClick={() => this.changeRotateIndex(index)}
                />
              ))
            }
          </div>
        </div>
      </Element>
    )
  }
}

Card = ({ el, index, getCommonValue, onClick, active, isMobile }) => (
  <div
    key={index}
    className={`hoverBigger columnFlex alignCenter ${isMobile ? 'rotateItem' : ''}`}
    style={{
      background: 'white',
      height:  360,
      width: 275,
      margin: '10px 10px',
      zIndex: active ? 2 : 1,
      transform: isMobile ? `rotateX(0deg) rotateY(${index * 90}deg) translateZ(150px)` : '',
      filter: active || !isMobile ? '' : 'blur(3px)',
    }}
    // onClick={onClick}
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
      className="fs16"
      style={{
        width: 250,
        opacity: 0.6,
        lineHeight: `${getCommonValue('lineHeight', 20)}px`,
        fontFamily: 'PingFangSC-Regular',

      }}
    >
      {el.content}
    </div>
  </div>
)
