//global variables
const library = [];
let index = 0;
const bookform = document.querySelector(".bookform");
const bookname = document.querySelector("#bookname");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const finished = document.querySelector("#finished");
const books = document.querySelector(".books");

//constructor that makes a new book
function Book(title, author, pages, finished){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished= finished;
}

//a function that is called if the user has read this specific book.
//it is defined on the Book.prototype prototype interface.
Book.prototype.toggleRead = function(){
    this.hasRead = "yes";
}

//add book to library
function addBook(event){
    event.preventDefault();
    const book = new Book(bookname.value, author.value, pages.value, finished.value);
    library.push(book);
    displayBooks();
}

//remove book from library
function removeBook(i){
    let x = parseInt(i);
    library.splice(x,1);
    index--;
}

//display books created to the DOM
function displayBooks(){
    //creating a card for each book created
    const card = document.createElement("div");
    card.setAttribute("data-index", index);
    index++;
    card.classList.add("card");
    const name = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("div");
    const container = document.createElement("div");
    const remove = document.createElement("button");
    const finished = document.createElement("button");
    remove.classList.add("btn");
    //using a forEach, we will display all books to the DOM
    library.forEach(function(element){
        name.innerHTML ="Name of book: " + element.title;
        author.innerHTML = "Name of author: " + element.author;
        pages.innerHTML = "Number of pages: " + element.pages;
        read.innerHTML = "Finished: " + element.finished;
        remove.innerHTML = "Remove book";
        finished.innerHTML = "Finished";
        container.appendChild(remove);
        container.appendChild(finished);
        card.appendChild(name);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(container);
        books.appendChild(card);
        });
    //remove book or toggle if read
    remove.addEventListener("click", function(){
        books.removeChild(card);
        removeBook(card.dataset.index);
    });

    finished.addEventListener("click", function(){
        read.innerHTML = "Finished: " + "yes";
        library[card.dataset.index].toggleRead();
    });
}

bookform.addEventListener("submit",addBook);
const book_one = new Book("The Hobbit", "J.R.R", 295, "no");
library.push(book_one);
displayBooks();