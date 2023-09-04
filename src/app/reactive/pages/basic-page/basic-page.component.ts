import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})

const rtx5090 = {
  name:'RTX 5090',
  price:2500,
  inStorage:6
}
export class BasicPageComponent implements OnInit {

  //formulario con fromGroup
  // public myForm:FormGroup = new FormGroup(
  //   {
  //     name:new FormControl('',[],[]),
  //     price:new FormControl(0,[],[]),
  //     inStorage:new FormControl(0,[],[]),
  //   }
  // );
  
  //Formulario con FormBuilder
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required],[Validators.minLength(3)]],
    price:[0,[Validators.required],[Validators.min(0)]],
    inStorage:[0,[Validators.required],[Validators.min(0)]],

  });

  onSave():void{

    if(this.myForm.invalid) return;
    console.log(this.myForm.value);

    this.myForm.reset( {price:0,inStorage:0})
     
  }
}
