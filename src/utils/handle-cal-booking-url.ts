export function handleCalBookingUrl({ eventName }: { eventName: string }) {
  return `${process.env.NEXT_PUBLIC_CAL_BASE_URL}/${eventName
    .trim()
    .replaceAll(' ', '-')}`
}
