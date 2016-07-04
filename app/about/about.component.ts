import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ComponentInstruction} from 'angular2/router';

@Component({
    selector: 'about',
    template: ` <div id="about">
                   <div class="sidebar">
                      <img src="">
                      <h1>DONATE</h1>
                      <h2>TO THE CAUSE</h2>
                      <p>Dronevictory.com was produced independently by a small group of empowered patriots. Help us maintain and advance the feverish excitement of the globatron stadium by donating to the cause. We are working on turning this site into a phone app so every man, woman, and child can keep a piece of our war on terror in their pocket at all times. No strike should ever go uncelebrated! Donate to the cause and stay tuned!</p>
                      <a href="#doante" class="button">DONATE</a>
                      <p>GET IN TOUCH!</p>
                      <a href="mailto:contact@dronevictory.com">CONTACT@DRONEVICTORY.COM</a>
                   </div>
                  <video id="about-vid" width="100%" height="100%" preload autoplay loop>
                    <source src="https://s3.amazonaws.com/ijadams/Info_background.mp4" type="video/mp4">
                  </video>
                  <audio id="about-audio" autoplay preload loop>
                    <!-- <source src="http://s3.amazonaws.com/project-freedom/assets/audio/Audience_Audio_Final.ogg" type="audio/ogg" /> -->
                    <!-- <source src="http://s3.amazonaws.com/project-freedom/assets/audio/Audience_Audio_Final.mp3" type="audio/mpeg" /> -->
                  </audio>
                </div>
              `
})

export class About {
  video : Object;
  audio : Object;

  constructor() {
    this.video = document.getElementById('about-vid');
    this.audio = document.getElementById('about-audio');
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
