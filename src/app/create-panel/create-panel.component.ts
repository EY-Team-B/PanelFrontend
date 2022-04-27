import { Component, OnInit } from '@angular/core';
import { Panel } from '../panel';
import { PanelServiceService } from '../panel-service.service';

@Component({
  selector: 'app-create-panel',
  templateUrl: './create-panel.component.html',
  styleUrls: ['./create-panel.component.css']
})
export class CreatePanelComponent implements OnInit {
  panel : Panel =new Panel();
  constructor(private panelService:PanelServiceService ) { }

  ngOnInit(): void {
  }
  savePanel(){
    this.panelService.createPanel(this.panel).subscribe(data =>{
      console.log(data);
    })
  }
  
  onSubmit(){
    console.log(this.panel);
    this.savePanel();
  }
}
