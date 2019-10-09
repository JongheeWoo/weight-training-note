import moment, { duration } from "moment";

const DEFAULT_FORMAT = "YYYY.MM.DD";
export const DEFAULT_HH_MM_SS_FORMAT = "YYYY-MM-DD HH:mm:ss.SSS";

const DATE_FORMAT_MAP = new Map().set("M", "개월").set("D", "일");

moment.locale("ko");

export const transformDateToString = (
  date,
  format = DEFAULT_FORMAT
): string => {
  return moment(date).format(format);
};

export const transformStringToMoment = (
  date,
  format = DEFAULT_FORMAT
) => {
  return moment(date, format);
};

export const transformMomentToString = (
  targetMoment,
  format = DEFAULT_FORMAT
) => {
  return targetMoment.format(format);
};

export const transformTimeToString = (
  time,
  format = DEFAULT_FORMAT
) => {
  return transformDateToString(new Date(Number(time)), format);
};

export const today = () => {
  return moment();
};

export const dayDuration = (
  startMoment,
  endMoment
) => {
  return duration(endMoment.diff(startMoment)).asDays();
};

export const dayDateDuration = (
  startDate,
  endDate
) => {
  return dayDuration(moment(startDate), moment(endDate));
};

export const isBetween = (
  targetAt,
  startedAt,
  endedAt
) => {
  return targetAt.isBetween(startedAt, endedAt);
};

export const isTodayBetween = (startedAt, endedAt) => {
  return today().isBetween(startedAt, endedAt);
};

export const isTodaySameBetween = (
  startedAt,
  endedAt
): boolean => {
  return today().isBetween(startedAt, endedAt, undefined, "[]");
};

export const isSameOrAfter = (
  targetAt,
  afterAt
) => {
  return targetAt.isSameOrAfter(afterAt);
};

export const isSameOrBefore = (
  targetAt,
  beforeAt
) => {
  return targetAt.isSameOrBefore(beforeAt);
};

export const isTodayAfter = (input) => {
  return today().isAfter(input);
};

export const isTodayBefore = (input) => {
  return today().isBefore(input);
};

export const transformKoreanFormat = (date) => {
  const format = date.slice(-1);
  const numberOfDate = parseInt(date, 10);

  if (/\w/.test(format) && !Number.isNaN(numberOfDate)) {
    return `${numberOfDate} ${DATE_FORMAT_MAP.get(format)}`;
  }

  return date;
};
