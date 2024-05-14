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
