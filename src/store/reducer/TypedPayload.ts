export function TypedPayload<T>() {
  return (t: T) => ({ payload: t });
}
