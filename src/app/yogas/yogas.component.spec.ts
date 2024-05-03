import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogasComponent } from './yogas.component';

describe('YogasComponent', () => {
  let component: YogasComponent;
  let fixture: ComponentFixture<YogasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YogasComponent]
    });
    fixture = TestBed.createComponent(YogasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
