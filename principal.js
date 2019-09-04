var	banners =
	["Os melhores do Brasil!", "Qualidade a preço baixo!"];
var bannerAtual = 0;

function trocaBanner(){
	bannerAtual = (bannerAtual + 1) % 2;
	document.queryselector('h2mensagem').textcontent =
	banners[bannerAtual];


}
setInterval(trocaBanner, 2000);