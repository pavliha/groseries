export const ADD_ITEMS = '@fridge/ADD_ITEMS'
export const ADD_ITEM = '@fridge/ADD_ITEM'
export const INCREASE_ITEM_AMOUNT = '@fridge/INCREASE_ITEM_AMOUNT'
export const DECREASE_ITEM_AMOUNT = '@fridge/DECREASE_ITEM_AMOUNT'

export const addItems = (number, items) => ({
  type: ADD_ITEMS,
  payload: {
    number,
    items
  }
})

export const addItem = (number, name) => ({
  type: ADD_ITEM,
  payload: {
    number,
    item: { name, amount: 1, date: new Date() }
  }
})

export const increaseItemAmount = (number, item) => ({
  type: INCREASE_ITEM_AMOUNT,
  payload: {
    number,
    item,
  }
})

export const decreaseItemAmount = (number, item) => ({
  type: DECREASE_ITEM_AMOUNT,
  payload: {
    number,
    item,
  }
})
