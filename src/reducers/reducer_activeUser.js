import {USER_SELECTED} from '../actions/index'

const ActiveUserReducer= (state=null, action)=>{
    switch(action.type){
        case USER_SELECTED :
            return action.payload
        default:
            return state
            
    }
    
}

export default ActiveUserReducer