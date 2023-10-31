import client from './client';

// 모든 캐릭터 GET
export const getChara = ({ characterName }) => client.get(`characterName/${characterName}/siblings`);