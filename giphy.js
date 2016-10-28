"use strict";
$(function() {

    // Set the api variable
    var content = document.getElementById("content");

    $('#domainform').on('submit', function(event) {
        event.preventDefault();

        var search = $('#s').val();
        search = search.replace(/\s+/g, '');
        content.innerHTML = "";

        var giphyAPI = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';
        // Make a ajax call to get the json data as data.
        $.getJSON(giphyAPI, function(data) {
            console.log(data.data);
            var giphArr = [];

            for (var i = 0; i < data.data.length; i++) {
                giphArr.push(data.data[i].images.downsized);
                content.innerHTML += "<br><img class=\"gif\" src=" + giphArr[i].url + ">";
            }
        });
    });
});
