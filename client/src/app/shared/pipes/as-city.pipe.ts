import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asCity'
})
export class AsCityPipe implements PipeTransform {
  private locations = ['All', 'Jakarta', 'Bandung', 'Yogyakarta', 'Bali'];

  transform(locationId: string, args?: any): any {
    return this.locations[locationId];
  }

}
