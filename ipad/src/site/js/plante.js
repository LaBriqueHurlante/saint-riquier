	
	$(function(){

    $('.ul-svg li').draggable(); // appel du plugin
	$('#cielsoleil').draggable({
    	snap : '#plante-fond' // chaque élément ayant la classe "draggable" exercera une attraction
});
	$('#plante-fond').droppable();

});
	