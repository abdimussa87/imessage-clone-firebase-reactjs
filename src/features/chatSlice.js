import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatName: null,
        chatId: null
    },
    reducers: {

        setChatInfo: (state, action) => {
            state.chatName = action.payload.chatName;
            state.chatId = action.payload.chatId;
        },

    },
});

export const { setChatInfo } = chatSlice.actions;


export const selectChatName = state => state.chat.chatName;
export const selectChatId = state => state.chat.chatId;


export default chatSlice.reducer;
