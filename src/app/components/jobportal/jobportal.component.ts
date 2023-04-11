import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css']
})
export class JobportalComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
jobForm=this.fb.group({
  firstName: ['',[Validators.required]],
  lastName:new FormControl(''),
  contacts:this.fb.group({
    contactType:['-1'],
    email:[''],
    phone:['']
  }),
  skills:new FormArray([])
})

preveiw:string=''
  ngOnInit(): void {
    this.simplePaychValues();
  }
save(){
this.preveiw=JSON.stringify(this.jobForm.value);


}
get skillsFrom(){
  return this.jobForm.get('skills') as FormArray
}
addSkillsFormGroup(){
  this.skillsFrom.push(this.fb.group({
    programLanguage:[''],
    experience:[]

  }

  ))
  
}
removeSkillsFromGroup(index:number){
this.skillsFrom.removeAt(index);
}
simpleSetValues(){
  this.jobForm.setValue({
    firstName: 'hajlaoui',
    lastName:'Naoufel',
    contacts:{
      contactType:'email',
      email:"naoufel.hajlaoui@gmail.com",
      phone:'12345678'

    },skills:[]


  })
}
simplePaychValues(){
  this.jobForm.patchValue({
    firstName: 'hajlaoui',
    lastName:'Naoufel',
    contacts:{
      contactType:'email',
      email:"naoufel.hajlaoui@gmail.com",
      phone:'12345678'

    },skills:[]


  })
}
}
