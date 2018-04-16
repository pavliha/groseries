import React from "react";
import PropTypes from 'prop-types'
import { Card } from 'antd'
import FridgeItem from './FridgeItem'
import { connect } from 'react-redux'
import { addItem, decreaseItemAmount, increaseItemAmount } from './fridge.action'
import FridgeInput from './FridgeInput'

const Fridge = ({ number, fridges, decreaseItemAmount, increaseItemAmount, addItem }) =>
  <Card style={{maxWidth:400}} title={"Fridge #" + (parseInt(number) + 1)}>
    <div>
      {fridges[ number ].map((item, key) =>
        <FridgeItem
          key={key}
          name={item.name}
          amount={item.amount}
          date={item.date}
          onIncrease={() => increaseItemAmount(number, item)}
          onDecrease={() => decreaseItemAmount(number, item)}/>
      )}
    </div>
    <FridgeInput onChange={(value) => addItem(number, value)}/>
  </Card>

Fridge.propTypes = {
  number: PropTypes.number.isRequired,
  fridges: PropTypes.array.isRequired,
  decreaseItemAmount: PropTypes.func.isRequired,
  increaseItemAmount: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({

  decreaseItemAmount: (number, item) => {
    dispatch(decreaseItemAmount(number, item))
  },

  increaseItemAmount: (number, item) => {
    dispatch(increaseItemAmount(number, item))
  },

  addItem: (number, value) => {
    dispatch(addItem(number, value))
  }
})

export default connect((store) => store.fridgeReducer, mapDispatchToProps)(Fridge)
