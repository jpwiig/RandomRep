

	var images;
	

images= [
	"./bilder/72dpi (1 of 10).jpg"
	"./bilder/72dpi (5 of 10).jpg"
	"./bilder/72dpi (6 of 10).jpg"
	"./bilder/72dpi (7 of 10).jpg"
	"./bilder/72dpi (9 of 10).jpg"
	"./bilder/72dpi (10 of 10).jpg"
]

//document.getElementById("galleri").src=images[randInt]; 
var bilder=document.querySelectorAll(".galleri");
var knapp=document.getElementById("knapp");
function endreplassering(var i){
	for(int i=0; bilder.length; i++){
			document.getElementById(".galleri").src=bilder[i];
	}
}
}
