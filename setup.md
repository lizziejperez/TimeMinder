# Setup

Initialize TimeMinder (React Native + Expo + TypeScript)

## Step 0 — Verify Node Installation

```bash
node -v
```

If a version is displayed (e.g., v20.x.x), Node is installed.

If not, install Node LTS from:
https://nodejs.org

## Step 1 — Create the Expo Project

Navigate to your projects directory:

```bash
cd path/to/your/projects
```

Create the project:

```bash
npx create-expo-app@latest TimeMinder --template blank-typescript
```

This:

- Generates a new Expo project
- Configures TypeScript
- Sets up React Native with managed workflow

## Step 2 — Enter the Project Directory

```bash
cd TimeMinder
```

##  Step 3 — Install Dependencies

(Usually installed automatically, but safe to run)

```bash
npm install
```

## Step 4 — Start Development Server

Open PowerShell (recommended on Windows) and run:
```powershell
cd path\to\your\projects\TimeMinder
npx expo start
```
This:

- Starts the Metro bundler
- Opens the Expo development dashboard
- Displays a QR code for device testing

If connection issues occur:
```
npx expo start --tunnel
```

## Step 5 — Run on Mobile Device

1. Install `Expo Go`
    - App Store (iOS)
    - Google Play (Android)
2. Open Expo Go
3. Scan the QR code

The default Expo starter screen should appear.

## Step 6 — Stop the Development Server

Press:
`Ctrl + C`