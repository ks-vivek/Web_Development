const express = require('express');
const path = require('path');  
const fs = require('fs');
const app = express();



app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    fs.readdir(`./files`, (err, files)=>{
        res.render('index', {files: files});
    });
}); 

app.get('/file/:filename', function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8", function(err, filedata){
      res.render('show', {filename : req.params.filename , file : filedata});
    });
});

app.get('/edit/:filename', function(req, res){
    res.render('edit',{filename: req.params.filename});
});

app.post('/delete', (req, res)=>{
    fs.unlink(`./files/${req.body.filename}`, function(err){
        res.redirect('/');
    })
})

app.post('/edit', (req, res)=>{
   fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new.split(' ').join('')}.txt`,function(err){
      res.redirect("/");
   } )
});
 
app.post('/create', (req, res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
    res.redirect("/");
    });
});




const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`);
});