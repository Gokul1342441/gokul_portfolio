import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
 
  educationBackgrounds: any[] = [];

  constructor(private educationService: EducationService) {}
 
  ngOnInit() {
    this.getEducationBackgrounds();
  }
 
  getEducationBackgrounds() {
    this.educationService.getEducationBackgrounds().subscribe(
      response => {
        this.educationBackgrounds = response;
      },
      error => {
        console.error('Error retrieving education backgrounds: ', error);
      }
    );
  }
}
