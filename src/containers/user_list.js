import React from 'react'
import {connect} from 'react-redux'
import {selectUser} from '../actions/index'
import {bindActionCreators} from 'redux'

const UserList = (props) =>

{
   const {myUsers,selectUser} = props
    return <div>
        <ul className="col-md-4">
    {myUsers.map((user)=>{
        return(
            <li className="list-group-item" key={user.id} onClick={()=>props.selectUser(user)}>
                {user.name}
            </li>
        )
    })}
        </ul>
    </div>
}

function mapStateToProps(state) {
    return{
        myUsers :state.users
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectUser:selectUser},dispatch)
 
 
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList)
