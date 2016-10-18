import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'kegFilter',
  pure: false
})
export class KegFilterPipe implements PipeTransform {
  transform(input: Keg[], filterChoice) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (filterChoice === "low") {
        if (input[i].pintsLeft <= 10 && input[i].pintsLeft > 0) {
          output.push(input[i]);
        }
      } else if (filterChoice === "out") {
        if (input[i].pintsLeft === 0) {
          output.push(input[i]);
        }
      } else {
        return input;
      }
    }
    return output;
  }
}
