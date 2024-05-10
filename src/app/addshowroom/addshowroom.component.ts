import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowrommserviceService } from '../service/showrommservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addshowroom',
  templateUrl: './addshowroom.component.html',
  styleUrls: ['./addshowroom.component.css']
})
export class AddshowroomComponent {
  formreshowrrom!:FormGroup
  constructor(
    private showroomservice : ShowrommserviceService,
    private route:Router
    ){
    }
  ngOnInit(): void {
    this.formreshowrrom = new FormGroup({

      matricule:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]*$')]),
      nom:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]*$'),Validators.minLength(10)]),
  
      
    })
  }
  add(){
    console.log('added'+JSON.stringify(this.formreshowrrom.value))
    this.showroomservice.addshowroom(this.formreshowrrom.value).subscribe(()=>{
    
      this.route.navigate(['/listshowroom'])
    })

  }

}
