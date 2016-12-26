var fs=require('fs');

function ReadAppend(file,appendFile){
 fs.readFile(appendFile,function(err,data){
   if(err){
     throw err;
   }

   console.log('File was Read');

   fs.appendFile(file,data,function(err){
     if(err){
       throw err;
     }

     console.log('The "data to append" was appended to a file');
     });
   });
}

file='../csv/general_sc_st_merge_csv.csv';
appendFile='../csv/sc_csv.csv';
ReadAppend(file,appendFile);

appendFile='../csv/st_csv.csv';
ReadAppend(file,appendFile);
