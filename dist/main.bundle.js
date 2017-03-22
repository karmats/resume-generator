webpackJsonp([0,3],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    return ConfirmDialogComponent;
}());
ConfirmDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-confirm-dialog',
        template: __webpack_require__(813),
        styles: [__webpack_require__(805)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmDialogComponent);

var _a;
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/confirm-dialog.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(812),
        styles: [__webpack_require__(804)]
    })
], AppComponent);

//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/app.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 479;


/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(643);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/main.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__experience_experience_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__education_education_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__skill_skill_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__resume_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__confirm_dialog_confirm_dialog_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__project_project_component__ = __webpack_require__(644);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__["a" /* ResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__["a" /* SummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__["b" /* EditSummaryDialog */],
            __WEBPACK_IMPORTED_MODULE_11__experience_experience_component__["a" /* ExperienceComponent */],
            __WEBPACK_IMPORTED_MODULE_11__experience_experience_component__["b" /* PositionDialog */],
            __WEBPACK_IMPORTED_MODULE_12__education_education_component__["a" /* EducationDialog */],
            __WEBPACK_IMPORTED_MODULE_13__skill_skill_component__["a" /* SkillDialog */],
            __WEBPACK_IMPORTED_MODULE_12__education_education_component__["b" /* EducationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__skill_skill_component__["b" /* SkillComponent */],
            __WEBPACK_IMPORTED_MODULE_16__project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_16__project_project_component__["b" /* ProjectDialog */],
            __WEBPACK_IMPORTED_MODULE_15__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__education_education_component__["a" /* EducationDialog */],
            __WEBPACK_IMPORTED_MODULE_11__experience_experience_component__["b" /* PositionDialog */],
            __WEBPACK_IMPORTED_MODULE_13__skill_skill_component__["a" /* SkillDialog */],
            __WEBPACK_IMPORTED_MODULE_10__summary_summary_component__["b" /* EditSummaryDialog */],
            __WEBPACK_IMPORTED_MODULE_16__project_project_component__["b" /* ProjectDialog */],
            __WEBPACK_IMPORTED_MODULE_15__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__resume_service__["a" /* ResumeService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* PathLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/app.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EducationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationDialog; });
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
    function EducationComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
    };
    EducationComponent.prototype.newEducation = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "50%";
        var dialogRef = this.dialog.open(EducationDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.endDate = result.current ? null : result.endDate;
                _this.educations = _this.resumeService.addEducation(result);
            }
        });
    };
    EducationComponent.prototype.editEducation = function (education) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "50%";
        var dialogRef = this.dialog.open(EducationDialog, config);
        dialogRef.componentInstance.education = education;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.educations = result ? _this.resumeService.updateEducations(_this.educations) :
                _this.resumeService.retrieveResume().educations;
        });
    };
    EducationComponent.prototype.deleteEducation = function (education) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your work education at " + education.school + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.educations = _this.resumeService.removeEducation(education);
            }
        });
    };
    return EducationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], EducationComponent.prototype, "educations", void 0);
EducationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-education',
        template: __webpack_require__(814),
        styles: [__webpack_require__(806)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _c || Object])
], EducationComponent);

// Add new education dialog
var EducationDialog = (function () {
    function EducationDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.education = {
            school: '',
            field: '',
            current: true,
            startDate: this.resumeService.todayAsYearMonth(),
            endDate: this.resumeService.todayAsYearMonth(),
            degree: 'Other'
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
        this.degrees = resumeService.degrees;
    }
    EducationDialog.prototype.ngOnInit = function () {
        // Assume edit mode if school isn't blank
        this.editMode = this.education && this.education.school.length > 0;
    };
    EducationDialog.prototype.currentChanged = function () {
        if (!this.education.current && !this.education.endDate) {
            this.education.endDate = this.resumeService.todayAsYearMonth();
        }
    };
    return EducationDialog;
}());
EducationDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        template: "\n    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}education</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"education.school\"\n          placeholder=\"School\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"education.field\"\n          placeholder=\"Field of Study\">\n      </md-input-container>\n      <md-select [(ngModel)]=\"education.degree\" placeholder=\"Degree\">\n        <md-option *ngFor=\"let degree of degrees\" [value]=\"degree\"> {{degree}} </md-option>\n      </md-select>\n      <div class=\"date-container\">\n        <label>From</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"education.startDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"education.startDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n      <md-checkbox [(ngModel)]=\"education.current\" (change)=\"currentChanged()\">\n        Current education\n      </md-checkbox>\n      <div class=\"date-container\" *ngIf=\"!education.current\">\n        <label>To</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"education.endDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"education.endDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(education)\">Save</button>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _e || Object])
], EducationDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/education.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PositionDialog; });
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
    function ExperienceComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
    };
    ExperienceComponent.prototype.newPosition = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "50%";
        var dialogRef = this.dialog.open(PositionDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.endDate = result.current ? null : result.endDate;
                _this.positions = _this.resumeService.addPosition(result);
            }
        });
    };
    ExperienceComponent.prototype.editPosition = function (position) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "50%";
        var dialogRef = this.dialog.open(PositionDialog, config);
        dialogRef.componentInstance.position = position;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.positions = result ? _this.resumeService.updatePositions(_this.positions) :
                _this.resumeService.retrieveResume().positions;
        });
    };
    ExperienceComponent.prototype.deletePosition = function (position) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your work experience at " + position.company + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.positions = _this.resumeService.removePosition(position);
            }
        });
    };
    return ExperienceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], ExperienceComponent.prototype, "positions", void 0);
ExperienceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-experience',
        template: __webpack_require__(815),
        styles: [__webpack_require__(807)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _c || Object])
], ExperienceComponent);

// Add new position dialog
var PositionDialog = (function () {
    function PositionDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.position = {
            company: '',
            companyLogoUrl: '',
            current: true,
            startDate: this.resumeService.todayAsYearMonth(),
            endDate: this.resumeService.todayAsYearMonth(),
            summary: '',
            title: ''
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
    }
    PositionDialog.prototype.ngOnInit = function () {
        // Assume edit mode if company isn't blank
        this.editMode = this.position && this.position.company.length > 0;
    };
    PositionDialog.prototype.currentChanged = function () {
        if (!this.position.current && !this.position.endDate) {
            this.position.endDate = this.resumeService.todayAsYearMonth();
        }
    };
    return PositionDialog;
}());
PositionDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        template: "\n    <h3 md-dialog-title>{{ editMode ? 'Edit ' : 'Add new '}}position</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"position.company\"\n          placeholder=\"Company\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"position.companyLogoUrl\"\n          placeholder=\"Company Logo URL (Optional)\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"position.title\"\n          placeholder=\"Title\">\n      </md-input-container>\n      <md-input-container>\n        <textarea mdInput\n        [(ngModel)]=\"position.summary\"\n        rows=\"4\" placeholder=\"Summary\"></textarea>\n      </md-input-container>\n      <div class=\"date-container\">\n        <label>From</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"position.startDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"position.startDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n      <md-checkbox [(ngModel)]=\"position.current\" (change)=\"currentChanged()\">\n        Current job\n      </md-checkbox>\n      <div class=\"date-container\" *ngIf=\"!position.current\">\n        <label>To</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"position.endDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"position.endDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(position)\">Save</button>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _e || Object])
], PositionDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/experience.component.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(430);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(640);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/index.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
    };
    ProjectComponent.prototype.newProject = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "50%";
        var dialogRef = this.dialog.open(ProjectDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.endDate = result.current ? null : result.endDate;
                _this.projects = _this.resumeService.addProject(result);
            }
        });
    };
    ProjectComponent.prototype.editProject = function (project) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "50%";
        var dialogRef = this.dialog.open(ProjectDialog, config);
        dialogRef.componentInstance.project = project;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.projects = result ? _this.resumeService.updateProjects(_this.projects) :
                _this.resumeService.retrieveResume().projects;
        });
    };
    ProjectComponent.prototype.deleteProject = function (project) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your project " + project.name + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.projects = _this.resumeService.removeProject(project);
            }
        });
    };
    return ProjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], ProjectComponent.prototype, "projects", void 0);
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-project',
        template: __webpack_require__(816),
        styles: [__webpack_require__(808)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _c || Object])
], ProjectComponent);

// Add new project dialog
var ProjectDialog = (function () {
    function ProjectDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.project = {
            name: '',
            description: '',
            imageUrl: '',
            web: '',
            current: true,
            startDate: this.resumeService.todayAsYearMonth(),
            endDate: this.resumeService.todayAsYearMonth()
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
    }
    ProjectDialog.prototype.ngOnInit = function () {
        // Assume edit mode if name isn't blank
        this.editMode = this.project && this.project.name.length > 0;
    };
    ProjectDialog.prototype.currentChanged = function () {
        if (!this.project.current && !this.project.endDate) {
            this.project.endDate = this.resumeService.todayAsYearMonth();
        }
    };
    return ProjectDialog;
}());
ProjectDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        template: "\n    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}project</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"project.name\"\n          placeholder=\"Project name\">\n      </md-input-container>\n      <md-input-container>\n        <textarea mdInput\n          rows=\"4\"\n          [(ngModel)]=\"project.description\"\n          placeholder=\"Project description\">\n        </textarea>\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"project.imageUrl\"\n          placeholder=\"Project logo url (Optional)\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"project.web\"\n          placeholder=\"Project website (Optional)\">\n      </md-input-container>\n      <div class=\"date-container\">\n        <label class=\"select-label\">From</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"project.startDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"project.startDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n      <md-checkbox [(ngModel)]=\"project.current\" (change)=\"currentChanged()\">\n        Current project\n      </md-checkbox>\n      <div class=\"date-container\" *ngIf=\"!project.current\">\n        <label class=\"select-label\">To</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"project.endDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"project.endDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(project)\">Save</button>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _e || Object])
], ProjectDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/project.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
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
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-resume',
        template: __webpack_require__(817),
        styles: [__webpack_require__(809)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]) === "function" && _a || Object])
], ResumeComponent);

var _a;
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/resume.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SkillComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillDialog; });
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
    function SkillComponent(dialog, resumeService, viewContainerRef) {
        this.dialog = dialog;
        this.resumeService = resumeService;
        this.viewContainerRef = viewContainerRef;
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    SkillComponent.prototype.newSkill = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "50%";
        var dialogRef = this.dialog.open(SkillDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.skills = _this.resumeService.addSkill(result);
            }
        });
    };
    SkillComponent.prototype.editSkill = function (skill) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "50%";
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(SkillDialog, config);
        dialogRef.componentInstance.skill = skill;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.skills = result ? _this.resumeService.updateSkills(_this.skills) :
                _this.resumeService.retrieveResume().skills;
        });
    };
    SkillComponent.prototype.deleteSkill = function (skill) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your skill in " + skill.name + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.skills = _this.resumeService.removeSkill(skill);
            }
        });
    };
    return SkillComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], SkillComponent.prototype, "skills", void 0);
SkillComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-skill',
        template: __webpack_require__(818),
        styles: [__webpack_require__(810)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */]) === "function" && _c || Object])
], SkillComponent);

