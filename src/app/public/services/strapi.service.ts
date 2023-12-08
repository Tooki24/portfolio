import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Experience } from 'src/app/interface/experience';
import { Projet } from 'src/app/interface/projet';
import { Reponse } from 'src/app/interface/reponse';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  constructor(private _httpService: HttpClient) {

  }
  
  public async getExperiences (): Promise<Experience[]> {
    const res = await lastValueFrom(this._httpService.get<Reponse<Experience[]>>('http://localhost:1337/api/experiences'))
    return res.data
  }
    public async getProjects(): Promise<Projet[]> {
    const res:Reponse<Projet[]> = await lastValueFrom(this._httpService.get<Reponse<Projet[]>>('http://localhost:1337/api/projets'))
    return res.data
  }
}
