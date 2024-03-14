import { COLORS } from '@/constants/colors';

import { ChipStyle } from './index.style';

const chipColors: any = {
  completed: {
    bgColor: COLORS.GREEN_200,
    color: COLORS.GREEN_600,
    text: 'COMPLETED'
  },
  progress: {
    bgColor: COLORS.BLUE_800,
    color: COLORS.BLUE_200,
    text: 'IN PROGRESS'
  },
  disable: {
    bgColor: COLORS.GREY_400,
    color: COLORS.GREY_800,
    text: 'Upcoming'
  },
  overdue: {
    bgColor: COLORS.RED_400,
    color: COLORS.WHITE_100,
    text: 'OVERDUE'
  }
};
type ChipType = { type: 'completed' | 'progress' | 'disable' | 'overdue'; text?: string };

const Chip = ({ type, text = undefined }: ChipType) => {
  return (
    <ChipStyle bgColor={chipColors[type]?.bgColor} color={chipColors[type]?.color}>
      {text ? text : chipColors[type]?.text}
    </ChipStyle>
  );
};

export default Chip;
