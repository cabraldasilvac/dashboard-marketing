import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Se acessar a raiz, redirecionar para /login
  if (path === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configuração para executar o middleware nas rotas especificadas
export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
