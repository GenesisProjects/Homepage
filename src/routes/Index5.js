import React from 'react'
import { Element } from 'rc-scroll-anim'

export default function Index5(props) {
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
      className="allWidth"
      style={{
        height: 576,
        background: '#f4f4f8',
        color: '#3A4E7F',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '74px auto 40px auto',
          fontFamily: 'Avenir-Black',
          fontSize: 64,
        }}
      >
        News
      </div>
      {
        newsList.map(el => (
          <div className="flex" style={{ margin: '30px auto 0', maxWidth: 1200 }}>
            <div className="textCenter" style={{ width: 200, height: 120, background: '#aab2c7' }}>
              img
            </div>
            <div className="flex1" style={{ marginLeft: 30 }}>
              <div
                style={{
                  fontFamily: 'PingFangSC-Medium',
                  fontSize: 24,
                }}
              >
                {el.title}
              </div>
              <div
                className="marginTop10 fs16"
                style={{
                  opacity: 0.7,
                }}
              >
                {el.desc}
              </div>
              <div
                className="pointer"
                style={{
                  opacity: 0.4,
                  fontSize: 16,
                  marginTop: 20,
                }}
              >
                Read More
              </div>
            </div>
          </div>
        ))
      }
      <div className="pointer fs14" style={{ maxWidth: 1200, margin: '30px auto' }} >
        <div style={{ marginLeft: 230 }}>
          all news
        </div>
      </div>
    </Element>
  )
}
