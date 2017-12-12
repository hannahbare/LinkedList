
var titleInput = document.getElementById('title-input');
var urlInput = document.getElementById('url-input');
var enterButton = document.getElementById('enter-button');
var websiteTitle = document.getElementById('website-title');
var websiteLink = document.getElementById('website-link');
var readButton = document.getElementById('read-button');
var deleteButton = document.getElementById('delete-button');
var bookmark = document.querySelector('.bookmark')
var createBookmark = document.createElement('article')


enterButton.addEventListener('click', addBookmark);
urlInput.addEventListener('keyup', URLpresent)
readButton.addEventListener('click',readToggle)
// deleteButton.addEventListener('click', deleteBookmark)

function displayTitle() {
  console.log(titleInput);
  websiteTitle.innerText = titleInput.value;
  websiteLink.innerText = urlInput.value;
}

enterButtonEnable(true)

function URLpresent (){
  enterButtonEnable(false)
  // boolean, &&''
}
function enterButtonEnable (booleanvalue) {
  enterButton.disabled = booleanvalue;
}

function readToggle (){
  readButton.classList.toggle('read-button-read');
  bookmark.classList.toggle('read-button-bookmark');
}

function deleteButton () {
  deleteButton.classList.remove('bookmark');
  removeChild
}

function addBookmark (){
  console.log('agg');
  var newElement = document.createElement('article');
  var section = document.querySelector('.article-list');
  // var node = document.createTextNode('This is new');
  section.appendChild(newElement);
  console.log(newElement);
  console.log(section);
  newElement.innerHTML = 
        `<h2 id='website-title'> ${titleInput.value} </h2>
                <p id="website-link"> ${urlInput.value} </p>
                <p class="read-delete-buttons">
                  <button id="read-button" class="bottom-button">Read</button>
                  <button id="delete-button" class="bottom-button">Delete</button>
                </p>`;
  newElement.setAttribute('class', 'bookmark')
}

