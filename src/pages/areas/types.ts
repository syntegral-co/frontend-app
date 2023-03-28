export interface ImpactArea {
  id: string;
  name: string;
  checked?: boolean;
}

export const peopleImpactAreas: ImpactArea[] = [
  { id: 'food-and-security', name: 'Food Security' },
  { id: 'education-and-child-care', name: 'Education and Child Care' },
  { id: 'womens-empowerment', name: "Women's Empowerment" },
  { id: 'affordable-housing', name: 'Affordable Housing' },
  { id: 'income-and-work', name: 'Income and Work' },
  { id: 'access-to-energy', name: 'Access to Energy' },
  { id: 'youth-empowerment', name: 'Youth Empowerment' },
  { id: 'lgbtq-empowerment', name: 'LGBTQ+ Empowerment' },
];

export const impactAreas: ImpactArea[] = [
  { id: 'peace-and-justice', name: 'Peace and Justice' },
  { id: 'social-and-racial-equity', name: 'Social & Racial Equity' },
  { id: 'general-health', name: 'General Health' },
  { id: 'mental-health', name: 'Mental Health' },
  { id: 'community-development', name: 'Community Development' },
  { id: 'enterprise-development', name: 'Enterprise Development' },
  { id: 'economic-inclusion', name: 'Economic Inclusion' },
];
