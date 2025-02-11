import { createSlice } from "@reduxjs/toolkit";

export const mailersSlice = createSlice({
    name: 'mailers',
    initialState: {
        value: [
            { 'id': 1, 'domain': 'ya.ru', 'mailbox_count': 5, 'limit': 1024, 'used': 124 },
            { 'id': 2, 'domain': 'google.com', 'mailbox_count': 17, 'limit': 4096, 'used': 782 }
        ],
    },
    reducers: {
        create: (state, action) => {
            state.value.push({
                'id': state.value[state.value.length - 1].id + 1,
                'domain': action.payload,
                'mailbox_count': 0,
                'limit': 0,
                'used': 0
            });
        },
        updateLimit: (state, action) => {
            state.value = state.value.map(item => {
                if (item['id'] === action.payload[1]) {
                    item.limit = action.payload[0];
                    return item;
                }
                else return item;
            });
        },
        remove: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        }
    }
})

export const { create, updateLimit, remove } = mailersSlice.actions;

export default mailersSlice.reducer;