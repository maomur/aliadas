import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisderechosSeguridadsocialPage } from './misderechos-seguridadsocial.page';

describe('MisderechosSeguridadsocialPage', () => {
  let component: MisderechosSeguridadsocialPage;
  let fixture: ComponentFixture<MisderechosSeguridadsocialPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisderechosSeguridadsocialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisderechosSeguridadsocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
