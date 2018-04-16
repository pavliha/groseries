import React, { Component } from 'react'
import { Col, Row } from 'antd'
import Fridge from '../components/fridge/Fridge'
import ShopList from '../components/shopList/ShopList'

class HomeScene extends Component {

  render() {
    return <Row>
      <Col xs={24} md={12} lg={6}>
        <div className='p-3'>
          <Fridge number={0}/>
        </div>

      </Col>
      <Col xs={24} md={12} lg={6}>
        <div className='p-3'>
          <Fridge number={1}/>
        </div>

      </Col>
      <Col xs={24} md={12} lg={6}>
        <div className='p-3'>
          <ShopList/>
        </div>

      </Col>
    </Row>
  }

}

export default HomeScene
