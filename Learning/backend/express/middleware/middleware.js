// import express from "express";
// const app = express();

// let requestCount = 0;



// // This route "admin" is not using middleware:-
// app.get('admin', (req, res)=>{
//     res.json({
//         message: `The total no. of requests = ${requestCount}`
//     })

// })

// // This is the global way to specify the middleware:-

// app.use((req, res, next)=>{
//     requestCount = requestCount + 1;
//     console.log(`The total no. of requests = ${requestCount}`);
//     next();
// })

// // after the middleware is created and then all the routes uses middleware which is created above;

// // better routing , add databse and middleware

// app.get('/multiply', (req, res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.status(200).json({
//         answer: a * b
//     })
// });

// app.get('/divide', (req, res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.status(200).json({
//         answer: a / b
//     })
    
// });

// app.get('/add/:a/:b', (req, res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.status(200).json({
//         answer: a + b
//     })
// });

// app.get('/subtract', (req, res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.status(200).json({
//         answer: a - b
//     })
// });


// const port = 3000;
// app.listen(port, ()=>{
//     console.log(`Serve is listening on port`, port);
// });

import express from "express";
const app = express();


app.use(express.json());


app.post('/add', (req, res)=>{
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.status(200).json({
        answer: a + b
    })
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Serve is listening on port`, port);
});




