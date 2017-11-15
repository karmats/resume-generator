webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-resume>\n</app-resume>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__summary_summary_component__ = __webpack_require__("../../../../../src/app/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__experience_experience_component__ = __webpack_require__("../../../../../src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__skill_skill_component__ = __webpack_require__("../../../../../src/app/skill/skill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__summary_summary_component__["b" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__summary_summary_component__["a" /* EditSummaryDialog */],
                __WEBPACK_IMPORTED_MODULE_13__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_13__experience_experience_component__["b" /* PositionDialog */],
                __WEBPACK_IMPORTED_MODULE_14__education_education_component__["b" /* EducationDialog */],
                __WEBPACK_IMPORTED_MODULE_15__skill_skill_component__["b" /* SkillDialog */],
                __WEBPACK_IMPORTED_MODULE_14__education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__skill_skill_component__["a" /* SkillComponent */],
                __WEBPACK_IMPORTED_MODULE_18__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_18__project_project_component__["b" /* ProjectDialog */],
                __WEBPACK_IMPORTED_MODULE_17__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__education_education_component__["b" /* EducationDialog */],
                __WEBPACK_IMPORTED_MODULE_13__experience_experience_component__["b" /* PositionDialog */],
                __WEBPACK_IMPORTED_MODULE_15__skill_skill_component__["b" /* SkillDialog */],
                __WEBPACK_IMPORTED_MODULE_12__summary_summary_component__["a" /* EditSummaryDialog */],
                __WEBPACK_IMPORTED_MODULE_18__project_project_component__["b" /* ProjectDialog */],
                __WEBPACK_IMPORTED_MODULE_17__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatMenuModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__resume_service__["a" /* ResumeService */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["e" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["h" /* PathLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Confirm</h3>\n<div mat-dialog-content>\n  {{ message }}\n</div>\n<div mat-dialog-actions>\n  <button mat-button color=\"primary\" (click)=\"dialogRef.close(false)\">Cancel</button>\n  <button mat-button color=\"primary\" (click)=\"dialogRef.close(true)\">Ok</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h1><mat-icon>school</mat-icon>Education</h1>\n  <mat-card>\n    <mat-list>\n      <mat-list-item *ngFor=\"let education of educations\">\n        <h3 mat-line>{{education.field}} - {{education.school}}</h3>\n        <p mat-line class=\"date-label\">{{months[education.startDate.month] + ' ' + education.startDate.year}} - {{education.endDate ? (months[education.endDate.month] + ' ' + education.endDate.year) : 'Present'}}</p>\n        <p mat-line>{{education.degree ? education.degree : '-'}}</p>\n        <button *ngIf=\"resumeService.editMode\" mat-icon-button color=\"primary\" (click)=\"editEducation(education)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button *ngIf=\"resumeService.editMode\" mat-icon-button color=\"primary\" (click)=\"deleteEducation(education)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-list-item>\n    </mat-list>\n    <mat-card-actions *ngIf=\"resumeService.editMode\">\n      <button mat-button color=\"primary\" (click)=\"newEducation()\">Add Education</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EducationDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EducationComponent = /** @class */ (function () {
    function EducationComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
        this.educations = this.educations || [];
        this.sortEducations();
    };
    EducationComponent.prototype.newEducation = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.width = "75vw";
        var dialogRef = this.dialog.open(EducationDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.endDate = result.current ? null : result.endDate;
                _this.educations = _this.resumeService.addEducation(result);
                _this.sortEducations();
            }
        });
    };
    EducationComponent.prototype.editEducation = function (education) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "75vw";
        var dialogRef = this.dialog.open(EducationDialog, config);
        dialogRef.componentInstance.education = education;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.educations = result ? _this.resumeService.updateEducations(_this.educations) :
                _this.resumeService.retrieveResume().educations;
            _this.sortEducations();
        });
    };
    EducationComponent.prototype.deleteEducation = function (education) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your work education at " + education.school + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.educations = _this.resumeService.removeEducation(education);
            }
        });
    };
    // Sort by start date
    EducationComponent.prototype.sortEducations = function () {
        this.educations.sort(function (a, b) {
            return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year :
                b.startDate.month - a.startDate.month;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], EducationComponent.prototype, "educations", void 0);
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__("../../../../../src/app/education/education.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */]])
    ], EducationComponent);
    return EducationComponent;
}());

