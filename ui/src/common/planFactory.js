import { GLOBAL_PLAN, UNIVERSAL_PLAN } from "../assets/json/insurancePlans";

const getAnnualCost = (brand, value) => {
  console.log(brand, value);
  switch (brand) {
    case "audi":
      return { globalAnnualCost: 250, universalAnnualCost: 250 + value * 0.003 };
    case "bmw":
      return { globalAnnualCost: 150, universalAnnualCost: 150 + value * 0.004 };
    case "porsche":
      return { globalAnnualCost: 500, universalAnnualCost: 500 + value * 0.007 };
    default:
      throw new Error("illegal_brand");
  }
};

export const buildPlan = (brand, value) => {
  const { globalAnnualCost, universalAnnualCost } = getAnnualCost(brand, value);
  const globalPlan = Object.assign({}, GLOBAL_PLAN, { annualCost: globalAnnualCost });
  const universalPlan = Object.assign({}, UNIVERSAL_PLAN, { annualCost: universalAnnualCost });
  return [globalPlan, universalPlan];
};
