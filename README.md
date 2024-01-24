# urlShortener Project

## Project Description

The ShortURL project is a simple tool that shortens URLs using the Rebrandly API. To use this tool, users must create an account on the [Rebrandly](https://www.rebrandly.com/) website and obtain an API key, following the instructions available [here](https://www.codecademy.com/article/rebrandly-signup).

## Configuration Instructions

1. Create an account on the [Rebrandly](https://www.rebrandly.com/) website.
2. After creating an account, go to the [Rebrandly API dashboard](https://www.rebrandly.com/api).
3. Copy your API key.
4. In the project directory, open the `main.js` file and replace your Rebrandly API key in the `apiKey` field.

```javascript
// main.js

const apiKey = '<Your API key>'
const url = 'https://api.rebrandly.com/v1/links'
```

## Installation and Usage

1. Clone the repository to your local computer.
2. In the terminal, navigate to the project directory.
3. It is recommended to have Live Server in VSCode (it will automatically create a localhost for you).
4. Access your localhost.
5. Enter the URL you want to shorten.
6. Click the "Shorten" button and copy the newly created short URL.

