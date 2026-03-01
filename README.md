# TimeMinder

TimeMinder is a cross-platform mobile app built with React Native that allows users to track meaningful dates and view dynamic time-based insights.

The app supports both:

- Birthdays (current age + days until next birthday)
- General countdown events (days left / days since)

Built as a real-use application for a client with ongoing feedback and iterative refinement.

## Client Context

TimeMinder is being developed for a real client with specific personal use requirements.

The project is guided by:
- Direct user feedback
- Practical daily usage testing
- Iterative scope adjustments

This ensures the architecture supports real-world needs rather than hypothetical features.

## Current Features (Phase 1 Complete)

- Flexible tracked-date data model
- Birthday support:
  - Current age calculation
  - Days until next birthday
- Countdown support:
  - Days left for future dates
  - Days since past dates
- Reusable card-based UI architecture
- Strict TypeScript typing
- Mock data before persistence

## Planned Features

- Create and store multiple tracked dates locally
- Add date entry screen
- Edit and delete flow
- Sort by upcoming date
- Recurring yearly toggle
- Local notifications / reminders
- AsyncStorage persistence

## Tech Stack

- **React Native**
- **Expo**
- **TypeScript**
- Local device storage (planned: AsyncStorage)

## Development Setup

### Prerequisites

- Node.js (LTS recommended)
- Expo Go (iOS / Android)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm expo start
```

Scan the QR code using Expo Go to run on a physical device.

## Project Structure

```
src/
  components/    # Reusable UI components
  screens/       # App-level screens
  models/        # TypeScript data models
  storage/       # Sample/mock data (Phase 1)
  utils/         # Date calculation logic
```

## Architectural Principles

- Separation of concerns (UI vs business logic)
- Typed data models to drive UI behavior
- Reusable components
- ISO date handling for reliability
- Midnight normalization to prevent off-by-one errors

## Project Goals

This project focuses on:

- Learning React Native through real product development
- Practicing clean architecture with TypeScript
- Handling date logic correctly and safely
- Building features iteratively based on real feedback

## Roadmap

### Phase 1 — Core Architecture (Complete)

- Flexible tracked-date data model
- Birthday age calculation
- Countdown formatting
- Reusable card UI
- Mock data rendering

### Phase 2 — User Input & Navigation

- Add tracked-date screen
- Date type selector (Birthday / Countdown)
- Stack navigation setup
- In-memory state management

### Phase 3 — Persistence

- AsyncStorage integration
- Load/save tracked dates locally
- Data hydration on app start

### Phase 4 — Usability Enhancements

- Sorting (upcoming first)
- Edit / Delete flow
- Recurring yearly toggle
- Visual tone styling (future / past)
- Empty state UX polish

### Phase 5 — Advanced Features

- Local notifications
- Accessibility improvements
- UI refinement and micro-interactions