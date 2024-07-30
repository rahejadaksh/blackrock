import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const COURSE_NAME = [
  'Introduction to Financial Markets',
  'Fundamentals of Stock Trading',
  'Advanced Technical Analysis',
  'Financial Statement Analysis',
  'Principles of Corporate Finance',
  'Equity Valuation Techniques',
  'Investment Strategies and Portfolio Management',
  'Understanding Derivatives and Futures',
  'Risk Management in Finance',
  'Behavioral Finance and Market Psychology',
  'Cryptocurrency and Blockchain Fundamentals',
  'Fixed Income Securities Analysis',
  'Advanced Trading Strategies',
  'Mergers and Acquisitions',
  'Financial Modeling and Forecasting',
  'Global Economic Trends and Impacts',
  'Financial Planning and Wealth Management',
  'Private Equity and Venture Capital',
  'Ethical and Regulatory Issues in Finance',
  'Quantitative Finance and Algorithmic Trading',
  'Hedge Fund Strategies and Management',
  'Corporate Governance and Ethics',
  'Financial Technology Innovations',
  'Real Estate Investment Analysis',
  'Alternative Investments and Asset Allocation',
];

// ----------------------------------------------------------------------

export const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`, // Adjust path if needed
    name: COURSE_NAME[index],
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }), // Rating between 1 and 5 stars
    status: sample(['sale', 'new', '', '']),
  };
});
