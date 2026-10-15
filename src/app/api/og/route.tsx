import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    // 1. Captura os parâmetros da URL
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title')?.slice(0, 100) || 'Blog Post';
    const category = searchParams.get('category') || 'AWS COMPUTE BLOG';
    const lang = searchParams.get('lang') || 'pt';

    // 2. Define a tradução da chamada para ação
    const callToAction = lang === 'en' ? 'Read the blog post >' : 'Ler o artigo >';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '80px 100px',
            backgroundColor: '#ffffff', // Fundo branco puro
            backgroundImage: `
              radial-gradient(ellipse at top left, rgba(255, 0, 128, 0.12) 0%, transparent 70%),
              radial-gradient(ellipse at bottom right, rgba(0, 204, 255, 0.15) 0%, transparent 70%),
              radial-gradient(ellipse at bottom left, rgba(255, 204, 0, 0.12) 0%, transparent 70%)
            `,
          }}
        >
          {/* Categoria (Top-Left) */}
          <div style={{ display: 'flex' }}>
            <span
              style={{
                color: '#FF9900', // Laranja forte para contraste perfeito
                fontWeight: 800,
                fontSize: 40, // Aumentado
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {category}
            </span>
          </div>

          {/* Título Centralizado */}
          <div style={{ display: 'flex', maxWidth: '900px' }}>
            <h1
              style={{
                color: '#111',
                fontWeight: 800, // Ajustado de 900 para 800 para forçar o render do negrito nativo
                fontSize: 72, // Levemente maior
                lineHeight: 1.1,
                fontFamily: 'sans-serif'
              }}
            >
              {title}
            </h1>
          </div>

          {/* Rodapé */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            {/* Call to action (Bottom-Left) */}
            <span
              style={{
                color: '#111',
                fontWeight: 800,
                fontSize: 48 // Aumentado significativamente
              }}
            >
              {callToAction}
            </span>

            {/* Assinatura "Pedro Nieto" (Bottom-Right) */}
            <span
              style={{
                color: '#111',
                fontWeight: 700,
                fontSize: 36, // Aumentado para ficar mais legível
                opacity: 0.7, // Levemente mais visível
                letterSpacing: '0.02em'
              }}
            >
              Pedro Nieto
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}