import React from 'react'
import './Chat.css'
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { IconButton } from '@material-ui/core';
import Message from './Message';
function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <p>To: <span>Youtube</span>  </p>
                <strong>Details</strong>
            </div>
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat__input">
                <form >
                    <input type="text" placeholder='iMessage' />
                    <button type='submit'>SendMessage</button>
                </form>
                <IconButton >
                    <MicNoneOutlinedIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Chat
