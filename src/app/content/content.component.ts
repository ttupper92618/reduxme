import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
 
import * as fromRoot from '../store/reducers';

import { BalastControlStates, DestinationStates, TransportAgencyStates, CrewState, WeaponsComplimentState } from './content.component.models'
import { SetPropulsion } from '../store/actions/propulsion.actions';
import { SetDestination } from '../store/actions/destination.actions';
import { SetBalastControl } from '../store/actions/balast-control.actions';
import { SetTransportAgency } from '../store/actions/transport-agency.actions';
import { SetCrew } from '../store/actions/crew.actions';
import { SetWeaponsCompliment } from '../store/actions/weapons-compliment.actions';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public slColor = 'Accent';
  public slDisabled = false;

  public hyperdriveState$: Observable<boolean>;
  public balastControlState$: Observable<string>;
  public destinationState$: Observable<string>;
  public transportAgencyState$: Observable<string>;
  public weaponsComplimentState$: Observable<WeaponsComplimentState>;
  public crewState$: Observable<CrewState>;

  public initialCrew: CrewState = {
    calrisianValue: false,
    chewbaccaValue: true,
    soloValue: true,
    skywalkerValue: true,
    organaValue: false,
    kenobiValue: true
  };

  public initialWeapons: WeaponsComplimentState = {
    blastersValue: true,
    cannonsValue: true,
    sabersValue: true,
    tractorBeamValue: false
  };

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    // wire values to store
    this.hyperdriveState$ = this.store.select(state => state.propulsion.propulsionState);
    this.balastControlState$ = this.store.select(state => state.balastControl.balastControlState);
    this.destinationState$ = this.store.select(state => state.destination.destinationState);
    this.transportAgencyState$ = this.store.select(state => state.transportAgency.transportAgencyState);
    this.weaponsComplimentState$ = this.store.select(state => state.weaponsCompliment.weaponsComplimentState);
    this.crewState$ = this.store.select(state => state.crew.crewState);

    // set some initial states
    this.store.dispatch(new SetPropulsion(true));
    this.store.dispatch(new SetDestination(DestinationStates.Aldebaran));
    this.store.dispatch(new SetBalastControl(BalastControlStates.Center));
    this.store.dispatch(new SetTransportAgency(TransportAgencyStates.Smuggler));
    this.store.dispatch(new SetCrew(this.initialCrew));
    this.store.dispatch(new SetWeaponsCompliment(this.initialWeapons));

  }

  handlePropulsionChange(ev: any) {
    this.store.dispatch(new SetPropulsion(ev.checked));
  }

  handleDestinationChange(ev: any) {
    this.store.dispatch(new SetDestination(ev.value));
  }

  handleTransportAgencyChange(ev: any) {
    this.store.dispatch(new SetTransportAgency(ev.value));
  }

  handleBalastControlChange(ev: any) {
    this.store.dispatch(new SetBalastControl(ev.value));
  }

}