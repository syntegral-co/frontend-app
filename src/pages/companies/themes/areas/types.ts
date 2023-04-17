export interface ImpactArea {
  id: number
  name: string
  definition?: string
  checked?: boolean
}

export const planetImpactAreas: ImpactArea[] = [
  {
    id: 1,
    name: 'Biodiversity Conservation',
    definition:
      "Biodiversity Conservation involves the protection, preservation, and restoration of ecosystems, species, and genetic diversity to maintain ecological balance and ensure the long-term survival of Earth's natural resources.",
  },
  {
    id: 2,
    name: 'Climate Change Mitigation (GHG emissions)',
    definition:
      'Climate Change Mitigation (GHG emissions) involves implementing strategies, policies, and technologies to reduce greenhouse gas emissions and enhance carbon sinks, ultimately aiming to limit global temperature rise and minimize the negative impacts of climate change.',
  },
  {
    id: 3,
    name: 'Chemical Pollution (inc. non-GHG emissions)',
    definition:
      'Chemical pollution involves the release of harmful chemicals and substances, including non-greenhouse gas emissions, into the environment, negatively affecting ecosystems, human health, and the economy.',
  },
  {
    id: 4,
    name: 'Air Quality Preservation',
    definition:
      'Air Quality Preservation involves investing in projects, technologies, and initiatives that aim to reduce air pollution, minimize emissions, and promote cleaner air for a healthier environment and improved public health.',
  },
  {
    id: 5,
    name: 'Ocean Preservation',
    definition:
      'Ocean Preservation involves investing in sustainable practices and innovative solutions that protect and restore marine ecosystems, promote biodiversity, and address pressing issues such as overfishing, pollution, and climate change impacts on our oceans.',
  },
  {
    id: 6,
    name: 'Freshwater Preservation',
    definition:
      'Freshwater preservation involves investing in projects and technologies that protect, conserve, and sustainably manage freshwater resources to ensure long-term availability and quality for human and ecosystem needs.',
  },
  {
    id: 7,
    name: 'Land Preservation',
    definition:
      'Land Preservation involves investing in projects or initiatives that protect and conserve natural habitats, ecosystems, and open spaces for long-term environmental, social, and economic benefits.',
  },
  {
    id: 8,
    name: 'Regenerative Redesign',
    definition:
      'Regenerative Redesign involves strategically investing in projects and businesses that focus on restoring, revitalizing, and enhancing the social, environmental, and economic systems for long-term sustainability and resilience.',
  },
  {
    id: 9,
    name: 'Circularity',
    definition:
      "Circularity involves implementing sustainable practices that minimize waste and resource consumption by maximizing the reuse, recycling, and regeneration of materials throughout a product's life cycle, ultimately contributing to a circular economy.",
  },
]

export const peopleImpactAreas: ImpactArea[] = [
  {
    id: 10,
    name: 'Food Security',
    definition:
      'Food security involves ensuring consistent access to sufficient, safe, and nutritious food for all individuals to maintain a healthy and active life.',
  },
  {
    id: 11,
    name: 'Education and Child Care',
    definition:
      'Education and Child Care involve investing in initiatives that promote quality learning experiences, holistic child development, and accessible care services for children, ultimately fostering a strong foundation for their future success and well-being.',
  },
  {
    id: 12,
    name: 'Peace and Justice',
    definition:
      'Peace and Justice involve promoting social harmony, reducing violence, ensuring fairness, and upholding human rights to create a more equitable and inclusive society.',
  },
  {
    id: 13,
    name: 'Social & Racial Equity',
    definition:
      'Social and Racial Equity involves investing in businesses and initiatives that actively promote social justice, reduce disparities, and empower marginalized communities, while fostering inclusive growth and equal opportunities for all.',
  },
  {
    id: 14,
    name: "Women's Empowerment",
    definition:
      "Women's Empowerment involves investing in initiatives that promote gender equality, enhance women's access to education, healthcare, economic opportunities, and decision-making power, while fostering their social, political, and personal growth.",
  },
  {
    id: 15,
    name: 'General Health',
    definition:
      'General Health involves the comprehensive well-being of individuals, encompassing physical, mental, and social aspects, and promoting preventive measures, access to healthcare services, and healthy lifestyle choices.',
  },
  {
    id: 16,
    name: 'Mental Health',
    definition:
      'Mental health involves the emotional, psychological, and social well-being of an individual, affecting their thoughts, feelings, and behaviors, as well as their ability to cope with stress, maintain relationships, and contribute to society.',
  },
  {
    id: 17,
    name: 'Affordable Housing',
    definition:
      'Affordable Housing involves investing in the development or preservation of reasonably priced, quality homes for low-to-moderate income individuals and families, promoting social inclusion and sustainable communities.',
  },
  {
    id: 18,
    name: 'Income and Work',
    definition:
      'Income and Work involve generating sustainable livelihoods and promoting economic opportunities for individuals through job creation, skill development, and fair labor practices.',
  },
  {
    id: 19,
    name: 'Access to Energy',
    definition:
      'Access to Energy involves investing in projects or companies that aim to provide affordable, reliable, and sustainable energy solutions to underserved communities, fostering economic growth and improving quality of life.',
  },
  {
    id: 20,
    name: 'Community Development',
    definition:
      'Community Development involves investing in projects and initiatives that aim to improve the social, economic, and environmental well-being of a specific community or region.',
  },
  {
    id: 21,
    name: 'Youth Empowerment',
    definition:
      'Youth Empowerment involves providing young people with the necessary resources, opportunities, and support to develop their skills, confidence, and agency, enabling them to actively participate in decision-making processes and contribute positively to their communities and society.',
  },
  {
    id: 22,
    name: 'LGBTQ+ Empowerment',
    definition:
      'LGBTQ+ Empowerment involves investing in initiatives that promote equal rights, social inclusion, and economic opportunities for LGBTQ+ individuals, while fostering a diverse and supportive environment for their personal and professional growth.',
  },
  {
    id: 23,
    name: 'Enterprise Development',
    definition:
      'Enterprise Development involves investing in and supporting the growth of small and medium-sized businesses, with a focus on creating positive social and environmental impact alongside financial returns.',
  },
  {
    id: 24,
    name: 'Economic Inclusion',
    definition:
      'Economic inclusion involves creating opportunities for marginalized and underserved communities to participate in, contribute to, and benefit from the mainstream economy, thereby reducing income inequality and promoting sustainable growth.',
  },
]

