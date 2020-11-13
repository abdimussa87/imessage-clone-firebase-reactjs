import React, { useState } from 'react'
import './Chat.css'
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { IconButton } from '@material-ui/core';
import Message from './Message';
import { useEffect } from 'react';
import db from './firebase';
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from './features/chatSlice';
import { selectuser } from './features/userSlice';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const chatId = useSelector(selectChatId);
    const chatName = useSelector(selectChatName);
    const user = useSelector(selectuser);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (chatId && message.trim().length > 0) {
            db.collection('chats').doc(chatId).collection('messages').add({
                username: user.username,
                uid: user.uid,
                photoUrl: user.photo,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                content: message.trim()
            })
            setMessage('');
        }
    }

    useEffect(() => {
        if (chatId) {
            db.collection('chats').doc(chatId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
            })
        }
    }, [chatId])


    return (
        <div className='chat'>
            <div className="chat__header">
                <p>To: <span>{chatName}</span>  </p>
                <strong>Details</strong>
            </div>
            <div className="chat__messages">
                <FlipMove>
                    {messages.map(({ id, message }) => <Message key={id} uid={message.uid} username={message.username} photoUrl={message.photoUrl} timestamp={message.timestamp} content={message.content} />)}
                </FlipMove>
            </div>
            <div className="chat__input">
                <form >
                    <input type="text" disabled={chatId ? false : true} placeholder={chatId ? 'iMessage' : 'Select chat to send message'}
                        value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type='submit' onClick={handleSendMessage}>SendMessage</button>
                </form>
                <IconButton >
                    <MicNoneOutlinedIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Chat
