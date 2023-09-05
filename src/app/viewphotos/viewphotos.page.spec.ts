import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewphotosPage } from './viewphotos.page';

describe('ViewphotosPage', () => {
  let component: ViewphotosPage;
  let fixture: ComponentFixture<ViewphotosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewphotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
