const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
program
  .name('count')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('count the numbers` of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file , "utf8", function(err, data){
        if(err){
            console.log(err);
        }else{
            const words = data.split(' ').length;
            console.log(`There are ${words} words in a ${file} file`);
        }
    });
  });

program.parse();