fetch("http://ec2-3-83-159-38.compute-1.amazonaws.com:8080/api/Picture").then(function(response) {
    return response.json();
}).then(function(data){
        var element = document.getElementById("listOfAll");
        data.forEach((x) => {
            var tag=document.createElement("p");
            var entry=document.createTextNode("name: "+x.name+" path: "+x.path+" rating: "+x.rating);
            tag.appendChild(entry);
            element.appendChild(tag);
        });
    }
).catch(function() {
    console.log("Failed to connect to the server");
});