

$("button").on("click", function () {
    var bands = $(this).attr("data-bands");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bands + "&api_key=JnGmCnV1TZYxyeo7aniDfwJIqUqB8wDX";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
    var topic = response.data;

    for (var i = 0; i < topic.length; i++) {
        if (topic[i].rating !== "r" && topic[i].rating !== "pg-13") {
            var gifSpace = $("<div>");
            var rating = topic[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var bandImage = $("<img>");
            bandImage.attr("src", topic[i].images.fixed_height.url);
            gifSpace.append(p);
            gifSpace.append(bandImage);
            $("#bandGifs").prepend(gifSpace);
        }
    }
});