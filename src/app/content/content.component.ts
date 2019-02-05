import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
 
import * as fromRoot from '../store/reducers';
import * as balastControlActions from '../store/actions/balast-control.actions';
import * as crewActions from '../store/actions/crew.actions';
import * as destinationActions from '../store/actions/destination.actions';
import * as transportAgencyActions from '../store/actions/transport-agency.actions';
import * as weaponsComplimentActions from '../store/actions/weapons-compliment.actions';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public slColor = 'Accent';
  public slChecked = true;
  public slDisabled = false;
  public bgValue = "center";
  public sDestinationSelected = 'aldebaran';
  public sTransportSelected = 'smuggler';

  public crewCalrisianChecked = false;
  public crewChewbaccaChecked = true;
  public crewKenobiChecked = true;
  public crewOrganaChecked = false;
  public crewSkywalkerChecked = true;
  public crewSoloChecked = true;

  public weaponsBlasters = true;
  public weaponsCannons = true;
  public weaponsSabers = true;
  public weaponsTractorBeam = true;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new balastControlActions.LoadBalastControls());
    this.store.dispatch(new crewActions.LoadCrews());
    this.store.dispatch(new destinationActions.LoadDestinations());
    this.store.dispatch(new transportAgencyActions.LoadTransportAgencys());
    this.store.dispatch(new weaponsComplimentActions.LoadWeaponsCompliments());
  }

}
