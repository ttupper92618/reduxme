export enum BalastControlStates {
    Left = 'left',
    Right = 'right',
    Center = 'center',
    Justify = 'justify'
}

export enum DestinationStates {
    Aldebaran = 'aldebaran',
    Endor = 'endor',
    Hoth = 'hoth'
}

export enum TransportAgencyStates {
    Empire = "empire",
    Rebellion = "rebelion",
    Smuggler = "smuggler",
    StarTours = "startours"
}

export interface CrewState {
    calrisianValue: boolean;
    chewbaccaValue: boolean;
    kenobiValue: boolean;
    organaValue: boolean;
    skywalkerValue: boolean;
    soloValue: boolean;
}

export interface WeaponsComplimentState {
    blastersValue: boolean;
    cannonsValue: boolean;
    sabersValue: boolean;
    tractorBeamValue: boolean;
}