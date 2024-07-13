import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
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
        trimValidator,
        Validators.minLength(5),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        trimValidator,
        Validators.minLength(5),
      ]),
    });
  }

  validateUserInput() {
    const userInfo = this.userForm.value
    console.warn(userInfo);
    alert(`Hi! ${userInfo.firstname} ${userInfo.lastname}`);
  }
}



export const trimValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value || value === '') return null;

    if (value.startsWith(' ') || value.endsWith(' ')) {
        control.setValue(control.value?.trim(), { emitEvent: false, onlySelf: true });
    }

    return null;
};