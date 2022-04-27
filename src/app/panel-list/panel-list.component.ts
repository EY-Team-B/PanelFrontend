import { Component, OnInit } from '@angular/core';
import { Panel } from '../panel';
import { Panelist } from '../panelist';
import { PanelServiceService } from '../panel-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {
  
  constructor(private panelService:PanelServiceService, private router:Router) { }
  panels: Panel[]
  panelists: Panelist[];
  ngOnInit(): void {
    this.getPanel();
    
  }
  private getPanel(){
    this.panelService.findAll().subscribe(data =>{
      this.panels = data;
    })
  }
  updatePanel(panelNumber:number){
    this.router.navigate(['update-panel',panelNumber]);
  }
  deletePanel(panelNumber:number){
    this.panelService.deletePanel(panelNumber).subscribe(data=>{
      this.getPanel();
    })
  }

}
//this.panels = [{
  //   panelNumber: 1,
  //   panelMembers: {
  //         empId: "ABC",
  //         name: "Shubham",
  //         email: "shubham@gmail.com"
  //   },
  //   isActive: true
  // },
  // {
  //   panelNumber: 2,
  //   panelMembers: {
  //     empId: "XYZ",
  //     name: "admin",
  //     email: "admin@gmail.com"
  //   },
  //   isActive: false
  // }]