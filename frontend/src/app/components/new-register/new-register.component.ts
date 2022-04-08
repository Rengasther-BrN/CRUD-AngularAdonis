import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/Register';
import { MessagesService } from 'src/app/services/messages.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss']
})
export class NewRegisterComponent implements OnInit {
  btnText = 'Enviar';

  constructor( 
    private registerService: RegisterService, 
    private messagesService: MessagesService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  async createHandler(register: Register){
    const formData = new FormData()

    formData.append("title", register.title)
    formData.append("description", register.description)
    formData.append("price", register.price)

    if(register.image){
      formData.append('image',register.image);
    }

    await this.registerService.createRegister(formData).subscribe();

    this.messagesService.add('registro adinionado com sucesso!')

    this.router.navigate(['/home']);

  }

}
