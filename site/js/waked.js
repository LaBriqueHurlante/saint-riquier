$('.w_pleins').hide();
$(document).ready(function(e) {
	
	$('#trig_rond1').click(function(){
		pelage = 'dalmatien';
	}) 
	$('#trig_ligne1').click(function(){
		if ( pelage = 'dalmatien'){
			alert('bravo');
		}else{
			alert('Nan');
		}
	})
	
	$('#trig_rond2').click(function(){
		pelage = 'girafe';
	}) 
	$('#trig_ligne2').click(function(){
		if ( pelage = 'girafe'){
			alert('bravo');
		}else{
			alert('Nan');
		}
	}) 
	var pelage = '';
});