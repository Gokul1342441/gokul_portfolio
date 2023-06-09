import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.skillService.getSkills().subscribe(
      response => {
        this.skills = response;
      },
      error => {
        console.error('Error retrieving skills: ', error);
      }
    );
  }
}