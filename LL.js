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

enterButton.addEventListener('click', addBookmark);
urlInput.addEventListener('keyup', URLpresent)

section.addEventListener('click', function(event){
 if (event.target.className.includes('read-button')) {
  var readButton = event.target;
  readButton.classList.toggle('read-button-read');
  readButton.parentNode.parentNode.classList.toggle('read-button-bookmark')
  }
})

section.addEventListener('click', function(event){
 if (event.target.className.includes('delete-button')) {
  section.removeChild(event.target.parentNode.parentNode);
  var bookmarkList = document.querySelectorAll('.bookmark');
  console.log(bookmarkList.length)
  bookmarkCount.innerText = 'Number of bookmarks: ' + bookmarkList.length;
  }
})

enterButtonEnable(true)

function URLpresent (){
  enterButtonEnable(false)
  // boolean, &&''
}

function enterButtonEnable (booleanvalue) {
  enterButton.disabled = booleanvalue;
}  

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
}

function countBookmarks(){
  var bookmarkList = document.querySelectorAll('.bookmark');
  console.log(bookmarkList.length)
  bookmarkCount.innerText = 'Number of bookmarks: ' + bookmarkList.length;
}

