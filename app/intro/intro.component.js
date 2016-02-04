System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var Intro;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Intro = (function () {
                //@Output() navigate: EventEmitter<any> = new EventEmitter();
                function Intro(_router, elem) {
                    this._router = _router;
                    this.elem = elem;
                    var _app = this;
                    this.vidElem = document.getElementById('intro-video');
                    this.vidElem.addEventListener('ended', function () {
                        console.log('In Intro');
                        //_app.navigate.emit('event');
                        var event = document.createEvent('Event');
                        event.initEvent('setForScoreboard', true, true);
                        elem.nativeElement.dispatchEvent(event);
                        _app._router.navigate(['Scoreboard']);
                    });
                }
                Intro = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        template: " <div id=\"intro\">\n                  <video width=\"100%\" height=\"100%\" autoplay id=\"intro-video\">\n                    <source src=\"http://s3.amazonaws.com/project-freedom/assets/video/intro.mov\" type=\"video/mov\">\n                    <source src=\"http://s3.amazonaws.com/project-freedom/assets/video/intro.mp4\" type=\"video/mp4\">\n                  </video>\n                </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
                ], Intro);
                return Intro;
            })();
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=intro.component.js.map