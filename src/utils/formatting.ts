export const formatDate = (
  date: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    ...options,
  })
}
