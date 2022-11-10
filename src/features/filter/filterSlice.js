const initialState = {
    filters: {
      status: 'All',
      colors: []
    }
  }

  export default function todoReducer(state = initialState, action) {
    switch (action.type){
        case 'filters/statusFilterChanged': {
          return {
            ...state,
            filters: {
              ...state.filters,
              status: action.payload
            }
          }
        }
        default:
        
        return state;
    }
  }