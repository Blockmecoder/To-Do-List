const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var vals = ["Buy Food", "Cook Food", "Eat Food"];
var workItem = [];
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    var today = new Date();
    var currday = today.getDay();

    var day = "";
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("hi-IN", options);
    res.render("list", { listTitle: day, tits: vals });

});

// new post request command for submit button 
app.post("/", function (req, res) {
    var val = req.body.bbb;
    if (req.body.top1 === "Work") {
        workItem.push(val);
        res.redirect("/work");
    }
    else {
        vals.push(val);
        res.redirect("/");
    }


});
app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", tits: workItem })
});

app.listen(3000, function () {
    console.log("listened");
});