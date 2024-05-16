// Fonction qui reçoit les données de l'API et la traduction pour PerformanceChart
export default function translateSubject(data, translation) {
  return data.map((item) => {
    const translatedSubject = translation[item.subject];
    return { ...item, subject: translatedSubject };
  });
}

function translate(original, translation = {}) {
  if (original && translation) {
    const translatedValue = translation[original.toLowerCase()];

    if (translatedValue) {
      return { translated: translatedValue, original };
    } else {
      return { translated: original, noTranslation: true };
    }
  }
}
