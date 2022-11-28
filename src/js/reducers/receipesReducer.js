import { GETALLRECEIPSSUCCESS, GETONERECEIPSFAILED, GETONERECEIPSSUCCESS, LOADING } from "../const/receipesTypes"
import { GETALLRECEIPSFAILED } from './../const/receipesTypes';

const initialState = {
    loading:true,
    list:[],
    error:null,
    rDetails:{}
}

export const receipesReducer= (state = initialState, { type, payload }) => {
  switch (type) {
  case LOADING:
    return {...state,loading:true}
    case GETALLRECEIPSSUCCESS:
        return{
           ...state, loading:false,list:payload
        }
        case GETONERECEIPSSUCCESS:
            return{
               ...state, loading:false,rDetails:payload
            }
   case GETALLRECEIPSFAILED:
    case GETONERECEIPSFAILED:
    return{
        ...state, loading:false,error:payload
     }
  default:
    return state
  }
}
