let express = require('express');
let app = express();
let port = 3000;

app.use(express.static(__dirname+'/www'));
app.use('/js', express.static(__dirname+'/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname+'/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname+'/node_modules/popper.js/dist/umd'));
app.use('/js', express.static(__dirname+'/node_modules/bootstrap/dist/css'));

app.listen(port, () => {
    console.log('le serveur est en route');
    console.log(`Serveur listenning at https://localhost:${port}`);
})

app.get('/',(req, res, next)=>{
    res.send('Bonjour tout le monde, je ne vous aime pas ! ceci arrivera instantanément');
});