import React from "react";
import { Input } from 'antd'
import PropTypes from 'prop-types'

class ShopListInput extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.updateValue = this.updateValue.bind(this)
    this.send = this.send.bind(this)
  }

  render() {
    const { value } = this.state
    return (
      <div className='d-flex mt-4'>
        <Input placeholder='Example: Pork, Beef, Tomato'
               value={value}
               onChange={this.updateValue}
               onPressEnter={this.send}/>
      </div>
    )
  }

  updateValue({ target: { value } }) {
    this.setState({ value })
  }

  send({ target: { value } }) {
    if (value !== '') {
      this.props.onChange(value)
    }
    this.setState({ value: '' })
  }

}

ShopListInput.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default ShopListInput
