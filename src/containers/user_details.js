import React from 'react'
import {connect} from 'react-redux'

const UserDetails = ({myActiveUser}) => {

    if(!myActiveUser){
        return <div>Sélectionnez un utilisateur pour démarrer </div>
    }
    return (
        <div>
            <h3>Détail de {myActiveUser.name}</h3>
            <ul>
                <li>Id: {myActiveUser.id}</li>
                <li>Role: {myActiveUser.role}</li>
                <li>Active: {myActiveUser.active}</li>
            </ul>

        </div>
    )
}
function mapStateToProps(state){
    return {
        myActiveUser: state.activeUser
    }
}
const mapDispatchToProps = {}
export default connect(mapStateToProps,mapDispatchToProps)(UserDetails)