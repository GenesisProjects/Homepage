import React from 'react'
import { Element } from 'rc-scroll-anim'

export default function Index5(props) {
  const { getCommonValue, isMobile } = props
  const { clientWidth } = document.body
  const newsList = [
    {
      img: '',
      title: 'title',
      desc: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation ',
      link: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation ',
    },
    {
      img: '',
      title: 'title',
      desc: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation ',
      link: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation ',
    },
  ]
  return (
    <Element
      id="index5"
      targetId="root"
      className="allWidth"
      style={{
        height: 576,
        background: '#f4f4f8',
        color: '#3A4E7F',
        padding: '0 20px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '74px auto 40px auto',
          fontFamily: 'Avenir-Black',
          fontSize: getCommonValue('fontSize', 64),
          textAlign: isMobile ? 'center' : '',
        }}
      >
        News
      </div>
      {
        newsList.map(el => (
          <div
            className="allWidth flex flexWrap"
            style={{ margin: '30px auto 0', maxWidth: 1200 }}
          >
            <div
              className="textCenter"
              style={{
                width: isMobile ? clientWidth * 0.3 : 200,
                height: isMobile ? clientWidth * 0.18 : 120,
                background: '#aab2c7',
              }}
            >
              img
            </div>
            <div className="flex1" style={{ marginLeft: 30 }}>
              <div
                style={{
                  fontFamily: 'PingFangSC-Medium',
                  fontSize: getCommonValue('fontSize', 24),
                }}
              >
                {el.title}
              </div>
              <div
                className="marginTop10"
                style={{
                  opacity: 0.7,
                  fontSize: getCommonValue('fontSize', 16),
                }}
              >
                {
                  isMobile
                    ? `${el.desc.substr(0, 50)}...`
                    : el.desc
                }
              </div>
              <div
                className="pointer"
                style={{
                  opacity: 0.4,
                  fontSize: getCommonValue('fontSize', 16),
                  marginTop: 20,
                }}
              >
                Read More
              </div>
            </div>
          </div>
        ))
      }
      <div className="pointer fs16" style={{ maxWidth: 1200, margin: '30px auto' }} >
        <div style={{ marginLeft: isMobile ? 0 : 230, textAlign: isMobile ? 'center' : '' }}>
          all news
        </div>
      </div>
    </Element>
  )
}
