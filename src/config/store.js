import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from  '../features/cart/reducer';

const rootReducer = combineReducers({
    cart : cartReducer
});

const initialState = {
    
};

const middleware =[thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;