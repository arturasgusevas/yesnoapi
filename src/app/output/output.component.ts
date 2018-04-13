import { Component, OnInit, Input } from '@angular/core';
import { OutputService } from '../output.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() answer;

  constructor(public outputService: OutputService) { }

  ngOnInit() {
  }

}