export const profitImpactAreas: ImpactArea[] = [
  {
    id: 25,
    name: 'Brand Reputation',
    definition:
      'Brand reputation involves the perception, trust, and credibility that consumers associate with a company or its products and services, which can significantly influence their purchasing decisions and loyalty.',
  },
  {
    id: 26,
    name: 'Customer Preference & Loyalty',
    definition:
      'Customer Preference & Loyalty involves understanding and catering to consumer needs and desires, while building long-term relationships through exceptional products, services, and experiences that foster trust and satisfaction.',
  },
  {
    id: 27,
    name: 'Talent Recruitment & Retention',
    definition:
      'Talent Recruitment & Retention involves identifying, attracting, hiring, and retaining highly skilled individuals who can contribute to the success and growth of an organization or project.',
  },
  {
    id: 28,
    name: 'Transformational Leadership',
    definition:
      'Transformational Leadership involves inspiring and empowering individuals to achieve their full potential, fostering innovation and positive change within an organization or community.',
  },
  {
    id: 29,
    name: 'Risk Management',
    definition:
      "Risk management involves the identification, assessment, and prioritization of potential risks, followed by the implementation of strategies to minimize, monitor, and control their impact on the investment's objectives.",
  },
  {
    id: 30,
    name: 'Compliance',
    definition:
      'Compliance involves adhering to relevant laws, regulations, and ethical standards to ensure responsible and sustainable investment practices.',
  },
  {
    id: 31,
    name: 'Cost Reduction',
    definition:
      "Cost reduction involves implementing strategies and measures to decrease expenses and improve operational efficiency, ultimately increasing a company's profitability.",
  },
  {
    id: 32,
    name: 'Revenue Growth',
    definition:
      "Revenue growth involves increasing a company's sales and overall income through strategic investments, product or service expansion, and effective marketing strategies.",
  },
  {
    id: 33,
    name: 'Governance',
    definition:
      'Governance involves establishing and implementing effective policies, processes, and structures to ensure ethical, transparent, and accountable decision-making within an organization or investment.',
  },
  {
    id: 34,
    name: 'Innovation',
    definition:
      'Innovation involves the development and implementation of new ideas, products, processes, or business models that create value and drive positive change in society or the environment.',
  },
]

// export const impactAreas: ImpactArea[] = [
//   { id: 'peace-and-justice', name: 'Peace and Justice' },
//   { id: 'social-and-racial-equity', name: 'Social & Racial Equity' },
//   { id: 'general-health', name: 'General Health' },
//   { id: 'mental-health', name: 'Mental Health' },
//   { id: 'community-development', name: 'Community Development' },
//   { id: 'enterprise-development', name: 'Enterprise Development' },
//   { id: 'economic-inclusion', name: 'Economic Inclusion' },
// ]
