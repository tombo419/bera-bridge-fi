"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface Article {
  id: string;
  title: string;
  category: string;
}

interface ContextualLink {
  keyword: string;
  articleId: string;
  title: string;
  category: string;
}

interface ContextualLinksProps {
  currentArticleId: string;
  content: string;
  limit?: number;
}

// Keywords that commonly appear in articles and their related article patterns
const keywordPatterns: Record<string, string[]> = {
  'tekoäly': ['tekoaly-muuttaa-koulutusta-suomessa', 'tekoaly-moderointi', 'tekoaly-luo-sisaltoa-luovuuden-loppu'],
  'ai': ['tekoaly-muuttaa-koulutusta-suomessa', 'tekoaly-moderointi', 'tekoaly-luo-sisaltoa-luovuuden-loppu'],
  'pelaaminen': ['verkkopelaamisen-psykologia', 'suomi-voittaa-cs2-maailmanmestaruuden', 'mobiilipelien-mikromaksut-ongelma'],
  'e-urheilu': ['suomi-voittaa-cs2-maailmanmestaruuden', 'suomi-esports-strategia-2025', 'esports-urheilu'],
  'tiktok': ['tiktok-algoritmi-tutkimus', 'tiktok-kiina-tietoturva-huoli'],
  'sosiaalinen media': ['threads-haastaa-twitterin-suomessa', 'sosiaalisen-median-riippuvuus', 'sosiaalinen-media-demokratia'],
  'meta': ['meta-virtuaalimaailma-investointi', 'threads-haastaa-twitterin-suomessa', 'metaversumi-ja-identiteetti'],
  'kryptovaluutta': ['kryptovaluutta-pelaaminen', 'kryptokasinoiden-nousu-vuonna-2025', 'virtuaalivaluutat-peleissa-riskit'],
  'tutkimus': ['tiktok-algoritmi-tutkimus', 'digitaalinen-hyvinvointi-tutkimus', 'unen-laatu-ruutuaika-tutkimus'],
  'nuoret': ['nuorten-ruutuaika-kasvaa-huolestuttavasti', 'lasten-tietosuoja-verkossa-suomi', 'digitaalinen-kiusaaminen-lisaantyy'],
  'tietoturva': ['tiktok-kiina-tietoturva-huoli', 'lasten-tietosuoja-verkossa-suomi', 'kvanttitietokoneet-uhka-tietoturvalle'],
  'hyvinvointi': ['digitaalinen-hyvinvointi-tutkimus', 'digitaalinen-detox-hyvinvointi', 'liikunta-sovellukset-motivaatio-riippuvuus'],
  'työelämä': ['etaytyo-muuttaa-kaupunkeja-suomessa', 'pelialan-tyoelama-burnout'],
  'teknologia': ['apple-vision-pro-2-julkaisu', '5g-verkot-mahdollistavat-uuden-pelaamisen', 'kvanttitietokoneet-uhka-tietoturvalle'],
  'eu': ['eu-digitaaliset-oikeudet-laki', 'eu-saataa-uudet-tekoalylait'],
  'kiina': ['tiktok-kiina-tietoturva-huoli'],
  'suomi': ['suomi-voittaa-cs2-maailmanmestaruuden', 'suomi-esports-strategia-2025', 'suomalaiset-startup-yritykset-tekoaly']
};

export function ContextualLinks({ currentArticleId, content, limit = 3 }: ContextualLinksProps) {
  const [contextualLinks, setContextualLinks] = useState<ContextualLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function findContextualLinks() {
      const supabase = createClient();
      
      try {
        // Find keywords in content and get related articles
        const foundLinks: ContextualLink[] = [];
        const contentLower = content.toLowerCase();
        
        for (const [keyword, articleIds] of Object.entries(keywordPatterns)) {
          if (contentLower.includes(keyword.toLowerCase())) {
            // Get articles related to this keyword
            for (const articleId of articleIds) {
              if (articleId !== currentArticleId && !foundLinks.find(link => link.articleId === articleId)) {
                const { data, error } = await supabase
                  .from('pages')
                  .select('id, title, category')
                  .eq('id', articleId)
                  .single();

                if (!error && data) {
                  foundLinks.push({
                    keyword,
                    articleId: data.id,
                    title: data.title,
                    category: data.category
                  });

                  if (foundLinks.length >= limit) break;
                }
              }
            }
            if (foundLinks.length >= limit) break;
          }
        }

        setContextualLinks(foundLinks);
      } catch (error) {
        console.error('Error finding contextual links:', error);
        setContextualLinks([]);
      } finally {
        setLoading(false);
      }
    }

    if (content) {
      findContextualLinks();
    } else {
      setLoading(false);
    }
  }, [currentArticleId, content, limit]);

  if (loading) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <ExternalLink className="w-5 h-5 mr-2 text-blue-500" />
            Aiheeseen liittyvää sisältöä
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-l-4 border-blue-200 pl-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-3 bg-gray-100 rounded animate-pulse w-1/3"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (contextualLinks.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <ExternalLink className="w-5 h-5 mr-2 text-blue-500" />
          Aiheeseen liittyvää sisältöä
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contextualLinks.map((link) => (
            <div key={link.articleId} className="border-l-4 border-blue-200 pl-4 hover:border-blue-400 transition-colors">
              <Link href={`/${link.articleId}`} className="block group">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  {link.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{link.category}</span>
                  <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    {link.keyword}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Nämä linkit perustuvat artikkelisi sisältöön ja voivat auttaa lukijoita löytämään aiheeseen liittyvää tietoa.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}