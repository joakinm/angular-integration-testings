import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';


describe('VoterComponent', () => {
  let fixtureComponent: ComponentFixture<VoterComponent>;
  let voterComponent: VoterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    })
    fixtureComponent = TestBed.createComponent(VoterComponent);
    voterComponent = fixtureComponent.componentInstance;
    
  });
  

  it('should render the votes', () => {
    voterComponent.othersVote = 20;
    voterComponent.myVote = 1;
    fixtureComponent.detectChanges();
    
    let de = fixtureComponent.debugElement.query(By.css('.vote-count'));
    let element: HTMLElement = de.nativeElement;
    expect(element.innerText).toContain('21');

  });
});
