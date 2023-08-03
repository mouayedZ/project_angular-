import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {

  signupForm: FormGroup;
  title: string = "Signup";
  errorMsg: string;
  imagePreview: any;
  constructor(private X: FormBuilder,
    private usersService: UserService,
    private router: Router
  ) { }


  ngOnInit() {
    this.signupForm = this.X.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required]],

      pwd: ['', [Validators.required, Validators.pattern('[ A-Z ]*')]],
      img: [''],
    })
  }


  signup() {

    console.log('here signup clicked', this.signupForm.value);
    this.signupForm.value.role = "admin";
    this.usersService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((response) => {
      console.log("here response from backend", response.msg);
      if (response.msg) {
        this.router.navigate(["login"]);

      } else {
        this.errorMsg = "error with signup"
      }
    });

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }


}
