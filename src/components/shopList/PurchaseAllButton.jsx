import React from "react"
import PropTypes from 'prop-types'
import { Button } from 'antd'

class PurchaseAllButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      step: true,
    }

    this.purchase = this.purchase.bind(this)
  }

  render() {
    const { number } = this.props
    const { step } = this.state
    const elements = []

    for (let i = 1; i <= number; i++) {
      elements.push(<a href="javascript:void(0)" key={i} className='pl-2' onClick={() => this.purchase(i)}>Fridge
        #{i}</a>)
    }
    return (
      <div>

        {step ?
          <Button className='btn-block' onClick={() => this.setState({ step: false })}>
            <i className='fa fa-money'/> purchase all
          </Button>
          :
          <div className='mt-1 mr-2'>
            {elements}
          </div>}
      </div>
    )

  }

  purchase(i) {
    this.props.onPurchase(i - 1)
    this.setState({ step: true })
  }
}

PurchaseAllButton.propTypes = {
  number: PropTypes.number.isRequired,
  onPurchase: PropTypes.func.isRequired,
}

export default PurchaseAllButton
