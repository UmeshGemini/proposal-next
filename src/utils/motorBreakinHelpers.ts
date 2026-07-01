import { EMotorCompCode } from "@/Enum/EMotorCompCode";

/** Legacy POS motor products use a `*POS` suffix (e.g. CSBI001POS). */
export function isPosMotorProductCode(
  productCode?: string | null,
): boolean {
  if (!productCode?.trim()) {
    return false;
  }
  return productCode.trim().toUpperCase().endsWith("POS");
}

export const SBI_CAR_POS_PRODUCT_CODES = ["CSBI001POS", "SACSBI001POS"] as const;

export function isSbiCarPosBreakinProduct(
  companyCode?: string,
  productCode?: string | null,
): boolean {
  return (
    companyCode === EMotorCompCode.SBI && isPosMotorProductCode(productCode)
  );
}
