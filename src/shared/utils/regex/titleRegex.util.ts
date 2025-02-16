export const titleRegex = (title: string): string => {
  const titleRegexExpresion = /^[a-zA-Z0-9\s]{5,100}$/;
  if (!title) {
    return 'El titulo es un campo obligatorio';
  }
  if (!titleRegexExpresion.test(title.toString())) {
    return 'Introduce un titulo valido';
  }
  return '';
};