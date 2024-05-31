export interface IPlans {
  planType: string;
  percentageBonus: string;
  duration: string;
  minimumAmount: string;
  maximumAmount: string;
}

const plans: IPlans[] = [
  {
    planType: "Starter",
    percentageBonus: "2.6%",
    duration: "2 Days",
    minimumAmount: "$100",
    maximumAmount: "$349",
  },
  {
    planType: "Professional",
    percentageBonus: "5.4%",
    duration: "2 Days",
    minimumAmount: "$350",
    maximumAmount: "$3,999",
  },
  {
    planType: "Premium",
    percentageBonus: "8.5%",
    duration: "2 Days",
    minimumAmount: "$4,000",
    maximumAmount: "$8,499",
  },
  {
    planType: "Ultimate",
    percentageBonus: "10%",
    duration: "2 Days",
    minimumAmount: "$8,500",
    maximumAmount: "$14,999",
  },
  {
    planType: "Ambassadorship",
    percentageBonus: "12%",
    duration: "2 Days",
    minimumAmount: "$15,000",
    maximumAmount: "$19,999",
  },
  {
    planType: "Shareholders",
    percentageBonus: "15%",
    duration: "2 Days",
    minimumAmount: "$20,000",
    maximumAmount: "Unlimited"
  }
];

export default plans;
