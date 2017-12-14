var titleInput = document.getElementById('title-input');
var urlInput = document.getElementById('url-input');
var enterButton = document.getElementById('enter-button');
var websiteTitle = document.getElementById('website-title');
var websiteLink = document.getElementById('website-link');
var readButton = document.getElementById('read-button');
var deleteButton = document.getElementById('delete-button');
var section = document.querySelector('.article-list');
var article = document.querySelector('.bookmark');
var form = document.querySelector('.wrapper');
var bookmarkCount = document.querySelector('.bookmarkCount');
var readCount = document.querySelector('.readCount');

enterButtonDisabled(true);

titleInput.addEventListener('keyup', titlePresent);
urlInput.addEventListener('keyup', URLpresent);

function URLpresent (){
  enterButtonDisabled(false);
};

function titlePresent () {
  enterButtonDisabled(false);
};

function enterButtonDisabled (booleanvalue) {
  enterButton.disabled = booleanvalue;
};

enterButton.addEventListener('click', errorMessage);
  function errorMessage() {
  var titleValue = titleInput.value;
  var urlValue = urlInput.value;
  if (urlValue == '' || titleValue == '') {
    alert('Error, please add a title and a url for your website.');
 } else {
  addBookmark();
 }
};

section.addEventListener('click', function(event){
 if (event.target.className.includes('read-button')) {
  var readButton = event.target;
  readButton.classList.toggle('read-button-read');
  readButton.parentNode.parentNode.classList.toggle('read-button-bookmark');
  countReadBookmarks();
  }
});

section.addEventListener('click', function(event){
 if (event.target.className.includes('delete-button')) {
  section.removeChild(event.target.parentNode.parentNode);
  var bookmarkList = document.querySelectorAll('.bookmark');
  console.log(bookmarkList.length)
  bookmarkCount.innerText = 'Number of Bookmarks: ' + bookmarkList.length;
  countReadBookmarks();
  }
}); 

function addBookmark (){
  var newElement = document.createElement('article');
  section.appendChild(newElement);
  newElement.innerHTML = 
    `<h2 id='website-title'> ${titleInput.value} </h2>
      <p id="website-link"><a href="http://${urlInput.value}"> ${urlInput.value} </a></p>
      <p class="read-delete-buttons">
        <button class="bottom-button read-button">Read</button>
        <button class="bottom-button delete-button">Delete</button>
      </p>`;
  newElement.setAttribute('class', 'bookmark');
  countBookmarks();
  form.reset();
  enterButtonDisabled(true);
};

function countBookmarks(){
  var bookmarkList = document.querySelectorAll('.bookmark');
  bookmarkCount.innerText = 'Number of Bookmarks: ' + bookmarkList.length;
};

function countReadBookmarks(){
  var readList = document.querySelectorAll('.read-button-read');
  readCount.innerText = 'Number of Bookmarks Read: ' + readList.length;
};
