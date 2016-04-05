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
   success: handleReceiveAllAlbums,
   error: errorReceiveAllAlbums
 });




function handleReceiveAllAlbums(json) {
  
  json.forEach(function (albums){
    renderAlbums(albums);
  });
}
function errorReceiveAllAlbums() {
  console.log('Wow, okay.');

}


});

function renderAlbums(albums){
  var source = $('#album-template').html();
  var template = Handlebars.compile(source);
  var newHtml = template(albums);
  $('#albums').prepend(newHtml);
}
