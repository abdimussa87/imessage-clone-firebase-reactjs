import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar className='sidebar__headerAvatar' />
                <div className="sidebar__headerSearch">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
                <IconButton className='sidebar__headerAddChat'>
                    <RateReviewOutlinedIcon />
                </IconButton>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />


            </div>
        </div>
    )
}

export default Sidebar
