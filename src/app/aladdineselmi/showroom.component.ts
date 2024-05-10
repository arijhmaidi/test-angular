import { Component } from '@angular/core';
import { showrrom } from '../models/aladdineselmi';
import { ShowrommserviceService } from '../service/showrommservice.service';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent {
  listappart:showrrom[]=[]
  constructor(private showroomservice:ShowrommserviceService){
  }
  ngOnInit(): void {
    console.log("start")
    this.showroomservice.getshowromm().subscribe((data:showrrom[])=>{
this.listappart=data
console.log(JSON.stringify(this.listappart))
    })
}
deleteAppart(id:number){
  this.showroomservice.deleteshowroom(id).subscribe(()=>{
    console.log(" deleted")
    window.location.reload()
  })
}

}
