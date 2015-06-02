/**
 ** POPUP by Stratis BAKAS
 */
 
var popup = (function() 
{

	function init() {

		var overlay = $('.overlay');
		var sectionBlur = $('.page');
		

		$('.popup-button').each(function(i, el)
		{
			var modal = $('#' + $(el).attr('data-modal'));
			var close = $('.close');

			// fonction qui enleve la class .show de la popup et la fait disparaitre
			function removeModal() {
				modal.removeClass('show');
				sectionBlur.foggy(false);
			}

			// evenement qui appelle la fonction removeModal()
			function removeModalHandler() {
				removeModal(); 
			}

			// au clic sur le bouton on ajoute la class .show a la div de la popup qui permet au CSS3 de prendre le relai
			$(el).click(function()
			{	
				modal.addClass('show');
				overlay.unbind("click");
				sectionBlur.foggy(
				{
   blurRadius: 20,          // In pixels.
   opacity: 0.8,           // Falls back to a filter for IE.
   cssFilterSupport: true  // Use "-webkit-filter" where available.
 }
				);	

				// on ajoute sur l'overlay la fonction qui permet de fermer la popup
				overlay.bind("click", removeModalHandler);
			});

			// en cliquant sur le bouton close on ferme tout et on arrête les fonctions
			close.click(function(event)
			{
				event.stopPropagation();
				removeModalHandler();
				
			});

		});
	}

	init();

})();