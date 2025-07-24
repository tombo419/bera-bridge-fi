// Common tags used across articles
export const tagMap: Record<string, string[]> = {
  // Technology articles
  'tekoaly': ['Tekoäly', 'AI', 'Koneoppiminen', 'Teknologia'],
  'teknologia': ['Teknologia', 'Innovaatio', 'Digitalisaatio'],
  'tietoturva': ['Tietoturva', 'Kyberturvallisuus', 'Yksityisyys'],
  'kvantti': ['Kvanttitietokoneet', 'Teknologia', 'Tulevaisuus'],
  'apple': ['Apple', 'Teknologia', 'VR', 'Vision Pro'],
  '5g': ['5G', 'Verkot', 'Teknologia', 'Pelaaminen'],
  
  // Gaming articles
  'pelaaminen': ['Pelaaminen', 'Pelit', 'Gaming'],
  'esports': ['E-urheilu', 'Kilpapelaaminen', 'ENCE', 'Counter-Strike'],
  'cs2': ['Counter-Strike', 'E-urheilu', 'ENCE', 'Suomi'],
  'mobiilipelit': ['Mobiilipelit', 'Mikromaksut', 'Pelaaminen'],
  'virtuaalivaluutta': ['Virtuaalivaluutta', 'Kryptovaluutta', 'Pelaaminen'],
  'kryptokasino': ['Kryptokasino', 'Rahapelit', 'Kryptovaluutta'],
  
  // Social media articles
  'sosiaalinen-media': ['Sosiaalinen media', 'Some', 'Digitaalinen kulttuuri'],
  'tiktok': ['TikTok', 'Sosiaalinen media', 'Algoritmi', 'Kiina'],
  'threads': ['Threads', 'Meta', 'Twitter', 'Sosiaalinen media'],
  'meta': ['Meta', 'Metaversumi', 'VR', 'Investointi'],
  'instagram': ['Instagram', 'Sosiaalinen media', 'Meta'],
  
  // Research & Studies
  'tutkimus': ['Tutkimus', 'Tiede', 'Akateeminen'],
  'psykologia': ['Psykologia', 'Mielenterveys', 'Käyttäytyminen'],
  'riippuvuus': ['Riippuvuus', 'Mielenterveys', 'Ruutuaika'],
  'hyvinvointi': ['Hyvinvointi', 'Terveys', 'Digitaalinen detox'],
  'uni': ['Uni', 'Terveys', 'Ruutuaika'],
  'liikunta': ['Liikunta', 'Terveys', 'Sovellukset'],
  
  // Politics & Society
  'politiikka': ['Politiikka', 'Yhteiskunta', 'Säätely'],
  'eu': ['EU', 'Eurooppa', 'Lainsäädäntö'],
  'kiina': ['Kiina', 'Geopolitiikka', 'Tietoturva'],
  'suomi': ['Suomi', 'Kotimaa', 'Strategia'],
  'etätyö': ['Etätyö', 'Työelämä', 'Kaupungistuminen'],
  
  // Education & Work
  'koulutus': ['Koulutus', 'Oppiminen', 'Tekoäly'],
  'tyoelama': ['Työelämä', 'Burnout', 'Hyvinvointi'],
  'startup': ['Startup', 'Yrittäjyys', 'Tekoäly'],
  
  // Privacy & Children
  'lapset': ['Lapset', 'Tietosuoja', 'Turvallisuus'],
  'kiusaaminen': ['Kiusaaminen', 'Turvallisuus', 'Lapset'],
  'nuoret': ['Nuoret', 'Ruutuaika', 'Sosiaalinen media'],
  
  // Gender & Sports
  'naiset': ['Naiset', 'Tasa-arvo', 'E-urheilu'],
  'demokratia': ['Demokratia', 'Sosiaalinen media', 'Vaalit']
};

// Extract tags from article ID or content
export function extractTagsFromArticle(articleId: string, category: string, content?: string): string[] {
  const tags = new Set<string>();
  
  // Add category as a tag
  tags.add(category);
  
  // Check article ID for keywords
  const idLower = articleId.toLowerCase();
  
  Object.entries(tagMap).forEach(([keyword, tagList]) => {
    if (idLower.includes(keyword)) {
      tagList.forEach(tag => tags.add(tag));
    }
  });
  
  // Limit to 6 tags max
  return Array.from(tags).slice(0, 6);
}

// Get color for tag based on type
export function getTagColor(tag: string): string {
  const colorMap: Record<string, string> = {
    // Technology tags - blue
    'Tekoäly': 'bg-blue-100 text-blue-800',
    'AI': 'bg-blue-100 text-blue-800',
    'Teknologia': 'bg-blue-100 text-blue-800',
    'Tietoturva': 'bg-blue-100 text-blue-800',
    '5G': 'bg-blue-100 text-blue-800',
    'Apple': 'bg-blue-100 text-blue-800',
    'VR': 'bg-blue-100 text-blue-800',
    
    // Gaming tags - green
    'Pelaaminen': 'bg-green-100 text-green-800',
    'E-urheilu': 'bg-green-100 text-green-800',
    'Pelit': 'bg-green-100 text-green-800',
    'Counter-Strike': 'bg-green-100 text-green-800',
    'ENCE': 'bg-green-100 text-green-800',
    
    // Social media tags - purple
    'Sosiaalinen media': 'bg-purple-100 text-purple-800',
    'TikTok': 'bg-purple-100 text-purple-800',
    'Meta': 'bg-purple-100 text-purple-800',
    'Threads': 'bg-purple-100 text-purple-800',
    
    // Research tags - yellow
    'Tutkimus': 'bg-yellow-100 text-yellow-800',
    'Psykologia': 'bg-yellow-100 text-yellow-800',
    'Terveys': 'bg-yellow-100 text-yellow-800',
    'Hyvinvointi': 'bg-yellow-100 text-yellow-800',
    
    // Politics tags - red
    'Politiikka': 'bg-red-100 text-red-800',
    'EU': 'bg-red-100 text-red-800',
    'Suomi': 'bg-red-100 text-red-800',
    
    // Default
    default: 'bg-gray-100 text-gray-800'
  };
  
  return colorMap[tag] || colorMap.default;
}