const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the index.html file on the root route
app.get('/', function(req, res){
    const filePath = path.join(__dirname, 'public', 'index.html');
    console.log('Serving file from:', filePath);  // Debugging line
    res.sendFile(filePath);
});

// Start the server on port 4000 or the port defined in the environment
app.listen(process.env.PORT || 4000, function(){
    console.log('~~~~~~~~~~~~~~~~~~~');
    console.log("Let's chat on 4000!");
    console.log('~~~~~~~~~~~~~~~~~~~');
});
