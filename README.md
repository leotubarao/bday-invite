# 🎉 Birthday Invitation Website

Uma landing page interativa para convites de aniversário, desenvolvida para celebrar datas especiais de forma moderna e envolvente.

## 📋 Sobre o Projeto

Este projeto foi criado para servir como um convite digital personalizado para celebrações de aniversário. A aplicação permite que o aniversariante compartilhe detalhes de múltiplos eventos no mesmo dia e colete respostas dos convidados de forma prática e divertida.

### ✨ Funcionalidades

- **Evento Único**: Convite para celebração no Pirajú Botequim
- **Previsão do Tempo**: Integração com Weather API do Google para mostrar o clima no dia do evento (12h-21h)
- **Cópia de Endereço**: Botão para copiar endereço do evento
- **Integração Instagram**: Link direto para o perfil do local
- **Enquete Interativa**: Sistema de votação para confirmar presença
- **Integração WhatsApp**: Envio automático de respostas via WhatsApp
- **Tema Halloween**: Design festivo com cores e animações temáticas
- **Design Responsivo**: Interface adaptável para desktop e mobile
- **Animações Suaves**: Elementos animados para uma experiência mais envolvente

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)** - Biblioteca para construção da interface
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool moderna e rápida
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Axios](https://axios-http.com/)** - Cliente HTTP para integração com APIs
- **[Google Cloud Geocoding API](https://developers.google.com/maps/documentation/geocoding)** - API de geocodificação
- **[Open-Meteo API](https://open-meteo.com/)** - API de previsão do tempo (gratuita)
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes eficiente

## 🚀 Como Usar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/leotubarao/bday-invite.git
cd bday-invite

# Instale as dependências
pnpm install
# ou
npm install
```

### Configuração

1. Crie um arquivo `.env` na raiz do projeto:

```bash
# Google Cloud API (obrigatório para funcionalidade do clima)
VITE_GOOGLE_API_KEY=your_google_cloud_api_key_here

# WhatsApp (obrigatório para funcionalidade de enquete)
VITE_PHONE_NUMBER=5519999999999
```

2. **Configuração do Google Cloud API (Obrigatório)**:
   - Acesse [Google Cloud Console](https://console.cloud.google.com/)
   - Crie um novo projeto ou selecione um existente
   - Ative a **Geocoding API**
   - Vá em "Credenciais" e crie uma chave de API
   - Adicione a chave no arquivo `.env`
   - O sistema usará Open-Meteo (gratuito) para dados meteorológicos

3. **Configuração do WhatsApp (Obrigatório)**:
   - Substitua pelo seu número de WhatsApp (com código do país, sem símbolos)

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

Acesse `http://localhost:5173` para ver a aplicação rodando.

### Build para Produção

```bash
# Gera a build otimizada
pnpm build
# ou
npm run build

# Preview da build
pnpm preview
# ou
npm run preview
```

### Deploy

O projeto inclui configuração para deploy no GitHub Pages:

```bash
# Deploy automático
pnpm deploy
# ou
npm run deploy
```

## 🎨 Personalização

### Modificando o Evento

Edite os arquivos de componentes para personalizar:

- **VenueCard**: Altere `src/components/VenueCard.tsx` para modificar local, endereço e Instagram
- **EventDate**: Modifique `src/components/EventDate.tsx` para alterar data e horário
- **WeatherTimeline**: Atualize `src/services/weatherService.ts` para alterar localização
- **Tema**: Personalize cores e animações em `src/styles/index.css`
- **Scrollbars**: Estilos customizados temáticos em `src/styles/index.css`

### Customizando Scrollbars

O projeto inclui scrollbars customizados com tema Halloween:

- **Design Simples**: Estilo laranja minimalista
- **Responsivo**: Scrollbars adaptadas para dispositivos móveis
- **Acessibilidade**: Suporte para high contrast e reduced motion
- **Smooth Scrolling**: Rolagem suave em toda a aplicação

Classes CSS disponíveis:

- `.weather-timeline-scroll`: Para containers horizontais com scrollbar temática

### Customizando Mensagens

As mensagens de resposta da enquete podem ser editadas na função `handlePollResponse` do componente principal.

## 📱 Funcionalidades Específicas

### Previsão do Tempo com Google Cloud

- Integração com Google Cloud Geocoding API para coordenadas precisas
- Uso do Open-Meteo (gratuito) para dados meteorológicos confiáveis
- Exibe previsão das 12h às 21h do dia do evento
- Dados em português com ícones visuais para diferentes condições
- Informações de temperatura, umidade e velocidade do vento
- **Requer Google Cloud API key** para funcionar

### Sistema de Cópia de Endereço

- Clique no botão "📋 Copiar Endereço" para copiar automaticamente o endereço
- Feedback visual com confirmação "✓ Copiado!" por 2 segundos

### Integração WhatsApp

- Após votar na enquete, abre automaticamente o WhatsApp com mensagem pré-definida
- Facilita o processo de confirmação de presença

### Tema Halloween Interativo

- Cores temáticas em laranja, roxo e preto
- Animações flutuantes com elementos decorativos
- Efeitos de brilho e movimento para criar atmosfera festiva
- Emojis temáticos em toda a interface

## 🎯 Casos de Uso

Este projeto é ideal para:

- Convites de aniversário temáticos (Halloween, etc.)
- Celebrações com informações climáticas relevantes
- Eventos em locais específicos com redes sociais
- Coleta de confirmações de presença
- Eventos familiares e entre amigos
- Substituição de convites em papel por versões eco-friendly e interativas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ❤️ por [Leoni Santos](https://ltco.com.br)
