// JavaScript Document

function fonctionTest(){
			var ouvreFerme = document.getElementById('nav') ;
			if (ouvreFerme.className.match('ferme') ) {
				
				ouvreFerme.className = "ouvre" ;	
			} else {
				ouvreFerme.className = "ferme" ;

			}
		}