// Add new skill dialog
var SkillDialog = (function () {
    function SkillDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        var today = new Date();
        this.skill = {
            competence: 0,
            name: ''
        };
    }
    SkillDialog.prototype.ngOnInit = function () {
        // Assume edit mode if name isn't blank
        this.editMode = this.skill && this.skill.name.length > 0;
    };
    return SkillDialog;
}());
SkillDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        template: "\n    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}skill</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"skill.name\"\n          placeholder=\"Skill name\">\n      </md-input-container>\n      <md-slider\n        [(ngModel)]=\"skill.competence\"\n        min=\"0\"\n        max=\"100\"\n        thumbLabel\n        step=\"10\"\n        tickInterval=\"1\"></md-slider>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(skill)\">Save</button>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _e || Object])
], SkillDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/skill.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditSummaryDialog; });
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
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "50%";
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
    return SummaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", String)
], SummaryComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('picture'),
    __metadata("design:type", String)
], SummaryComponent.prototype, "profileUrl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", String)
], SummaryComponent.prototype, "description", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", String)
], SummaryComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", String)
], SummaryComponent.prototype, "phone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", String)
], SummaryComponent.prototype, "email", void 0);
SummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        selector: 'app-summary',
        template: __webpack_require__(819),
        styles: [__webpack_require__(811)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _c || Object])
], SummaryComponent);