// Add new education dialog
var EducationDialog = /** @class */ (function () {
    function EducationDialog(dialogRef, resumeService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.degreeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.filteredDegrees = this.degreeCtrl.valueChanges
            .startWith(null)
            .map(function (val) { return _this.filterDegrees(val); });
        this.education = {
            school: '',
            field: '',
            current: true,
            startDate: this.resumeService.todayAsYearMonth(),
            endDate: this.resumeService.todayAsYearMonth(),
            degree: ''
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
        this.degrees = resumeService.degrees;
    }
    EducationDialog.prototype.ngOnInit = function () {
        // Assume edit mode if school isn't blank
        this.editMode = this.education && this.education.school.length > 0;
    };
    EducationDialog.prototype.filterDegrees = function (val) {
        return val ? this.degrees.filter(function (s) { return new RegExp(val, 'gi').test(s); }) : this.degrees;
    };
    EducationDialog.prototype.currentChanged = function () {
        if (!this.education.current && !this.education.endDate) {
            this.education.endDate = this.resumeService.todayAsYearMonth();
        }
    };
    EducationDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <h3 mat-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}education</h3>\n    <div mat-dialog-content fxLayout=\"column\">\n\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"education.school\"\n          placeholder=\"School\">\n      </mat-input-container>\n\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"education.field\"\n          placeholder=\"Field of Study\">\n      </mat-input-container>\n\n      <mat-input-container>\n        <input matInput\n              [(ngModel)]=\"education.degree\"\n              placeholder=\"Degree\"\n              [formControl]=\"degreeCtrl\"\n              [matAutocomplete]=\"auto\">\n      </mat-input-container>\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let degree of filteredDegrees | async\" [value]=\"degree\">\n          {{ degree }}\n        </mat-option>\n      </mat-autocomplete>\n\n      <div class=\"date-container\">\n        <label>From</label>\n        <div fxLayout=\"row\">\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"education.startDate.year\" placeholder=\"Year\">\n            <mat-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </mat-option>\n          </mat-select>\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"education.startDate.month\" placeholder=\"Month\">\n            <mat-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </mat-option>\n          </mat-select>\n        </div>\n      </div>\n      <mat-checkbox [(ngModel)]=\"education.current\" (change)=\"currentChanged()\">\n        Current education\n      </mat-checkbox>\n      <div class=\"date-container\" *ngIf=\"!education.current\">\n        <label>To</label>\n        <div fxLayout=\"row\">\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"education.endDate.year\" placeholder=\"Year\">\n            <mat-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </mat-option>\n          </mat-select>\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"education.endDate.month\" placeholder=\"Month\">\n            <mat-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </mat-option>\n          </mat-select>\n        </div>\n      </div>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close(education)\">Save</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */]])
    ], EducationDialog);
    return EducationDialog;
}());



/***/ }),

/***/ "../../../../../src/app/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h1><mat-icon>work</mat-icon>Work experience</h1>\n  <mat-card>\n    <mat-list>\n      <mat-list-item *ngFor=\"let position of positions\">\n        <h3 mat-line>{{position.title}} - {{position.company}}</h3>\n        <p mat-line class=\"date-label\">{{months[position.startDate.month] + ' ' + position.startDate.year}} - {{position.endDate ? (months[position.endDate.month] + ' ' + position.endDate.year) : 'Present'}}</p>\n        <p mat-line class=\"text-content\">{{position.summary ? position.summary : '-'}}</p>\n        <button *ngIf=\"resumeService.editMode\" mat-icon-button color=\"primary\" (click)=\"editPosition(position)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button *ngIf=\"resumeService.editMode\" mat-icon-button color=\"primary\" (click)=\"deletePosition(position)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-list-item>\n    </mat-list>\n    <mat-card-actions *ngIf=\"resumeService.editMode\">\n      <button mat-button color=\"primary\" (click)=\"newPosition()\">Add Position</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PositionDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
        this.positions = this.positions || [];
        this.sortPositions();
    };
    ExperienceComponent.prototype.newPosition = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.width = "75vw";
        var dialogRef = this.dialog.open(PositionDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.endDate = result.current ? null : result.endDate;
                _this.positions = _this.resumeService.addPosition(result);
                _this.sortPositions();
            }
        });
    };
    ExperienceComponent.prototype.editPosition = function (position) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "75vw";
        var dialogRef = this.dialog.open(PositionDialog, config);
        dialogRef.componentInstance.position = position;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.positions = result ? _this.resumeService.updatePositions(_this.positions) :
                _this.resumeService.retrieveResume().positions;
            _this.sortPositions();
        });
    };
    ExperienceComponent.prototype.deletePosition = function (position) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your work experience at " + position.company + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.positions = _this.resumeService.removePosition(position);
            }
        });
    };
    // Sort by start date
    ExperienceComponent.prototype.sortPositions = function () {
        this.positions.sort(function (a, b) {
            return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year :
                b.startDate.month - a.startDate.month;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], ExperienceComponent.prototype, "positions", void 0);
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__("../../../../../src/app/experience/experience.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());

// Add new position dialog
var PositionDialog = /** @class */ (function () {
    function PositionDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.position = {
            company: '',
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
    PositionDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <h3 mat-dialog-title>{{ editMode ? 'Edit ' : 'Add new '}}position</h3>\n    <div mat-dialog-content fxLayout=\"column\">\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"position.company\"\n          placeholder=\"Company\">\n      </mat-input-container>\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"position.title\"\n          placeholder=\"Title\">\n      </mat-input-container>\n      <mat-input-container>\n        <textarea matInput\n        [(ngModel)]=\"position.summary\"\n        rows=\"4\" placeholder=\"Summary\"></textarea>\n      </mat-input-container>\n      <div class=\"date-container\">\n        <label>From</label>\n        <div fxLayout=\"row\">\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"position.startDate.year\" placeholder=\"Year\">\n            <mat-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </mat-option>\n          </mat-select>\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"position.startDate.month\" placeholder=\"Month\">\n            <mat-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </mat-option>\n          </mat-select>\n        </div>\n      </div>\n      <mat-checkbox [(ngModel)]=\"position.current\" (change)=\"currentChanged()\">\n        Current job\n      </mat-checkbox>\n      <div class=\"date-container\" *ngIf=\"!position.current\">\n        <label>To</label>\n        <div fxLayout=\"row\">\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"position.endDate.year\" placeholder=\"Year\">\n            <mat-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </mat-option>\n          </mat-select>\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"position.endDate.month\" placeholder=\"Month\">\n            <mat-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </mat-option>\n          </mat-select>\n        </div>\n      </div>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close(position)\">Save</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]])
    ], PositionDialog);
    return PositionDialog;
}());



/***/ }),

