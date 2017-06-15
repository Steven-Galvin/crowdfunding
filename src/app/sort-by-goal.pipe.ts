import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model'

@Pipe({
  name: 'sortByGoal',
  pure: false
})
export class SortByGoalPipe implements PipeTransform {

  transform(input: Project[], goal){
    var output: Project[] = [];
    if(goal === "lightProject") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal <= 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (goal === "heavyProject") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].goal > 10000) {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
 }
