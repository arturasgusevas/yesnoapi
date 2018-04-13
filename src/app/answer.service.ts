import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OutputService } from './output.service';

@Injectable()
export class AnswerService {

  private answerUrl = 'https://yesno.wtf/api';

  constructor(
    private http: HttpClient,
    private outputService: OutputService) { }

  getData(){
    console.log(this.http.get(this.answerUrl));
    return this.http.get(this.answerUrl);
  }

}
