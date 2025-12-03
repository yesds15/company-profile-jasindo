# React static website



## Getting Started

1. Install dependencies once after cloning:

```bash
npm install
```

> **Note:** Do not use global `next` (`next dev`, `next start`, etc.). That command will use Next.js from `/usr/local/lib` and cause a React not found error. Always run commands via `npm run ...` to use the local Next.js for this project.

2. Run the development server:

```bash
npm run dev
```

The server will be active at [http://localhost:3000](http://localhost:3000).

3. To build for production and run the build:

```bash
npm run build
npm run start
```

After `npm run start`, the production server is active at [http://localhost:3001](http://localhost:3001).

## Concept & Visual Identity

- **Blue base color** – the main palette uses blue gradients (sky, indigo) with cyan and purple accents so the interface feels modern yet professional.
- **Dynamic color layers** – each section has gradients/blur blobs so the display is not plain and helps differentiate content blocks.
- **Custom illustrations** – files `public/hero-illustration.svg` and `public/team-collaboration.svg` serve as hero/about images so they no longer display placeholders.
- **Real portfolio** – portfolio cards now use thematic photos from Unsplash to make project stories more alive.
- **Clear call-to-action** – the "View Portfolio" button directly points to the `#portfolio` section, while other CTAs lead to the contact form.

## Project Structure

This project uses:
- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

