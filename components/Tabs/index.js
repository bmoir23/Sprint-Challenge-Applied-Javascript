// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsContainer = document.querySelector('.topics');

// API call

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then (data => {
        const topicData = data.data.topics;
        topicData.forEach(topic => {

            topicsContainer.appendChild(tabMaker(topic));
        })
    })

    .catch(err => {
        console.log('Error');
    })

    // Topic list

    function tabMaker(topic){
        const tabDiv = document.createElement('div');
        tabDiv.classList.add('tab');
        tabDiv.textContent = `${topic}`;

        return tabDiv;
    }