import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, manager: string, description: string, goal: number, allocation: string, reward: string) {
    var newProject: Project = new Project(name, manager, description, goal, allocation, reward);
    this.projectService.addProject(newProject)
  }

}
