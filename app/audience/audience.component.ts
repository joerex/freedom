import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ComponentInstruction} from 'angular2/router';

@Component({
    selector: 'audience',
    template: ` <div id="audience">
                  <video id="aud-vid" width="100%" height="100%" autoplay loop>
                    <source src="http://s3.amazonaws.com/project-freedom/assets/video/Audience_Loop_Final_3.mp4" type="video/mp4">
                  </video>
                  <audio id="aud-audio" autoplay loop>
                    <source src="http://s3.amazonaws.com/project-freedom/assets/audio/Audience_Audio_Final.ogg" type="audio/ogg" />
                    <source src="http://s3.amazonaws.com/project-freedom/assets/audio/Audience_Audio_Final.mp3" type="audio/mpeg" />
                  </audio>
                </div>
              `
})

export class Audience {
  video : Object;
  audio : Object;

  constructor() {
    this.video = document.getElementById('aud-vid');
    this.audio = document.getElementById('aud-audio');
    this.video.muted = true;
    this.audio.muted = true;
    this.video.play();
    this.audio.play();
  }

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return Observable.of(true).delay(400).toPromise();
  }

  routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return Observable.of(true).delay(400).toPromise();
  }

}
