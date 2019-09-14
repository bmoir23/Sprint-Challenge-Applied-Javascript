// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Create template

    const headerDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const title = document.createElement('h1');
    const headerTemp = document.createElement('span');
    const currentDate = new Date();

    // classes

    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    // values

    headerDate.textContent = `${currentDate}`;
    title.textContent = 'Lambda Times';
    headerTemp.textContent = '98°' // never knew how to make the degree symbol it is "option shift 8" on Mac

    // assemble

    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(title);
    headerDiv.appendChild(headerTemp);

return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());