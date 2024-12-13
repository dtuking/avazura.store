import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenheaderComponent } from './openheader.component';

describe('OpenheaderComponent', () => {
  let component: OpenheaderComponent;
  let fixture: ComponentFixture<OpenheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenheaderComponent]
    });
    fixture = TestBed.createComponent(OpenheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
