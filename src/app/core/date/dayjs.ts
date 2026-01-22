import dayjsLib from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjsLib.extend(utc);
dayjsLib.extend(timezone);
dayjsLib.extend(relativeTime);
dayjsLib.extend(customParseFormat);

export { default as dayjs } from 'dayjs';
