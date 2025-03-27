import { useMemo } from 'react';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);
dayjs.extend(isLeapYear);
dayjs.extend(isoWeeksInYear);

export function useWeeksInYear(year: number): number {
    return useMemo(() => dayjs(`${year}-12-31`).isoWeeksInYear(), [year]);
}
