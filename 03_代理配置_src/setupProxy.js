const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // 代理 /api1
    app.use(
        '/api1',//遇见api1前缀请求，就会触发代理配置 加上api1
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,//控制服务器收到响应头中的host字段
            pathRewrite: {'^/api1': ''}, // 重写路径，移除 /api1
            cookiePathRewrite: {'^/api1': ''} // 重写 cookie 路径
        })
    );

    // 代理 /api2
    app.use(
        '/api2',
        createProxyMiddleware({
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}, // 重写路径，移除 /api2
            cookiePathRewrite: {'^/api2': ''} // 重写 cookie 路径
        })
    );
};
