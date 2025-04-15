"use client";

import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { Lock, User } from "@/components/ui/icons";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (username === "spotmkt" && password === "123") {
      router.push("/dashboard");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                SpotMKT
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Acesse seu painel de marketing
              </p>
            </div>
            <AuthForm onSubmit={handleSubmit} />
          </div>
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-xs sm:text-sm text-gray-600">
              Dados de acesso: spotmkt / 123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
