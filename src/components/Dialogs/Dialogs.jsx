import classes from './Dialogs.module.css'
import {useNavigate} from 'react-router-dom'
import React, {useEffect} from 'react';
import MyButton from "../MyButton/MyButton";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessageBody)
    }

    let dialogsElements = props.dialogsPage.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(el => <Message key={el.id} mes={el.message}/>);


    let navigate = useNavigate()
    useEffect(() => {
        if (props.isAuth === false) {
            return navigate("../login")
        }
    }, [props.isAuth])


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div>
                    {dialogsElements}
                </div>
            </div>
            <div className={classes.create_line}></div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={onSubmit}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className={classes.play} onSubmit={props.handleSubmit}>
            <div className={classes.my_input}>
                <Field component={Textarea}
                       validate={[required, maxLengthCreator(50)]}
                       name='newMessageBody' placeholder='Write...'/>
            </div>
            <div>

                <MyButton name={'Send'}/>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
export default Dialogs