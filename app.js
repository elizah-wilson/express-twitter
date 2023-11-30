const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))

//baseurl = localhost:3000/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

const tweets = [
    {
        author: "Devan",
        handle: "@dAllara",
        tweet: "Howdy, y'all! 🤠",
        id: "1",
        comments: "1",
        retweets: "",
        likes: "10"
    },
    {
        author: "Garfield",
        handle: "@THEElazycat",
        tweet: "I hate mondays 😾 A swimming pool of coffee couldn't change that",
        id: "2",
        comments: "",
        retweets: "1",
        likes: "1"
    },
    {
        author: "Pam",
        handle: "@pamhalpert",
        tweet: "Where's Jim?",
        id: "3",
        comments: "4",
        retweets: "1",
        likes: "60"
    },
    {
        author: "Bob",
        handle: "@BackyardBob",
        tweet: "This a farm...THERESGONNABECOWSOUTSIDE!",
        id: "4",
        comments: "9",
        retweets: "3",
        likes: "100"
    },
    {
        author: "Aaron",
        handle: "@air_ron",
        tweet: "you done messed up, A-A-ron!",
        id: "5",
        comments: "2",
        retweets: "",
        likes: "3"
    },
    {
        author: "Walter",
        handle: "@WaltNoDisney",
        tweet: "We gotta cook Jesse! #HelloFresh",
        id: "6",
        comments: "1",
        retweets: "",
        likes: "1"
    }
]

app.get("/tweets", (req, res) => {
    res.send(tweets)
})


app.listen(3000) //base url
console.log('express is listening to port 3000')