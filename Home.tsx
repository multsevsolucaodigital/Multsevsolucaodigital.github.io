import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Dados de crescimento mensal
  const monthlyGrowthData = [
    { month: 'Jan', visitas: 4000, conversoes: 240, engajamento: 2400 },
    { month: 'Fev', visitas: 5200, conversoes: 320, engajamento: 2800 },
    { month: 'Mar', visitas: 6800, conversoes: 480, engajamento: 3200 },
    { month: 'Abr', visitas: 8200, conversoes: 620, engajamento: 3800 },
    { month: 'Mai', visitas: 9800, conversoes: 780, engajamento: 4200 },
    { month: 'Jun', visitas: 12500, conversoes: 950, engajamento: 5100 },
  ];

  // Dados de distribuição de canais
  const channelData = [
    { name: 'Social Media', value: 35, color: '#003366' },
    { name: 'Email Marketing', value: 25, color: '#00509d' },
    { name: 'SEO Orgânico', value: 22, color: '#2ecc71' },
    { name: 'Publicidade Paga', value: 18, color: '#f39c12' },
  ];

  // Dados de ROI por estratégia
  const roiData = [
    { estrategia: 'Branding', roi: 320 },
    { estrategia: 'Content Marketing', roi: 280 },
    { estrategia: 'Automação', roi: 450 },
    { estrategia: 'Influencers', roi: 380 },
    { estrategia: 'Remarketing', roi: 520 },
  ];

  // KPIs principais
  const kpis = [
    { label: 'Crescimento de Visitas', value: '+215%', icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
    { label: 'Novos Clientes', value: '1,245', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Taxa de Conversão', value: '+85%', icon: Target, color: 'from-purple-500 to-purple-600' },
    { label: 'Engajamento', value: '+340%', icon: Zap, color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">MultSev Portfolio</h1>
              <p className="text-xs text-slate-500">Resultados & Análises</p>
            </div>
          </div>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Resultados Extraordinários em Marketing Digital
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Conheça os números que comprovam nossa expertise em estratégia, visibilidade e crescimento sustentável para empresas visionárias.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Ver Análise Completa <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* KPIs Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{kpi.label}</p>
                  <p className="text-3xl font-bold text-slate-900">{kpi.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Tabs de Análise */}
        <section className="mb-16">
          <div className="flex gap-4 mb-8 border-b border-slate-200">
            {['overview', 'channels', 'roi'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold text-sm transition-all ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab === 'overview' && 'Crescimento Mensal'}
                {tab === 'channels' && 'Distribuição de Canais'}
                {tab === 'roi' && 'ROI por Estratégia'}
              </button>
            ))}
          </div>

          {/* Crescimento Mensal */}
          {activeTab === 'overview' && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Crescimento Mensal - Últimos 6 Meses</CardTitle>
                <CardDescription>Acompanhamento de visitas, conversões e engajamento</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                      cursor={{ stroke: '#3b82f6', strokeWidth: 2 }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="visitas" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 6 }} />
                    <Line type="monotone" dataKey="conversoes" stroke="#2ecc71" strokeWidth={3} dot={{ fill: '#2ecc71', r: 6 }} />
                    <Line type="monotone" dataKey="engajamento" stroke="#f39c12" strokeWidth={3} dot={{ fill: '#f39c12', r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {/* Distribuição de Canais */}
          {activeTab === 'channels' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Distribuição de Canais</CardTitle>
                  <CardDescription>Percentual de contribuição por canal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={channelData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {channelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Análise por Canal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {channelData.map((channel, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: channel.color }}
                          />
                          <span className="text-slate-700 font-medium">{channel.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full" 
                              style={{ 
                                width: `${channel.value}%`,
                                backgroundColor: channel.color 
                              }}
                            />
                          </div>
                          <span className="text-slate-900 font-bold w-8 text-right">{channel.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ROI por Estratégia */}
          {activeTab === 'roi' && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>ROI por Estratégia</CardTitle>
                <CardDescription>Retorno sobre investimento em percentual</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={roiData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="estrategia" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                      formatter={(value) => `${value}%`}
                    />
                    <Bar dataKey="roi" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Insights Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Estratégia de Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800">
                Implementação de estratégias personalizadas que resultaram em crescimento de 215% em visitas e 85% em conversões.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className="text-green-900">Tecnologia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800">
                Uso de ferramentas avançadas de automação e análise de dados para otimizar campanhas em tempo real.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader>
              <CardTitle className="text-purple-900">Autoridade Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800">
                Construção de presença online sólida com 1.245 novos clientes e engajamento aumentado em 340%.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white mb-16">
          <h3 className="text-3xl font-bold mb-4">Pronto para Transformar sua Marca?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Esses resultados são apenas o começo. Descubra como a MultSev pode levar seu negócio ao próximo nível.
          </p>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Falar com um Especialista <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">MultSev Solução Digital</h4>
              <p className="text-sm">Sua parceira estratégica em marketing e tecnologia para crescimento exponencial.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Serviços</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Marketing Estratégico</a></li>
                <li><a href="#" className="hover:text-white transition">Tecnologia Digital</a></li>
                <li><a href="#" className="hover:text-white transition">Autoridade Online</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <p className="text-sm mb-2">Email: contato@multsev.com</p>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition">
                WhatsApp: Falar Agora
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2026 MultSev Solução Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
