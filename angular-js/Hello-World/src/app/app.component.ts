import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-World';

Name = " ";
Age = 0;
gender = Male;

save() {
  console.log(this.name + " " + this.age + " " + this.gender);
}
}