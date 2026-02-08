# Monsa Logos Builder

> AI-powered logo generator and brand identity platform by **Monsalab**
>
> Create stunning, professional logos in minutes with an intuitive onboarding wizard and a powerful real-time SVG editor. No design skills required.
>
> ---
>
> ## Features
>
> - **Smart Onboarding Wizard** — 5-step guided flow that captures brand preferences (industry, style, colors, symbols, company name)
> - - **AI Logo Generation Engine** — Combines icons, fonts, colors, and layouts using intelligent design rules to produce hundreds of unique logo options
>   - - **Real-Time SVG Editor** — Full customization with live preview: change fonts, colors, layouts, symbols, backgrounds, containers, and more
>     - - **Brand Kit Generator** — Automatically creates 300+ branded assets (business cards, social media templates, email signatures, letterheads) from your logo
>       - - **Export in Multiple Formats** — Download logos as SVG, PNG, EPS, and PDF in high resolution with transparent background variations
>         - - **Responsive & Modern UI** — Beautiful UX built with Next.js 14, Tailwind CSS, and Framer Motion animations
>          
>           - ---
>
> ## Tech Stack
>
> | Layer | Technology |
> |-------|-----------|
> | **Frontend** | Next.js 14 (App Router), React 18, TypeScript |
> | **Styling** | Tailwind CSS 3, Framer Motion |
> | **SVG Engine** | Custom SVG renderer with react-svg components |
> | **State Management** | Zustand |
> | **API** | Next.js API Routes + GraphQL (Apollo Server) |
> | **Database** | PostgreSQL with Prisma ORM |
> | **Auth** | NextAuth.js (Google, GitHub, Email) |
> | **Payments** | Stripe |
> | **Storage** | AWS S3 / Cloudflare R2 |
> | **Deployment** | Vercel |
>
> ---
>
> ## Project Structure
>
> ```
> monsa-logos-builder/
> ├── src/
> │   ├── app/                    # Next.js App Router pages
> │   │   ├── (marketing)/        # Landing page, pricing, about
> │   │   ├── (app)/              # Main application
> │   │   │   ├── onboarding/     # 5-step wizard flow
> │   │   │   ├── explore/        # Browse generated logos
> │   │   │   ├── editor/[id]/    # Logo editor workspace
> │   │   │   └── brand-kit/      # Brand kit dashboard
> │   │   └── api/                # API routes
> │   │       ├── graphql/        # GraphQL endpoint
> │   │       ├── generate/       # Logo generation engine
> │   │       ├── export/         # SVG to PNG/PDF conversion
> │   │       └── webhooks/       # Stripe webhooks
> │   ├── components/
> │   │   ├── ui/                 # Base UI components (buttons, inputs, modals)
> │   │   ├── onboarding/         # Wizard step components
> │   │   ├── editor/             # Editor panels and tools
> │   │   ├── svg/                # SVG rendering components
> │   │   └── brand-kit/          # Brand kit template components
> │   ├── lib/
> │   │   ├── engine/             # Logo generation algorithm
> │   │   │   ├── combiner.ts     # Combines icons + fonts + colors + layouts
> │   │   │   ├── scorer.ts       # Scores design quality of combinations
> │   │   │   └── generator.ts    # Main generation orchestrator
> │   │   ├── svg/                # SVG manipulation utilities
> │   │   │   ├── renderer.ts     # SVG rendering engine
> │   │   │   ├── exporter.ts     # Export to PNG/PDF/EPS
> │   │   │   └── transformer.ts  # SVG transformations (scale, rotate, position)
> │   │   ├── db/                 # Database client and queries
> │   │   ├── auth/               # Authentication configuration
> │   │   └── stripe/             # Payment integration
> │   ├── assets/
> │   │   ├── icons/              # SVG icon library (organized by category)
> │   │   ├── fonts/              # Curated font collection metadata
> │   │   └── palettes/           # Color palette definitions
> │   ├── stores/                 # Zustand state stores
> │   │   ├── onboarding.ts       # Onboarding wizard state
> │   │   ├── editor.ts           # Editor state (selected logo, modifications)
> │   │   └── user.ts             # User preferences and session
> │   └── types/                  # TypeScript type definitions
> │       ├── logo.ts             # Logo data structures
> │       ├── editor.ts           # Editor types
> │       └── brand-kit.ts        # Brand kit types
> ├── prisma/
> │   └── schema.prisma           # Database schema
> ├── public/
> │   └── fonts/                  # Web fonts
> ├── .env.example                # Environment variables template
> ├── next.config.ts              # Next.js configuration
> ├── tailwind.config.ts          # Tailwind CSS configuration
> ├── tsconfig.json               # TypeScript configuration
> └── package.json                # Dependencies and scripts
> ```
>
> ---
>
> ## Getting Started
>
> ### Prerequisites
>
> - Node.js 18+
> - - PostgreSQL database
>   - - Stripe account (for payments)
>     - - AWS S3 or Cloudflare R2 (for file storage)
>      
>       - ### Installation
>      
>       - ```bash
>         # Clone the repository
>         git clone https://github.com/edgarmonza/monsa-logos-builder.git
>         cd monsa-logos-builder
>
>         # Install dependencies
>         npm install
>
>         # Set up environment variables
>         cp .env.example .env.local
>         # Edit .env.local with your credentials
>
>         # Set up the database
>         npx prisma migrate dev
>
>         # Seed the database with icons, fonts, and palettes
>         npm run seed
>
>         # Start the development server
>         npm run dev
>         ```
>
> Visit `http://localhost:3000` to see the app.
>
> ---
>
> ## How the Logo Engine Works
>
> The generation engine follows this pipeline:
>
> 1. **Input Collection** — The onboarding wizard collects: industry, preferred styles, colors, symbols, company name, and optional slogan
> 2. 2. **Asset Filtering** — Based on preferences, the engine filters relevant icons (by industry/symbol tags), fonts (by style match), and color palettes
>    3. 3. **Combination Generation** — The combiner creates hundreds of unique combinations of icon + font + palette + layout, applying design rules for spacing, sizing, and visual hierarchy
>       4. 4. **Quality Scoring** — Each combination is scored based on: color contrast ratios, visual balance, font-icon harmony, and whitespace distribution
>          5. 5. **SVG Rendering** — Top-scored combinations are rendered as SVG using transformation matrices for precise positioning of each element (icon group, company name path, slogan path)
>             6. 6. **Real-Time Editing** — The editor allows users to modify any parameter with instant SVG re-rendering in the browser
>               
>                7. ---
>               
>                8. ## Architecture Decisions
>               
>                9. - **SVG-first rendering** — All logos are composed as SVG with `<path>` elements (text is converted to paths for cross-platform consistency)
> - **Transformation matrices** — Each logo element uses `transform="matrix(...)"` for precise positioning, scaling, and rotation
> - - **Server-side export** — PNG/PDF/EPS conversion happens server-side using Sharp and Puppeteer for high-quality output
>   - - **Incremental generation** — Logos are generated in batches as the user scrolls, with a "More variety" to "More like my logo" slider controlling the diversity parameter
>    
>     - ---
>
> ## Environment Variables
>
> ```env
> # Database
> DATABASE_URL=postgresql://user:password@localhost:5432/monsa_logos
>
> # Auth
> NEXTAUTH_SECRET=your-secret-key
> NEXTAUTH_URL=http://localhost:3000
> GOOGLE_CLIENT_ID=your-google-client-id
> GOOGLE_CLIENT_SECRET=your-google-client-secret
>
> # Stripe
> STRIPE_SECRET_KEY=sk_test_...
> STRIPE_WEBHOOK_SECRET=whsec_...
> NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
>
> # Storage
> S3_BUCKET=monsa-logos
> S3_REGION=us-east-1
> S3_ACCESS_KEY=your-access-key
> S3_SECRET_KEY=your-secret-key
>
> # App
> NEXT_PUBLIC_APP_URL=http://localhost:3000
> ```
>
> ---
>
> ## Scripts
>
> ```bash
> npm run dev          # Start development server
> npm run build        # Build for production
> npm run start        # Start production server
> npm run seed         # Seed database with icons, fonts, and palettes
> npm run lint         # Run ESLint
> npm run test         # Run tests
> npm run prisma:studio # Open Prisma Studio (database GUI)
> ```
>
> ---
>
> ## Contributing
>
> 1. Fork the repository
> 2. 2. Create your feature branch (`git checkout -b feature/amazing-feature`)
>    3. 3. Commit your changes (`git commit -m 'Add amazing feature'`)
>       4. 4. Push to the branch (`git push origin feature/amazing-feature`)
>          5. 5. Open a Pull Request
>            
>             6. ---
>            
>             7. ## License
>            
>             8. This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
>
> ---
>
> Built with care by [Monsalab](https://monsalab.com)
