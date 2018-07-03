var map;
function initMap() {
    $('.googleMap').each(function() {
        var lat = $(this).data('lat'),
            long = $(this).data('long'),
            title = $(this).data('title').toString(),
            id = $(this).attr('id');

        var map_canvas = this;

        mapConfig(map_canvas,lat,long,title);
    });
}

function mapConfig(map_canvas,lat,long,title) {
    var map_options = {
        center: new google.maps.LatLng(lat, long),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        streetViewControl: false,
        //draggable: !("ontouchend" in document)
    };

    map = new google.maps.Map(map_canvas, map_options);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        map: map,
        title: title,
        url: 'http://maps.google.com/maps?q=loc:' + String(lat) + ',' + String(long)
    });

    google.maps.event.addListener(marker, 'click', function() {
        /*window.location.href = this.url;*/
        window.open(this.url,'_blank');
    });
}