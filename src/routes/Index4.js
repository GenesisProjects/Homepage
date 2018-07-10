import React from 'react'
import { Element } from 'rc-scroll-anim'
import memberList from '../memberList';

export default class Index4 extends React.Component {
  state = {
    rotateIndex: 0,
  }
  changeRotateIndex = rotateIndex => {
    this.setState({
      rotateIndex,
    })
  }
  render() {
    const { getCommonValue, isMobile } = this.props
    const { rotateIndex } = this.state

    return (
      <Element
        id="index4"
        clatargetId="root"
        ssName="allWidth"
        style={{
          width: document.body.clientWidth,
          maxWidth: 1200,
          padding: '100px 0px',
          color: '#3A4E7F',
        }}
      >
        <div
          className="flex flexWrap justifyBetween"
          style={{
            margin: '0px 20px',
          }}
        >
          <div
            style={{
              fontFamily: 'Avenir-Heavy',
              fontSize: getCommonValue('fontSize', 64),
              lineHeight: `${getCommonValue('lineHeight', 84)}px`,
              width: 360,
              marginBottom: 50,
            }}
          >
            Meet The Developers
          </div>
          <div
            className="flex1"
            style={{
              color: 'rgb(58, 78, 127)',
              opacity: 0.6,
              fontSize: getCommonValue('fontSize', 20),
              lineHeight: `${getCommonValue('lineHeight', 40)}px`,
              fontFamily: 'PingFangSC-Regular',
            }}
          >
          Genesis team come from top universities like CMU, Harvard, Berkeley, Columbia and CUHK. These engineers have previously been trained in companies like Google, Ebay, Alibaba and Oracle etc.
          </div>
        </div>
        {
          isMobile
            ? (
              <div
                className="allWidth overflowHidden relative"
                style={{
                  minHeight: 500,
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
                        rotateIndex: Math.max(rotateIndex - 1, 0),
                        touchStartTime: 0,
                      })
                    }
                    if (touchEndPositionX - touchStartPositionX < -50) {
                      this.setState({
                        rotateIndex: Math.min(rotateIndex + 1, memberList.length - 1),
                        touchStartTime: 0,
                      })
                    }
                  }
                }}
              >
                {
                  memberList.map((el, index) => (
                    <Card
                      el={el}
                      rotateIndex={rotateIndex}
                      getCommonValue={getCommonValue}
                      key={index}
                      index={index}
                    />
                  ))
                }
              </div>
            )
            : (
              <div className="flex flexWrap">
                {
                  memberList.map((el, i) => (
                    <div className="columnFlex flexNone hoverBigger" style={{ width: 255, margin: '40px 12px' }} key={i}>
                      <img src={el.photo} height={160} width={160} alt="memberPhoto" />
                      <div
                        style={{
                          marginTop: 36,
                          fontFamily: 'PingFangSC-Medium',
                          fontSize: getCommonValue('fontSize', 24),
                        }}
                      >
                        {el.name}
                      </div>
                      <div style={{
                        marginBottom: 10,
                        fontSize: 16
                      }}>{el.title}</div>
                      <div
                        className="fs16"
                        style={{
                          fontFamily: 'PingFangSC-Regular',
                          lineHeight: `${getCommonValue('lineHeight', 20)}px`,
                          opacity: 0.6,
                        }}
                      >
                        {el.descr}
                      </div>
                    </div>
                  ))
                }
              </div>
            )
        }
      </Element>
    )
  }
}

const Card = ({ el, getCommonValue, index, rotateIndex }) => (
  <div
    className="columnFlex flexNone memberCare"
    style={{
      width: 255,
      margin: '40px 12px',
      position: 'absolute',
      left: (275 * (index - rotateIndex)) + 30,
    }}
  >
    <img src={el.photo} height={160} width={160} alt="memberPhoto" />
    <div
      style={{
        marginTop: 36,
        marginBottom: 10,
        fontFamily: 'PingFangSC-Medium',
        fontSize: getCommonValue('fontSize', 24),
      }}
    >
      {el.name}
    </div>
    <div>{el.title}</div>
    <div
      className="fs14"
      style={{
        fontFamily: 'PingFangSC-Regular',
        lineHeight: `${getCommonValue('lineHeight', 20)}px`,
        opacity: 0.6,
      }}
    >
      {el.descr}
    </div>
  </div>
)
