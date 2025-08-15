# Pomodoro Timer

This project is a simple Pomodoro timer built with [Vue 3](https://vuejs.org/), TypeScript and [Vite](https://vitejs.dev/). It lets you manage focused work sessions and scheduled breaks using the Pomodoro technique.

## Features
- Start, pause and reset countdowns for Pomodoro, short break and long break sessions
- Automatic session switching and tracking of completed sessions
- Responsive user interface built with PrimeVue components

## Getting Started
1. Install dependencies:
   ```bash
   yarn install
   ```
2. Start the development server:
   ```bash
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).
3. Build for production:
   ```bash
   yarn build
   ```

## Usage
1. Choose a session type (Pomodoro, Short Break or Long Break) using the filter.
2. Press **Start** to begin the countdown. The timer will automatically switch to the next session when time is up.
3. Review the session history to track your productivity throughout the day.

