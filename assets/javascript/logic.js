var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=JnGmCnV1TZYxyeo7aniDfwJIqUqB8wDX";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });