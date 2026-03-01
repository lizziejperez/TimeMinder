# Phase 1 — Core Data Model & Display Logic

## Original Goal

Build foundational structure for a date-tracking mobile app:

- Define a strict data model
- Implement reusable date calculation utilities
- Render a list of items using a reusable card component
- Use mock data before persistence

## Client Feedback (Scope Adjustment)

During early development, the primary client requirement shifted:

Instead of focusing only on countdowns,
the app must support:

- Entering a birthday
- Displaying current age
- Showing how many days until the next birthday

This required expanding the original countdown-only architecture.

## New Goal

Establish the foundational architecture for TimeMinder:

- Define a flexible date-tracking model
- Implement reusable date calculation utilities
- Render tracked dates in a scalable list UI
- Support both birthdays and general countdown events

This phase focuses on structure and correctness before navigation or persistence.

## 1. Data Model

File: `src/models/trackedDate.ts`

```ts
export type TrackedDateKind = "birthday" | "countdown";

export type TrackedDateItem = {
  id: string;
  title: string;
  dateISO: string;
  kind: TrackedDateKind;
  createdAtISO: string;
};
```

### Why

- Supports multiple date types
- Allows different display logic per type
- Prevents UI logic from hardcoding assumptions
- Keeps the system extensible

## 2. Date Utilities

File: `src/utils/dates.ts`

Implemented:

- Countdown formatting (days left, days since)
- Age calculation for birthdays
- Days until next birthday
- Midnight normalization to prevent time-of-day errors

### Key Principle

Date math is separated from UI components.

Benefits:

- Easier testing
- Cleaner components
- Safer refactoring
- Clear responsibility boundaries

## 3. Reusable Card Component

File: `src/components/TrackedDateCard.tsx`

Responsibilities:

- Render title
- Display appropriate badge
  - `Age X` for birthdays
  - `X days left/since` for countdowns
- Display contextual subtitle

The component branches based on `item.kind`, not on ad-hoc conditions.

## 4. List Screen

File: `src/screens/TrackedDatesScreen.tsx`

Uses:

- `FlatList` for efficient rendering
- `ListEmptyComponent` for UX clarity
- Separation between layout and business logic

## Architectural Principles Applied

- Single responsibility
- Separation of concerns
- Strict typing with TypeScript
- Mock data before persistence
- Flexible model before feature expansion

## Result of Phase 1

The app now:

- Displays birthdays with current age
- Shows days until next birthday
- Displays future/past events with countdown logic
- Supports mixed date types in one unified list

Phase 1 establishes a scalable foundation before navigation and storage are introduced.