// import { User } from './User';
// import { Company } from './Company';

// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapHtml = document.getElementById(divId) as HTMLElement;

    this.googleMap = new google.maps.Map(mapHtml, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: 'Hi there!',
    });
    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
