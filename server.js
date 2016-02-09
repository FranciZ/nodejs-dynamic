var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var app         = express();

var myProducts = [
    {
        name:'Produkt 1',
        price:'100',
        volume:'10'
    },
    {
        name:'Produkt 2',
        price:'150',
        volume:'1'
    },
    {
        name:'Produkt 3',
        price:'200',
        volume:'40'
    }
];

exports.start = function(){
    
    app.set('view engine', 'ejs');
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded()); 
    
    app.use('/page', express.static('public'));
    
    app.get('/', function(req, res){
       
        res.send({ name:'Franci' });
        
    });
    
    app.get('/products', function(req, res){
       
        var Product = mongoose.model('Product');
        
        Product.find(function(err, docs){
           
            res.send(docs);
            
        });
        
    });
  
    app.post('/product', function(req, res){
       
        var data = req.body;
        
        var Product = mongoose.model('Product');
        
        var myProduct = new Product(data);
        myProduct.save(function(err){
            
           if(err){
               console.log(err);
               res.sendStatus(400);
           }else{
            res.send(myProduct);
           }
            
        });
        
    });
    
    app.get('/dynamic-page', function(req, res){
       
        // products refereces the products.ejs file in views folder
        // views is the default folder for .ejs templates
        // second parameter is an object with parameters you can use to render content in the template
        res.render('products', { products : myProducts });
        
    });
    
    app.listen(3000, function(err){
        
        console.log('Server running');
        
    });
    
};