/***/ "../../../../../src/app/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialType; });
var SocialType;
(function (SocialType) {
    SocialType["LINKEDIN"] = "LINKEDIN";
    SocialType["GITHUB"] = "GITHUB";
    SocialType["TWITTER"] = "TWITTER";
    SocialType["FACEBOOK"] = "FACEBOOK";
    SocialType["INSTAGRAM"] = "INSTAGRAM";
    SocialType["UNKNOWN"] = "UNKNOWN";
})(SocialType || (SocialType = {}));


/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h1><mat-icon>trending_up</mat-icon>Projects</h1>\n  <div *ngIf=\"resumeService.editMode\">\n    <button mat-raised-button color=\"primary\" (click)=\"newProject()\" *ngIf=\"resumeService.editMode\">Add Project</button>\n  </div>\n  <div class=\"masonry\">\n    <div class=\"item\" *ngFor=\"let project of projects\">\n      <mat-card>\n        <button *ngIf=\"resumeService.editMode\" mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"project-menu\">\n          <mat-icon >more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"editProject(project)\">Edit</button>\n          <button mat-menu-item (click)=\"deleteProject(project)\">Delete</button>\n        </mat-menu>\n        <mat-card-header>\n          <mat-card-subtitle>\n            {{ months[project.startDate.month] + ' ' + project.startDate.year}} - {{project.endDate ? (months[project.endDate.month] + ' ' + project.endDate.year) : 'Present' }}\n          </mat-card-subtitle>\n          <mat-card-title>{{project.name}}</mat-card-title>\n          <div class=\"project-logo\">\n            <img *ngIf=\"project.imageUrl\" [src]=\"project.imageUrl\">\n          </div>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            {{ project.description }}\n          </p>\n          <mat-chip-list>\n            <mat-chip *ngFor=\"let tag of project.tags\" color=\"primary\" [selected]=\"tag.highlighted\">\n              {{tag.name}}\n            </mat-chip>\n          </mat-chip-list>\n        </mat-card-content>\n        <mat-card-actions>\n          <a mat-button color=\"primary\" [href]=\"project.web\" target=\"_project\" *ngIf=\"project.web\">Visit Page</a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.projects = this.projects || [];
        this.months = this.resumeService.months;
        this.sortProjects();
    };
    ProjectComponent.prototype.newProject = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogConfig */]();
        config.width = "75vw";
        var dialogRef = this.dialog.open(ProjectDialog, config);
        dialogRef.componentInstance.skills = this.skills.map(function (s) { return s ? s.name : ''; });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var project = result.project;
                project.endDate = project.current ? null : project.endDate;
                project.tags = result.tags;
                _this.projects = _this.resumeService.addProject(project);
                _this.sortProjects();
            }
        });
    };
    ProjectComponent.prototype.editProject = function (project) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "75vw";
        var dialogRef = this.dialog.open(ProjectDialog, config);
        dialogRef.componentInstance.project = project;
        dialogRef.componentInstance.skills = this.skills.map(function (s) { return s.name; });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                project.tags = result.tags;
                _this.projects = result ? _this.resumeService.updateProjects(_this.projects) :
                    _this.resumeService.retrieveResume().projects;
                _this.sortProjects();
            }
        });
    };
    ProjectComponent.prototype.deleteProject = function (project) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your project " + project.name + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.projects = _this.resumeService.removeProject(project);
            }
        });
    };
    // Sort by start date
    ProjectComponent.prototype.sortProjects = function () {
        this.projects.sort(function (a, b) {
            return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year :
                b.startDate.month - a.startDate.month;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], ProjectComponent.prototype, "projects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], ProjectComponent.prototype, "skills", void 0);
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/project/project.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());

// Add new project dialog
var ProjectDialog = /** @class */ (function () {
    function ProjectDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.tagControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.project = {
            name: '',
            description: '',
            imageUrl: '',
            web: '',
            current: true,
            tags: [],
            startDate: this.resumeService.todayAsYearMonth(),
            endDate: this.resumeService.todayAsYearMonth()
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
    }
    ProjectDialog.prototype.ngOnInit = function () {
        var _this = this;
        // Assume edit mode if name isn't blank
        this.editMode = this.project && this.project.name.length > 0;
        this.tags = this.project.tags ? this.project.tags.map(function (t) { return Object.assign({}, t); }) : [];
        // Skills for tag autocomplete
        this.filteredSkills = this.tagControl.valueChanges
            .startWith(null)
            .map(function (val) { return _this.filter(val); });
    };
    ProjectDialog.prototype.filter = function (val) {
        var _this = this;
        return this.skills
            .filter(function (s) { return _this.tags.filter(function (t) { return t.name === s; }).length === 0; })
            .filter(function (s) { return val ? s.toLowerCase().indexOf(val.toLowerCase()) === 0 : true; });
    };
    ProjectDialog.prototype.addTag = function (event) {
        var input = event.input;
        var value = (event.option ? event.option.value : event.value || '').trim();
        if (value) {
            this.tags.push({ name: value, highlighted: false });
        }
        // Reset input value
        this.autoTrigger.closePanel();
        this.tagControl.setValue('');
        if (input) {
            input.value = '';
        }
    };
    ProjectDialog.prototype.removeTag = function (tag) {
        this.tags = this.tags.filter(function (t) { return t !== tag; });
    };
    ProjectDialog.prototype.toggleTagHighlight = function (tag) {
        tag.highlighted = !tag.highlighted;
    };
    ProjectDialog.prototype.currentChanged = function () {
        if (!this.project.current && !this.project.endDate) {
            this.project.endDate = this.resumeService.todayAsYearMonth();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteTrigger */])
    ], ProjectDialog.prototype, "autoTrigger", void 0);
    ProjectDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <h3 mat-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}project</h3>\n    <div mat-dialog-content fxLayout=\"column\">\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"project.name\"\n          placeholder=\"Project name\">\n      </mat-input-container>\n      <mat-input-container>\n        <textarea matInput\n          rows=\"4\"\n          [(ngModel)]=\"project.description\"\n          placeholder=\"Project description\">\n        </textarea>\n      </mat-input-container>\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"project.imageUrl\"\n          placeholder=\"Project logo url (Optional)\">\n      </mat-input-container>\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"project.web\"\n          placeholder=\"Project website (Optional)\">\n      </mat-input-container>\n\n      <mat-form-field>\n        <mat-chip-list #tagList>\n          <mat-chip *ngFor=\"let tag of tags\" removable=\"true\" (remove)=\"removeTag(tag)\">\n            <mat-checkbox [checked]=\"tag.highlighted\" (click)=\"toggleTagHighlight(tag)\">{{tag.name}}</mat-checkbox>\n            <mat-icon matChipRemove>cancel</mat-icon>\n          </mat-chip>\n          <input matInput \n            placeholder=\"Add tag...\"\n            [formControl]=\"tagControl\"\n            [matAutocomplete]=\"auto\"\n            [matChipInputFor]=\"tagList\"\n            [matChipInputAddOnBlur]=\"false\"\n            (optionSelected)=\"addTag($event)\"\n            (matChipInputTokenEnd)=\"addTag($event)\" />\n        </mat-chip-list>\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"addTag($event)\">\n          <mat-option *ngFor=\"let skill of filteredSkills | async\" [value]=\"skill\"  >\n              {{ skill }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n\n      <div class=\"date-container\">\n        <label class=\"select-label\">From</label>\n        <div fxLayout=\"row\">\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"project.startDate.year\" placeholder=\"Year\">\n            <mat-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </mat-option>\n          </mat-select>\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"project.startDate.month\" placeholder=\"Month\">\n            <mat-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </mat-option>\n          </mat-select>\n        </div>\n      </div>\n      <mat-checkbox [(ngModel)]=\"project.current\" (change)=\"currentChanged()\">\n        Current project\n      </mat-checkbox>\n      <div class=\"date-container\" *ngIf=\"!project.current\">\n        <label class=\"select-label\">To</label>\n        <div fxLayout=\"row\">\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"project.endDate.year\" placeholder=\"Year\">\n            <mat-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </mat-option>\n          </mat-select>\n          <mat-select fxFlex=\"50\" [(ngModel)]=\"project.endDate.month\" placeholder=\"Month\">\n            <mat-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </mat-option>\n          </mat-select>\n        </div>\n      </div>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close({ project: project, tags: tags})\">Save</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */]])
    ], ProjectDialog);
    return ProjectDialog;
}());



