import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HOMEComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { WORKComponent } from './work/work.component';
import { SKILLSComponent } from './skills/skills.component';
import { EXPRIENCEComponent } from './exprience/exprience.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HOMEComponent, title: 'home' },
  { path: 'about', component: ABOUTComponent, title: 'about' },
  { path: 'work', component: WORKComponent, title: 'work' },
  { path: 'skills', component: SKILLSComponent, title: 'skills' },
  { path: 'exprience', component: EXPRIENCEComponent, title: 'exprience' },
  { path: '**', component: NotfoundComponent, title: 'notfound' },
];
