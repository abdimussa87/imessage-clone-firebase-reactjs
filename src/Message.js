import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { forwardRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';
import './Message.css'
const Message = forwardRef(({ username, uid, photoUrl, timestamp, content }, ref) => {
    const [sender, setSender] = useState(false);
    const user = useSelector(selectuser);
    useEffect(() => {
        if (user.uid === uid) {
            setSender(true);
        } else {
            setSender(false);
        }
    }, [user.uid, uid]);
    return (
        <div ref={ref} className={`message ${sender && "message__sender"}`}>
            <Avatar src={photoUrl} className='message__photo' />
            <div className="message__content">
                <p>{content}</p>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
        </div>
    )
});

export default Message
