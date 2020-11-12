import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className="sidebarChat__info">
                <h4>Chat Name</h4>
                <p>Whats up here</p>
                <small>Timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat
