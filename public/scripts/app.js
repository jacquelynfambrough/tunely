/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */








$(document).ready(function() {
console.log("Sanity check! app.js running");
$.ajax({
   method: 'GET',
   url: '/api/albums',
   success: onSuccess,
   error: onError
 });


function renderAlbums(albums){
  var source = $('#album-template').html();
  var template = Handlebars.compile(source);
  var newHtml = template(albums);
  $('#albums').append(newHtml);
}


function onSuccess(album) {
  //allAlbums = json;
  album.forEach(function(element){
    renderAlbums(element);
  });
}
function onError() {
  console.log('error');

}


});

// sampleAlbums.forEach(renderAlbum);
