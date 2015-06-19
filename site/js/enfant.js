$(document).ready(function() {
	var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30,31,32 ];
	
  for ( var i=0; i<32; i++ ) {
		
    $('<div class="enf_plumes">' +	
	 '</div>').data( 'number', numbers[i] ).attr( 'id', 'enfant'+numbers[i] ).appendTo( '.section2');
	$('<img src="../css/img/glendinning/calques/' + 'enf'+numbers[i]+ '.png" />').appendTo( '#enfant'+numbers[i] ).hide();
  }
 
 
$('.enf_plumes').click(function() {
  $( this ).css({
  	"width":'auto',
	"z-index": '1',
	"top":'0px',
	"right":'0px',
	"background":'none'
  })
  $(this).find("img").fadeIn('slow');
  //poemes();
}); 

	function poemes(){
	var randomImage = {
        paths: [
          "../css/img/glendinning/poeme/decoration.png",
          "../css/img/glendinning/poeme/estcesurlepoint.png",
          "../css/img/glendinning/poeme/etre-special.png",
		  "../css/img/glendinning/poeme/levolution.png",
		  "../css/img/glendinning/poeme/lopportunite.png",
		  "../css/img/glendinning/poeme/lorsque.png",
		  "../css/img/glendinning/poeme/respirer.png",
		  "../css/img/glendinning/poeme/serons-nous-non.png",
		  "../css/img/glendinning/poeme/seronsnous1.png",
		  "../css/img/glendinning/poeme/seronsnous2.png",
		  "../css/img/glendinning/poeme/seronsnous3.png",
        ],
        generate: function(){
          var path = randomImage.paths[Math.floor(Math.random()*randomImage.paths.length)];
          var img = new Image();
          img.src = path; 
          $('<a href="" class="random"></a>').html(img).appendTo( '.section2').click(function(event){
			  event.preventDefault();
			  });
          $("a.random").attr("href", path).delay(1000).fadeIn("slow",function(){
			  $(this).delay(2000).fadeOut('slow');
			  });
        }
      }
      randomImage.generate();
	}
$("#enfant1, #enfant3, #enfant5, #enfant7, #enfant9, #enfant11, #enfant15, #enfant19, #enfant23, #enfant27, #enfant31").click(function(){
	poemes();
	});

});
