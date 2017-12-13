var titleInput = document.getElementById('title-input');
var urlInput = document.getElementById('url-input');
var enterButton = document.getElementById('enter-button');
var websiteTitle = document.getElementById('website-title');
var websiteLink = document.getElementById('website-link');
var readButton = document.getElementById('read-button');
var deleteButton = document.getElementById('delete-button');
var bookmark = document.querySelector('.bookmark');
var section = document.querySelector('.article-list');
var article = document.querySelector('.bookmark');

enterButton.addEventListener('click', addBookmark);
urlInput.addEventListener('keyup', URLpresent)

section.addEventListener('click', function(event){
 if (event.target.className.includes('read-button')) {
  console.log(event.target);
  var readButton = event.target;
  readButton.classList.toggle('read-button-read');
  }
})

section.addEventListener('click', function(event){
  console.log(event);
  console.log(event.target.className);
 if (event.target.className.includes('delete-button')) {
  console.log(event.target.parentNode.parentNode);
  section.removeChild(event.target.parentNode.parentNode);
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
}


