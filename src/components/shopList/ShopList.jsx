import React from "react";
import PropTypes from 'prop-types'
import { Button, Card } from 'antd'
import ShopListItem from './ShopListItem'
import { connect } from 'react-redux'
import { addItem, clearItems, clearItem, decreaseItemAmount, increaseItemAmount } from './shopList.action'
import ShopListInput from './ShopListInput'
import { addItems } from '../fridge/fridge.action'
import PurchaseAllButton from './PurchaseAllButton'

const ShopList = ({
  items,
  decreaseItemAmount,
  increaseItemAmount,
  addItem,
  allToFridge,
  itemToFridge
}) =>
  <Card
    title={<div>Shop List</div>}
    extra={<PurchaseAllButton number={2} onPurchase={(numberOfFridge) => allToFridge(numberOfFridge, items)}/>}>
    <div>
      {items.map((item, key) =>
        <ShopListItem
          key={key}
          name={item.name}
          amount={item.amount}
          date={item.date}
          onIncrease={() => increaseItemAmount(item)}
          onPurchase={(numberOfFridge) => itemToFridge(numberOfFridge, item)}
          onDecrease={() => decreaseItemAmount(item)}/>
      )}
    </div>

    <ShopListInput onChange={addItem}/>
  </Card>

ShopList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ShopListItem.propTypes)).isRequired,
}

const mapStateToProps = store => ({
  items: store.shopListReducer.items,

})

const mapDispatchToProps = dispatch => ({

  decreaseItemAmount: (item) => {
    dispatch(decreaseItemAmount(item))
  },

  increaseItemAmount: (item) => {
    dispatch(increaseItemAmount(item))
  },

  addItem: (value) => {
    dispatch(addItem(value))
  },

  allToFridge: (numberOfFridges, items) => {
    dispatch(addItems(numberOfFridges, items))
    dispatch(clearItems())
  },

  itemToFridge: (numberOfFridge, item) => {
    dispatch(addItems(numberOfFridge, [ item ]))
    dispatch(clearItem(item))

  }

})

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)