// Edit summary dialog
var EditSummaryDialog = (function () {
    function EditSummaryDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return EditSummaryDialog;
}());
EditSummaryDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
        template: "\n    <h3 md-dialog-title>Edit summary</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.name\"\n          placeholder=\"Your name\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.profileUrl\"\n          placeholder=\"Url to profile picture\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.title\"\n          placeholder=\"Job title\">\n      </md-input-container>\n      <md-input-container>\n        <textarea mdInput\n        [(ngModel)]=\"summary.description\"\n        rows=\"4\" placeholder=\"Description of yourself\"></textarea>\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.phone\"\n          placeholder=\"Your phone number\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.email\"\n          placeholder=\"Your email adress\">\n      </md-input-container>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(summary)\">Ok</button>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _d || Object])
], EditSummaryDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/summary.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/environment.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/polyfills.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeService; });
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
    function ResumeService(location) {
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
            projects: [{
                    name: 'GoCD monitor',
                    description: 'Build monitor for Go cd build server. Techniques included ReactJS and NodeJS',
                    startDate: {
                        year: 2016,
                        month: 1
                    },
                    current: true,
                    imageUrl: 'https://www.gocd.io/assets/images/blog/gocd-versions/gocd_15_2-d6c97247.png',
                    web: 'https://github.com/karmats/gocd-monitor'
                },
                {
                    name: 'Resume Generator',
                    description: 'Generates a resume in material design, that can be stored and put up on your website. Written in Angular 2.',
                    startDate: {
                        year: 2016,
                        month: 10
                    },
                    current: true,
                    imageUrl: 'https://d13yacurqjgara.cloudfront.net/users/36126/screenshots/2228873/rb-logo_1x.png',
                    web: 'https://github.com/karmats/resume-generator'
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
            'Other'
        ];
        // Create years to choose from, 1950 - current years
        var today = new Date();
        for (var year = 1950; year <= today.getFullYear(); year++) {
            this.years.push(year);
        }
        // To get the name of the month, use the browsers language and angular DatePipe,
        // the position in the array will tell which js month it is
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */](navigator.language);
        for (var month = 1; month <= 12; month++) {
            var dateString = "2016-" + (month < 10 ? '0' : '') + month + "-15";
            this.months.push(datePipe.transform(dateString, 'MMMM '));
        }
        // Edit mode if path is /edit
        this.editMode = location.isCurrentPathEqualTo('/?edit');
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
     * Update positions.
     *
     * @param   {Array<Position>}   positions   The positons to update resume with
     * @return  {Array<Position>}               Updated positions
     */
    ResumeService.prototype.updatePositions = function (positions) {
        var currentResume = this.retrieveResume();
        currentResume.positions = positions;
        this.saveResume(currentResume);
        return currentResume.positions;
    };
    /**
     * Removes a position.
     *
     * @param   {Position}        position  The position to remove
     * @return  {Array<Position>}           Positions after the deletion
     */
    ResumeService.prototype.removePosition = function (position) {
        var currentResume = this.retrieveResume();
        currentResume.positions = currentResume.positions.filter(function (p) { return p.company !== position.company; });
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
     * Update educations.
     *
     * @param   {Array<Education>}   educations   The educations to update resume with
     * @return  {Array<Education>}                Updated educations
     */
    ResumeService.prototype.updateEducations = function (educations) {
        var currentResume = this.retrieveResume();
        currentResume.educations = educations;
        this.saveResume(currentResume);
        return currentResume.educations;
    };
    /**
     * Removes an education.
     *
     * @param   {Education}        education  The education to remove
     * @return  {Array<Education>}            Educations after the deletion
     */
    ResumeService.prototype.removeEducation = function (education) {
        var currentResume = this.retrieveResume();
        currentResume.educations = currentResume.educations.filter(function (e) { return e.school !== education.school; });
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
     * Update skills.
     *
     * @param   {Array<Skill>}   skills     The skills to update resume with
     * @return  {Array<Skill>}              Updated skills
     */
    ResumeService.prototype.updateSkills = function (skills) {
        var currentResume = this.retrieveResume();
        currentResume.skills = skills;
        this.saveResume(currentResume);
        return currentResume.skills;
    };
    /**
     * Removes a skill.
     *
     * @param   {Skill}             skill   The skill to remove
     * @return  {Array<Skill>}              Skills after the deletion
     */
    ResumeService.prototype.removeSkill = function (skill) {
        var currentResume = this.retrieveResume();
        currentResume.skills = currentResume.skills.filter(function (s) { return s.name !== skill.name; });
        this.saveResume(currentResume);
        return currentResume.skills;
    };
    /**
     * Adds a project to the saved resume and saves it.
     *
     * @param   {Project}         project   The project to add
     * @return  {Array<Project>}            Updated projects array
     */
    ResumeService.prototype.addProject = function (project) {
        var currentResume = this.retrieveResume();
        currentResume.projects.push(project);
        this.saveResume(currentResume);
        return currentResume.projects;
    };
    /**
     * Update projects.
     *
     * @param   {Array<Project>}    projects     The projects to update resume with
     * @return  {Array<Project>}                 Updated projects
     */
    ResumeService.prototype.updateProjects = function (projects) {
        var currentResume = this.retrieveResume();
        currentResume.projects = projects;
        this.saveResume(currentResume);
        return currentResume.projects;
    };
    /**
     * Removes a project.
     *
     * @param   {Project}             project   The project to remove
     * @return  {Array<Project>}                Projects after the deletion
     */
    ResumeService.prototype.removeProject = function (project) {
        var currentResume = this.retrieveResume();
        currentResume.projects = currentResume.projects.filter(function (s) { return s.name !== project.name; });
        this.saveResume(currentResume);
        return currentResume.projects;
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
    /**
     * @return {YearAndMonth}   Todays date as YearAndMonth object
     */
    ResumeService.prototype.todayAsYearMonth = function () {
        var today = new Date();
        return {
            year: today.getFullYear(),
            month: today.getMonth()
        };
    };
    return ResumeService;
}());
ResumeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */]) === "function" && _a || Object])
], ResumeService);

