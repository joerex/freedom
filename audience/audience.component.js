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
    var Audience;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            Audience = (function () {
                function Audience() {
                    this.video = document.getElementById('aud-vid');
                    this.audio = document.getElementById('aud-audio');
                    this.video.muted = true;
                    this.audio.muted = true;
                    this.video.play();
                    this.audio.play();
                }
                Audience.prototype.routerOnActivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(400).toPromise();
                };
                Audience.prototype.routerOnDeactivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(400).toPromise();
                };
                Audience = __decorate([
                    core_1.Component({
                        selector: 'audience',
                        template: " <div id=\"audience\">\n                  <video id=\"aud-vid\" width=\"100%\" height=\"100%\" preload autoplay loop>\n                    <source src=\"http://s3.amazonaws.com/project-freedom/assets/video/Audience_Loop_Final_3.mp4\" type=\"video/mp4\">\n                  </video>\n                  <audio id=\"aud-audio\" autoplay preload loop>\n                    <source src=\"http://s3.amazonaws.com/project-freedom/assets/audio/Audience_Audio_Final.ogg\" type=\"audio/ogg\" />\n                    <source src=\"http://s3.amazonaws.com/project-freedom/assets/audio/Audience_Audio_Final.mp3\" type=\"audio/mpeg\" />\n                  </audio>\n                </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Audience);
                return Audience;
            }());
            exports_1("Audience", Audience);
        }
    }
});
