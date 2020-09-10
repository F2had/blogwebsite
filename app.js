const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

let homeContent = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
let aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Tincidunt vitae semper quis lectus nulla at volutpat. Nisi lacus sed viverra tellus in hac habitasse platea. Rhoncus aenean vel elit scelerisque mauris. In iaculis nunc sed augue lacus viverra. Magna fringilla urna porttitor rhoncus. Scelerisque eu ultrices vitae auctor. Leo a diam sollicitudin tempor id eu nisl. Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Tincidunt eget nullam non nisi est sit amet facilisis magna. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Tempus urna et pharetra pharetra massa massa ultricies mi. Sed tempus urna et pharetra pharetra. Nec tincidunt praesent semper feugiat nibh. Enim ut sem viverra aliquet eget sit. Volutpat est velit egestas dui id. Cursus risus at ultrices mi.";

const posts = [];

app.get('/', function(req, res){
    res.render('home', {
        homeContent : homeContent, 
        posts: posts
    });
});


app.get("/about", function(req, res){
    res.render('about', {
        aboutContent: aboutContent
    });
});

app.get("/contact", function(req, res){
    res.render('contact', {
        contactContent: contactContent
    });
});

app.get("/compose", function(req, res){
    res.render('compose');
});

app.post('/compose', function(req, res){
    const post = {
        title: req.body.title, 
        content: req.body.post
    };
    posts.push(post);
    res.redirect('/');
});


app.listen(4321, function(){
    console.log("Server running on port 4321!");
});