import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    PresentationComponent,
    ExperienceComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    TitleComponent,
    PresentationComponent,
    ExperienceComponent,
    ProjectComponent
   ]
})
export class PublicModule { }
