// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector(".tabs")
const topics = document.querySelector(".topics")

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        let responseVariable = response.data.topics
        responseVariable.map((tab) => {
            const newTab = tabCreator(tab)
            topics.appendChild(newTab)
        })
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

const tabCreator = (object) => {
    const tab = document.createElement('div')
    tab.textContent = object
    tab.classList.add('tab')
    return tab
}