/***/ }),

/***/ "../../../../../src/app/resume.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeService = /** @class */ (function () {
    function ResumeService(location) {
        this.STORAGE_KEY = 'resume';
        this.THEME_KEY = 'theme';
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
        // EventEmitter to let components know when the resume is changed
        this.resumeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](false);
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
        // Tell components resume has changed
        this.resumeChanged.emit(resume);
    };
    /**
     * Retrive last saved resume stored in browser
     *
     * @return {Resume}  Latest stored resume
     */
    ResumeService.prototype.retrieveResume = function () {
        var resumeAsString = localStorage.getItem(this.STORAGE_KEY);
        return resumeAsString ? JSON.parse(resumeAsString) : {};
    };
    /**
     * Adds a position to the saved resume and saves it.
     *
     * @param   {Position}  position  The position to add
     * @return  {Array<Position>}     Updated positions array
     */
    ResumeService.prototype.addPosition = function (position) {
        var currentResume = this.retrieveResume();
        currentResume.positions = (currentResume.positions || []).concat(position);
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
        currentResume.educations = (currentResume.educations || []).concat(education);
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
        currentResume.skills = (currentResume.skills || []).concat(skill);
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
        currentResume.projects = (currentResume.projects || []).concat(project);
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
     * Stores current app theme
     *
     * @param themeName Name of the theme (css-class)
     * @param isDark    True if it's dark themed
     */
    ResumeService.prototype.updateTheme = function (themeName, isDark) {
        localStorage.setItem(this.THEME_KEY, JSON.stringify({ themeName: themeName, isDark: isDark }));
    };
    /**
     * Retrieve last saved theme
     *
     * @return Theme name and if it's dark
     */
    ResumeService.prototype.retrieveTheme = function () {
        var themeAsString = localStorage.getItem(this.THEME_KEY);
        return themeAsString ? JSON.parse(themeAsString) : {};
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
    ResumeService.prototype.updateSummary = function (name, profileUrl, description, title, phone, email, socials) {
        var currentResume = this.retrieveResume();
        currentResume.name = name;
        currentResume.pictureUrl = profileUrl;
        currentResume.summary = description;
        currentResume.title = title;
        currentResume.phone = phone;
        currentResume.email = email;
        currentResume.social = socials;
        this.saveResume(currentResume);
        return currentResume;
    };
    /**
     * Parse and save a resume stored in the standardized json resume format (https://github.com/jsonresume/resume-schema/blob/0.0.0/schema.json)
     *
     * @param jsonResume A json resume object
     */
    ResumeService.prototype.parseAndSaveJsonResume = function (jsonResume) {
        var _this = this;
        var basics = jsonResume.basics;
        var resume = {
            name: basics.name,
            title: basics.label,
            summary: basics.summary,
            phone: basics.phone,
            email: basics.email,
            pictureUrl: basics.picture,
            social: basics.profiles.map(function (profile) {
                var network = profile.network.toLowerCase();
                var social = { url: profile.url, type: __WEBPACK_IMPORTED_MODULE_2__models__["a" /* SocialType */].UNKNOWN };
                if (network.includes('twitter')) {
                    social.type = __WEBPACK_IMPORTED_MODULE_2__models__["a" /* SocialType */].TWITTER;
                }
                else if (network.includes('facebook')) {
                    social.type = __WEBPACK_IMPORTED_MODULE_2__models__["a" /* SocialType */].FACEBOOK;
                }
                else if (network.includes('linkedin')) {
                    social.type = __WEBPACK_IMPORTED_MODULE_2__models__["a" /* SocialType */].LINKEDIN;
                }
                else if (network.includes('github')) {
                    social.type = __WEBPACK_IMPORTED_MODULE_2__models__["a" /* SocialType */].GITHUB;
                }
                else if (network.includes('instagram')) {
                    social.type = __WEBPACK_IMPORTED_MODULE_2__models__["a" /* SocialType */].INSTAGRAM;
                }
                return social;
            }),
            positions: jsonResume.work.map(function (w) {
                var sd = _this.dateAsYearMonth(new Date(w.startDate));
                var ed = w.endDate ? _this.dateAsYearMonth(new Date(w.endDate)) : null;
                return {
                    title: w.position,
                    summary: w.summary,
                    startDate: sd,
                    endDate: ed,
                    current: ed === null,
                    company: w.company
                };
            }),
            educations: jsonResume.education.map(function (e) {
                var sd = _this.dateAsYearMonth(new Date(e.startDate));
                var ed = e.endDate ? _this.dateAsYearMonth(new Date(e.endDate)) : null;
                return {
                    school: e.institution,
                    field: e.area,
                    startDate: sd,
                    endDate: ed,
                    current: ed === null,
                    degree: e.studyType
                };
            }),
            skills: jsonResume.skills.map(function (s) {
                return {
                    name: s.name,
                    competence: 0
                };
            }),
            projects: jsonResume.projects.map(function (p) {
                var sd = _this.dateAsYearMonth(new Date(p.startDate));
                var ed = p.endDate ? _this.dateAsYearMonth(new Date(p.endDate)) : null;
                return {
                    name: p.name,
                    description: p.summary,
                    startDate: sd,
                    endDate: ed,
                    current: ed === null,
                    web: p.url
                };
            })
        };
        this.saveResume(resume);
    };
    /**
     * @return {YearAndMonth}   Todays date as YearAndMonth object
     */
    ResumeService.prototype.todayAsYearMonth = function () {
        return this.dateAsYearMonth(new Date());
    };
    /**
     * @return  {YearAndMonth}   A date as YearAndMonth object
     */
    ResumeService.prototype.dateAsYearMonth = function (d) {
        return d ? {
            year: d.getUTCFullYear(),
            month: d.getUTCMonth()
        } : null;
    };
    ResumeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */]])
    ], ResumeService);
    return ResumeService;
}());



