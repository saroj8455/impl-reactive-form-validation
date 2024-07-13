import { Component } from '@angular/core';
import { UserInfoComponent } from '../../components/user-info/user-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
