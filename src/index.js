import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss'
// 把store传递到子孙组件中， 这样就可以在组件中直接inject()
import {Provider} from 'mobx-react'
import AppStore from './mobx/appStore'

ReactDOM.render(
    <Provider store={AppStore}>
        <App />
    </Provider>, 
document.getElementById('root'));

//  +++++ 加入+++++
if (module.hot) {
    module.hot.decline('./App');
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
