# MovingStarMover 🚚

A modern, full-service moving company website built with Next.js 14, featuring comprehensive moving services, instant quote system, and seamless user experience.

## 🌟 Features

### Core Services
- **Household Moving** - Full-service residential moves
- **Long Distance Moving** - Cross-country and interstate relocations
- **International Moving** - Overseas relocation services
- **Corporate Moving** - Employee and office relocation
- **Military Moving** - Specialized military relocation services
- **Auto Transport** - Vehicle shipping and transport

### Key Features
- ⚡ **Instant Quote System** - Multi-step online quote calculator
- 📱 **Responsive Design** - Mobile-first approach
- 🔍 **SEO Optimized** - Built-in SEO with Next.js
- 🎨 **Modern UI/UX** - Beautiful, intuitive interface
- 📊 **Analytics Integration** - Track user interactions
- 🔐 **Secure Forms** - Protected customer data
- 📞 **24/7 Support** - Round-the-clock customer service

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Email**: Resend
- **Payments**: Stripe

## 📁 Project Structure

```
MovingStarMover/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   ├── forms/            # Form components
│   └── sections/         # Page sections
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── prisma/               # Database schema (if using Prisma)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/MovingStarMover.git
   cd MovingStarMover
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="your-supabase-database-url"
   
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
   
   # Email
   RESEND_API_KEY="your-resend-api-key"
   
   # Payments
   STRIPE_SECRET_KEY="your-stripe-secret-key"
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
   
   # Next.js
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx supabase db push
   # or if using Prisma
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying `tailwind.config.js` for theme customization
- Updating `app/globals.css` for global styles
- Using Shadcn/ui components for consistent UI

### Content
- Update content in `app/page.tsx` and other page files
- Modify service descriptions in the components
- Update contact information and company details

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Set up your database tables
3. Configure authentication providers
4. Add your environment variables

### Email Configuration
1. Sign up for Resend
2. Add your domain for sending emails
3. Configure email templates

### Payment Setup
1. Create a Stripe account
2. Set up your products and pricing
3. Configure webhook endpoints

## 📱 Pages & Features

### Public Pages
- **Home** - Landing page with services overview
- **Services** - Detailed service descriptions
- **Quote Calculator** - Multi-step quote form
- **About Us** - Company information
- **Contact** - Contact form and information
- **Blog** - Moving tips and resources

### User Dashboard
- **Profile** - User account management
- **Quotes** - View and manage quotes
- **Bookings** - Track moving bookings
- **Documents** - Upload and manage documents

### Admin Dashboard
- **Dashboard** - Overview and analytics
- **Quotes** - Manage customer quotes
- **Bookings** - Schedule and manage moves
- **Customers** - Customer database
- **Reports** - Generate reports

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify** - Similar to Vercel deployment
- **Railway** - Full-stack deployment
- **AWS** - Manual deployment with EC2

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: support@movingstarmover.com
- **Phone**: (800) MOVING-1
- **Live Chat**: Available on website
- **Documentation**: [docs.movingstarmover.com](https://docs.movingstarmover.com)

## 🙏 Acknowledgments

- Inspired by modern moving company websites
- Built with Next.js 14 and modern web technologies
- UI components from Shadcn/ui
- Icons from Lucide React

---

**MovingStarMover** - Making your move stress-free since 2024 🏠✨ 