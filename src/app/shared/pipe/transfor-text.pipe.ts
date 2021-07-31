import {Pipe, PipeTransform} from '@angular/core';
import {CustomService} from "../services/custom.service";

@Pipe({
  name: 'transforText',

})
export class TransforTextPipe implements PipeTransform {

  dataRaw: any;

  constructor(private customService: CustomService) {

  }

  transform(value: number, args: any): unknown {
    return `${value} ${args}`
  }


}
