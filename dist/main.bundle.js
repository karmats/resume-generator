webpackJsonp([0,3],{

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(759),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/app.component.js.map

/***/ },

/***/ 441:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 441;


/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(594);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/main.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resume_resume_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__experience_experience_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__education_education_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__skill_skill_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resume_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__["b" /* EditSummaryDialog */],
                __WEBPACK_IMPORTED_MODULE_8__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_8__experience_experience_component__["b" /* NewPositionDialog */],
                __WEBPACK_IMPORTED_MODULE_9__education_education_component__["a" /* NewEducationDialog */],
                __WEBPACK_IMPORTED_MODULE_10__skill_skill_component__["a" /* NewSkillDialog */],
                __WEBPACK_IMPORTED_MODULE_9__education_education_component__["b" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__skill_skill_component__["b" /* SkillComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__education_education_component__["a" /* NewEducationDialog */],
                __WEBPACK_IMPORTED_MODULE_8__experience_experience_component__["b" /* NewPositionDialog */],
                __WEBPACK_IMPORTED_MODULE_10__skill_skill_component__["a" /* NewSkillDialog */],
                __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__["b" /* EditSummaryDialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__resume_service__["a" /* ResumeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/app.module.js.map

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return EducationComponent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewEducationDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EducationComponent = (function () {
    function EducationComponent(dialog, resumeService) {
        this.dialog = dialog;
        this.resumeService = resumeService;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
    };
    EducationComponent.prototype.newEducation = function () {
        var _this = this;
        var dialogRef = this.dialog.open(NewEducationDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                return;
            }
            if (result.current) {
                result.endDate = null;
            }
            _this.educations = _this.resumeService.addEducation(result);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], EducationComponent.prototype, "educations", void 0);
    EducationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__(760),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === 'function' && _b) || Object])
    ], EducationComponent);
    return EducationComponent;
    var _a, _b;
}());
// Add new education dialog
var NewEducationDialog = (function () {
    function NewEducationDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        var today = new Date();
        this.education = {
            school: '',
            field: '',
            current: true,
            startDate: {
                year: today.getFullYear(),
                month: today.getMonth()
            },
            endDate: {
                year: today.getFullYear(),
                month: today.getMonth()
            },
            degree: 'Other'
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
        this.degrees = resumeService.degrees;
    }
    NewEducationDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: "\n    <h3 class=\"dialog-header\">Add new education</h3>\n    <div class=\"dialog-content row\">\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"education.school\"\n          placeholder=\"School\">\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"education.field\"\n          placeholder=\"Field of Study\">\n      </md-input-container>\n      <md-select [(ngModel)]=\"education.degree\" placeholder=\"Degree\" class=\"col-md-12\">\n        <md-option *ngFor=\"let degree of degrees\" [value]=\"degree\"> {{degree}} </md-option>\n      </md-select>\n      <label class=\"col-md-6 select-label\">From</label>\n      <label class=\"col-md-6 select-label\">To</label>\n      <md-select [(ngModel)]=\"education.startDate.year\" placeholder=\"Year\" class=\"col-md-3\">\n        <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n      </md-select>\n      <md-select [(ngModel)]=\"education.startDate.month\" placeholder=\"Month\" class=\"col-md-3\">\n        <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n      </md-select>\n      <md-select *ngIf=\"!education.current\" [(ngModel)]=\"education.endDate.year\" placeholder=\"Year\" class=\"col-md-3\">\n        <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n      </md-select>\n      <md-select *ngIf=\"!education.current\" [(ngModel)]=\"education.endDate.month\" placeholder=\"Month\" class=\"col-md-3\">\n        <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n      </md-select>\n      <md-checkbox class=\"col-md-12\" [(ngModel)]=\"education.current\">\n        Current education\n      </md-checkbox>\n    </div>\n    <div class=\"dialog-footer\">\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">CANCEL</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(education)\">ADD</button>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === 'function' && _b) || Object])
    ], NewEducationDialog);
    return NewEducationDialog;
    var _a, _b;
}());
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/education.component.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExperienceComponent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return NewPositionDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExperienceComponent = (function () {
    function ExperienceComponent(dialog, resumeService) {
        this.dialog = dialog;
        this.resumeService = resumeService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
    };
    ExperienceComponent.prototype.newPosition = function () {
        var _this = this;
        var dialogRef = this.dialog.open(NewPositionDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                return;
            }
            if (result.current) {
                result.endDate = null;
            }
            _this.positions = _this.resumeService.addPosition(result);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ExperienceComponent.prototype, "positions", void 0);
    ExperienceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__(761),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === 'function' && _b) || Object])
    ], ExperienceComponent);
    return ExperienceComponent;
    var _a, _b;
}());
// Add new position dialog
var NewPositionDialog = (function () {
    function NewPositionDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        var today = new Date();
        this.position = {
            company: '',
            companyLogoUrl: '',
            current: true,
            startDate: {
                year: today.getFullYear(),
                month: today.getMonth()
            },
            endDate: {
                year: today.getFullYear(),
                month: today.getMonth()
            },
            summary: '',
            title: ''
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
    }
    NewPositionDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: "\n    <h3 class=\"dialog-header\">Add new position</h3>\n    <div class=\"dialog-content row\">\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"position.company\"\n          placeholder=\"Company\">\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"position.companyLogoUrl\"\n          placeholder=\"Company Logo URL (Optional)\">\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"position.title\"\n          placeholder=\"Title\">\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <textarea md-input\n        [(ngModel)]=\"position.summary\"\n        placeholder=\"Summary\"></textarea>\n      </md-input-container>\n      <label class=\"col-md-6 select-label\">From</label>\n      <label class=\"col-md-6 select-label\">To</label>\n      <md-select [(ngModel)]=\"position.startDate.year\" placeholder=\"Year\" class=\"col-md-3\">\n        <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n      </md-select>\n      <md-select [(ngModel)]=\"position.startDate.month\" placeholder=\"Month\" class=\"col-md-3\">\n        <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n      </md-select>\n      <md-select *ngIf=\"!position.current\" [(ngModel)]=\"position.endDate.year\" placeholder=\"Year\" class=\"col-md-3\">\n        <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n      </md-select>\n      <md-select *ngIf=\"!position.current\" [(ngModel)]=\"position.endDate.month\" placeholder=\"Month\" class=\"col-md-3\">\n        <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n      </md-select>\n      <md-checkbox class=\"col-md-12\" [(ngModel)]=\"position.current\">\n        Current job\n      </md-checkbox>\n    </div>\n    <div class=\"dialog-footer\">\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">CANCEL</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(position)\">ADD</button>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === 'function' && _b) || Object])
    ], NewPositionDialog);
    return NewPositionDialog;
    var _a, _b;
}());
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/experience.component.js.map

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(591);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/index.js.map

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = (function () {
    function ResumeComponent(resumeService) {
        this.resumeService = resumeService;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        this.resume = this.resumeService.retrieveResume();
    };
    ResumeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__(762),
            styles: [__webpack_require__(756)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]) === 'function' && _a) || Object])
    ], ResumeComponent);
    return ResumeComponent;
    var _a;
}());
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/resume.component.js.map

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return SkillComponent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewSkillDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillComponent = (function () {
    function SkillComponent(dialog, resumeService) {
        this.dialog = dialog;
        this.resumeService = resumeService;
    }
    SkillComponent.prototype.ngOnInit = function () {
        this.skillsToTwoLists();
    };
    SkillComponent.prototype.newSkill = function () {
        var _this = this;
        var dialogRef = this.dialog.open(NewSkillDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                return;
            }
            _this.skills = _this.resumeService.addSkill(result);
            _this.skillsToTwoLists();
        });
    };
    // Since skill lists are in two columns, split skill list to a tuple
    SkillComponent.prototype.skillsToTwoLists = function () {
        _a = this.skills.reduce(function (acc, curr, idx) {
            if (idx % 2 === 0) {
                acc[0].push(curr);
            }
            else {
                acc[1].push(curr);
            }
            return acc;
        }, [[], []]), this.firstList = _a[0], this.secondList = _a[1];
        var _a;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], SkillComponent.prototype, "skills", void 0);
    SkillComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-skill',
            template: __webpack_require__(763),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === 'function' && _b) || Object])
    ], SkillComponent);
    return SkillComponent;
    var _a, _b;
}());
// Add new skill dialog
var NewSkillDialog = (function () {
    function NewSkillDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        var today = new Date();
        this.skill = {
            competence: 0,
            name: ''
        };
    }
    NewSkillDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: "\n    <h3 class=\"dialog-header\">Add new skill</h3>\n    <div class=\"dialog-content row\">\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"skill.name\"\n          placeholder=\"Competence name\">\n      </md-input-container>\n      <md-slider\n        class=\"col-md-12\"\n        [(ngModel)]=\"skill.competence\"\n        min=\"0\"\n        max=\"100\"\n        thumbLabel\n        step=\"10\"\n        tickInterval=\"1\"></md-slider>\n    </div>\n    <div class=\"dialog-footer\">\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">CANCEL</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(skill)\">ADD</button>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === 'function' && _b) || Object])
    ], NewSkillDialog);
    return NewSkillDialog;
    var _a, _b;
}());
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/skill.component.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SummaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return EditSummaryDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryComponent = (function () {
    function SummaryComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent.prototype.editSummary = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogConfig"]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(EditSummaryDialog, config);
        dialogRef.componentInstance.summary = {
            name: this.name,
            profileUrl: this.profileUrl,
            description: this.description,
            title: this.title,
            phone: this.phone,
            email: this.email
        };
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                return;
            }
            var resume = _this.resumeService.updateSummary(result.name, result.profileUrl, result.description, result.title, result.phone, result.email);
            _this.name = resume.name;
            _this.profileUrl = resume.pictureUrl;
            _this.description = resume.summary;
            _this.title = resume.title;
            _this.phone = resume.phone;
            _this.email = resume.email;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], SummaryComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])('picture'), 
        __metadata('design:type', String)
    ], SummaryComponent.prototype, "profileUrl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], SummaryComponent.prototype, "description", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], SummaryComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], SummaryComponent.prototype, "phone", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], SummaryComponent.prototype, "email", void 0);
    SummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__(764),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === 'function' && _c) || Object])
    ], SummaryComponent);
    return SummaryComponent;
    var _a, _b, _c;
}());
// Edit summary dialog
var EditSummaryDialog = (function () {
    function EditSummaryDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    EditSummaryDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: "\n    <h3 class=\"dialog-header\">Edit summary</h3>\n    <div class=\"dialog-content row\">\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"summary.name\"\n          placeholder=\"Your name\">\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"summary.profileUrl\"\n          placeholder=\"Url to profile picture\">\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"summary.title\"\n          placeholder=\"Job title\">\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <textarea md-input\n        [(ngModel)]=\"summary.description\"\n        placeholder=\"Description of yourself\"></textarea>\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"summary.phone\"\n          placeholder=\"Your phone number\">\n      </md-input-container>\n      <md-input-container class=\"col-md-12\">\n        <input md-input\n          [(ngModel)]=\"summary.email\"\n          placeholder=\"Your email adress\">\n      </md-input-container>\n    </div>\n    <div class=\"dialog-footer\">\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(summary)\">Ok</button>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object])
    ], EditSummaryDialog);
    return EditSummaryDialog;
    var _a;
}());
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/summary.component.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/environment.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/polyfills.js.map

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = ".skill-bar {\n    margin-bottom: 30px;\n    margin-top: 10px;\n}\n"

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = ".summary {\n    text-align: center;\n    background: #3949ab;\n    color: #fff;\n    padding: 20px;\n    margin: -30px;\n}\n.profile-picture {\n    border-radius: 200px;\n    width: 200px;\n    height: 200px;\n}\n\n.contact-info {\n    margin-top: 40px;\n}\n.contact-info md-icon {\n    vertical-align: middle;\n}\n.contact-info md-icon:not(:first-child) {\n    margin-left: 20px;\n}\n"

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = "<app-resume>\n</app-resume>\n"

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = "<md-card>\n  <md-list>\n    <md-list-item *ngFor=\"let education of educations\">\n      <b md-line>{{education.field}} - {{education.school}}</b>\n      <i md-line>{{months[education.startDate.month] + ' ' + education.startDate.year}} - {{education.endDate ? (months[education.endDate.month] + ' ' + education.endDate.year) : 'Present'}}</i>\n      <span md-line>{{education.degree}}</span>\n    </md-list-item>\n  </md-list>\n  <md-card-actions>\n    <button md-button color=\"primary\" (click)=\"newEducation()\">ADD EDUCATION</button>\n  </md-card-actions>\n</md-card>\n"

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = "<md-card>\n  <md-list>\n    <md-list-item *ngFor=\"let position of positions\">\n      <img *ngIf=\"position.companyLogoUrl\" md-list-avatar [src]=\"position.companyLogoUrl\" alt=\"position.company\">\n      <h3 md-line>{{position.title}} - {{position.company}}</h3>\n      <p md-line>{{months[position.startDate.month] + ' ' + position.startDate.year}} - {{position.endDate ? (months[position.endDate.month] + ' ' + position.endDate.year) : 'Present'}}</p>\n      <p md-line>{{position.summary}}</p>\n    </md-list-item>\n  </md-list>\n  <md-card-actions>\n    <button md-button color=\"primary\" (click)=\"newPosition()\">ADD POSITION</button>\n  </md-card-actions>\n</md-card>\n"

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = "<!-- Summary -->\n<div class=\"app-content\">\n    <app-summary [picture]=\"resume.pictureUrl\" [name]=\"resume.name\" [description]=\"resume.summary\" [title]=\"resume.title\" [phone]=\"resume.phone\"\n        [email]=\"resume.email\">\n    </app-summary>\n\n    <!-- Work experience -->\n    <app-experience [positions]=\"resume.positions\">\n    </app-experience>\n\n    <!-- Education -->\n    <app-education [educations]=\"resume.educations\">\n    </app-education>\n\n    <!-- Skills -->\n    <app-skill [skills]=\"resume.skills\">\n    </app-skill>\n\n</div>\n"

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = "<md-card>\n  <div class=\"row\">\n    <div *ngFor=\"let skill of firstList\" class=\"col-md-6 col-xs-12\">\n      <span>{{skill.name}}</span>\n      <md-progress-bar class=\"skill-bar\" mode=\"determinate\" value=\"{{skill.competence}}\"></md-progress-bar>\n    </div>\n    <div *ngFor=\"let skill of secondList\" class=\"col-md-6 col-xs-12\">\n      <span>{{skill.name}}</span>\n      <md-progress-bar class=\"skill-bar\" mode=\"determinate\" value=\"{{skill.competence}}\"></md-progress-bar>\n    </div>\n  </div>\n  <md-card-actions>\n    <button md-button color=\"primary\" (click)=\"newSkill()\">ADD SKILL</button>\n  </md-card-actions>\n</md-card>\n"

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = "<div class=\"summary\">\n    <img class=\"profile-picture\" [src]=\"profileUrl\" alt=\"Profile picture\">\n    <h2>{{name}}</h2>\n    <i>{{title}}</i>\n    <p>{{description}}</p>\n    <p class=\"contact-info\">\n        <md-icon>phone</md-icon> {{phone}}\n        <md-icon>email</md-icon> {{email}}\n    </p>\n    <button md-raised-button color=\"primary\" (click)=\"editSummary()\">Edit profile</button>\n</div>\n"

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(442);


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResumeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeService = (function () {
    function ResumeService() {
        this.STORAGE_KEY = 'resume';
        this.RESUME = {
            name: 'Mats Roshauw',
            title: 'Frontend engineer',
            pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/010/3a0/1d2671f.jpg',
            summary: 'Good stuff dev',
            email: 'mats@mail.com',
            phone: '0707-777777',
            positions: [{
                    company: 'Acando',
                    companyLogoUrl: 'https://media.licdn.com/media/AAEAAQAAAAAAAAeBAAAAJDViZDYyYTRmLWQ3YWUtNGRmZS04NTdlLTNlZTk2NTA0MmJiOA.png',
                    startDate: {
                        year: 2011,
                        month: 6
                    },
                    endDate: {
                        year: 2013,
                        month: 6
                    },
                    current: false,
                    summary: 'Consulting stuffs',
                    title: 'IT consultant'
                }, {
                    company: 'Seal',
                    companyLogoUrl: 'https://media.licdn.com/media/AAEAAQAAAAAAAAcWAAAAJGNkMTU0MzMxLTQ1MWEtNDZmZS05NTE3LTAyMDI5MmEwNTg0MQ.png',
                    startDate: {
                        year: 2013,
                        month: 6
                    },
                    current: true,
                    summary: 'Frontend stuffs',
                    title: 'Frontend developer'
                }],
            educations: [{
                    degree: 'Bachelor',
                    school: 'Växjö Unversity',
                    startDate: {
                        year: 2003,
                        month: 8
                    },
                    endDate: {
                        year: 2006,
                        month: 6
                    },
                    field: 'Computer science'
                }, {
                    degree: 'Master',
                    school: 'Chalmers Unversity',
                    startDate: {
                        year: 2006,
                        month: 8
                    },
                    endDate: {
                        year: 2007,
                        month: 1
                    },
                    field: 'Computer gaming'
                }],
            skills: [{
                    name: 'Angular',
                    competence: 90
                }, {
                    name: 'React',
                    competence: 60
                }, {
                    name: 'Javascript',
                    competence: 80
                }]
        };
        // Years and months to choose from when adding new content to resume
        this.years = [];
        this.months = [];
        // All posssible education degrees
        this.degrees = [
            'Associate’s Degree',
            'Bachelor’s Degree',
            'Master’s Degree',
            'Master of Business Administration (M.B.A)',
            'Juris Doctor (J.D.)',
            'Doctor of Medicine (M.D.)',
            'Doctor of Philosophy (Ph.D.)',
            'Engineer’s Degree',
            'Other'];
        // Create years to choose from, 1950 - current years
        var today = new Date();
        for (var year = 1950; year <= today.getFullYear(); year++) {
            this.years.push(year);
        }
        // To get the name of the month, use the browsers language and angular DatePipe,
        // the position in the array will tell which js month it is
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */](navigator.language);
        for (var month = 1; month <= 12; month++) {
            var dateString = "2016-" + (month < 10 ? '0' : '') + month + "-15";
            this.months.push(datePipe.transform(dateString, 'MMMM '));
        }
    }
    /**
     * Saves resume in browser
     *
     * @param {Resume}  resume  The resume to store
     */
    ResumeService.prototype.saveResume = function (resume) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(resume));
    };
    /**
     * Retrive last saved resume stored in browser
     *
     * @return {Resume}  Latest stored resume
     */
    ResumeService.prototype.retrieveResume = function () {
        var resumeAsString = localStorage.getItem(this.STORAGE_KEY);
        return resumeAsString ? JSON.parse(resumeAsString) : this.RESUME;
    };
    /**
     * Adds a position to the saved resume and saves it.
     *
     * @param   {Position}  position  The position to add
     * @return  {Array<Position>}     Updated positions array
     */
    ResumeService.prototype.addPosition = function (position) {
        var currentResume = this.retrieveResume();
        currentResume.positions.push(position);
        this.saveResume(currentResume);
        return currentResume.positions;
    };
    /**
     * Adds an education to the saved resume and saves it.
     *
     * @param   {Education}  education  The education to add
     * @return  {Array<Education>}      Updated educations array
     */
    ResumeService.prototype.addEducation = function (education) {
        var currentResume = this.retrieveResume();
        currentResume.educations.push(education);
        this.saveResume(currentResume);
        return currentResume.educations;
    };
    /**
     * Adds a skill to the saved resume and saves it.
     *
     * @param   {Skill}  skill  The skill to add
     * @return  {Array<Skill>}  Updated skills array
     */
    ResumeService.prototype.addSkill = function (skill) {
        var currentResume = this.retrieveResume();
        currentResume.skills.push(skill);
        this.saveResume(currentResume);
        return currentResume.skills;
    };
    /**
     * Update resume personal information.
     */
    ResumeService.prototype.updateSummary = function (name, profileUrl, description, title, phone, email) {
        var currentResume = this.retrieveResume();
        currentResume.name = name;
        currentResume.pictureUrl = profileUrl;
        currentResume.summary = description;
        currentResume.title = title;
        currentResume.phone = phone;
        currentResume.email = email;
        this.saveResume(currentResume);
        return currentResume;
    };
    ResumeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ResumeService);
    return ResumeService;
}());
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/resume.service.js.map

/***/ }

},[801]);
//# sourceMappingURL=main.bundle.map