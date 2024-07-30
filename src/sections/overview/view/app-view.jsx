import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';
import AppMarketTrends from '../app-website-visits';
import AppCurrentTrends from '../AppCurrentTrends';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Top Performer"
            total="Bajaj Finance"
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Volume"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Trading Volume"
            total={4502}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Trade Alerts"
            total={24}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppMarketTrends
            title="Market Trends"
            subheader="(+10%) from last month"
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ],
              series: [
                {
                  name: 'S&P 500',
                  type: 'line',
                  fill: 'solid',
                  data: [3750, 3720, 3800, 3850, 3700, 3950, 4000, 3850, 4050, 4100, 3950],
                },
                {
                  name: 'NASDAQ',
                  type: 'area',
                  fill: 'gradient',
                  data: [13000, 12800, 13100, 13200, 12900, 13300, 13500, 13000, 13600, 13700, 13200],
                },
                {
                  name: 'Dow Jones',
                  type: 'line',
                  fill: 'solid',
                  data: [29000, 29500, 29300, 30000, 29600, 30300, 29900, 30400, 29800, 30600, 30200],
                },
                {
                  name: 'Russell 2000',
                  type: 'area',
                  fill: 'gradient',
                  data: [2000, 1950, 2050, 2100, 1950, 2150, 2200, 2050, 2250, 2300, 2100],
                },
              ],
            }}
          />

        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppConversionRates
            title="Trading Types Performance"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Equities', value: 6344 },
                { label: 'Bonds', value: 4535 },
                { label: 'Commodities', value: 2434 },
                { label: 'Real Estate', value: 3243 },
                { label: 'Forex', value: 5234 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Stock Performance"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Apple (AAPL)', value: 400 },
                { label: 'Microsoft (MSFT)', value: 430 },
                { label: 'Amazon (AMZN)', value: 448 },
                { label: 'Google (GOOGL)', value: 470 },
                { label: 'Facebook (META)', value: 540 },
                { label: 'Tesla (TSLA)', value: 580 },
                { label: 'Netflix (NFLX)', value: 690 },
                { label: 'NVIDIA (NVDA)', value: 1100 },
                { label: 'Adobe (ADBE)', value: 1200 },
                { label: 'Salesforce (CRM)', value: 1380 },
              ],
            }}
          />

        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentTrends
            title="Current Market Trends"
            subheader="(+15%) from last month"
            chart={{
              categories: ['Technology', 'Finance', 'Healthcare', 'Energy', 'Utilities', 'Consumer Goods'],
              series: [
                { name: 'Q1 2024', data: [70, 90, 60, 80, 55, 65] },
      { name: 'Q2 2024', data: [82, 47, 92, 33, 74, 51] },
      { name: 'Q3 2024', data: [59, 75, 48, 67, 88, 34] },
      { name: 'Q4 2024', data: [21, 98, 43, 57, 79, 66] },
              ],
            }}
          />

        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>

  );
}
