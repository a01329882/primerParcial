const api = 'https://rickandmortyapi.com/api/character';
const contentContainer = document.getElementById("content-container");
let result;

consumirAPI();
async function consumirAPI(){
        const response = await fetch(api);
        result = await response.json();
        contentContainer.innerHTML = await
        '<div><img src="' + result.results[0].image + '" >'+
        '<h3 onclick="displayInfo('+0+')">' + result.results[0].name + "</h3>"+'<div id="elem' + 0 + '"></div></div>';
        var i=0;
        for(i=1; i<18; i++){
                contentContainer.innerHTML = await contentContainer.innerHTML +
                '<div><img src="' + result.results[i].image + '" >'+
                '<h3 onclick="displayInfo('+i+')">' + result.results[i].name +
                "</h3>"+'<div id="elem' + i + '"></div></div>';     
        }   
}

function displayInfo(num){
        console.log(num);
        console.log("elem" + num);
        const elem = document.getElementById("elem" + num);
        const status = result.results[num].status;
        const species = result.results[num].species;
        const location = result.results[num].location.name;
        const episodes = result.results[num].episode;
        if(elem.innerHTML==''){
                elem.innerHTML = '<h4>Status: '+status+'</h4>'
                + '<h4>Species: '+species+'</h4>' + '<h4>Location: '+location+'</h4>'
                +'<h4>Episodes: '+episodes.length+'</h4>';
        }else{
                elem.innerHTML='';
        } 
}
//<img src="" alt="">
