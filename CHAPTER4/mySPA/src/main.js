import '@riotjs/hot-reload'
import App from './app.riot'
import {component} from 'riot'

// これでコンポーネントをグローバルに登録とマウントを同時に行っています
component(App)(document.getElementById('app'), {
  title: 'Giphygram'
})
