import {Component, ElementRef, Output, EventEmitter} from 'angular2/core';
import {Router, ComponentInstruction} from 'angular2/router';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'intro',
    template: ` <div id="intro">
                  <video width="100%" height="100%" autoplay id="intro-video">
                    <source src="{{src}}" type="video/mp4">
                  </video>
                </div>
              `
})

export class Intro {
  src : string;
  vidElem;
  //@Output() navigate: EventEmitter<any> = new EventEmitter();

  constructor( public _router : Router, public elem : ElementRef ) {
    var _app = this;
    this.vidElem = document.getElementById('intro-video');
    this.vidElem.addEventListener('ended', function() {
      console.log('In Intro');
      //_app.navigate.emit('event');
      var event = document.createEvent('Event');
      event.initEvent('setForScoreboard', true, true);
      elem.nativeElement.dispatchEvent(event);
      _app._router.navigate( ['Scoreboard'] );
    });
    this.src = 'assets/video/intro.mp4';
  }
}
