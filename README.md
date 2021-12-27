<img src="https://github.com/karmats/resume-generator/blob/master/src/assets/images/logo.png?raw=true" width="150" align="right" />

# Resume Generator [![Node CI](https://github.com/karmats/resume-generator/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/karmats/resume-generator/actions/workflows/build-and-deploy.yml)

Generates a resume in material design, that can be exported to HTML.

## Create your resume

Go to [demo page](https://karmats.github.io/resume-generator/?edit) and fill in your resume data. When finished remove the `?edit` parameter from the browser URL and click the "HTML"-button in the "Export when done"-snackbar at the bottom of the page. Put it up on your website :)

### Example

![Example](https://raw.githubusercontent.com/karmats/resume-generator/master/src/assets/images/example.png 'Resume example')

### Linkedin

To use your information from linkedin, you need to get a [json resume](https://jsonresume.org). Easiest way to get that is through [this page](https://jmperezperez.com/linkedin-to-json-resume/) where you just follow the instructions. When you have the json, go to [demo page](https://karmats.github.io/resume-generator/?edit) and use the "Upload Resume"-button.

## Development

### Dev server

Run `npm start` and navigate to `http://localhost:4200/`.

### Build

To create a new version for demo page run `npm run build:demo`.

### Running unit tests

Run `npm test` to execute the unit tests.
