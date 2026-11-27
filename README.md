# meridian-ui

Frontend Meridian — aplikasi administrasi keuangan internal Amwal. Dibangun
dengan Next.js 16 (App Router), TypeScript, dan Tailwind CSS 4.

## Struktur folder

```text
.
├── public/                       # aset statis
├── src/
│   ├── app/
│   │   ├── (dashboard)/          # route group: shell + halaman terautentikasi
│   │   │   ├── layout.tsx        # AppShell (sidebar + topbar)
│   │   │   └── dashboard/
│   │   │       ├── page.tsx      # /dashboard
│   │   │       └── loading.tsx   # skeleton
│   │   ├── favicon.ico
│   │   ├── globals.css           # Tailwind + design token
│   │   └── layout.tsx            # root layout (html/body/metadata)
│   ├── components/
│   │   ├── layout/               # AppShell, Sidebar, MobileNavigation, Topbar
│   │   └── ui/                   # Button, Card, EmptyState, Skeleton, StatusBadge
│   ├── config/
│   │   ├── demo-session.ts       # sesi sintetis untuk pratinjau UI
│   │   ├── navigation.ts         # daftar menu + permission
│   │   └── site.ts
│   ├── features/
│   │   └── dashboard/            # widget dashboard + akses data agregat
│   ├── hooks/
│   ├── lib/
│   │   ├── formatters/           # currency, tanggal
│   │   └── permissions/          # filter navigasi (UX saja)
│   └── types/
├── AGENTS.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

Alias `@/*` mengarah ke `src/*`. Route baru dibuat dengan folder + `page.tsx`
di dalam `src/app`; `(group)` mengelompokkan route tanpa mengubah URL.

## Data dashboard

Sesuai Technical Specification dan FE Guideline:

- Ringkasan dashboard **harus berasal dari data agregat backend**.
- Hanya kontribusi `VERIFIED` yang belum `REVERSED` yang masuk total resmi.
- Frontend tidak mengarang API contract dan tidak menghitung total dari data
  transaksi mentah di browser.

Karena API belum tersedia, `src/features/dashboard/data.ts` saat ini:

- **`NODE_ENV=development`**: mengembalikan data sintetis yang diberi label
  jelas ("Pratinjau UI — data sintetis") agar komponen bisa dipraktikkan.
- **production**: mengembalikan `null`, sehingga halaman menampilkan empty
  state sampai titik integrasi backend diisi.

Jangan gunakan angka demo untuk laporan atau keputusan operasional.

## Permission

`src/config/demo-session.ts` dan `visibleNavigation()` hanya mengatur
**visibilitas UI**. Backend tetap otoritas authorization; frontend harus
menangani 401/403 dari API. Token, data finansial, dan income plaintext tidak
boleh disimpan di localStorage/sessionStorage/PWA cache.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000 — redirect root ke `/dashboard` diatur di
`next.config.ts` (bukan `redirect()` di `page.tsx`, karena prerender dengan
Cache Components tidak stabil untuk redirect programatik).

Pemeriksaan sebelum commit:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Catatan Next.js 16

- `searchParams` dan `params` adalah `Promise`; akses runtime dibungkus
  `<Suspense>` karena `cacheComponents: true`.
- `PageProps<"/dashboard">` dan `LayoutProps<"/dashboard">` adalah helper
  global yang di-generate Next.js; tidak di-import manual.
- `new Date()` saat prerender tidak stabil; gunakan `"use cache"` +
  `cacheLife()` bila elemen membutuhkan waktu.
