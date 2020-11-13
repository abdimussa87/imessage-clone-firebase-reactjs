import { Avatar } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChatInfo } from './features/chatSlice';
import db from './firebase';
import './SidebarChat.css'
import Moment from 'react-moment'
function SidebarChat({ id, chatName }) {
    const dispatch = useDispatch();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
        })
    }, [id]);
    return (
        <div className='sidebarChat' onClick={() => dispatch(setChatInfo({ chatName: chatName, chatId: id }))}>
            <Avatar src={messages[0]?.photoUrl} />
            <div className="sidebarChat__info">
                <h4>{chatName}</h4>
                <p>{messages[0]?.content}</p>
                <small>
                    {messages[0]?.timestamp != null ? <Moment interval={1000} fromNow>

                        {new Date(messages[0]?.timestamp?.toDate())}
                    </Moment> : '...'}

                </small>
            </div>
        </div>
    )
}

export default SidebarChat
