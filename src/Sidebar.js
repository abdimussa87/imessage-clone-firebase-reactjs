import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';
import { auth } from './firebase'
import db from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
function Sidebar() {
    const user = useSelector(selectuser);

    const [chats, setChats] = useState([]);

    const handleAddNewChat = (e) => {
        const chatName = prompt('Enter the new chat name you want to create');
        if (chatName) {
            db.collection('chats').add({
                name: chatName
            });
        }
    }

    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => ({ id: doc.id, chat: doc.data() })));
        })
    }, []);
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src={user.photo} onClick={() => auth.signOut()} className='sidebar__headerAvatar' />
                <div className="sidebar__headerSearch">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
                <IconButton onClick={handleAddNewChat}>
                    <RateReviewOutlinedIcon className='sidebar__headerAddChat' />
                </IconButton>
            </div>

            <div className="sidebar__chats">

                {chats.map(({ id, chat }) => <SidebarChat key={id} id={id} chatName={chat?.name} />)}

            </div>
        </div>
    )
}

export default Sidebar
