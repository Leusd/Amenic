function filmes()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=7c2b66d4073316cbd458dd3eb381fc17&language=pt-BR&include_image_language=pt,null", false);
    xhr.send();
    var dadosfilmes = new Object;
    dadosfilmes = JSON.parse(xhr.response);
    var quant = dadosfilmes.results.length;
	var i;
	

for (i = 2; i <= quant; i++) { 
	var filmes = document.createElement("div");
	filmes.setAttribute( "id","filme0" + i );
	filmes.setAttribute( "class","filme col-sm-4" );
	document.getElementById("banner").appendChild(filmes);
	
	var linkFilme = document.createElement("a");
	linkFilme.setAttribute( "id","link0" + i );
	linkFilme.setAttribute( "class","link" );
	linkFilme.setAttribute( "href","InfoFilme.html?nome=" + dadosfilmes.results[i].title);
	document.getElementById("filme0" + i).appendChild(linkFilme);
	
	var dadosFilmes = document.createElement("h2");
	dadosFilmes.setAttribute( "id","nomefilme0" + i );
	dadosFilmes.setAttribute( "class","nomefilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	var dadosFilmes = document.createElement("p");
	dadosFilmes.setAttribute( "id","sinfilme0" + i );
	dadosFilmes.setAttribute( "class","sinfilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	var dadosFilmes = document.createElement("img");
	dadosFilmes.setAttribute( "id","imgfilme0" + i );
	dadosFilmes.setAttribute( "class","imgfilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	document.getElementById("nomefilme0"+i).innerHTML = dadosfilmes.results[i].title; "<br>";
	document.getElementById("sinfilme0"+i).innerHTML = dadosfilmes.results[i].overview;
	document.getElementById("imgfilme0"+i).src = "https://image.tmdb.org/t/p/w500" + dadosfilmes.results[i].poster_path;
}


}


function lanAno()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=7c2b66d4073316cbd458dd3eb381fc17&language=pt-BR&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&primary_release_year=2017", false);
    xhr.send();
    var dadosfilmes = new Object;
    dadosfilmes = JSON.parse(xhr.response);
    var quant = dadosfilmes.results.length;
	var i;
	

for (i = 2; i <= quant; i++) { 
	var filmes = document.createElement("div");
	filmes.setAttribute( "id","filme0" + i );
	filmes.setAttribute( "class","filme" );
	document.getElementById("banner").appendChild(filmes);
	
	var linkFilme = document.createElement("a");
	linkFilme.setAttribute( "id","link0" + i );
	linkFilme.setAttribute( "class","link" );
	linkFilme.setAttribute( "href","InfoFilme.html?nome=" + dadosfilmes.results[i].title);
	document.getElementById("filme0" + i).appendChild(linkFilme);
	
	var dadosFilmes = document.createElement("h2");
	dadosFilmes.setAttribute( "id","nomefilme0" + i );
	dadosFilmes.setAttribute( "class","nomefilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	var dadosFilmes = document.createElement("p");
	dadosFilmes.setAttribute( "id","sinfilme0" + i );
	dadosFilmes.setAttribute( "class","sinfilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	var dadosFilmes = document.createElement("img");
	dadosFilmes.setAttribute( "id","imgfilme0" + i );
	dadosFilmes.setAttribute( "class","imgfilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	document.getElementById("nomefilme0"+i).innerHTML = dadosfilmes.results[i].title; "<br>";
	document.getElementById("sinfilme0"+i).innerHTML = dadosfilmes.results[i].overview;
	document.getElementById("imgfilme0"+i).src = "https://image.tmdb.org/t/p/w500" + dadosfilmes.results[i].poster_path;
}
	
}
function filmesPremiados()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.themoviedb.org/4/list/28?page=1&api_key=7c2b66d4073316cbd458dd3eb381fc17&language=pt-BR&sort_by=release_date.desc", false);
    xhr.send();
    var dadosfilmes = new Object;
    dadosfilmes = JSON.parse(xhr.response);
    var quant = dadosfilmes.results.length;
	var i;
	

for (i = 2; i <= quant; i++) { 
	var filmes = document.createElement("div");
	filmes.setAttribute( "id","filme0" + i );
	filmes.setAttribute( "class","filme" );
	document.getElementById("banner").appendChild(filmes);
	
	var linkFilme = document.createElement("a");
	linkFilme.setAttribute( "id","link0" + i );
	linkFilme.setAttribute( "class","link" );
	linkFilme.setAttribute( "href","InfoFilme.html?nome=" + dadosfilmes.results[i].title);
	document.getElementById("filme0" + i).appendChild(linkFilme);
	
	var dadosFilmes = document.createElement("h2");
	dadosFilmes.setAttribute( "id","nomefilme0" + i );
	dadosFilmes.setAttribute( "class","nomefilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	var dadosFilmes = document.createElement("p");
	dadosFilmes.setAttribute( "id","sinfilme0" + i );
	dadosFilmes.setAttribute( "class","sinfilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	var dadosFilmes = document.createElement("img");
	dadosFilmes.setAttribute( "id","imgfilme0" + i );
	dadosFilmes.setAttribute( "class","imgfilme");
	document.getElementById("link0"+i).appendChild(dadosFilmes);
	
	document.getElementById("nomefilme0"+i).innerHTML = dadosfilmes.results[i].title; "<br>";
	document.getElementById("sinfilme0"+i).innerHTML = dadosfilmes.results[i].overview;
	document.getElementById("imgfilme0"+i).src = "https://image.tmdb.org/t/p/w500" + dadosfilmes.results[i].poster_path;
}
	


}


function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}


function dadosFilmes()
{
    var xhr = new XMLHttpRequest();
    var myParam = queryObj();
    var nome = myParam.nome;
    var xhr = new XMLHttpRequest();
    var busca = "https://api.themoviedb.org/3/search/movie?api_key=7c2b66d4073316cbd458dd3eb381fc17&language=pt-BR&query=" + nome + "&page=1&include_adult=false";
    xhr.open("GET", busca, false);
    xhr.send();
    var filme = new Object();
    filme = JSON.parse(xhr.response);
    document.getElementById("nomeFilme").innerHTML = filme.results[0].title;
    document.getElementById("dataFilme").innerHTML = filme.results[0].release_date;
    document.getElementById("sinFilme").innerHTML = filme.results[0].overview;
    document.getElementById("imgFilme").src = "https://image.tmdb.org/t/p/w500" + filme.results[0].poster_path;
}