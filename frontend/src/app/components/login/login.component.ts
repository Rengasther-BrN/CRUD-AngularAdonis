import { Auth } from './../../Auth';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output () onSubmit = new EventEmitter<Auth>()

  formGroup!: FormGroup; 


  constructor(private authService: AuthService) { 

    
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  
  
  loginProces(){
    if(this.formGroup.invalid){
      return;
    }

    this.onSubmit.emit(this.formGroup.value);

  }

  //
  //loginProces(){
  //  if(this.formGroup.valid){
  //    this.authService.login(this.formGroup.value).subscribe(result => {
  //      if (result){
  //        console.log(result);
  //        alert(result);
  //      }else {
  //        alert(result)
  //      }
  //    })
  //  }
  //}

}
