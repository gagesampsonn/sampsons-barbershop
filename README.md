# Sampson's Barbershop Website

A modern, single-page website for Sampson's Barbershop in Wheelersburg, Ohio.

## Features

- **Modern Dark Theme**: Inspired by premium web design with classic barbershop colors (red, white, blue)
- **Responsive Design**: Looks great on mobile, tablet, and desktop
- **Square Integration**: Book appointments through Square Appointments
- **Glass Panel Effects**: Modern UI with gradient orbs and blur effects
- **Live Open/Closed Status**: Automatically shows if the shop is currently open

## Services & Pricing

- Haircut: $15
- Beard Trim: $8
- Senior Haircut: $12

## Business Info

- **Address**: 8520 Ohio River Road, Wheelersburg, OH 45694
- **Phone**: (740) 357-0482
- **Hours**:
  - Monday - Friday: 9 AM - 5 PM
  - Saturday: 7 AM - 12 PM
  - Sunday: Closed

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Square Appointments Setup

To enable online booking:

1. Log into your [Square Dashboard](https://squareup.com/dashboard)
2. Go to **Appointments** > **Online Booking**
3. Set up your services and availability
4. Copy your booking URL (looks like `https://square.site/book/XXXXXXXX`)
5. Update the `squareBookingUrl` in `src/components/BookingSection.tsx`

## Deployment

This site can be deployed to:

- **Vercel**: `npx vercel`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Run `npm run build` and deploy the `dist` folder

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons
