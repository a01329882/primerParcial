const api = 'https://rickandmortyapi.com/api/character';
const contentContainer = document.getElementById("content-container");
contentContainer.innerHTML = "<h1>Holas</h1>";
let result;

consumirAPI();
async function consumirAPI(){
        const response = await fetch(api);
        result = await response.json();
        contentContainer.innerHTML = await
        '<div><img src="' + result.results[0].image + '" >'+
        '<h3 onclick="displayInfo('+0+')">' + result.results[0].name + "</h3></div>";
        var i=0;
        for(i=1; i<18; i++){
                contentContainer.innerHTML = await contentContainer.innerHTML +
                '<div><img src="' + result.results[i].image + '" >'+
                '<h3 onclick="displayInfo('+i+')">' + result.results[i].name + "</h3></div>";
        }   
}

function displayInfo(num){
        console.log(num);
        const infoContainer = document.getElementById("info-container");
        infoContainer.innerHTML = result.results[num].status;

        
}
//<img src="" alt="">
