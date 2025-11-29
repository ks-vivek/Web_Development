const express = require('express');
const app = express();
// In built json
app.use(express.json());

app.use(function(req, res, next){
  console.log('middleware chala');
  next();
});

app.use(function(req, res, next){
  console.log('middleware chal raha hai bhaiyo bhehno');
  next();
});

app.get('/', function(req, res){
  res.send('hello vivek bhai kaise ho aap');
  
})

app.get('/profile', function(req, res, next){
    return next(new Error("Something went wrong"));
});


app.use((err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send('something broke!')
})

const PORT = 4000;

app.listen(PORT, ()=> {
  console.log(`Server is Listening on Port ${PORT}`);
});