/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Summary -->\n<div class=\"app-content\" [ngClass]=\"cssClasses()\">\n    <div *ngIf=\"resumeService.editMode\" class=\"theme-switch\">\n        <mat-form-field>\n            <mat-select placeholder=\"Theme\" [(ngModel)]=\"currentTheme\" (change)=\"themeChanged(currentTheme, darkTheme)\">\n                <mat-option *ngFor=\"let theme of themes\" [value]=\"theme\">{{ theme.name }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-slide-toggle [(ngModel)]=\"darkTheme\" (change)=\"themeChanged(currentTheme, darkTheme)\">Dark</mat-slide-toggle>\n    </div>\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between stretch\" fxLayoutWrap>\n        <aside fxFlex=\"30\" class=\"summary\">\n            <div class=\"information-text\" *ngIf=\"resumeEmpty\">\n                It seems that it's your first time here, welcome! Start by filling in some information about your self, or import your profile from linkedin. Save the page when you're happy with the result :)\n            </div>\n            <app-summary [picture]=\"resume.pictureUrl\" [name]=\"resume.name\" [description]=\"resume.summary\" [title]=\"resume.title\" [phone]=\"resume.phone\"\n                [email]=\"resume.email\" [socials]=\"resume.social\" [skills]=\"resume.skills\">\n            </app-summary>\n        </aside>\n\n\n        <section fxFlex=\"70\">\n            <!-- Work experience -->\n            <app-experience [positions]=\"resume.positions\">\n            </app-experience>\n\n            <!-- Education -->\n            <app-education [educations]=\"resume.educations\">\n            </app-education>\n\n            <!-- Projects -->\n            <app-project [projects]=\"resume.projects\" [skills]=\"resume.skills\">\n            </app-project>\n        </section>\n    </div>\n\n    <!-- Footer -->\n    <div class=\"footer\">\n        Generated with <a class=\"mat-link\" href=\"https://github.com/karmats/resume-generator\" target=\"_homepage\">resume generator</a>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(resumeService) {
        this.resumeService = resumeService;
        this.themes = [
            { name: 'Blue grey', value: 'blue-grey' },
            { name: 'Indigo', value: 'indigo' },
            { name: 'Light blue', value: 'light-blue' },
            { name: 'Orange', value: 'orange' },
            { name: 'Purple', value: 'purple' },
            { name: 'Teal', value: 'teal' }
        ];
        this.darkTheme = false;
        this.resumeEmpty = true;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resume = this.resumeService.retrieveResume();
        this.resumeEmpty = Object.keys(this.resume).length <= 0;
        // Listen to resume changed events
        this.resumeService.resumeChanged.subscribe(function (resume) {
            _this.resume = resume;
            _this.resumeEmpty = Object.keys(resume).length <= 0;
        });
        // Retrieve theme
        var theme = this.resumeService.retrieveTheme();
        if (theme && theme.themeName) {
            this.currentTheme = this.themes.filter(function (t) { return t.value === theme.themeName; }).pop();
            this.darkTheme = theme.isDark;
        }
        else {
            // Indigo default theme
            this.currentTheme = this.themes[1];
            this.darkTheme = false;
        }
        this.darkTheme ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    };
    ResumeComponent.prototype.cssClasses = function () {
        return this.currentTheme.value + (this.darkTheme ? ' dark' : '');
    };
    ResumeComponent.prototype.themeChanged = function (theme, dark) {
        this.resumeService.updateTheme(this.currentTheme.value, this.darkTheme);
        this.darkTheme ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/resume/resume.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skill/skill.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign=\"space-between stretch\" fxLayoutWrap>\n  <div *ngFor=\"let skill of skills\" fxFlex=\"90\">\n    <span>{{skill.name}}</span>\n    <button *ngIf=\"resumeService.editMode\" mat-icon-button color=\"secondary\" (click)=\"editSkill(skill)\">\n      <mat-icon>edit</mat-icon>\n    </button>\n    <button *ngIf=\"resumeService.editMode\" mat-icon-button color=\"secondary\" (click)=\"deleteSkill(skill)\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <mat-progress-bar class=\"skill-bar\" color=\"primary\" mode=\"determinate\" value=\"{{skill.competence}}\"></mat-progress-bar>\n  </div>\n</div>\n<mat-card-actions *ngIf=\"resumeService.editMode\">\n  <button mat-button color=\"secondary\" (click)=\"newSkill()\">Add Skill</button>\n</mat-card-actions>\n"

/***/ }),

