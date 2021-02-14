import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmodelComponent } from './adminmodel.component';

describe('AdminmodelComponent', () => {
  let component: AdminmodelComponent;
  let fixture: ComponentFixture<AdminmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
