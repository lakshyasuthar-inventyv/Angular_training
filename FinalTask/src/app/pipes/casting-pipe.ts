import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casting'
})
export class CastingPipe implements PipeTransform {

  transform(lat: string,lng:string, ...args: unknown[]): {latitude: number, longitude: number} | null {
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    if (!isNaN(latitude) && !isNaN(longitude)) {
      return {latitude, longitude};
    }
    return null;
  }

}
