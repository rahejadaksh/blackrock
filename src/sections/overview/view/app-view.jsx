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
import { useTranslation } from 'react-i18next';
import NewsContainer from '../NewsContainer';
import InvestmentChart from '../InvestmentChart';
import { display } from '@mui/system';

// ----------------------------------------------------------------------

export default function AppView() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        {t('welcome')}
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('topPerformer')}
            total="Bajaj Finance"
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('weeklyVolume')}
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('tradingVolume')}
            total={4502}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('tradeAlerts')}
            total={24}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppMarketTrends
            title={t('marketTrends')}
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
                  data: [
                    13000, 12800, 13100, 13200, 12900, 13300, 13500, 13000, 13600, 13700, 13200,
                  ],
                },
                {
                  name: 'Dow Jones',
                  type: 'line',
                  fill: 'solid',
                  data: [
                    29000, 29500, 29300, 30000, 29600, 30300, 29900, 30400, 29800, 30600, 30200,
                  ],
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
            title={t('tradingTypesPerformance')}
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

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentTrends
            title={t('currentMarketTrends')}
            subheader="(+15%) from last month"
            chart={{
              categories: [
                'Technology',
                'Finance',
                'Healthcare',
                'Energy',
                'Utilities',
                'Consumer Goods',
              ],
              series: [
                { name: 'Q1 2024', data: [70, 90, 60, 80, 55, 65] },
                { name: 'Q2 2024', data: [82, 47, 92, 33, 74, 51] },
                { name: 'Q3 2024', data: [59, 75, 48, 67, 88, 34] },
                { name: 'Q4 2024', data: [21, 98, 43, 57, 79, 66] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8} mt={6}>
          <AppConversionRates
            title={t('stockPerformance')}
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
            title={t('currentMarketTrends')}
            subheader="(+15%) from last month"
            chart={{
              categories: [
                'Technology',
                'Finance',
                'Healthcare',
                'Energy',
                'Utilities',
                'Consumer Goods',
              ],
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
          <NewsContainer />
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <InvestmentChart/>
        </Grid>
      </Grid>
    </Container>
  );
}
