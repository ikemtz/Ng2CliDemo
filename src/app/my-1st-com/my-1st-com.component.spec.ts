/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { My1stComComponent } from './my-1st-com.component';

describe('My1stComComponent', () => {
  let component: My1stComComponent;
  let fixture: ComponentFixture<My1stComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My1stComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My1stComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
