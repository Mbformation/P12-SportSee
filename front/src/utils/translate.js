export default function translateSubject(data, translation) {
  return data.map((item) => {
    const translatedSubject = translation[item.subject]; // Find translation
    return { ...item, subject: translatedSubject }; // Create new object with translated subject
  });
}

function translate(original, translation = {}) {
  // Check if original value exists and translation object is provided
  if (original && translation) {
    // Try to find the translation for the original string (case-insensitive)
    const translatedValue = translation[original.toLowerCase()];

    // Handle different translation scenarios:
    if (translatedValue) {
      // Return an object with the translated value and original for context
      return { translated: translatedValue, original };
    } else {
      // If no translation found, return an object with the original value
      // and a flag indicating no translation available
      return { translated: original, noTranslation: true };
    }
  }
}
