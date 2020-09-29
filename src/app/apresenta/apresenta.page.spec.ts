import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApresentaPage } from './apresenta.page';

describe('ApresentaPage', () => {
  let component: ApresentaPage;
  let fixture: ComponentFixture<ApresentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApresentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
