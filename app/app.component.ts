import {Component, ElementRef} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Load} from './load/load.component';
import {Intro} from './intro/intro.component';
import {Scoreboard} from './scoreboard/scoreboard.component';
import {Audience} from './audience/audience.component';
import {Map} from './map/map.component';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ComponentInstruction} from 'angular2/router';
import {DataService} from './data/data.service';

@Component({
    selector: 'app',
    template: `
      <div class="{{status}}">

        <router-outlet (navigate)="changeRoute($event)"></router-outlet>

        <div id="background">
          <video width="100%" height="100%" autoplay loop id="bgvid">
            <source src="" type="video/mp4">
          </video>
        </div>

        <div id="header" [ngClass]="{active: showHeader}">
          <div class="navbar">
            <ul id="navigation" class="nav navbar-nav">
              <li>
                <a class="home"
                   [ngClass]="{active: active === 'scoreboard'}"
                   (click)="navigate('Scoreboard')">
                </a>
              </li>
              <li>
                <a class="audience"
                   [ngClass]="{active: active === 'audience'}"
                   (click)="navigate('Audience')">
                </a>
              </li>
              <li>
                <a class="map"
                   [ngClass]="{active: active === 'stadium'}"
                   (click)="navigate('Map')">
                </a>
              </li>
            </ul>
          </div>
          <a class="mute"
             [ngClass]="{muted : muted}"
             (click)="mute('toggle')"></a>
        </div>

      </div><!-- app-wrap -->
    `,
    directives: [Intro, NgClass, ROUTER_DIRECTIVES],
    providers: [DataService]
})

@RouteConfig([
  {path:'/', name: 'Load', component: Load},
  {path:'/intro', name: 'Intro', component: Intro},
  {path:'/scoreboard', name: 'Scoreboard', component: Scoreboard},
  {path:'/audience', name: 'Audience', component: Audience},
  {path:'/stadium', name: 'Map', component: Map}
])

export class AppComponent {
  showHeader : Boolean;
  bgSrc : string = 'http://s3.amazonaws.com/project-freedom/assets/video/Background_Sky_Final_Small.mp4';
  bgStarted : Boolean;
  bgVid : Object;
  status : string;
  active : string;
  muted : Boolean;

  constructor( public _router: Router, public elem : ElementRef,  public data : DataService ) {

    console.log('Freedom -------------');

    this.bgStarted = false;
    this.showHeader = false;
    this.muted = false;
    this.status = 'loading';
    data.load();

    this._router.subscribe((route) => {
      this.status = 'loaded';
      this.active = route;
      if (route != '' && route != 'intro') {
        this.showHeader = true;
        this.background();
        if (this.muted) {
          this.mute('on');
        }
        else {
          this.mute('off');
        }
      }
    });

    var _app = this;
    //
    elem.nativeElement.addEventListener('setForIntro', function (e) {
      _app.status = 'loading';
    }, false);
    //
    elem.nativeElement.addEventListener('setForScoreboard', function (e) {
      _app.status = 'loading';
      setTimeout(function() {_app.background()}, 400);
    }, false);

  }

  navigate(component) {
    this.status = 'loading';
    this._router.navigate( [component] );
  }

  background() {
    if (!this.bgStarted) {
      this.bgVid = document.getElementById('bgvid');
      this.bgVid.src = this.bgSrc;
      this.bgVid.load();
      this.bgStarted = true;
    }
  }

  mute(command : String) {
    var audio = document.getElementsByTagName('audio');
    var video = document.getElementsByTagName('video');
    if (command === 'toggle') {
      this.muted = this.muted === true ? false : true;
    }
    if (command === 'on') {
      this.muted = true;
    }
    if (command === 'off') {
      this.muted = false;
    }
    if (video.length > 0) {
      for(let i = 0; i < video.length; i++) {
        console.log('muting');
        video[i].muted = Boolean(this.muted);
      }
    }
    if (audio.length > 0) {
      for(let i = 0; i < audio.length; i++) {
        console.log('muting');
        audio[i].muted = Boolean(this.muted);
      }
    }
  }
}
