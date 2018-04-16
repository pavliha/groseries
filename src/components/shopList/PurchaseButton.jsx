import React from "react"
import PropTypes from 'prop-types'

class PurchaseButton extends React.Component {

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
      elements.push(<a href="javascript:void(0)" className='pl-2' onClick={() => this.purchase(i)}>Fridge #{i}</a>)
    }
    return (
      <div>
        {step ? <i className='fa fa-money fa-2x text-primary' onClick={() => this.setState({ step: false })}/> :
          <div>
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

PurchaseButton.propTypes = {
  number: PropTypes.number.isRequired,
  onPurchase: PropTypes.func.isRequired,
}

export default PurchaseButton
