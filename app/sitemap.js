export default function sitemap() {
  const baseUrl = 'https://streamhub-live.vercel.app'; // Cambiaremos esto por tu URL definitiva de Vercel

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/live`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
  ];
}