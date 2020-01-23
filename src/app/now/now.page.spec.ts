import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NowPage } from './now.page';

describe('NowPage', () => {
  let component: NowPage;
  let fixture: ComponentFixture<NowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
