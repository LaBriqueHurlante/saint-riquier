$(document).ready(function() {
	var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ];
	
  for ( var i=0; i<30; i++ ) {
	
	
    $('<div>' +	
	 '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      containment: '.section2',
      stack: '#cardPile div',
      cursor: '-webkit-grab',
      revert: false
    } )
	$('<img src="../css/img/patchwork/' + numbers[i]+ '.svg" />').appendTo( '#card'+numbers[i] ).draggable( {
      containment: '.section2',
      stack: '#cardPile img',
      cursor: '-webkit-grab',
      revert: false
    } )
  }


  
  for ( var i=1; i<=30; i++ ) {
    $('<div class="slot-carre">' + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile img',
      hoverClass: 'hovered',
	  drop: handleCardDrop
	  

    } ).css({
		'display': 'inline-block',
		'width': '213px',
		'height': '213px',
		'margin': '15px'
		});
  }
  

function handleCardDrop( event, ui ) {

    ui.draggable.addClass( 'correct' );

    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );


}});