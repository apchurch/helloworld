var express = require('express')
var app = express()
var HTTP = require('http')
// var HTTPS = require('https')
var fs = require('fs')


app.get('/', function(req, res){
    console.log("we're logging on the server!")
    res.send("<h1>Welcome to the internet!</h1>")
})

// try {
//     var httpsConfig = {
//         key  : fs.readFileSync('/etc/letsencrypt/live/aconlineventures.com/privkey.pem'),
//         cert : fs.readFileSync('/etc/letsencrypt/live/aconlineventures.com/cert.pem')
//     }
//     var httpsServer = HTTPS.createServer(httpsConfig, app)
//     httpsServer.listen(443)
// }
// catch(error){
//     console.log(error)
//     console.log('could not set up HTTPS')
// }
// finally {
//     console.log('this code runs regardless of whether the above code succeeded or failed')
// }

var httpApp = express()
httpApp.use(function(req, res){
    console.log(req.url)
    
})
httpApp.listen(80)