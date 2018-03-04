import { Component, OnInit, Input } from '@angular/core';

import { ProgramService } from '../../common-service/program.service';
import { ResponseList } from '../../../common/common-service/model/response-list';
import { Program } from '../../common-service/Program';


@Component({
  selector: 'app-program-grid',
  templateUrl: './program-grid.component.html',
  styles: ['']
})
export class ProgramGridComponent implements OnInit {

  searchProgramCode: string;
  programList: Program[];
  selectedProgram: Program;

  constructor(private programService: ProgramService) { }

  ngOnInit() {
  }

  getProgramList() {
    this.programService.getProgramList()
      .subscribe(
        (model: ResponseList<Program>) => {
          if (model.data) {
            this.programList = model.data;
          }
        },
        (err) => {},
        () => {}
    );
  }

}
