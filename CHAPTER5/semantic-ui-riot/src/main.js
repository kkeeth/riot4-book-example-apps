import '@riotjs/hot-reload'
import {component} from 'riot'
// import 'ress'
import 'semantic-ui-riot'
import App from './app.riot'

component(App)(document.getElementById('app'), {
  title: 'Semantic UI Riot Demo!'
})
