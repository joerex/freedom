System.register(['angular2/core', 'angular2/common', './load/load.component', './intro/intro.component', './scoreboard/scoreboard.component', './audience/audience.component', './map/map.component', 'angular2/router', './data/data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, load_component_1, intro_component_1, scoreboard_component_1, audience_component_1, map_component_1, router_1, data_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (load_component_1_1) {
                load_component_1 = load_component_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (scoreboard_component_1_1) {
                scoreboard_component_1 = scoreboard_component_1_1;
            },
            function (audience_component_1_1) {
                audience_component_1 = audience_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, elem, data) {
                    var _this = this;
                    this._router = _router;
                    this.elem = elem;
                    this.data = data;
                    this.bgSrc = 'assets/video/Background_Sky_Final.mp4';
                    console.log('Freedom -------------');
                    this.bgStarted = false;
                    this.showHeader = false;
                    this.status = 'loading';
                    data.load();
                    this._router.subscribe(function (route) {
                        _this.status = 'loaded';
                        _this.active = route;
                        if (route != '' && route != 'intro') {
                            _this.showHeader = true;
                            _this.background();
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
                        _app.background();
                    }, false);
                }
                AppComponent.prototype.navigate = function (component) {
                    this.status = 'loading';
                    this._router.navigate([component]);
                };
                AppComponent.prototype.background = function () {
                    if (!this.bgStarted) {
                        this.bgVid = document.getElementById('bgvid');
                        this.bgVid.src = this.bgSrc;
                        this.bgVid.load();
                        this.bgStarted = true;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n      <div class=\"{{status}}\">\n\n        <router-outlet (navigate)=\"changeRoute($event)\"></router-outlet>\n\n        <div id=\"background\">\n          <video width=\"100%\" height=\"100%\" autoplay loop id=\"bgvid\">\n            <source src=\"\" type=\"video/mp4\">\n          </video>\n        </div>\n\n        <div id=\"header\" [ngClass]=\"{active: showHeader}\">\n          <div class=\"navbar\">\n            <ul id=\"navigation\" class=\"nav navbar-nav\">\n              <li>\n                <a class=\"home\"\n                   [ngClass]=\"{active: active === 'scoreboard'}\"\n                   (click)=\"navigate('Scoreboard')\">\n                </a>\n              </li>\n              <li>\n                <a class=\"audience\"\n                   [ngClass]=\"{active: active === 'audience'}\"\n                   (click)=\"navigate('Audience')\">\n                </a>\n              </li>\n              <li>\n                <a class=\"map\"\n                   [ngClass]=\"{active: active === 'map'}\"\n                   (click)=\"navigate('Map')\">\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div><!-- app-wrap -->\n    ",
                        directives: [intro_component_1.Intro, common_1.NgClass, router_1.ROUTER_DIRECTIVES],
                        providers: [data_service_1.DataService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Load', component: load_component_1.Load },
                        { path: '/intro', name: 'Intro', component: intro_component_1.Intro },
                        { path: '/scoreboard', name: 'Scoreboard', component: scoreboard_component_1.Scoreboard },
                        { path: '/audience', name: 'Audience', component: audience_component_1.Audience },
                        { path: '/stadium', name: 'Map', component: map_component_1.Map }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, data_service_1.DataService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map