import React from 'react'
import { Element } from 'rc-scroll-anim'
import photo01 from '../assets/01.png'
import photo02 from '../assets/02.png'
import photo03 from '../assets/03.png'
import photo04 from '../assets/04.png'
import photo05 from '../assets/05.png'
import photo06 from '../assets/06.png'
import photo07 from '../assets/07.png'

export default function Index4(props) {
  const memberList = [
    {
      photo: photo01,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitution',
    },
    {
      photo: photo02,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation ',
    },
    {
      photo: photo03,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation ',
    },
    {
      photo: photo04,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution ',
    },
    {
      photo: photo05,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution ',
    },
    {
      photo: photo06,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution ',
    },
    {
      photo: photo07,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution ',
    },
    {
      photo: photo05,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution ',
    },
    {
      photo: photo06,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution ',
    },
    {
      photo: photo07,
      name: 'Yudong Li',
      descr: 'Genesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution arrange for the 2nd upgrade of constitutionGenesis Foundation arrange for the 2nd upgrade of constitution ',
    },
  ]
  return (
    <Element
      id="index4"
      className="allWidth"
      style={{
        maxWidth: 1200,
        height: 2000,
        paddingTop: 165,
        color: '#3A4E7F',
      }}
    >
      <div className="flex">
        <div
          style={{
            fontFamily: 'Avenir-Heavy',
            fontSize: 64,
            lineHeight: '84px',
            width: 360,
            marginBottom: 100,
          }}
        >
          Meet with Our Team
        </div>
        <div
          style={{
            marginLeft: 240,
            fontSize: 20,
            lineHeight: '40px',
            fontFamily: 'PingFangSC-Regular',
            width: 520,
          }}
        >
        Genesis is a DAO (decentralized autonomous organization) based on blockchain. In Genesis, users (nodes) vote to update community rules and blockchain protocols. Genesis has multiple side chains providing functions like file storage and dapp store.time
        </div>
      </div>
      <div className="flex flexWrap">
        {
          memberList.map(el => (
            <div className="columnFlex flexNone hoverBigger" style={{ width: 275, margin: '40px 12px' }}>
              <img src={el.photo} height={160} width={160} alt="memberPhoto" />
              <div
                style={{
                  marginTop: 36,
                  marginBottom: 10,
                  fontFamily: 'PingFangSC-Medium',
                  fontSize: 24,
                }}
              >
                {el.name}
              </div>
              <div
                className="fs14"
                style={{
                  fontFamily: 'PingFangSC-Regular',
                  lineHeight: '20px',
                  opacity: 0.6,
                }}
              >
                {el.descr}
              </div>
            </div>
          ))
        }
      </div>
    </Element>
  )
}