/***/ "../../../../../src/app/skill/skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SkillDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkillComponent = /** @class */ (function () {
    function SkillComponent(dialog, resumeService, viewContainerRef) {
        this.dialog = dialog;
        this.resumeService = resumeService;
        this.viewContainerRef = viewContainerRef;
    }
    SkillComponent.prototype.ngOnInit = function () {
        this.skills = this.skills || [];
        this.sortSkills();
    };
    SkillComponent.prototype.newSkill = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.width = "75vw";
        var dialogRef = this.dialog.open(SkillDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.skills = _this.resumeService.addSkill(result);
                _this.sortSkills();
            }
        });
    };
    SkillComponent.prototype.editSkill = function (skill) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.width = "75vw";
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(SkillDialog, config);
        dialogRef.componentInstance.skill = skill;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.skills = result ? _this.resumeService.updateSkills(_this.skills) :
                _this.resumeService.retrieveResume().skills;
            _this.sortSkills();
        });
    };
    SkillComponent.prototype.deleteSkill = function (skill) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your skill in " + skill.name + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.skills = _this.resumeService.removeSkill(skill);
            }
        });
    };
    // Sort by competence first, name second
    SkillComponent.prototype.sortSkills = function () {
        this.skills.sort(function (a, b) {
            if (a.competence !== b.competence) {
                return b.competence - a.competence;
            }
            return a.name > b.name ? 1 : -1;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], SkillComponent.prototype, "skills", void 0);
    SkillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-skill',
            template: __webpack_require__("../../../../../src/app/skill/skill.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */]])
    ], SkillComponent);
    return SkillComponent;
}());

