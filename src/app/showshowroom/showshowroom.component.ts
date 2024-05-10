import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowrommserviceService } from '../service/showrommservice.service';
import { showrrom } from '../models/arijhmaidi';

@Component({
  selector: 'app-showshowroom',
  templateUrl: './showshowroom.component.html',
  styleUrls: ['./showshowroom.component.css']
})
export class ShowshowroomComponent {
  id!:number
  constructor(
    private act : ActivatedRoute,
    private appartService : ShowrommserviceService,
    private route:Router
  ){
  }
  listappart:showrrom[]=[]

  ngOnInit(): void {
this.id=this.act.snapshot.params['id']
    this.appartService.getbyidshowroom(this.id).subscribe((data:showrrom[])=>{
      this.listappart.push(data as any)
      console.log('++++++++++++'+JSON.stringify(this.listappart))
      
          })
      
  }
}
