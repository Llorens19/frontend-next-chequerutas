export const durationRegex = (title: string): string => {
 const durationRegexExpresion = /^[0-9]{1,3}$/;
  if (!title) {
    return 'La duración es un campo obligatorio';
  }
  if (!durationRegexExpresion.test(title.toString())) {
    return 'Introduce una duración valida';
  }
  return '';
};