import React, {useEffect} from 'react';
import MyButton from "../MyButton/MyButton";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {useNavigate} from "react-router-dom";
import style from './..//common/FormsControls/FormControls.module.css'


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    let navigate = useNavigate()
    useEffect(() => {
        if (props.isAuth === true) {
            return navigate("../profile")
        }
    }, [props.isAuth])
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} component={Input} name={'email'} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} component={Input} name={'password'} validate={[required]}
                           type={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <MyButton name={'Login'}/>
                </div>
            </form>
        </div>
    );
};


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);