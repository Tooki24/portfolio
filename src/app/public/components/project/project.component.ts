import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/interface/projet';
import { StrapiService } from '../../services/strapi.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects !: Projet[]
  constructor(private _strapiService: StrapiService) {
  }

  async ngOnInit(): Promise<void> {
    this.projects  = await this._strapiService.getProjects()
  }

}
