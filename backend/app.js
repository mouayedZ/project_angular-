// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
const { match } = require("assert");
// import mongose module
const mongoose = require("mongoose");
// import bcrypt:
const bcrypt = require("bcrypt");
// import multer:
const multer = require("multer");
// import path:
const path = require("path");
// import axios:
const axios = require("axios");
// mongodb://127.0.0.1:27017=> @ de base du serveur mongoDb(port 27017)
// marsDB=>db name
mongoose.connect('mongodb://127.0.0.1:27017/marsDB');

// creates express application
const app = express();

// app configuration
// send json response
app.use(bodyParser.json());
// get object from request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT"

    );

    next();

});


// ShortCut
app.use("/myFiles", express.static(path.join("backend/images")));
// Media Types
const MIME_TYPE = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
};


const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(" ").join("-");
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
        cb(null, imgName);
    },
});

// models importation:
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");





// generateId:

function generateId(t) {
    var max;
    if (t.length == 0) {
        max = 0
    } else {
        max = t[0].id;
        for (var i = 0; i < t.length; i++) {
            if (t[i].id > max) {
                max = t[i].id;
            }
        }
    }
    return max;
}

// DB stimulation
let matchesTab = [
    { id: 1, teamOne: "FCB", teamTwo: "RMD", scoreOne: 1, scoreTwo: 0 },
    { id: 2, teamOne: "JUV", teamTwo: "INT", scoreOne: 2, scoreTwo: 0 },


]
// Business logic: Get all matches
app.get("/matches/", (req, res) => {
    // traitement logique
    console.log("Here into BL:get all matches");
    Match.find().then(
        (docs) => {
            res.json({ matches: docs });
        });

});
// Business logic :Get match By Id:
app.get("/matches/:id", (req, res) => {
    // Traitement logique
    console.log("Here into BL :get match by Id ");
    let id = req.params.id;
    Match.findOne({ _id: id }).then((doc) => {
        res.json({ match: doc });
    });

});

// Business logic : Delete match by ID:
app.delete("/matches/:id", (req, res) => {
    // traitement logique
    console.log("Here into BL: delete match By iD");
    let id = req.params.id;
    Match.deleteOne({ _id: id }).then((response) => {
        console.log("here esponse after delete", response);
        if (response.deletedCount == 1) {
            res.json({ message: "Delete with success" });

        } else {
            res.json({ message: 'error' })
        }

    });
});
// Business logic : add match
app.post("/matches", (req, res) => {
    // traitement logique

    console.log("Here into BL: add match");
    let matchObj = new Match(req.body);
    matchObj.save();
    res.json({ msg: "added with succes" });

});
// searchMatch
app.post("/searchMatches", (req, res) => {
    let match = req.body;
    // traitement logique
    // let match = req.body;

    // let tabMatch = [];
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab.scoreOne == match || matchesTab.scoreTwo == match) {
    //         tabMatch.push(matchesTab[i]);
    //     }
    // }
    // res.json({ match: tabMatch });
    console.log("here into search matches: ", req.body);
    let findedMatch = matchesTab.filter((elt) => {
        return elt.scoreOne == match.scoreOne || elt.scoreTwo == match.scoreTwo;
    });
    res.json({ msg: "DONE", tab: findedMatch });
});
// testLogique:
app.post("/api/matches/testMatches", (req, res) => {
    console.log("here into seach", req.body);
    let x = req.body.s1;
    let y = req.body.s2;
    Match.find({ scoreOne: x, scoreTwo: y }).then((docs) => {
        console.log("here finded matches", docs);
        res.json({ findedMatch: docs });
    });

})
// t2:
app.get("/api/matches/search/:s1/:s2", (req, res) => {
    let x = req.params.s1;
    let y = req.params.s2;
    Match.find({ scoreOne: x, scoreTwo: y }).then((docs) => {
        console.log("here dinded matches", docs);
        res.json({ findedMatch: docs });
    });
})

// business logic : edit match
app.put("/matches", (req, res) => {
    // traitement logique
    console.log("Here into BL: edit match");
    let match = req.body;

    Match.updateOne({ _id: req.body._id }, match).then(
        (response) => {
            console.log("here response after update", response);
            if (response.nModified == 1) {
                res.json({ message: "updated with success" });


            } else {
                res.json({ message: "error" });
            }
        }
    )
});


// data base stimulation:
let playersTab = [
    { id: 1, Name: "cristiano", Age: "34", Nbr: 7, position: "attack" },
    { id: 2, Name: "Karim", Age: "34", Nbr: 9, position: "attack" },
    { id: 3, Name: "Puyol", Age: "40", Nbr: 2, position: "defense" },


]
// Business logic: Get all players
app.get("/api/players", (req, res) => {
    // traitement logique
    console.log("Here into BL:get all players");
    Player.find().then(
        (docs) => {
            res.json({ players: docs })
        }

    )

});
// Business logic :Get player By Id:
app.get("/api/players/:id", (req, res) => {
    // Traitement logique
    console.log("Here into BL :get player by Id ");
    let id = req.params.id;
    Player.findOne({ _id: id }).then((doc) => {
        res.json({ player: doc });
    })


});

