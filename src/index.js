import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/RootReducer";
import { Provider , useSelector } from "react-redux";
import thunk from "redux-thunk";
import firebase from 'firebase/app'
import { createFirestoreInstance ,reduxFirestore, getFirestore } from "redux-firestore";
import {ReactReduxFirebaseProvider ,  reactReduxFirebase, getFirebase  , isLoaded, isEmpty} from "react-redux-firebase";
import fbConfig from "./config/fbConfig"

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase , getFirestore })),
    reduxFirestore(firebase , fbConfig),
  )
);
const profileSpecificProps = {
  userProfile: 'users', 
  useFirestoreForProfile: true,
  attachAuthIsReady: true
}
const rrfProps = {
  firebase,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center"> <p>Loading Mario Plan...</p></div>;
      return children
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
      <App />
      </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals