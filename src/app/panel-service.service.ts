import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panel } from './panel';

@Injectable({
  providedIn: 'root'
})
export class PanelServiceService {
  private getPanelsUrl: string;
  private addPanelUrl: string;
  private deletePanelUrl: string;
   private updateUrl: string;
  constructor(private http: HttpClient) {
    this.getPanelsUrl = 'http://localhost:8080/viewall-panel';
   }
   public findAll(): Observable<Panel[]> {
    return this.http.get<Panel[]>(this.getPanelsUrl);
  }
  createPanel(panel:Panel):Observable<Object>{
    return this.http.post(`$(this.addPanelUrl)`,panel);
  }
  updatePanel(panelNumber:number, panel:Panel):Observable<Object>{
    return this.http.put(`$(this.updateUrl)/${panelNumber}`,panel);
  }
  deletePanel(panelNumber:number):Observable<Object>{
    return this.http.delete(`$(this.deletePanelUrl)/${panelNumber}`);
  }
}
