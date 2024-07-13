import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  userForm!: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  validateUserInput() {
    console.warn(this.userForm.value);
  }
}
