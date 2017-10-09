function getJSON(url) {

    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                var data = JSON.parse(this.response);
                resolve(data);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);  
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

var getAstros = getJSON('http://api.open-notify.org/astros.json');

getAstros
    .then(function(data) {
        console.log(data.message); // -> “success”
    }, function(error) {
        console.log(err);
    });