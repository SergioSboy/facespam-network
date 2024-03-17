import React, {useEffect, useState} from 'react';
import MyInput from "../../MyInput/MyInput";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    const activateMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    };
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>  {status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <MyInput autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;