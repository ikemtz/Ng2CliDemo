/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyNestedComComponent } from './my-nested-com.component';

describe('MyNestedComComponent', () => {
  let component: MyNestedComComponent;
  let fixture: ComponentFixture<MyNestedComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNestedComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNestedComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
