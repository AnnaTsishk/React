import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path ="/dialogs/*" + props.id;
    return (<div className= {s.dialog + " " + s.active}><NavLink to={path}>{props.name}</NavLink></div>);
}
const Message = (props) =>{
    return (<div className={s.message}>{props.message}</div>);
}

const Dialogs = (props) =>{
    return (<div className= {s.dialogs}>
         <div className= {s.dialogsItem}>
             <DialogItem name = "Dasha" id = "1"/>
             <DialogItem name = "Slava" id = "2"/>
             <DialogItem name = "Anna" id = "3"/>
             <DialogItem name = "Sasha" id = "4"/>
             <DialogItem name = "Sema" id = "5"/>
        </div>
         <div className = {s.messages}>
             <Message message ="Hello"/>
             <Message message ="Yo"/>
             <Message message ="Good morning"/>
             <Message message ="Yo"/>
             <Message message ="Yo"/>
         </div>
        </div>
)
}
export default Dialogs;