// Business logic : Delete match by ID:
app.delete("/api/players/:id", (req, res) => {
    // traitement logique
    console.log("Here into BL: delete match By iD");
    let id = req.params.id;
    Player.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ message: "Delete with success" });

        } else {
            res.json({ message: 'error' });
        }

    });




});
// Business logic : add player
app.post("/api/players", (req, res) => {
    // traitement logique
    console.log("Here into BL: add player");
    let playerObj = new Player(req.body);
    playerObj.save();
    res.json({ msg: "added with succes" });
});
// business logic : edit match
app.put("/api/players", (req, res) => {
    // traitement logique
    let player = req.body;
    console.log("Here into BL: edit player");
    Player.updateOne({ _id: req.body._id }, player).then((response) => {
        if (response.nModified == 1) {
            res.json({ message: "updated with success" });


        } else {
            res.json({ message: "error" });
        }

    });



});

// data base stimulation:
let teamsTab = [
    { id: 1, name: "RMD", owner: "florentino", foundation: 1907, stadium: "santiego bernabeu" },
    { id: 2, name: "FCB", owner: "Laporta", foundation: 1928, stadium: "camp nou" },
    { id: 3, name: "CA", owner: "almi", foundation: 1920, stadium: "RADES" },


]
// Business logic: Get all teams
app.get("/api/teams", (req, res) => {
    // traitement logique
    console.log("Here into BL:get all teams");
    Team.find().then((docs) => { res.json({ teams: docs }) }
    )




});
// Business logic :Get teams By Id:
app.get("/api/teams/:id", (req, res) => {
    // Traitement logique
    console.log("Here into BL :get team by Id ");
    let id = req.params.id;
    Team.findOne({ _id: id }).then((doc) => {
        res.json({ player: doc })
    });
});

// Business logic : Delete teams by ID:
app.delete("/api/teams/:id", (req, res) => {
    // traitement logique
    console.log("Here into BL: delete team By iD");
    let id = req.params.id;
    Team.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ message: "Delete with success" });

        } else {
            res.json({ message: 'error' });
        }


    });



});
// Business logic : add team
app.post("/api/teams", (req, res) => {
    // traitement logique
    console.log("Here into BL: add team");
    let teamObj = new Team(req.body);
    teamObj.save();
    res.json({ message: "added with succes" })



});
// business logic : edit team
app.put("/api/teams", (req, res) => {
    // traitement logique
    console.log("Here into BL: edit team");
    let team = req.body;
    Team.updateOne({ _id: req.body._id }, team).then((response) => {
        if (response.nModified == 1) {
            res.json({ message: "updated with success" });


        } else {
            res.json({ message: "error" });
        }

    });
});

// Business logic : add user
app.post("/users/signup", multer({ storage: storageConfig }).single("img"), (req, res) => {
    // traitement logique
    console.log("Here into BL: add user", req.body);
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        req.body.pwd = cryptedPwd;
        req.body.avatar = "http://localhost:3000/myFiles/" + req.file.filename;
        let userobj = new User(req.body);
        userobj.save((error, doc) => {
            if (error) {
                res.json({ msg: false });
            }
            else {
                res.json({ msg: true });
            }
        });

    });
});
// login :
app.post("/users/login", (req, res) => {
    // traitement logique
    console.log("here into BL: login user", req.body);
    let user;
    User.findOne({ email: req.body.email }).then((doc) => {
        user = doc;
        console.log("here doc", doc);
        if (!doc) {
            res.json({ msg: "0" });

        } else {
            return bcrypt.compare(req.body.pwd, doc.pwd);

        }

    })
        .then((checkPwd) => {
            console.log("here check PWD", checkPwd);
            if (!checkPwd) {
                res.json({ msg: "1" });
            } else {
                let userToSend = {
                    id: user._id,
                    fName: user.firstName,
                    lName: user.lastName,
                    role: user.role,
                };
                res.json({ msg: "2", connectedUser: userToSend });
            }
        });
});

// search city :
app.post("/api/weather", (req, res) => {
   
   
    console.log("here name city: ", req.body.city);
    let key="62ee756a34835483299877a61961cafb"
    let apiURL=
    `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`
    axios.get(apiURL).then((response)=>{
        
        let data = response.data ;
        console.log("here response from axios", data);
        let result ={
             temperature: data.main.temp,
             pressure: data.main.pressure,
             humidity :data.main.humidity,
             icon  : data.weather[0].icon ,


        }
        res.json({result:result});
       
    });

    
   
});























// make app exportable
module.exports = app;