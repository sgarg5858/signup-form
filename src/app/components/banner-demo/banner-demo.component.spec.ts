import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDemoComponent } from './banner-demo.component';

describe('BannerDemoComponent', () => {
  let component: BannerDemoComponent;
  let fixture: ComponentFixture<BannerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BannerDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
