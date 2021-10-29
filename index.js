function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(`The ${this.title} by ${this.author}, ${this.pages} pages, ${read}.`)
    }
}

const theHobbit = new Book("The Hobbit", 'J.R.R. Tolkien', "295", "not read yeat");
const harryPotter1 = new Book('Harry Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', '309', 'already readed');

theHobbit.info();
harryPotter1.info();