function getJSON(url) {      
    return fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(user) {
            return user;
        })
        .catch( alert );       
}  

var getAstros = getJSON('http://api.open-notify.org/astros.json');

getAstros.then(function(data) {
    console.log(data.message);
    }, function(error) {
        console.log(err);
});

