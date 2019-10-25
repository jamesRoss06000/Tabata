(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["countdown-countdown-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/countdown/countdown.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/countdown/countdown.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"https://kit.fontawesome.com/8965a0620e.js\"></script>\r\n\r\n<body>\r\n\r\n\r\n  <ion-header>\r\n    <ion-toolbar color=\"medium\">\r\n      <ion-title style=\"text-align: center\">\r\n        JR Coaching Apps\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content color=\"dark\">\r\n\r\n    <ion-card id=\"startBtn\" color=\"tertiary\" (click)=\"repeat()\" class=\"green\">\r\n      <ion-card-content id=\"start\">\r\n        Start Countdown\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div>\r\n      <ion-card color=\"medium\">\r\n        <ion-card-content id=\"currentSet\" [innerHTML]=\"this.currentSet\">\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card color=\"success\">\r\n        <ion-card-content class=\"green orange\" id=\"counter\" [innerHTML]=\"this.countdown\">\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <ion-card color=\"medium\">\r\n      <ion-card-content id=\"elapsedLabel\">\r\n        Total Time Elapsed\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"medium\">\r\n      <ion-card-content id=\"timeElapsed\">\r\n        <span id=\"m\"></span>\r\n        :\r\n        <span id=\"s\"></span>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"success\" (click)=\"pausePlay()\">\r\n      <ion-card-content id=\"pause\">\r\n        pause / play\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"danger\" (click)=\"previousPage()\">\r\n      <ion-card-content id=\"quit\">\r\n        Previous Page\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n  </ion-content>\r\n</body>"

/***/ }),

/***/ "./src/app/countdown/countdown.module.ts":
/*!***********************************************!*\
  !*** ./src/app/countdown/countdown.module.ts ***!
  \***********************************************/
/*! exports provided: CountdownPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPageModule", function() { return CountdownPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _countdown_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countdown.page */ "./src/app/countdown/countdown.page.ts");







var routes = [
    {
        path: '',
        component: _countdown_page__WEBPACK_IMPORTED_MODULE_6__["CountdownPage"]
    }
];
var CountdownPageModule = /** @class */ (function () {
    function CountdownPageModule() {
    }
    CountdownPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_countdown_page__WEBPACK_IMPORTED_MODULE_6__["CountdownPage"]]
        })
    ], CountdownPageModule);
    return CountdownPageModule;
}());



/***/ }),

/***/ "./src/app/countdown/countdown.page.scss":
/*!***********************************************!*\
  !*** ./src/app/countdown/countdown.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  text-align: center;\n  color: black;\n  font-weight: 550;\n}\n\n#counter, #timeElapsed {\n  font-family: Orbitron;\n  font-size: 50px;\n}\n\n.green {\n  background-color: #01AA31;\n  min-height: 47px;\n}\n\n.orange {\n  background-color: #e27b1b;\n}\n\n.grey {\n  padding-top: 17px;\n  background-color: #979192;\n  min-height: 47px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRkb3duL0M6XFxsYXJhZ29uXFx3d3dcXFRhYmF0YS9zcmNcXGFwcFxcY291bnRkb3duXFxjb3VudGRvd24ucGFnZS5zY3NzIiwic3JjL2FwcC9jb3VudGRvd24vY291bnRkb3duLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZG93bi9jb3VudGRvd24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbn1cclxuXHJcbiNjb3VudGVyLCAjdGltZUVsYXBzZWR7XHJcbiAgICBmb250LWZhbWlseTogT3JiaXRyb247XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5ncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMUFBMzE7XHJcbiAgICBtaW4taGVpZ2h0OiA0N3B4O1xyXG59XHJcblxyXG4ub3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyN2IxYjtcclxufVxyXG5cclxuLmdyZXkge1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5MTkyO1xyXG4gICAgbWluLWhlaWdodDogNDdweDtcclxuICAgIC8vIGNvbG9yOiAjRjRGNEY0O1xyXG59IiwiKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG4jY291bnRlciwgI3RpbWVFbGFwc2VkIHtcbiAgZm9udC1mYW1pbHk6IE9yYml0cm9uO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMUFBMzE7XG4gIG1pbi1oZWlnaHQ6IDQ3cHg7XG59XG5cbi5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI3YjFiO1xufVxuXG4uZ3JleSB7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5MTkyO1xuICBtaW4taGVpZ2h0OiA0N3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/countdown/countdown.page.ts":
/*!*********************************************!*\
  !*** ./src/app/countdown/countdown.page.ts ***!
  \*********************************************/