// Add new skill dialog
var SkillDialog = /** @class */ (function () {
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
    SkillDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <h3 mat-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}skill</h3>\n    <div mat-dialog-content fxLayout=\"column\">\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"skill.name\"\n          placeholder=\"Skill name\">\n      </mat-input-container>\n      <mat-slider\n        [(ngModel)]=\"skill.competence\"\n        min=\"0\"\n        max=\"100\"\n        thumbLabel\n        step=\"10\"\n        tickInterval=\"1\"></mat-slider>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close(skill)\">Save</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]])
    ], SkillDialog);
    return SkillDialog;
}());



/***/ }),

/***/ "../../../../../src/app/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"text-center space-up-s\">\n        <div fxFlex><h1 style=\"margin-bottom:0\">{{name}}</h1></div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"text-center space-around\">\n        <div fxFlex>{{title}}</div>\n    </div>\n\n    <div class=\"text-center\">\n        <img *ngIf=\"profileUrl && profileUrl.length\" class=\"profile-picture\" [src]=\"profileUrl\" alt=\"Profile picture\">\n        <mat-icon *ngIf=\"!profileUrl || !profileUrl.length\" svgIcon=\"account-circle\" class=\"profile-picture\"></mat-icon>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"social-media\">\n        <span *ngFor=\"let social of socials\">\n            <a *ngIf=\"social.url.length\" [attr.href]=\"social.url\"><mat-icon [svgIcon]=\"social.type.toLowerCase()\"></mat-icon></a>\n        </span>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"space-up\">\n        <div fxFlex=\"25\" class=\"text-center\">\n            <mat-icon>person</mat-icon>\n        </div>\n        <div fxFlex><div class=\"description\">{{description}}</div></div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"space-up\" *ngIf=\"phone && phone.length\">\n        <div fxFlex=\"25\" class=\"text-center\">\n            <mat-icon>phone</mat-icon>\n        </div>\n        <div fxFlex>{{phone}}</div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"space-up\" *ngIf=\"email && email.length\">\n        <div fxFlex=\"25\" class=\"text-center\">\n            <mat-icon>email</mat-icon>\n        </div>\n        <div fxFlex>{{email}}</div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"space-up\">\n        <div fxFlex=\"25\" class=\"text-center\">\n            <mat-icon>settings</mat-icon>\n        </div>\n        <div fxFlex>\n            <app-skill [skills]=\"skills\">\n            </app-skill>\n        </div>\n    </div>\n\n    <div *ngIf=\"resumeService.editMode\" class=\"actions\">\n        <button mat-raised-button color=\"primary\" (click)=\"editSummary()\">Edit profile</button>\n        <input id=\"resumeFile\" style=\"display:none\" *ngIf=\"resumeService.editMode\" type=\"file\" accept=\"application/json\" (change)=\"uploadResume($event)\">\n        <label for=\"resumeFile\" class=\"mat-primary mat-raised-button\">Upload Resume</label>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SummaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSummaryDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("../../../../../src/app/models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(dialog, viewContainerRef, resumeService, iconRegistry, sanitizer) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        // Profile picture placeholder
        this.iconRegistry
            .addSvgIcon('account-circle', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/account_circle.svg'))
            .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/facebook-box.svg'))
            .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/twitter-box.svg'))
            .addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/linkedin-box.svg'))
            .addSvgIcon('instagram', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/instagram.svg'))
            .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/github-circle.svg'));
    };
    SummaryComponent.prototype.editSummary = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "75vw";
        var dialogRef = this.dialog.open(EditSummaryDialog, config);
        dialogRef.componentInstance.summary = {
            name: this.name,
            profileUrl: this.profileUrl,
            description: this.description,
            title: this.title,
            phone: this.phone,
            email: this.email,
            socials: this.socials
        };
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                return;
            }
            var resume = _this.resumeService.updateSummary(result.name, result.profileUrl, result.description, result.title, result.phone, result.email, result.socials);
            _this.name = resume.name;
            _this.profileUrl = resume.pictureUrl;
            _this.description = resume.summary;
            _this.title = resume.title;
            _this.phone = resume.phone;
            _this.email = resume.email;
            _this.socials = resume.social;
        });
    };
    SummaryComponent.prototype.uploadResume = function (event) {
        var _this = this;
        var resumeFile = event.target.files[0];
        var reader = new FileReader();
        // Callback when the file has been read
        reader.onload = function () {
            if (reader && reader.result && reader) {
                var jsonResume = JSON.parse(reader.result);
                _this.resumeService.parseAndSaveJsonResume(jsonResume);
            }
        };
        if (resumeFile) {
            reader.readAsText(resumeFile, 'UTF-8');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('picture'),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "profileUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "phone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], SummaryComponent.prototype, "socials", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], SummaryComponent.prototype, "skills", void 0);
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__("../../../../../src/app/summary/summary.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_3__resume_service__["a" /* ResumeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SummaryComponent);
    return SummaryComponent;
}());

