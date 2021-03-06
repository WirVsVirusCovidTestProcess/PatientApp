# Health'19 Patient App

![](/src/assets/img/logo.png)

This app allows patients to do a questionnaire to evaluate their symptoms regarding COVID-19. Then patients can get an appointment with an examination center and submit their answers via a QR-Code. The patients also get feedback regarding their test results in this app.

This application was created in the context of the WirVsVirus Hackathon and the WirVsVirus Solution Enabler Program of the German Government

![](/src/assets/img/wirvsvirus_logo.png)

![Lint and Test](https://github.com/WirVsVirusCovidTestProcess/PatientApp/workflows/Lint%20and%20Test/badge.svg?branch=master) ![Build application](https://github.com/WirVsVirusCovidTestProcess/PatientApp/workflows/Build%20application/badge.svg?branch=master)

## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Native Apps](#native-apps)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g @ionic/cli`
* Clone this repository: `git clone https://github.com/WirVsVirusCovidTestProcess/PatientApp`.
* Run `npm i -g cordova` to install Cordova globally
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing

See [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:

## Deploying

### Progressive Web App

1. Run `npm run build -- --prod`
2. Push the `www` folder to your hosting service

### Native Apps

For native Apps [Capacitor](https://capacitor.ionicframework.com) is used. Therefore the default tooling for the apps needs to be used for deployment.
