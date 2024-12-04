import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { SKILLSComponent } from './skills/skills.component';
import { WORKComponent } from './work/work.component';
import { EXPRIENCEComponent } from './exprience/exprience.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,
    HOMEComponent,
    SKILLSComponent,
    WORKComponent,
    EXPRIENCEComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
