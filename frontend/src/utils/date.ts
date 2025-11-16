import { format } from 'date-fns';

const WEEKDAY_MAP: { [key: number]: string } = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};

/**
 * 현재 날짜를 한국어 형식으로 반환합니다.
 */
export function getFormattedDate(): string {
  const now = new Date();
  return format(now, 'yyyy년 MM월 dd일');
}

/**
 * 현재 요일을 한국어로 반환합니다.
 */
export function getWeekday(): string {
  const now = new Date();
  const dayOfWeek = now.getDay();
  return WEEKDAY_MAP[dayOfWeek];
}

