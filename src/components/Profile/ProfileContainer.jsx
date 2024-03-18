import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
import withRouter from "./WithRouter";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     isOwner={!this.props.router.params.userId}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />

        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,

});


export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto})(withRouter(ProfileContainer));