const books = [
    { 
        title: "React Billionaire", 
        pages: 250, 
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    { 
        title: "Advanced JS", 
        pages: 500, 
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    { 
        title: "CSS Secrets", 
        pages: 320, 
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    { 
        title: "HTML Mastery", 
        pages: 200, 
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
  ];


  


//   Snack 1 - Filtra e Modifica
// Crea una funzione che somma due numeri.
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.


const longBooks = books.filter(curElem => curElem.pages > 300)

console.log(longBooks);


const longBooksTitles = longBooks.map(curElem => curElem.title)

console.log(longBooksTitles);


books.forEach(curElem => console.log(curElem.title))


// Snack 2 - Il primo libro scontato
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).


const availableBooks = books.filter(curElem => curElem.available)

console.log(availableBooks);


const discountedBooks = availableBooks.map(curElem => {
   const discounted = (parseInt(curElem.price.replace("€", "")) - (parseInt(curElem.price.replace("€", "")) * 0.2))
   return {...curElem, price: discounted.toFixed(2) + "€"}
})



 

console.log("discounted", discountedBooks);


const fullPricedBook = discountedBooks.find(curElem => parseFloat(curElem.price.replace("€", "")) === parseInt(curElem.price.replace("€", "")))

console.log(fullPricedBook);



// Snack 3 - Ordinare gli Autori
// Creare un array (authors) che contiene gli autori dei libri.
// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)


const author = books.map(curElem => {
    const authorObj = {...curElem.author}
    return authorObj
})

console.log(author);


const areAuthorsAdult = author.every(curElem => curElem.age > 17)

console.log(areAuthorsAdult);

if(!areAuthorsAdult){
    author.sort((a, b) => a.age -b.age)
} else {
    author.sort((a, b) => b.age - a.age)
}

console.log(author);


// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const ages = author.map(curElem => curElem.age)

const agesSum = ages.reduce((acc, curElem) => {
    acc += curElem
    return acc
}, 0)

console.log(agesSum / ages.length);