var _a;
//# sourceMappingURL=/Users/matros/Development/projects/other/resume-generator/src/resume.service.js.map

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = ".skill-bar {\n    margin-bottom: 30px;\n    margin-top: 10px;\n}\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = ".summary {\n    text-align: center;\n    background: #3949ab;\n    color: #fff;\n    padding: 20px;\n    margin: -30px;\n}\n.profile-picture {\n    border-radius: 200px;\n    width: 200px;\n    height: 200px;\n}\n\n.contact-info {\n    margin-top: 40px;\n}\n.contact-info md-icon {\n    vertical-align: middle;\n}\n.contact-info md-icon:not(:first-child) {\n    margin-left: 20px;\n}\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<app-resume>\n</app-resume>\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>Confirm</h3>\n<div md-dialog-content>\n  {{ message }}\n</div>\n<div md-dialog-actions>\n  <button md-button color=\"primary\" (click)=\"dialogRef.close(false)\">Cancel</button>\n  <button md-button color=\"primary\" (click)=\"dialogRef.close(true)\">Ok</button>\n</div>\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"section\">\n  <md-list>\n    <md-list-item *ngFor=\"let education of educations\">\n      <h3 md-line>{{education.field}} - {{education.school}}</h3>\n      <p md-line>{{months[education.startDate.month] + ' ' + education.startDate.year}} - {{education.endDate ? (months[education.endDate.month] + ' ' + education.endDate.year) : 'Present'}}</p>\n      <p md-line>{{education.degree}}</p>\n      <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"editEducation(education)\">\n        <md-icon>edit</md-icon>\n      </button>\n      <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"deleteEducation(education)\">\n        <md-icon>delete</md-icon>\n      </button>\n    </md-list-item>\n  </md-list>\n  <md-card-actions *ngIf=\"resumeService.editMode\">\n    <button md-button color=\"primary\" (click)=\"newEducation()\">Add Education</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"section\">\n  <md-list>\n    <md-list-item *ngFor=\"let position of positions\">\n      <img *ngIf=\"position.companyLogoUrl\" md-list-avatar [src]=\"position.companyLogoUrl\" alt=\"position.company\">\n      <h3 md-line>{{position.title}} - {{position.company}}</h3>\n      <p md-line>{{months[position.startDate.month] + ' ' + position.startDate.year}} - {{position.endDate ? (months[position.endDate.month] + ' ' + position.endDate.year) : 'Present'}}</p>\n      <p md-line>{{position.summary}}</p>\n      <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"editPosition(position)\">\n        <md-icon>edit</md-icon>\n      </button>\n      <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"deletePosition(position)\">\n        <md-icon>delete</md-icon>\n      </button>\n    </md-list-item>\n  </md-list>\n  <md-card-actions *ngIf=\"resumeService.editMode\">\n    <button md-button color=\"primary\" (click)=\"newPosition()\">Add Position</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"neg-margin-24\">\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between start\" fxLayoutWrap>\n      <md-card *ngFor=\"let project of projects\" fxFlex=\"45\">\n        <md-card-header>\n          <md-card-title>{{project.name}}</md-card-title>\n          <md-card-subtitle>\n            {{ months[project.startDate.month] + ' ' + project.startDate.year}} - {{project.endDate ? (months[project.endDate.month] + ' ' + project.endDate.year) : 'Present' }}\n          </md-card-subtitle>\n        </md-card-header>\n        <img md-card-image [src]=\"project.imageUrl\">\n        <md-card-content>\n          <p>\n            {{ project.description }}\n          </p>\n        </md-card-content>\n        <md-card-actions>\n          <a md-button color=\"primary\" [href]=\"project.web\" target=\"_project\" *ngIf=\"project.web\">Visit Page</a>\n          <button md-button color=\"primary\" (click)=\"editProject(project)\" *ngIf=\"resumeService.editMode\"><md-icon>edit</md-icon></button>\n          <button md-button color=\"primary\" (click)=\"deleteProject(project)\" *ngIf=\"resumeService.editMode\"><md-icon>delete</md-icon></button>\n        </md-card-actions>\n      </md-card>\n    </div>\n  </div>\n\n  <md-card *ngIf=\"resumeService.editMode\" class=\"neg-margin-24\">\n    <button md-button color=\"primary\" (click)=\"newProject()\" *ngIf=\"resumeService.editMode\">Add Project</button>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<!-- Summary -->\n<div class=\"app-content\">\n    <app-summary [picture]=\"resume.pictureUrl\" [name]=\"resume.name\" [description]=\"resume.summary\" [title]=\"resume.title\" [phone]=\"resume.phone\"\n        [email]=\"resume.email\">\n    </app-summary>\n\n    <!-- Work experience -->\n    <app-experience [positions]=\"resume.positions\">\n    </app-experience>\n\n    <!-- Education -->\n    <app-education [educations]=\"resume.educations\">\n    </app-education>\n\n    <!-- Skills -->\n    <app-skill [skills]=\"resume.skills\">\n    </app-skill>\n\n    <!-- Projects -->\n    <app-project [projects]=\"resume.projects\">\n    </app-project>\n\n</div>\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"section\">\n  <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n      fxLayoutAlign=\"space-between stretch\" fxLayoutWrap>\n    <div *ngFor=\"let skill of skills\" fxFlex=\"45\">\n      <span>{{skill.name}}</span>\n      <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"editSkill(skill)\">\n        <md-icon>edit</md-icon>\n      </button>\n      <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"deleteSkill(skill)\">\n        <md-icon>delete</md-icon>\n      </button>\n      <md-progress-bar class=\"skill-bar\" color=\"primary\" mode=\"determinate\" value=\"{{skill.competence}}\"></md-progress-bar>\n    </div>\n  </div>\n  <md-card-actions *ngIf=\"resumeService.editMode\">\n    <button md-button color=\"primary\" (click)=\"newSkill()\">Add Skill</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<div class=\"summary\">\n    <img class=\"profile-picture\" [src]=\"profileUrl\" alt=\"Profile picture\">\n    <h2>{{name}}</h2>\n    <i>{{title}}</i>\n    <p>{{description}}</p>\n    <p class=\"contact-info\">\n        <md-icon>phone</md-icon> {{phone}}\n        <md-icon>email</md-icon> {{email}}\n    </p>\n    <button *ngIf=\"resumeService.editMode\" md-raised-button color=\"primary\" (click)=\"editSummary()\">Edit profile</button>\n</div>\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(480);


/***/ })

},[867]);
//# sourceMappingURL=main.bundle.map