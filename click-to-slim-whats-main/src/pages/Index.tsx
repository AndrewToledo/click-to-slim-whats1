import React from 'react';
import { MessageCircle, Star, CheckCircle, Target, Heart, Zap, Award, Users, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo seu número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre o programa de emagrecimento.";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme Seu Corpo em
            <span className="block text-yellow-300">30 Dias</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubra o método revolucionário que já ajudou mais de 5.000 pessoas a 
            <strong> perder até 15kg </strong> de forma saudável e definitiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              QUERO EMAGRECER AGORA!
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm">Mais de 2.500 avaliações positivas</span>
          </div>
        </div>
      </section>

      {/* Produto EU+LEVE */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Conheça o <span className="text-orange-600">EU+LEVE</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Spray Relaxante Natural</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-xl text-gray-700 font-semibold">QUEIMA GORDURA RÁPIDO</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-xl text-gray-700 font-semibold">REDUZ ANSIEDADE NATURAL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-xl text-gray-700 font-semibold">CORPO MAIS LEVE</span>
                </div>
              </div>
              <div className="bg-green-100 p-6 rounded-lg mb-8">
                <h4 className="text-2xl font-bold text-green-800 mb-2">RECEBA EM 24 HORAS</h4>
                <p className="text-green-700 text-lg font-semibold">PAGUE NA ENTREGA</p>
              </div>
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-3 h-7 w-7" />
                CLIQUE EM SAIBA MAIS
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/8bdd3d5d-6c70-4b15-b3eb-fc702f259617.png" 
                alt="EU+LEVE Spray Relaxante - Queima Gordura Rápido, Reduz Ansiedade Natural, Corpo Mais Leve"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo de Chamada */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Assista ao <span className="text-red-600">Vídeo Exclusivo</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Descubra os segredos que mudaram a vida de milhares de pessoas e como você pode ser a próxima!
          </p>
          
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl mb-8 group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-red-400 to-pink-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-white/20 backdrop-blur rounded-full p-6 mb-4 inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-16 w-16 text-white ml-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">TRANSFORMAÇÃO REAL</h3>
                <p className="text-lg opacity-90">Clique para assistir</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 font-semibold">
                  ⚠️ ATENÇÃO: Este vídeo contém informações exclusivas que podem sair do ar a qualquer momento!
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Método Comprovado", desc: "Cientificamente testado" },
              { title: "Resultados Rápidos", desc: "Até 15kg em 30 dias" },
              { title: "100% Natural", desc: "Sem efeitos colaterais" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <Button 
            onClick={openWhatsApp}
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="mr-3 h-7 w-7" />
            QUERO COMEÇAR AGORA!
          </Button>
          <p className="text-sm mt-4 text-red-600 font-semibold">
            🔥 OFERTA ESPECIAL - Apenas hoje com 50% de desconto!
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Por Que Nosso Método <span className="text-purple-600">Funciona?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-12 w-12 text-purple-600" />,
                title: "Resultados Rápidos",
                description: "Perca até 5kg na primeira semana com nosso protocolo científico comprovado"
              },
              {
                icon: <Heart className="h-12 w-12 text-pink-600" />,
                title: "100% Saudável",
                description: "Método natural sem dietas malucas, remédios ou cirurgias perigosas"
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-600" />,
                title: "Energia Multiplicada",
                description: "Sinta-se mais disposto(a) e com energia para viver a vida que merece"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-0">
                  <div className="mb-6 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformações */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Transformações <span className="text-purple-600">Reais</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Maria Silva", weight: "23kg perdidos", time: "4 meses" },
              { name: "João Santos", weight: "18kg perdidos", time: "3 meses" },
              { name: "Ana Costa", weight: "15kg perdidos", time: "2 meses" },
            ].map((transformation, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Users className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-sm">Foto do antes/depois</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center bg-white">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{transformation.name}</h3>
                  <p className="text-purple-600 font-semibold text-lg">{transformation.weight}</p>
                  <p className="text-gray-600">em {transformation.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              EU TAMBÉM QUERO ME TRANSFORMAR!
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            O Que Nossos <span className="text-purple-600">Clientes Dizem</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Carolina Mendes",
                text: "Perdi 12kg em 2 meses! Nunca pensei que seria possível. O método realmente funciona e mudou minha vida completamente.",
                rating: 5
              },
              {
                name: "Roberto Lima",
                text: "Já tentei várias dietas antes, mas essa foi a única que deu resultado duradouro. Perdi 20kg e mantive o peso!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Método */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Nosso <span className="text-purple-600">Método Exclusivo</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="space-y-6">
                {[
                  "Protocolo nutricional personalizado",
                  "Exercícios específicos para queima de gordura",
                  "Acompanhamento 24h via WhatsApp",
                  "Cardápios práticos e saborosos",
                  "Suporte psicológico incluso"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <Award className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Garantia de Resultado</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Temos tanta confiança no nosso método que oferecemos 
                <strong> garantia de 30 dias</strong>. Se você não perder pelo menos 5kg, 
                devolvemos 100% do seu investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pronto Para Sua <span className="text-yellow-300">Transformação?</span>
          </h2>
          <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            Não deixe para amanhã a mudança que pode começar hoje. 
            Milhares de pessoas já transformaram suas vidas. Você será a próxima?
          </p>
          <Button 
            onClick={openWhatsApp}
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="mr-3 h-7 w-7" />
            COMEÇAR MINHA TRANSFORMAÇÃO AGORA!
          </Button>
          <p className="text-sm mt-4 text-yellow-200">
            ⚡ Vagas limitadas - Apenas 10 pessoas por mês
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Transforme Sua Vida Hoje</h3>
          <p className="text-gray-300 mb-6">
            Método comprovado cientificamente • Resultados garantidos • Suporte 24h
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 Programa de Emagrecimento</span>
            <span>•</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 animate-pulse"
        size="lg"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default Index;
