# TimeMinder App

TimeMinder is a cross-platform mobile app built with React Native that allows users to track meaningful dates and view dynamic countdowns.

Built as a real-use application to help track birthdays, anniversaries, memorial dates, and important life events.

## Features (Planned & In Progress)

- Create and store multiple countdowns locally
- View "X days left" for future dates
- View "X days since" for past dates
- Edit and delete countdowns
- Sort by soonest upcoming date
- Optional recurring yearly dates (e.g., birthdays)
- Optional reminders / notifications

## Tech Stack

- **React Native**
- **Expo**
- **TypeScript**
- Local device storage (AsyncStorage or equivalent)

## Development Setup

### Prerequisites

- Node.js (LTS recommended)
- Expo Go app installed on a mobile device or Android/iOS emulator

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run start
```

Scan the QR code using Expo Go to run on a physical device.

## Project Structure

```
src/
  components/    # Reusable UI components
  screens/       # Main app screens
  models/        # TypeScript data models
  storage/       # Local persistence logic
  utils/         # Date calculation helpers
```

## Project Goals

This project focuses on:

- Learning React fundamentals in a mobile environment
- Implementing local persistence
- Building clean, maintainable component architecture
- Handling date logic and edge cases (past dates, sorting, recurring events)

## Roadmap

### MVP

- Countdown list screen
- Add countdown screen
- Local persistence
- Basic sorting logic

### Enhancements

- Recurring events toggle
- Edit/Delete flow
- Notification reminders
- UI polish and accessibility improvements

## Notes

TimeMinder is being built as a practical, user-focused project while deepening knowledge of React and React Native.