import { Component, OnInit } from '@angular/core';
import { MenuService } from '../common-service/menu.service';
import { AppAlarmService } from '../common-service/app-alarm.service';
import { MenuGroup } from '../common-service/menu-group';
import { ResponseObject } from '../common-service/model/response-object';
import { Menu } from '../common-service/menu';
import { Program } from '../common-service/Program';
import { ProgramService } from '../common-service/program.service';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styles: ['']
})
export class ProgramFormComponent implements OnInit {

  program: Program;

  constructor(private programService: ProgramService,
              private appAlarmService: AppAlarmService) { }

  ngOnInit() {
    this.program = new Program();
    console.log('ProgramFormComponent init');
  }

  private getProgram() {
    this.programService
      .getProgram(this.program.programCode)
      .subscribe(
        (model: ResponseObject<Program>) => {
          console.log(model);
          if ( model.total > 0 ) {
            this.program = model.data;
          } else {
            this.program = new Program();
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

  private submitProgram() {
    this.programService
      .registerProgram(this.program)
      .subscribe(
        (model: ResponseObject<Program>) => {
          console.log(model);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('완료');
        }
      );
  }

  private onValueChange(value) {
    console.log(value);
  }

}
