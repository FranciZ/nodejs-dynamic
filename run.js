var server = require('./server');
var database = require('./database');

function init(){
    
    database.connect(function(){
        
        require('./models/product');
        
        server.start();
        
    });
    
}

init();