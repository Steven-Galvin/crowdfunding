import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { SortByGoalPipe } from '../sort-by-goal.pipe'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterBySortByGoalPipe: string = "allProjects";

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  };

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    }

    onChange(optionFromMenu) {
    this.filterBySortByGoalPipe = optionFromMenu;
    }

}
