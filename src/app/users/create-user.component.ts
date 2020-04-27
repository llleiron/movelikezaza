import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { fromEventPattern } from 'rxjs';
import { User } from '../models/user.model'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  user: User={
    id: null,
    FirstName: null,
    LastName: null,
    dateOfBirth: null,
    email: null,
    phoneNumber: null,
    FatLoss: false,
    MuscleGain: false,
    RehabPrehab: false,
    ImproveStrength: false,
    SporstSpecific: false,
    LearnNewSkill: false,
    ImproveFlexibility: false,
    Cardiovascular: false,
    InfoAboutSpecifical: null,
    BeforeAfter: false,
    Weight: false,
    BodyFat: false,
    TapeMeasure: false,
    Performance: false,
    Assessments: false,
    Achive: null,
    TimeToAchive: null,
    Committed: null,
    Train: null,
    DeatilAboutTrain: null,
    TrainingLike: null,
    Follow: null,
    Coaching: null,
    Problems: null,
    DetailAboutProblems: null,
    Preventing: null,
    Supporting: null
  }
  constructor() { 
    this.datePickerConfig = Object.assign({},
    {containerClass: 'theme-dark-blue',
     dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit() {
  }
  saveUser(userForm: NgForm): void{
  
    console.log(userForm);
  }
}

