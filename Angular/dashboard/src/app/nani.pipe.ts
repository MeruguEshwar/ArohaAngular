import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nani'
})
export class NaniPipe implements PipeTransform {

  transform(href: string) {
    return href.startsWith("http://") || href.startsWith("https://") ? href : "http://" + href
  }

  

}
