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
}
