export const initialState = { 
    basket: [], 
}

export const getBasketTotal = (basket) => 
basket?.reduce((amount, Item) => (Item.price * Item.quantity) + amount, 0);

export const getQuantity = (basket) => 
basket?.reduce((amount, Item) => Item.quantity + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return { 
            ...state,
            basket: [...state.basket, action.payload] 
        };
      case 'REMOVE_FROM_BASKET':
        let newBasket =  [...state.basket];
        const index = state.basket.findIndex(basketItem => basketItem.id === action.id)
        console.log(index);
        console.log(action.name);
        if (index >= 0) {
            // item exists in basket, remove it ...
            newBasket.splice(index, 1);
            
        } else {
            console.warn(
                `Can't remove product of id ${action.name} as it is not in the basket` 
            );
        }

        return { 
            ...state, 
            basket: newBasket,
        };
      default:
        return state;
    }
  }
  export default reducer;