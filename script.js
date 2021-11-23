Object.onclick=function(){
	var images;
	function randInt = function (min, max){
		return Math.floor((Math.random()*((max+1)-min))+min)
	};

images= [
	"./bilder/72dpi (1 of 10)"
	"./bilder/72dpi (5 of 10)"
	"./bilder/72dpi (6 of 10)"
	"./bilder/72dpi (7 of 10)"
	"./bilder/72dpi (9 of 10)"
	"./bilder/72dpi (10 of 10)"
]
document.getElementById("galleri").src=images[randInt]; 

}
