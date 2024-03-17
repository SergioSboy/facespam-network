import React, {Component, Suspense} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import withRouter from "./components/Profile/WithRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            return  <Preloader/>
        }
        return (

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navigation/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs/*' element={
                                <Suspense fallback={<div><Preloader/></div>}>
                                    <DialogsContainer/>
                                </Suspense>
                            }/>
                            <Route path="/profile/:userId?" element={
                                <Suspense fallback={<div><Preloader/></div>}>
                                    <ProfileContainer/>
                                </Suspense>
                            }/>


                            <Route path="/users/*"
                                   element={
                                       <UsersContainer/>
                                   }
                            />
                            <Route path="/login/*"
                                   element={
                                       <Login/>
                                   }
                            />
                        </Routes>
                    </div>
                </div>

        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
