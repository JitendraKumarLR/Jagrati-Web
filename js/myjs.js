//Google Map 
function initMap() {
		var location={lat:23.1782409 ,lng:80.0252362};
		var map=new google.maps.Map(document.getElementsById('map'), {
			zoom:4,
			center:location;
		});
		var marker=new googl.maps.Marker({
			position:location,
			map:map;
		});
}