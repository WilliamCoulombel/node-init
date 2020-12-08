let express = require('express');
let app = express();
let port = 3000;

app.listen(port, () => {
    console.log('le serveur est en route');
    console.log(`Serveur listenning at https://localhost:${port}`);
})

app.get('/',(req, res, next)=>{
    res.send('Bonjour !');
});