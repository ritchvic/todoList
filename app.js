//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=["Buy food", "Cook food", "Eat food"];

app.get("/", function(req, res){
//   res.write("<h1>Hello</h1>");
// res.write("<h1>Bye</h1>");
// res.send();
// res.sendFile("index.html");
// res.sendFile(__dirname+"/index.html");
// var a = 3;
// var b = 5;
// var sum = a+b;
// res.send(sum);
var today = new Date();
var dayToday = today.getDay();
// var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
// var date = today.toLocaleDateString("en-UK",options);
var day = "";

// res.send(date);
// res.render("list",{dateToday:date});
if (dayToday == 0 || dayToday == 6) {
  // res.send("Yay! it's the weekend");
// res.sendFile (__dirname+"/weekend.html");
day = "Weekend";
 } else {
  // res.send("it's a weekday today, get to work");
  // res.sendFile (__dirname+"/weekday.html");
day = "Weekday";
}

res.render("list",{day:day,newListItem:items});
});

app.post("/", function(req,res){
item = req.body.newItem;
items.push(item);
console.log(item);
// res.render("list",{newListItem:item});
res.redirect("/");
});

app.listen(3000, function(){

  console.log("Server started on port 3000.");

});
