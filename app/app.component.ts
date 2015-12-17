import {Component} from 'angular2/core';
import {Load} from './load/load';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES, Load]//,
    //providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {path:'/', name: 'Load', component: Load},
])

export class AppComponent {
  constructor(_router: Router) { //private
    console.log('Freedom');
  }
}
