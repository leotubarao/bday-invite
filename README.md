# 🎉 Birthday Invitation Website

Uma landing page interativa para convites de aniversário, desenvolvida para celebrar datas especiais de forma moderna e envolvente.

## 📋 Sobre o Projeto

Este projeto foi criado para servir como um convite digital personalizado para celebrações de aniversário. A aplicação permite que o aniversariante compartilhe detalhes de múltiplos eventos no mesmo dia e colete respostas dos convidados de forma prática e divertida.

### ✨ Funcionalidades

- **Múltiplos Eventos**: Suporte para dois eventos no mesmo dia (ex: almoço e festa)
- **Cópia de Endereços**: Botões para copiar endereços dos eventos para facilitar a navegação
- **Enquete Interativa**: Sistema de votação para confirmar presença nos eventos
- **Integração WhatsApp**: Envio automático de respostas via WhatsApp
- **Design Responsivo**: Interface adaptável para desktop e mobile
- **Animações Suaves**: Elementos animados para uma experiência mais envolvente

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)** - Biblioteca para construção da interface
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool moderna e rápida
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes eficiente

## � Como Usar

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
VITE_PHONE_NUMBER=5519999999999
```

2. Substitua pelo seu número de WhatsApp (com código do país, sem símbolos)

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

### Modificando os Eventos

Edite o arquivo `src/AppContainer.tsx` para personalizar:

- **Endereços**: Altere as variáveis `barAddress` e `ameAddress`
- **Horários**: Modifique os textos dos horários nos cards dos eventos
- **Nomes dos Locais**: Atualize os títulos dos eventos
- **Emojis e Cores**: Personalize os ícones e gradientes dos botões

### Customizando Mensagens

As mensagens de resposta da enquete podem ser editadas na função `handlePollResponse` do componente principal.

## 📱 Funcionalidades Específicas

### Sistema de Cópia de Endereços

- Clique nos botões "📋 Copiar Endereço" para copiar automaticamente o endereço para a área de transferência
- Feedback visual com confirmação "✓ Copiado!" por 2 segundos

### Integração WhatsApp

- Após votar na enquete, abre automaticamente o WhatsApp com mensagem pré-definida
- Facilita o processo de confirmação de presença

### Animações CSS

- Elementos flutuantes com animações suaves
- Efeitos de fade-in e slide-in para melhor experiência do usuário
- Hover effects em todos os elementos interativos

## 🎯 Casos de Uso

Este projeto é ideal para:

- Convites de aniversário digitais
- Celebrações com múltiplos eventos
- Coleta de confirmações de presença
- Eventos familiares e entre amigos
- Substituição de convites em papel por versões eco-friendly

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ❤️ por [Leoni Santos](https://ltco.com.br)
