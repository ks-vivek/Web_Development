const fs = require("fs");

// writeFile
// appendFile
// copyFile
// rename
// unlink

//  fs.writeFile("hey.txt", "hey hello kaise ho saare", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });  // hey.txt file create ho jayega aur uske andar hey hello kaise ho saare likha huaa dikhega.


// fs.appendFile("hey.txt", "hello bhai log kaise ho aap sab, aasa karta hu ki aap sab thik honge", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });      //   hey.txt file me jo bhi likha hai wo sab append / add ho jayega.

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log('done');
// })       //   pahle file ka naam hey.txt tha ab wo change ho ke hello.txt ho jayega.

// fs.copyFile('hello.txt', "./copy2/chacha.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log('done');
// })     // hello.txt jo file hai wo copy ho jayega aur wo copy2 naam ke folder me chacha.txt file me copy ho jayega jab copy2 naam ka folder exist karta hoga tab


// fs.unlink('hello.txt', function(err){
//     if(err) console.error(err.message);
//     else console.log('done');
// });      //   unlink se humlog file ko delete kar sakte hai 


// fs.rmdir('./copy', function(err){
//     if(err) console.error(err.message);
//     else console.log('removed');
// });        // rmdir se hum log folder ko remove karte hai jo empty folder hona chahiye

// fs.rmdir('./copy',{recursive: true},  function(err){
//     if(err) console.error(err.message);
//     else console.log('removed');
// });

// fs.rm('./copy', function(err){
//     if(err) console.error(err.message);
    // else console.log('removed');
// });       // rm se humlog empty or non empty folder dono delete kar sakte ha



// const fs = require('fs');

// const folderPath = './myNewFolder';

// fs.mkdir(folderPath, { recursive: true }, (err) => {
//   if (err) {
//     console.error('Error creating folder:', err);
//   } else {
//     console.log('Folder created successfully!');
//   }
// });



// fs.readFile('hey.txt', function(err, data){
//     if(err) console.error('cannot read this file', err);
//     else console.log('read this file!', data)
// })


const http = require('http');

const server = http.createServer(function(req, res){
    res.end('./object/index.html')
})

server.listen(3000); 
