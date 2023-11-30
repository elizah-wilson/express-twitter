fetch("/tweets")
    .then((response) => {
        return response.json()
    })
    .then((tweets) => {
        const container = document.getElementById("container")
        tweets.forEach(tweet => {
           
            const tweetCard = document.createElement("div")
            const tweeterInfo = document.createElement("div")
            const interaxnsDiv = document.createElement("div")
            
            const tweeter = document.createElement("h3")
            const handle = document.createElement("p")
            const tweetContent = document.createElement("p")
            const comments = document.createElement("p")
            const retweets = document.createElement("p")
            const likes = document.createElement("p")
            
            tweeter.innerText = tweet.author // since it is a forEach loop, do not need to use index, just use the variable that was created in the parameter
            handle.innerText = tweet.handle
            tweetContent.innerText = tweet.tweet
            comments.innerText = `💬 ${tweet.comments}`
            retweets.innerText = `🔁 ${tweet.retweets}`
            likes.innerText = `🤍 ${tweet.likes}`

            container.appendChild(tweetCard)
            tweetCard.appendChild(tweeterInfo)
            tweeterInfo.appendChild(tweeter)
            tweeterInfo.appendChild(handle)
            tweetCard.appendChild(tweetContent)
            tweetCard.appendChild(interaxnsDiv)
            interaxnsDiv.appendChild(comments)
            interaxnsDiv.appendChild(retweets)
            interaxnsDiv.appendChild(likes)

            tweetCard.classList.add("tweet-card")
            tweeterInfo.classList.add("flex")
            interaxnsDiv.classList.add("flex")
        })
    })
