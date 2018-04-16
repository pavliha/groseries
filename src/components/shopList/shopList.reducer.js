import { ADD_ITEM, CLEAR_ITEM, CLEAR_ITEMS, DECREASE_ITEM_AMOUNT, INCREASE_ITEM_AMOUNT } from "./shopList.action"
import { del } from 'immutable-arrays'

const initialState = {
  items: [
    { name: "Cucumbers", amount: 2, date: new Date() },
    { name: "Salat", amount: 1, date: new Date() },
    { name: "Fish", amount: 1, date: new Date() },
    { name: "Pork", amount: 1, date: new Date() },
    { name: "Beef", amount: 1, date: new Date() },
  ]
  ,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case CLEAR_ITEMS:
      return { ...state, items: [] }

    case CLEAR_ITEM: {
      return {
        ...state,
        items: del(state.items, findItem(state.items, payload.item))
      }
    }
    case ADD_ITEM: {
      let items = [ ...state.items ]
      const index = findItem(items, payload.item)
      if (index !== -1) items[ index ].amount++
      else items.push(payload.item)

      return { ...state, items }
    }

    case INCREASE_ITEM_AMOUNT: {
      const items = [ ...state.items ]
      items[ findItem(items, payload.item) ].amount++

      return { ...state, items }
    }

    case DECREASE_ITEM_AMOUNT: {
      let items = [ ...state.items ]
      const index = findItem(items, payload.item)
      items[ index ].amount--
      if (payload.item.amount <= 0)
        items = del(items, index)

      return { ...state, items }
    }

    default: {
      return state;
    }
  }
}

const findItem = (array, item) => array.findIndex((element) => element.name === item.name)


