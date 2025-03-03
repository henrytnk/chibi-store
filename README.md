# Chibi Store

[![Next.js](https://img.shields.io/badge/Next.js-13-blue)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-blue)](https://tailwindcss.com/) [![Prisma](https://img.shields.io/badge/Prisma-ORM-green)](https://www.prisma.io/)

Chibi Store is an e-commerce platform built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It uses **Prisma** as an ORM to interact with the database, providing a scalable and efficient online shopping experience.

## 🚀 Features

- 🛒 **Product Listings** - Browse a variety of products with dynamic filtering.
- 🔍 **Search Functionality** - Quickly find products with an optimized search experience.
- 🏷 **Category-Based Navigation** - Organize products into different categories.
- 📦 **Cart System** - Add, remove, and manage products in the cart.
- 💳 **Checkout Process** - Seamless order placement with payment integration (future implementation).
- 📊 **Admin Dashboard** - Manage products, orders, and customers.
- 🌐 **Fully Responsive** - Optimized for desktop and mobile experiences.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: Next.js API Routes
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL / MySQL (configurable)

## 📦 Installation

Clone the repository:

```sh
 git clone https://github.com/henrytnk/chibi-store.git
 cd chibi-store
```

Install dependencies:

```sh
npm install
# or
yarn install
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
DATABASE_URL=your_database_connection_string
NEXTAUTH_SECRET=your_next_auth_secret
```

## 🏃 Running the Project

### Start the development server:
```sh
npm run dev
# or
yarn dev
```

### Run database migrations:
```sh
npx prisma migrate dev --name init
```

### Open Prisma Studio (DB GUI):
```sh
npx prisma studio
```

## 🚀 Deployment

Chibi Store can be deployed easily on platforms like **Vercel**.

### Deploy to Vercel:
```sh
vercel
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, create a branch, and submit a PR.

## 📜 License

This project is licensed under the MIT License.

## 🔗 Repository

[Chibi Store on GitHub](https://github.com/henrytnk/chibi-store)

