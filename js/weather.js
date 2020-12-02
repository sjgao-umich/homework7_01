function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location = "Ann Arbor";

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "Fahrenheit";

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=1a56ffec3d035169e84422c17f2297fd";
    // Your code here.  

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#location").value;
    //let temp = JSON.stringify(json)[3].temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        document.querySelector("#forecast").innerHTML = location;
        console.log(JSON.stringify(json));
        //concole.log(json[3].temp)
    });
}