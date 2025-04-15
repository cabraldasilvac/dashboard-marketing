import DashboardCard from "@/components/DashboardCard";
import MetricCard from "@/components/MetricCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {
  BarChart3,
  Calendar,
  Mail,
  Settings,
  User,
  Users,
  Zap,
} from "@/components/ui/icons";

export default function DashboardPage() {
  return (
    <div className="min-h-screen content">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 lg:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Visão Geral</h1>

          {/* Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Visitas"
              value="12,345"
              change="+12%"
              icon={<Users className="h-5 w-5" />}
            />
            <MetricCard
              title="Leads"
              value="1,234"
              change="+8%"
              icon={<Mail className="h-5 w-5" />}
            />
            <MetricCard
              title="Conversão"
              value="32%"
              change="+2%"
              icon={<BarChart3 className="h-5 w-5" />}
            />
            <MetricCard
              title="Campanhas"
              value="5"
              change="+1"
              icon={<Zap className="h-5 w-5" />}
            />
          </div>

          {/* Cards Principais */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <DashboardCard
              title="Performance de Campanhas"
              className="lg:col-span-2"
            >
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Gráfico de performance</p>
              </div>
            </DashboardCard>

            <DashboardCard title="Próximas Ações">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Reunião com cliente</h3>
                    <p className="text-sm text-gray-500">Amanhã, 10:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Lançamento de campanha</h3>
                    <p className="text-sm text-gray-500">Sexta-feira</p>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>

          {/* Cards Secundários */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard title="Solicitações Recentes">
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div>
                      <h3 className="font-medium">
                        Nova arte para redes sociais
                      </h3>
                      <p className="text-sm text-gray-500">
                        Cliente: Empresa {item}
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                      Pendente
                    </span>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Configurações Rápidas">
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-400 mr-3" />
                    <span>Preferências de Notificação</span>
                  </div>
                  <span className="text-gray-400">&rarr;</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-3" />
                    <span>Dados do Usuário</span>
                  </div>
                  <span className="text-gray-400">&rarr;</span>
                </button>
              </div>
            </DashboardCard>
          </div>
        </main>
      </div>
    </div>
  );
}
