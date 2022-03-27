const api = 'https://rickandmortyapi.com/api/character';
const contentContainer = document.getElementById("content-container");
contentContainer.innerHTML = "<h1>Holas</h1>";


consumirAPI();
async function consumirAPI(){

        const response = await fetch(api);
        const result = await response.json();
        contentContainer.innerHTML = await
        '<div><img src="' + result.results[0].image + '" >'+
        "<h3>" + result.results[0].name + "</h3></div>";
        var i=0;
        for(i=1; i<18; i++){
                contentContainer.innerHTML = await contentContainer.innerHTML +
                '<div><img src="' + result.results[i].image + '" >'+
                "<h3>" + result.results[i].name + "</h3></div>";
        }   
}

//<img src="" alt="">