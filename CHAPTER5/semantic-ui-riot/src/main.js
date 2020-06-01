import '@riotjs/hot-reload'
import App from './app.riot'
import {component} from 'riot'
import 'semantic-ui-riot'
import 'ress'

component(App)(document.getElementById('app'), {
  title: 'Semantic UI Riot Demo!'
})
