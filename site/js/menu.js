function fonctionTest(){
	var ouvreFerme = document.getElementById('nav') ;
	var sectionBlur = $('.page');
	
	if (ouvreFerme.className.match('ferme')){
		ouvreFerme.className = "ouvre" ;
		sectionBlur.foggy(
				{
   blurRadius: 15,          // In pixels.
   opacity: 0.8,           // Falls back to a filter for IE.
   cssFilterSupport: true  // Use "-webkit-filter" where available.
 })
	} else {
		ouvreFerme.className = "ferme" ;
		sectionBlur.foggy(false);
		}}