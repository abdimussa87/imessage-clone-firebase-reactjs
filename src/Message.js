import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'
function Message() {
    return (
        <div className='message '>
            <Avatar />
            <div className="message__content">
                <p>This is the message content</p>
            </div>
            <p>timestamp</p>
        </div>
    )
}

export default Message
