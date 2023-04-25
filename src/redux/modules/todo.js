    const ADD_LIST = 'ADD_LIST'
    const DONE_LIST = 'DONE_LIST'
    const DELITE_LIST = 'DELITE_LIST'
    const FIND_ID = 'FIND_ID'
  

  export const addList = (payload) =>({
    type: ADD_LIST,
    payload,
  })

  export const doneList = (payload) =>({
    type: DONE_LIST,
    payload,
  })

  export const delList = (payload) =>({
    type : DELITE_LIST,
    payload,
  })

  export const findId = (payload) => ({
    type : FIND_ID,
    payload
  })
  
  
  
  const initialState = {
      List : [{
            id : '0',
            title : '리액트',
            comment : '리액트를 배워봅시다',
            isdone : false
        }
    ],
    newList:{
      id : '0',
      title : '',
      comment : '',
      isdone : false
    }
}




const todo = (state = initialState , action) => {
    switch (action.type){
        case ADD_LIST:
            return{
                ...state,
                List:[...state.List,action.payload]
            }
        case DONE_LIST:
            return {
                ...state,
                List: state.List.map((List) => {
                    if (List.id === action.payload) {
                      return {
                        ...List,
                        isdone: !List.isdone,
                    };
                    } else {
                    return List;
                    }
                  }),
                };
        case DELITE_LIST:
          return {
            ...state,
            List : state.List.filter((List) => List.id !== action.payload)
          }

        case FIND_ID:
          return {
            ...state,
            newList : state.List.find((newList) => {
              return newList.id === action.payload
            })
          }
        default:
            return state
    }
}

export default todo