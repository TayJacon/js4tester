var album = {
    title: 'Black Album', 
    released: 1991,
    showInfo: function() {
        console.log(`Título do album: ${this.title}, lançado em ${this.released}`)
    }
}
album.showInfo();
console.log(album.title)
console.log(album.released)

var album2 = new Object();
album2.title = 'Black Album';
album2.released = 1991
album2.showInfo = function() {
    console.log(`Título do album: ${this.title}, lançado em ${this.released}`)
}
album2.showInfo();
console.log(album2.title)
console.log(album2.released)

album.tracks = ['Enter Sandman', 'The unforgiven', 'Nothing Else Matters', 'The Struggle Within']
album.showTracks = function() {
    this.tracks.forEach(function(value, key) {
        console.log(value)
    });
}
album.showTracks();
