// import { compose, createStore, applyMiddleware } from 'redux';
// import { autoRehydrate, persistStore } from 'redux-persist';
//
// import exchangeRates from '../reducers/dataReducer';
//
// let store = compose(
//   autoRehydrate()
// )(createStore)(exchangeRates);
//
// persistStore(store);
//
// export default store;

// const middleware = applyMiddleware(promise(), thunk, logger());
// const store = createStore(reducer, middleware);
//
// store.dispatch({
//     type: "REQUEST",
//     payload: fetch('http://localhost:8000/list').then((res)=>res.json())
// });
//
// store.dispatch({
//     type: "REQUEST",
//     payload: fetch('http://localhost:8000/list').then((res)=>res.json())
// });
//
// render(
//     <Provider store={store}>
//         <div>
//             { this.props.items.map((item) => <p> {item.title} </p> )}
//         </div>
//     </Provider>,
//     document.getElementById('app')
// );
