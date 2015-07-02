$('.w_pleins').hide();
$(document).ready(function(e) {
	var pelage = '';
	$('#trig_rond1').click(function(){
		pelage = 'dalmatien';
	}) 
	$('#trig_ligne1').click(function(){
		if ( pelage == 'dalmatien'){
			$("#dalmatien").fadeIn();
			$("#ligne1").fadeOut();
		}
	})
	
	$('#trig_rond2').click(function(){
		pelage = 'girafe';
	}) 
	$('#trig_ligne2').click(function(){
		if ( pelage == 'girafe'){
			$("#girafe").fadeIn();
			$("#ligne2").fadeOut();
		}
	}) 
	
	$('#trig_rond3').click(function(){
		pelage = 'guepard';
	}) 
	$('#trig_ligne3').click(function(){
		if ( pelage == 'guepard'){
			$("#guepard").fadeIn();
			$("#ligne3").fadeOut();
		}
	})
	
	$('#trig_rond4').click(function(){
		pelage = 'leopard';
	}) 
	$('#trig_ligne4').click(function(){
		if ( pelage == 'leopard'){
			$("#leopard").fadeIn();
			$("#ligne4").fadeOut();
		}
	})
	
	$('#trig_rond5').click(function(){
		pelage = 'tigre';
	}) 
	$('#trig_ligne5').click(function(){
		if ( pelage == 'tigre'){
			$("#tigre").fadeIn();
			$("#ligne5").fadeOut();
		}
	})
	
	$('#trig_rond6').click(function(){
		pelage = 'vache';
	}) 
	$('#trig_ligne6').click(function(){
		if ( pelage == 'vache'){
			$("#vache").fadeIn();
			$("#ligne6").fadeOut();
		}
	})
	
	$('#trig_rond7').click(function(){
		pelage = 'zebre';
	}) 
	$('#trig_ligne7').click(function(){
		if ( pelage == 'zebre'){
			$("#zebre").fadeIn();
			$("#ligne7").fadeOut();
		}
	})
});