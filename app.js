const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const SERVER = "http://localhost:3001";
const CLIENT = "http://localhost:3002";

app.use("/api", createProxyMiddleware({ target: SERVER, changeOrigin: true }));
app.use("/",    createProxyMiddleware({ target: CLIENT, changeOrigin: true }));

app.listen(process.env.PORT || 3000);
