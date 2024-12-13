import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableItemComponent } from './expandable-item.component';

describe('ExpandableItemComponent', () => {
  let component: ExpandableItemComponent;
  let fixture: ComponentFixture<ExpandableItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandableItemComponent]
    });
    fixture = TestBed.createComponent(ExpandableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
