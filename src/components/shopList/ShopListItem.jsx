import React from "react";
import PropTypes from 'prop-types'
import moment from 'moment'
import PurchaseButton from './PurchaseButton'

class ShopListItem extends React.PureComponent {

  render() {
    const { number, amount, name, date, onIncrease, onDecrease, onPurchase } = this.props

    return (
      <div className='d-flex py-2 justify-content-between'>

        <div className='d-flex'>

          <div className='px-3'>
            <div><i className="fa fa-plus-circle text-primary" onClick={onIncrease}/></div>
            <div><i className="fa fa-minus-circle text-primary" onClick={onDecrease}/></div>
          </div>
          <div>
            <div>{amount > 1 ? `(${amount}x)` : null} {name}</div>
            <small>{moment(date).fromNow()}</small>
          </div>

        </div>

        <div className='d-flex align-items-center justify-content-center px-3'>
          <PurchaseButton number={2} onPurchase={onPurchase}/>
        </div>

      </div>
    )

  }
}

ShopListItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  onPurchase: PropTypes.func,
}

export default ShopListItem
