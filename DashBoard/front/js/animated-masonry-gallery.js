$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-tit-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
$container.isotope({itemSelector : 'li'});


function check_button(){
	$('.gallery-header-center-tit-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==2){
		$("#filter-web").addClass(button_class);
		$("#gallery-header-center-left-title").html('web Gallery');
		}
	if(button==3){
		$("#filter-mobile").addClass(button_class);
		$("#gallery-header-center-left-title").html('mobile Gallery');
		}
	if(button==4){
		$("#filter-responsive").addClass(button_class);
		$("#gallery-header-center-left-title").html('responsive Gallery');
		}		
	}
	
function check_size(){
	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		$("#gallery-content-center").addClass(normal_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		$("#gallery-content-center").addClass(full_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	$container.isotope({itemSelector : 'li'});
}


	
$("#filter-all").click(function() { $container.isotope({ filter: '.all' }); button = 1; check_button(); });
$("#filter-web").click(function() {  $container.isotope({ filter: '.web' }); button = 2; check_button();  });
$("#filter-mobile").click(function() {  $container.isotope({ filter: '.mobile' }); button = 3; check_button();  });
$("#filter-responsive").click(function() {  $container.isotope({ filter: '.responsive' }); button = 4; check_button();  });
$("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
check_size();
});