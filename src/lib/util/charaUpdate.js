export class CharaData {
  constructor(CharacterName, CharacterLevel, ItemMaxLevel, CharacterClassName, ServerName, raids) {
    this.CharacterName = CharacterName;
    this.CharacterLevel = CharacterLevel;
    this.ItemMaxLevel = ItemMaxLevel;
    this.CharacterClassName = CharacterClassName;
    this.ServerName = ServerName;
    this.raids = raids;
  }

  updateRaids(raids) {
    this.raids = raids;
  }
}