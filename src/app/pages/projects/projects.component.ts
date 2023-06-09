import { Component, OnInit } from '@angular/core';
import { projectservice } from 'src/app/service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: projectservice) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe(
      response => {
        this.projects = response;
      },
      error => {
        console.error('Error retrieving projects: ', error);
      }
    );
  }
}
