import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  myForm:any = FormGroup;

  
  constructor(private fb:FormBuilder){}
  ngOnInit(){

      this.myForm = this.fb.group({
        name: ['San', Validators.required],
        address: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        password:['',Validators.required],
        phone:['',[Validators.required,Validators.maxLength(10)]],
        message: ['',Validators.required,Validators.maxLength(15)]
      });
  
  }

  onSubmit(form:FormGroup){
      console.log('Name', form.value.name);
     
      console.log('Address', form.value.address);
      console.log('Email', form.value.email);
      console.log('Password', form.value.password);
      console.log('Phone', form.value.phone);
      console.log('Message', form.value.message);



      
  }


}
