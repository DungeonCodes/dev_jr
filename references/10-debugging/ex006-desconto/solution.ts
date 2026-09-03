export function calculateDiscountedPrice(price: number, discountPercent: number): number {
  return price * (1 - discountPercent / 100);
}
