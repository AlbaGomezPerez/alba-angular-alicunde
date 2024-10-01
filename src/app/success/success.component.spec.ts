import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SuccessComponent } from './success.component';
import { ComponentFixture } from '@angular/core/testing';

describe('SuccessComponent', () => {
  let fixture: ComponentFixture<SuccessComponent>;
  let app: SuccessComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SuccessComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should show a gif', () => {
    const gifElement = fixture.nativeElement.querySelector('.gif-image');
    expect(gifElement).toBeTruthy();
  });

  it('should generate a new GIF excluding the current one', () => {
    expect(app.gifImage).not.toBeNull();

    const currentGifNum = app.gifImage ? parseInt((app.gifImage.match(/\d+/))![0], 10) : -1;

    app.getGif();

    expect(app.gifImage).not.toBeNull();
    const newGifNum = parseInt((app.gifImage.match(/\d+/))![0], 10);

    expect(newGifNum).not.toEqual(currentGifNum);
    expect(newGifNum).toBeGreaterThan(0);
    expect(newGifNum).toBeLessThan(4);
  });
});