/*! exports provided: CountdownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPage", function() { return CountdownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CountdownPage = /** @class */ (function () {
    function CountdownPage(Auth, http, router, route) {
        this.Auth = Auth;
        this.http = http;
        this.router = router;
        this.route = route;
    }
    CountdownPage.prototype.repeat = function () {
        var _this = this;
        this.startBtn.classList.remove('green');
        this.startBtn.classList.add('grey');
        this.startBtn.innerHTML = "Prepare/Rest on orange, Workout on green";
        this.intervalOne = setInterval(function () { return _this.begin(_this.countdown, _this.tabata, _this.displayDiv); }, 1000);
        this.intervalFour = setInterval(function () { return _this.totalTime(_this.secs, _this.restSecs); }, 1000);
    };
    CountdownPage.prototype.begin = function (myCountdown, myTabata, myDisplay) {
        var _this = this;
        this.displayDiv = myDisplay;
        if (this.set == 1) {
            this.countdown = myCountdown - 1;
            this.countdown > 0;
            if (this.countdown < 10) {
                this.countdown = "0" + this.countdown;
            }
            this.displayDiv.innerHTML = this.countdown;
            if (this.countdown == 0) {
                clearInterval(this.intervalOne);
                this.intervalTwo = setInterval(function () { return _this.work(_this.restTime, _this.set); }, 1000);
                this.displayDiv.classList.remove('orange');
            }
        }
    };
    CountdownPage.prototype.work = function (myRest, set) {
        var _this = this;
        this.set = set;
        this.secondCount--;
        if (this.secondCount < 10) {
            this.secondCount = "0" + this.secondCount;
        }
        this.displayDiv.innerHTML = this.secondCount;
        if (this.secondCount == 0) {
            clearInterval(this.intervalTwo);
            this.displayDiv.classList.remove('green');
            this.displayDiv.classList.add('orange');
            this.secondCount = +this.tabata.split(':')[1];
            if (this.set < 8) {
                this.intervalThree = setInterval(function () { return _this.rest(_this.displayDiv, _this.restTime, _this.set); }, 1000);
            }
            else {
                alert("Good work!");
            }
        }
    };
    CountdownPage.prototype.rest = function (myDisplay, myRest, set) {
        var _this = this;
        var displayDiv = myDisplay;
        this.restTime = myRest;
        this.set = set;
        this.restTime--;
        if (this.restTime < 10) {
            this.restTime = "0" + this.restTime;
        }
        displayDiv.innerHTML = this.restTime;
        if (this.restTime == 0) {
            clearInterval(this.intervalThree);
            this.displayDiv.classList.remove('orange');
            this.displayDiv.classList.add('green');
            this.secondCount = +this.tabata.split(':')[1];
            switch (this.id) {
                case this.id = "0":
                    this.restTime = Math.ceil(this.secondCount * 0.5);
                    break;
                case this.id = "1":
                    this.restTime = Math.ceil(this.secondCount * 0.33);
                    break;
                case this.id = "2":
                    this.restTime = Math.ceil(this.secondCount * 0.25);
                    break;
                case this.id = "3":
                    this.restTime = Math.ceil(this.secondCount * 0.20);
                    break;
            }
            this.set++;
            console.log("this set = ", this.set);
            this.intervalTwo = setInterval(function () { return _this.work(_this.secondCount, _this.set); }, 1000);
            this.currentSetDiv.innerHTML = "Set " + this.set + " of 8";
        }
    };
    CountdownPage.prototype.totalTime = function (seconds, rests) {
        var fullTime = seconds * 8 + rests * 7;
        fullTime--;
        this.secCounter++;
        if (this.secCounter < 10) {
            this.secCounter = "0" + this.secCounter;
        }
        // if (this.minCounter < 10) {
        //     this.minCounter = "00";
        // }
        if (this.secCounter == 60) {
            this.secCounter = "00";
            this.minCounter++;
        }
        if (fullTime == 0) {
            clearInterval(this.intervalFour);
        }
        this.m.innerHTML = this.minCounter;
        this.s.innerHTML = this.secCounter;
        console.log(this.secCounter, this.minCounter, "test");
    };
    CountdownPage.prototype.previousPage = function () {
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        clearInterval(this.intervalOne);
        clearInterval(this.intervalTwo);
        clearInterval(this.intervalThree);
        clearInterval(this.intervalFour);
        this.router.navigate(['/set-timer/', id]);
    };
    CountdownPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.countdown = _this.router.getCurrentNavigation().extras.state.tabataData[0].substring(17, 19);
                _this.tabata = _this.router.getCurrentNavigation().extras.state.tabataData[1].substring(14, 19);
                _this.id = _this.router.getCurrentNavigation().extras.state.tabataData[2];
                _this.set = 1;
                _this.currentSet = "Set " + _this.set + " of 8";
                _this.startBtn = document.querySelector('#startBtn');
                _this.displayDiv = document.querySelector('#counter');
                _this.currentSetDiv = document.querySelector('#currentSet');
                var secondCount = +_this.tabata.split(':')[1];
                _this.secondCount = +_this.tabata.split(':')[1];
                switch (_this.id) {
                    case _this.id = "0":
                        _this.restTime = Math.ceil(secondCount * 0.5);
                        break;
                    case _this.id = "1":
                        _this.restTime = Math.ceil(secondCount * 0.33);
                        break;
                    case _this.id = "2":
                        _this.restTime = Math.ceil(secondCount * 0.25);
                        break;
                    case _this.id = "3":
                        _this.restTime = Math.ceil(secondCount * 0.20);
                        break;
                }
                _this.secs = _this.secondCount;
                _this.restSecs = _this.restTime;
                _this.m = document.querySelector('#m');
                _this.s = document.querySelector('#s');
                _this.secCounter = 0;
                _this.minCounter = 0;
            }
        });
    };
    CountdownPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    CountdownPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-countdown',
            template: __webpack_require__(/*! raw-loader!./countdown.page.html */ "./node_modules/raw-loader/index.js!./src/app/countdown/countdown.page.html"),
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            styles: [__webpack_require__(/*! ./countdown.page.scss */ "./src/app/countdown/countdown.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CountdownPage);
    return CountdownPage;
}());



/***/ })

}]);
//# sourceMappingURL=countdown-countdown-module-es5.js.map