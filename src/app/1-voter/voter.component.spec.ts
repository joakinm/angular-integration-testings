import { Component } from '@angular/core';
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

  it('should highlight the upvoted button if i upvoted', () => {
    voterComponent.myVote = 1;
    fixtureComponent.detectChanges();
    
    let de = fixtureComponent.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increase totalVotes when I click the upVote button ', () => {
    let button = fixtureComponent.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);
    expect(voterComponent.totalVotes).toBe(1);
  });

});
