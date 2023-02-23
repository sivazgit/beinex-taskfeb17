import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  formData:any;
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
     this.formData = this.myForm;
           
  }
  



}
