// Fonction formattage données api pour composant performance
// Incohérence de données entre les utilisateurs : score et todayScore
// On rajoute propriété score à l'objet data s'il n'existe pas
export const formatUserInfo = (data) => {
  if (!data?.score) {
    return {
      ...data,
      score: data.todayScore,
    };
  } else {
    return data;
  }
};
