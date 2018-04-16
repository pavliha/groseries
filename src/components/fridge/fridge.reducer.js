import { ADD_ITEM, ADD_ITEMS, DECREASE_ITEM_AMOUNT, INCREASE_ITEM_AMOUNT } from "./fridge.action"

const initialState = {
  fridges: [
    [
      { name: "Cucumbers", amount: 2, date: new Date() },
      { name: "Salat", amount: 1, date: new Date() },
      { name: "Fish", amount: 1, date: new Date() },
      { name: "Pork", amount: 1, date: new Date() },
      { name: "Beef", amount: 1, date: new Date() },
    ],
    [
      { name: "LSD", amount: 2, date: new Date() },
      { name: "Parrot", amount: 1, date: new Date() },
      { name: "Tomato", amount: 1, date: new Date() },
    ]
  ]
}

export default (state = initialState, { type, payload }) => {

  switch (type) {

    case ADD_ITEMS: {
      let fridges = [ ...state.fridges ]
      const fridgeItems = fridges[ payload.number ]

      for (const item of payload.items) {
        const index = findItem(fridgeItems, item)
        if (index !== -1) fridgeItems[ index ].amount += item.amount
        else fridgeItems.push(item)
      }

      return { ...state, fridges }

    }

    case ADD_ITEM: {
      let fridges = [ ...state.fridges ]
      const fridgeItems = fridges[ payload.number ]

      const index = findItem(fridgeItems, payload.item)
      if (index !== -1) fridgeItems[ index ].amount++
      else fridgeItems.push(payload.item)

      return { ...state, fridges }
    }

    case INCREASE_ITEM_AMOUNT: {
      const fridges = [ ...state.fridges ]

      const fridgeItems = fridges[ payload.number ]
      const index = findItem(fridgeItems, payload.item)
      fridgeItems[ index ].amount++

      return { ...state, fridges }
    }

    case DECREASE_ITEM_AMOUNT: {
      const fridges = [ ...state.fridges ]

      let fridgeItems = fridges[ payload.number ]
      const index = findItem(fridgeItems, payload.item)
      fridgeItems[ index ].amount--

      if (payload.item.amount <= 0) {
        fridgeItems.remove(index)
      }
      return { ...state, fridges }
    }

    default: {
      return state;
    }
  }
}

const findItem = (array, item) => array.findIndex((element) => element.name === item.name)
