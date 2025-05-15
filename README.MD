# k6_notification

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Prerequisites](#prerequisites)

## About <a name = "about"></a>

Load testing on Notification FDN.

## Getting Started <a name = "getting_started"></a>

Run in terminal using based on Environment:
- Dev Environment: `npm run test-dev`
- Canary Environment: `npm run test-canary`
- Prod Environment: `npm run test-prod`

### Prerequisites <a name = "prerequisites"></a>

- Install `node.js`
- Create directory
- Run in terminal `npm init -y`
- Install some packages in terminal `npm install <packages>`
    - k6
    - body_parse
    - mysql2
    - express
- (Optional) Install Autocompletion and Type checking on K6 `npm install --save-dev @types/k6`