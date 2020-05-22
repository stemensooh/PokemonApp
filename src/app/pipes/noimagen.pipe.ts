import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(images: string): string {
    if(!images){
      return 'assets/img/no-image.jpg';
    }
    if(images.length > 0)
    {
      return images;
    }else{
      return 'assets/img/no-image.jpg';
    }
  }

}
