const fs = require('fs');

fs.readFile("../md/README.md", "utf-8", (err, data) => {
    if(err) {
        console.log("error", err);
        
    } else {
        console.log(data);
 
    //findUrl();      
        
    }
});
 
const regex = /\[(.?)\]\((.?|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/+#-]*[\w@?^=%&/+#-]))\)/gi;
/*
const findUrl = function (regex) {

   
   var juan = regex.match(text)
   console.log(juan);
   
}*/