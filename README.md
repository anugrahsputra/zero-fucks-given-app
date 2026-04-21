# Zero Fucks Given as a Service

> Gracefully apologize for not giving a single flying fuck.

A Next.js app that generates professionally indifferent apologies. Perfect for when you need to say sorry, but don't really mean it.

## Features

- **Generate Apologies** — Click a button, receive a beautifully crafted non-apology
- **Copy to Clipboard** — One-click copy for easy sharing
- **Dark Theme** — Aesthetic zinc-950 UI that matches your soul
- **Analytics** — Vercel Analytics and Speed Insights built-in

## Tech Stack

- **Next.js** 16.2.2 with App Router
- **React** 19.2.4
- **TypeScript** 5 (strict mode)
- **Tailwind CSS** v4
- **Geist** font family

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

Uses standalone output for containerized deployment.

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `BACKEND_URL` | Backend API endpoint | `https://zfgaas.downormal.dev/sorry` |

## Project Structure

```
app/
├── page.tsx          # Main UI (client component)
├── api/sorry/route.ts # API proxy to backend
├── layout.tsx        # Root layout with metadata
└── globals.css       # Tailwind v4 entry
tailwind.config.ts    # Theme configuration
next.config.ts        # Standalone output
```

## License

MIT — Do whatever. See [LICENSE](LICENSE) for details.

---

Created by [Anugrah Surya Putra](https://downormal.dev)
