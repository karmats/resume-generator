<img src="https://github.com/karmats/resume-generator/blob/master/src/assets/images/logo.png?raw=true" width="150" align="right" />

# Resume Generator [![Build Status](https://travis-ci.org/karmats/resume-generator.svg?branch=master)](https://travis-ci.org/karmats/resume-generator) [![Dependencies](https://david-dm.org/karmats/resume-generator/status.svg)](https://david-dm.org/karmats/resume-generator)

Generates a resume in material design, that can be exported to HTML.

## Create your resume

Go to [demo page](https://karmats.github.io/resume-generator/?edit) and fill in your resume data. When finished remove the `?edit` parameter from the browser URL and click the "HTML"-button in the "Export when done"-snackbar at the bottom of the page. Put it up on your website :)

### Example

![Example](https://raw.githubusercontent.com/karmats/resume-generator/master/src/assets/images/example.png 'Resume example')

### Linkedin

To use your information from linkedin, you need to get a [json resume](https://jsonresume.org). Easiest way to get that is through [this page](https://jmperezperez.com/linkedin-to-json-resume/) where you just follow the instructions. When you have the json, go to [demo page](https://karmats.github.io/resume-generator/?edit) and use the "Upload Resume"-button.

## Development

### Dev server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. To create a new version on demo page run `npm run build:demo`.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
