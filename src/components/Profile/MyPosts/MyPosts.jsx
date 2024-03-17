import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import MyButton from "../../MyButton/MyButton";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

const AddNewPostForm = (props) => {
    return (
        <form className={classes.play} onSubmit={props.handleSubmit}>
            <div className={classes.my_inp}>
                <Field component={Textarea} placeholder='Create...' name='newPostText'
                       validate={[required, maxLengthCreator(10)]}/>
            </div>

            <div className={classes.my_btn}>
                <MyButton name={'Send'}/>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'newPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {

    let postsElements = props.profilePage.postsData.map(el => <Post message={el.message} key={el.id} id={el.id}
                                                                    img={el.img}/>)
    let onAddPost = (value) => {
        props.addNewPost(value.newPostText)

    }

    return (
        <div className='item'>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>
                {postsElements}
            </div>

        </div>
    )
});


export default MyPosts;