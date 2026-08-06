const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

type PexelsPhoto = {
  id: number;
  src: { large: string; large2x: string };
  alt: string;
};

type PexelsSearchResponse = {
  photos: PexelsPhoto[];
};

export async function searchPexelsPhoto(query: string): Promise<PexelsPhoto | null> {
  if (!PEXELS_API_KEY) {
    return null;
  }

  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
    { headers: { Authorization: PEXELS_API_KEY } }
  );

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as PexelsSearchResponse;
  return data.photos[0] ?? null;
}
