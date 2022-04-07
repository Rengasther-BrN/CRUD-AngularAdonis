import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Register } from 'src/app/Register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output () onSubmit = new EventEmitter<Register>()

  @Input() btnText!: string;
  
  registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      created_at: new FormControl(''),
      updated_at: new FormControl('')
    });
  }

  get title() {
    return this.registerForm.get('title')!;
  }

  get description() {
    return this.registerForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.registerForm.patchValue({ image: file});
  }


  submit(){
    if(this.registerForm.invalid){
      return;
    }

    this.onSubmit.emit(this.registerForm.value);

  }

}
