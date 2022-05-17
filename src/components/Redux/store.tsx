import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

const initialState = { 
    user: {},
    loggedInUser: ''
}

const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'LoggedIn':
            return {user: state.username}

        case 'LoggedOut':
            return{user: {}}
    
        default:
            return initialState;
    }
}

const store = configureStore({reducer: reducer});

export default store;