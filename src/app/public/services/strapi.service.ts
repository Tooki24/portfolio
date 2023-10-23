import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Experience } from 'src/app/interface/experience';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  constructor(private _httpService: HttpClient) {

  }
  
  public async getExperiences (): Promise<Experience[]> {
    const test = await lastValueFrom(this._httpService.get<{data: Experience[]}>('http://localhost:1337/api/experiences'))
    return test.data
  }
}
