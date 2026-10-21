# Publicação na Hostinger

O projeto gera um site estático Astro. A pasta que deve ser publicada é `dist/`.

## Publicação pelo Gerenciador de Arquivos

1. Execute `npm install` e `npm run build` no projeto.
2. Entre no painel da Hostinger e abra o Gerenciador de Arquivos.
3. Acesse a pasta `public_html` do domínio `agomesadvogados.com.br`.
4. Faça upload do conteúdo interno de `dist/` para `public_html` — não envie a pasta `dist` como uma camada extra.
5. Confirme que `public_html/index.html` existe.
6. Ative o SSL gratuito e force HTTPS no painel da Hostinger.
7. Teste a página inicial, as páginas de áreas, o formulário, o WhatsApp e o mapa.

## Publicação por FTP

Envie todos os arquivos e pastas de `dist/` para `public_html` usando o usuário FTP do domínio. A estrutura deve permanecer igual à gerada pelo Astro.

## Formulário

O formulário está preparado para encaminhar as mensagens por FormSubmit para `contato@digitaltimes.com.br`. No primeiro envio, o serviço pode solicitar a confirmação desse endereço. Depois da confirmação, faça um envio de teste completo.

Quando o escritório tiver um backend Supabase, o formulário pode ser trocado por uma função segura sem expor chaves no navegador.

## Google Analytics

Copie `.env.example` para `.env`, informe o ID real do Google Analytics 4 em `PUBLIC_GA_ID` e execute novamente `npm run build`. Sem esse ID, o site funciona normalmente e nenhum script de Analytics é carregado.

## Antes da publicação definitiva

- Substituir os avatares provisórios pelas fotos profissionais da equipe.
- Confirmar o número de WhatsApp que deve ser divulgado: o site usa telefone `(11) 98216-6464` e WhatsApp `(11) 96069-1139`, conforme os dados recebidos.
- Criar o Google Business Profile e substituir o link do mapa, caso necessário.
- Revisar e aprovar a Política de Privacidade com o escritório.
- Revisar a comunicação institucional conforme as regras atuais da OAB antes de publicar.
- Confirmar a mensagem e o destinatário do formulário.
