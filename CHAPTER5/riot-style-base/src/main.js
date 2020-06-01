import '@riotjs/hot-reload'
import App from './app.riot'
import {component} from 'riot'

component(App)(document.getElementById('app'), {
  title: 'Hello Riot.js!',
  subTitle: 'This is parent👨'
})