// Edit summary dialog
var EditSummaryDialog = /** @class */ (function () {
    function EditSummaryDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    EditSummaryDialog.prototype.ngOnInit = function () {
        this.summary.socials = this.summary.socials || [];
        var _loop_1 = function (type) {
            var sType = __WEBPACK_IMPORTED_MODULE_4__models__["a" /* SocialType */][type];
            if (sType !== __WEBPACK_IMPORTED_MODULE_4__models__["a" /* SocialType */].UNKNOWN && !this_1.summary.socials.filter(function (s) { return s.type === sType; }).length) {
                this_1.summary.socials.push({ type: sType, url: '' });
            }
        };
        var this_1 = this;
        for (var type in __WEBPACK_IMPORTED_MODULE_4__models__["a" /* SocialType */]) {
            _loop_1(type);
        }
    };
    EditSummaryDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <h3 mat-dialog-title>Edit summary</h3>\n    <div mat-dialog-content fxLayout=\"column\">\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"summary.name\"\n          placeholder=\"Your name\">\n      </mat-input-container>\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"summary.profileUrl\"\n          placeholder=\"Url to profile picture\">\n      </mat-input-container>\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"summary.title\"\n          placeholder=\"Job title\">\n      </mat-input-container>\n      <mat-input-container>\n        <textarea matInput\n        [(ngModel)]=\"summary.description\"\n        rows=\"4\" placeholder=\"Description of yourself\"></textarea>\n      </mat-input-container>\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"summary.phone\"\n          placeholder=\"Your phone number\">\n      </mat-input-container>\n      <mat-input-container>\n        <input matInput\n          [(ngModel)]=\"summary.email\"\n          placeholder=\"Your email adress\">\n      </mat-input-container>\n      <mat-input-container class=\"capitalize\" *ngFor=\"let social of summary.socials\">\n        <input matInput\n          [(ngModel)]=\"social.url\"\n          placeholder=\"{{social.type.toLowerCase()}}\">\n      </mat-input-container>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button mat-button color=\"primary\" (click)=\"dialogRef.close(summary)\">Ok</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogRef */]])
    ], EditSummaryDialog);
    return EditSummaryDialog;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map