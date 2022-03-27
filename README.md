# Dev Proxy Example

Dev Proxy written in Node.js, using [express](https://github.com/expressjs/express) and [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware).

Effective, for example, for exposing a frontend and a backend on same port. Simpler than running Nginx.

## Getting Started

### Installing

```
git clone git@github.com:alonl/dev-proxy-example.git
cd dev-proxy-example
npm install
```

### Usage

Edit `SERVER` and `CLIENT` (or add your own) addresses in app.js, and run `npm start`.
