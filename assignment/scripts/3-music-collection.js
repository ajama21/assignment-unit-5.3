console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newAlbum);
    return newAlbum;
}

console.log(collection);
addToCollection('Green','Hiroshi Yoshimura', 2020);
addToCollection('Endless', 'Frank Ocean', 2016);
addToCollection('Computerwelt', 'Kraftwerk', 1981);
addToCollection('Revolver', 'The Beatlers', 1966 );
addToCollection('Because the Internet', 'Childish Gambino', 2013);
addToCollection('Master of Puppets', 'Metallica', 1986);
console.log(collection);