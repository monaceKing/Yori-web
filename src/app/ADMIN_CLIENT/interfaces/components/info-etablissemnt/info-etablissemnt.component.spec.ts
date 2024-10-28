import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEtablissemntComponent } from './info-etablissemnt.component';

describe('InfoEtablissemntComponent', () => {
  let component: InfoEtablissemntComponent;
  let fixture: ComponentFixture<InfoEtablissemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEtablissemntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEtablissemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
