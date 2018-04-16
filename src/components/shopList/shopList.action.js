export const ADD_ITEM = '@shopList/ADD_ITEM'
export const INCREASE_ITEM_AMOUNT = '@shopList/INCREASE_ITEM_AMOUNT'
export const DECREASE_ITEM_AMOUNT = '@shopList/DECREASE_ITEM_AMOUNT'
export const CLEAR_ITEMS = '@shopList/CLEAR_ITEMS'
export const CLEAR_ITEM = '@shopList/CLEAR_ITEM'

export const addItem = (name) => ({
  type: ADD_ITEM,
  payload: {
    item: { name, amount: 1, date: new Date() }
  }
})
export const clearItem = (item) => ({
  type: CLEAR_ITEM,
  payload: { item }
})

export const clearItems = () => ({
  type: CLEAR_ITEMS
})

export const increaseItemAmount = (item) => ({
  type: INCREASE_ITEM_AMOUNT,
  payload: {
    item,
  }
})

export const decreaseItemAmount = (item) => ({
  type: DECREASE_ITEM_AMOUNT,
  payload: {
    item,
  }
})
