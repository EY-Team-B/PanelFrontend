import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdatePanelComponent } from './udate-panel.component';

describe('UdatePanelComponent', () => {
  let component: UdatePanelComponent;
  let fixture: ComponentFixture<UdatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdatePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
