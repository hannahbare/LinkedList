
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


// Phase 2
// 1. create error message if there is nothing in either the title or the URL field
//  (Or statement?)
// 2. Make responsive?!

// Phase 3
// 1. disable/enable "enter" button based on if there are contents in either field
// 2. count total number of links
// 3. count total number of read links
// 4. count total number of unread links

// RESEARCH -- addEvent Listener- continue adding the Website Title boxes when user adds another. Start out with 2 boxes?
