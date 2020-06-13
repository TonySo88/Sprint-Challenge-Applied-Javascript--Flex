// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container")

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let responseVariable = response.data.articles
        for (topic in responseVariable) {
            responseVariable[topic].forEach(item => {
                cardsContainer.appendChild(cardCreator(item));
            });
        }
        console.log(responseVariable)
    })
    .catch(error => {
        console.log(error)
    })

    const cardCreator = object => {
        const card = document.createElement("div")
        card.classList.add('.card')
        const headline = document.createElement("div")
        headline.classList.add(".headline")
        headline.textContent = `${object.headline}`
        const author = document.createElement("div")
        author.classList.add(".author")
        const imgContainer = document.createElement("div")
        imgContainer.classList.add('.img-container')
        const authorsImage = document.createElement("img")
        authorsImage.src = `${object.authorPhoto}`
        const authorsName = document.createElement('span')
        authorsName.textContent = `${object.authorName}`

        imgContainer.appendChild(authorsImage)
        author.appendChild(imgContainer)
        author.appendChild(authorsName)
        card.appendChild(headline)
        card.appendChild(author)

        return card
    }