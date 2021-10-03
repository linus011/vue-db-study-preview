export default function addComma(val) {
  if (val === null || val === undefined) return ''
  const parts = val.toString().split('.')
  return (
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? `.${parts[1]}` : '')
  )
}
