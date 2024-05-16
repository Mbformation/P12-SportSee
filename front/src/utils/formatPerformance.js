// Fonction formattage données api pour composant performance
// On fusionne tableau d'objets data avec object kind
// On remplace les valeurs (number) de kind dans data par les valeurs (strings) dans l'objet kind
export default function formatPerformance(data) {
  const { kind, data: items } = data.data;
  return items.map((item) => {
    const subject = kind[item.kind];
    return {
      value: item.value,
      subject,
    };
  });
}
