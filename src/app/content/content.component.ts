import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
