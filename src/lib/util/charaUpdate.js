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

// 로컬스토리지 업데이트
export const localStorageUpdate = (index, attr, charaData) => {
  const data = localStorage.getItem('charaData');
  const parse = JSON.parse(data);
  const updateArray = [...parse];

  updateArray[index] = {
    ...updateArray[index],
    [attr]: charaData,
  }

  localStorage.setItem('charaData', JSON.stringify(updateArray));
}