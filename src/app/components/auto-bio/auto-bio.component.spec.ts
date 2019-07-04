import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoBioComponent } from './auto-bio.component';

describe('AutoBioComponent', () => {
  let component: AutoBioComponent;
  let fixture: ComponentFixture<AutoBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
