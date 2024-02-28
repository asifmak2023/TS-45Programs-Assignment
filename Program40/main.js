var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist
name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three
dictionaries representing different albums. Print each return
value to show that Objects are storing the album information
correctly. Add an optional parameter to make_album() that allows
you to store the number of tracks on an album. If the calling
line includes a value for the number of tracks, add that value
to the album’s Object. Make at least one new function call that
includes the number of tracks on an album.
*/
console.clear();
//Create function
function makeAlbum(artist, title, tracks) {
    var album = __assign({ artist: artist, title: title }, (tracks !== undefined && { tracks: tracks }));
    return album;
}
// Make three dictionaries representing different albums
var album1 = makeAlbum("asif", "Title 1", 1);
var album2 = makeAlbum("Amir", "Title 2");
var album3 = makeAlbum("Javed", "Title 3", 3);
// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
