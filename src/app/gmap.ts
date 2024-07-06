import { ElementRef } from "@angular/core";

export interface Position {
    lat: number;
    lng: number;
};
// More Info https://developers.google.com/maps/documentation/javascript/advanced-markers/start
export class Gmap {
    private map!: google.maps.Map;
    contentString =  
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";



    constructor(elementRef: ElementRef){
        this.map = new google.maps.Map(elementRef.nativeElement, 
          {
            zoom: 2,
            center: { lat: 0, lng: 0 },
            mapId: "DEMO_MAP_ID"
          });
          if (this.map) {
            console.log('Map initialized successfully!');
          } else {
            console.error('Error initializing map!');
          }
    }
    addMarker(position: Position){

        const marker = new google.maps.marker.AdvancedMarkerElement({
            map: this.map,
            position: position,
            title: 'Uluru',
        });
        marker.addListener("click", () => {
            const infowindow = new google.maps.InfoWindow({
                content: this.contentString,
                ariaLabel: "Uluru",
              });
            infowindow.open({
              anchor: marker,
              map: this.map,
            }); 
          });
    }

}
