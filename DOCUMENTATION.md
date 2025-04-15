# 📚 Documentação do SpotMKT Dashboard

## Índice

- [Como executar](#como-executar)
- [Estrutura](#estrutura)
  - [Iniciação do Projeto](#introducao)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Configuração](#configuracao)
  - [Desenvolvimento](#desenvolvimento)
  - [Deploy](#deploy)
- [Introdução](#introducao)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Configuração](#configuracao)
- [Desenvolvimento](#desenvolvimento)
- [Deploy](#deploy)

<hr>

## 🚀 Como executar

```bash
npm install
npm run dev
```

<hr>

## Introdução

1. Criar o projeto Next.js
   Execute no terminal:

```bash
npx create-next-app@latest spotmkt-dashboard --typescript --tailwind --eslint
```

Escolha as opções:

- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- src/ directory: Yes
- App Router: Yes
- Import alias: (padrão)

2. Acessar a pasta do projeto

```bash
cd spotmkt-dashboard
```

3. Instalar dependências adicionais

```bash
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-slot lucide-react
```

<hr>

## Estrutura de Arquivos

```
/src
  /app
    /login
      page.tsx
    /dashboard
      page.tsx
    layout.tsx
  /components
    AuthForm.tsx
    DashboardCard.tsx
    MetricCard.tsx
    Navbar.tsx
    Sidebar.tsx
    /ui
      icons.ts
  /lib
    constants.ts
  /styles
    globals.css
```

<hr>

## Configuração <a id="configuracao"></a>

1 - Configuirar arquivos de ícones
Crie src/components/ui/icons.ts:

```typescript
export {
  Home,
  Bell,
  Search,
  User,
  BarChart3,
  Calendar,
  Mail,
  Settings,
  Zap,
  Users,
  Lock,
} from "lucide-react";
```

2 - Configurar TailwindCSS
edit tailwind.config.js:

```javascript
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          // ... outras cores
        },
      },
    },
  },
  plugins: [],
};
```

<hr>

## 💻 Desenvolvimento <a id="desenvolvimento"></a>

1. Rodar o Projeto localmente

```bash
npm run dev
```

Acesse: http://localhost:3000/login

2. Credenciais de acesso

- Usuário: spotmkt
- Senha: 123

3. Principais componentes

**_AuthForm.tsx_**

```typescript

"use client";

import { Lock, User } from "@/components/ui/icons";

export default function AuthForm({ onSubmit }: { onSubmit: (formData: FormData) => void }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(new FormData(e.currentTarget));
    }}>
      {/* Campos do formulário */}
    </form>
  );
}
```

**_Navbar.tsx_**

```typescript

"use client";

import { Bell, Search, User as UserIcon } from "@/components/ui/icons";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      {/* Implementação da navbar */}
    </header>
  );
}
```

<hr>

## 🚀 Deploy <a id="deploy"></a>

1. Preparar para produção

```bash
npm run build
```

2. Rodar em produção

```bash
npm start
```

3. Opções de deploy

Vercel (recomendado para Next.js)

Netlify

AWS Amplify

```

```
