System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var About;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            About = (function () {
                function About() {
                    this.video = document.getElementById('about-vid');
                    this.audio = document.getElementById('about-audio');
                    this.video.muted = true;
                    this.audio.muted = true;
                    this.video.play();
                    this.audio.play();
                }
                About.prototype.routerOnActivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(400).toPromise();
                };
                About.prototype.routerOnDeactivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(400).toPromise();
                };
                About = __decorate([
                    core_1.Component({
                        selector: 'about',
                        template: " <div id=\"about\">\n                   <div class=\"sidebar\">\n                      <img src=\"\">\n                      <h1>DONATE</h1>\n                      <h2>TO THE CAUSE</h2>\n                      <p>Dronevictory.com was produced independently by a small group of empowered patriots. Help us maintain and advance the feverish excitement of the globatron stadium by donating to the cause. We are working on turning this site into a phone app so every man, woman, and child can keep a piece of our war on terror in their pocket at all times. No strike should ever go uncelebrated! Donate to the cause and stay tuned!</p>\n                      <a href=\"#doante\" class=\"button\">DONATE</a>\n                      <p>GET IN TOUCH!</p>\n                      <a href=\"mailto:contact@dronevictory.com\">CONTACT@DRONEVICTORY.COM</a>\n                   </div>\n                  <video id=\"about-vid\" width=\"100%\" height=\"100%\" preload autoplay loop>\n                    <source src=\"https://s3.amazonaws.com/ijadams/Info_background.mp4\" type=\"video/mp4\">\n                  </video>\n                  <audio id=\"about-audio\" autoplay preload loop>\n                    <!-- <source src=\"http://s3.amazonaws.com/project-freedom/assets/audio/Audience_Audio_Final.ogg\" type=\"audio/ogg\" /> -->\n                   <!-- <source src=\"http://s3.amazonaws.com/project-freedom/assets/audio/Audience_Audio_Final.mp3\" type=\"audio/mpeg\" /> -->\n                  </audio>\n                </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], About);
                return About;
            }());
            exports_1("About", About);
        }
    }
});
//# sourceMappingURL=about.component.js.map