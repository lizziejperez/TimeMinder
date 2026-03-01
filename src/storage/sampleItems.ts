import { TrackedDateItem } from "../models/trackedDate";

const nowISO = new Date().toISOString();

export const SAMPLE_ITEMS: TrackedDateItem[] = [
  {
    id: "bday-1",
    title: "Mom",
    kind: "birthday",
    dateISO: "1977-06-02T00:00:00.000Z", // Example birthday: June 2, 1977
    createdAtISO: nowISO,
  },
  {
    id: "cd-1",
    title: "Trip",
    kind: "countdown",
    dateISO: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
    createdAtISO: nowISO,
  },
];