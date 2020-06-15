const exppress = require('express');

const app = exppress();

app.get('/teste',(req,res )=>{
    return res.json({hello:'world 2'})

});

app.listen(3333);