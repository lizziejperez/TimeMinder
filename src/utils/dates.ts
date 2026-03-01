// Utility functions for manipulating dates

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function daysBetween(a: Date, b: Date): number {
  const a0 = startOfDay(a).getTime();
  const b0 = startOfDay(b).getTime();
  return Math.round((b0 - a0) / MS_PER_DAY);
}

// ---------- Countdown formatting ----------

export function formatCountdown(targetISO: string): {
  days: number;
  text: string;
  tone: "future" | "past" | "today";
} {
  const today = new Date();
  const target = new Date(targetISO);
  const diffDays = daysBetween(today, target); // target - today in days

  if (diffDays === 0) return { days: 0, text: "Today", tone: "today" };

  if (diffDays > 0) {
    const dayWord = diffDays === 1 ? "day" : "days";
    return { days: diffDays, text: `${diffDays} ${dayWord} left`, tone: "future" };
  }

  const daysSince = Math.abs(diffDays);
  const dayWord = daysSince === 1 ? "day" : "days";
  return { days: daysSince, text: `${daysSince} ${dayWord} since`, tone: "past" };
}

// ---------- Birthday / age formatting ----------

export function getAge(birthdayISO: string, now: Date = new Date()): number {
  const birth = new Date(birthdayISO);

  let age = now.getFullYear() - birth.getFullYear();

  const hasHadBirthdayThisYear =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) age -= 1;

  return age;
}

export function getNextBirthday(birthdayISO: string, now: Date = new Date()): Date {
  const birth = new Date(birthdayISO);

  const next = new Date(now);
  next.setFullYear(now.getFullYear(), birth.getMonth(), birth.getDate());
  next.setHours(0, 0, 0, 0);

  // If birthday already happened this year, next is next year
  if (next.getTime() < startOfDay(now).getTime()) {
    next.setFullYear(now.getFullYear() + 1);
  }

  return next;
}

export function formatBirthday(birthdayISO: string): {
  age: number;
  nextAge: number;
  daysUntil: number;
  badgeText: string;
  subtitleText: string;
} {
  const now = new Date();
  const age = getAge(birthdayISO, now);
  const nextAge = age + 1;

  const nextBirthday = getNextBirthday(birthdayISO, now);
  const daysUntil = daysBetween(now, nextBirthday);

  const dayWord = daysUntil === 1 ? "day" : "days";
  return {
    age,
    nextAge,
    daysUntil,
    badgeText: `Age ${age}`,
    subtitleText: `Turning ${nextAge} in ${daysUntil} ${dayWord}`,
  };
}