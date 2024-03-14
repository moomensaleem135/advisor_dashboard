'use client';

import { Container, FlexRowGrid, FlexCol, TypographyStyle } from './index.styles';
import DashboardTable from './table';

export default function PartialDashboard() {
  return (
    <Container container>
      <FlexRowGrid item xs={12}>
        <FlexCol>
          <TypographyStyle>Campaigns Runing</TypographyStyle>
        </FlexCol>
      </FlexRowGrid>
      <DashboardTable />
    </Container>
  );
}
