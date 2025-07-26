import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComComponent } from './components/my-com/my-com.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyComComponent,FormsModule,CommonModule,TemplateDrivenComponent,ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formatting';
  name="Ashish"

  languages=["Marathi","English","Hindi","Kannada","Tamil"]
}
