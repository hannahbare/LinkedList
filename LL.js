var titleInput = document.getElementById('title-input');
var urlInput = document.getElementById('url-input');
var enterButton = document.getElementById('enter-button');
var websiteTitle = document.getElementById('website-title');
var websiteLink = document.getElementById('website-link');
var readButton = document.getElementById('read-button');
var deleteButton = document.getElementById('delete-button');
var bookmark = document.querySelector('.bookmark')


enterButton.addEventListener('click', displayTitle);
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
  deleteButton.classList.remove('bookmark')
}