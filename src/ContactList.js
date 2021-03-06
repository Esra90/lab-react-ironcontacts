import React from 'react';



const ContactList=  props => {
    // const { pictureUrl, name, popularity, id } = contacts;
    return (
        <tr>
            <td><img src={props.pictureUrl} alt={props.name} height="140px"/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick={props.clickToDelete}>Delete</button></td>

        </tr>
    )
}

export default ContactList;
