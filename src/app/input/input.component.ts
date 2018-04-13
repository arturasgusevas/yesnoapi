import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  answer;
  disabled = true;

  constructor(private answerService: AnswerService) { }

  getAnswer(){
    this.answerService.getData().subscribe(result => {
      this.answer = result;
    })
  }

  toggle(e){

      if(e.length > 0){
        this.disabled = false;
      }else{
        this.disabled = true;
      }
  }


  ngOnInit() {
  }

}
