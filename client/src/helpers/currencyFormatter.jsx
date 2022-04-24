export default function currencyFormatter(price) {
  return price.toLocaleString("id", { style: "currency", currency: "IDR" });
}
