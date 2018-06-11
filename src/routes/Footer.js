import React from 'react'
import logo from '../assets/logo.png'
import { Icon } from 'antd'

export default function Footer(props) {
  return (
    <div
      style={{
        background: '#3A4E7F',
        width: '100%',
        height: 200,
      }}
    >
      <div
        className="allWidth allHeight flex alignCenter justifyBetween whiteColor"
        style={{ maxWidth: 1200, margin: '0 auto' }}
      >
        <div className="whiteColor">© 2018 Genesis Space-All Right Reserved</div>
        <img src={logo} width={238} logo={78} alt="logo"/>
        <div className="width200 flex justifyBetween">
          <Icon type="facebook" />
          <Icon type="twitter" />
          <Icon type="ant-design" />
          <Icon type="medium" />
          <Icon type="chrome" />
        </div>
      </div>
    </div>
  )
}
