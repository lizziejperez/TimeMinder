export type DateKind = "countdown" | "birthday";

export type TrackedDateItem = {
  id: string;
  title: string;
  dateISO: string;        // the meaningful date (birthday or event date)
  kind: DateKind;         // controls how we display it
  createdAtISO: string;
};