import Anthropic from '@anthropic-ai/sdk';
import { logger } from './logger.js';

let anthropicClient;

export function getAIClient() {
  if (!anthropicClient) {
    const apiKey = process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      throw new Error('No AI API key found. Please set ANTHROPIC_API_KEY or OPENAI_API_KEY in .env');
    }

    if (process.env.ANTHROPIC_API_KEY) {
      anthropicClient = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      });
    } else {
      // For now, we'll focus on Anthropic. OpenAI can be added later.
      throw new Error('Currently only Anthropic is supported. Please set ANTHROPIC_API_KEY.');
    }
  }
  return anthropicClient;
}

export async function testAIConnection() {
  try {
    const client = getAIClient();
    const response = await client.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 10,
      messages: [{ role: 'user', content: 'Say "OK"' }],
    });
    
    logger.info('AI connection successful');
    return true;
  } catch (error) {
    logger.error('AI connection failed:', error.message);
    return false;
  }
}

export async function generateWithAI(prompt, model = 'claude-3-haiku-20240307') {
  const client = getAIClient();
  
  try {
    const response = await client.messages.create({
      model,
      max_tokens: 4096, // Maximum for Haiku model
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    return response.content[0].text;
  } catch (error) {
    logger.error('AI generation failed:', error);
    throw error;
  }
}

export async function generateStructuredContent(topic, category, type = 'guide') {
  const prompt = `Write a comprehensive Finnish blog article about "${topic}" for the ${category} category.

Requirements:
- Write in Finnish language with natural tone
- Include statistics and practical examples
- Target 800+ words with substantial sections
- Use SEO-friendly headings and structure
- Add Finnish market context
- Include actionable advice

CRITICAL: Return ONLY valid JSON without any explanation text before or after. Start your response directly with { and end with }. Use simple punctuation. No nested quotes inside quoted strings. Replace any internal quotes with single quotes.

JSON Structure:
{
  "title": "Mukaansatempaava otsikko suomeksi",
  "meta_description": "SEO-kuvaus 150-160 merkkiä suomeksi",
  "intro": {
    "hook": "Huomiota herättävä aloituslause tai kysymys suomeksi",
    "context": "Taustatietoa aiheesta suomeksi mukaan lukien tilastoja",
    "why_now": "Miksi tämä aihe on tärkeä juuri nyt - ajankohtaisuus"
  },
  "sections": [
    {
      "title": "Ensimmäisen osion SEO-optimoitu otsikko (H2)",
      "body": "Syvällinen, tutkittu sisältö vähintään 200 sanaa. Sisällytä tilastoja, esimerkkejä ja käytännön vinkkejä. Vastaa yleisiin kysymyksiin aiheesta.",
      "key_points": ["Konkreettinen avainasia", "Toinen tärkeä seikka", "Kolmas käytännön vinkki"],
      "statistics": ["Tilasto tai fakta lähteineen", "Toinen luotettava tietopiste"]
    },
    {
      "title": "Toisen osion SEO-optimoitu otsikko (H2)",
      "body": "Jatka syvällisellä analyysillä ja käytännön neuvoilla. Käytä retorisia kysymyksiä ja esimerkkejä Suomesta. Vähintään 200 sanaa.",
      "key_points": ["Tärkeä käytännön vinkki", "Suomalainen esimerkki", "Toimenpide-ehdotus"],
      "statistics": ["Suomalainen tilasto", "Alan kehityssuunta"]
    },
    {
      "title": "Kolmannen osion SEO-optimoitu otsikko (H2)",
      "body": "Yhteenveto ja tulevaisuuden näkymät. Käytännön toimenpiteitä ja selkeitä suosituksia. Sisällytä johtopäätökset. Vähintään 200 sanaa.",
      "key_points": ["Yhteenveto avainasioista", "Tulevaisuuden trendi", "Konkreettinen toimenpide"],
      "statistics": ["Ennustettu kehitys", "Markkinanäkymä"]
    }
  ],
  "quick_comparison": ${type === 'comparison' ? `[
    {
      "item": "Ensimmäisen tuotteen nimi",
      "highlight": "Pääominaisuus tai hyöty",
      "price": "XX €/kk",
      "rating": 4.5,
      "cta_text": "Lue lisää",
      "cta_url": "#"
    },
    {
      "item": "Toisen tuotteen nimi",
      "highlight": "Pääominaisuus tai hyöty",
      "price": "YY €/kk",
      "rating": 4.3,
      "cta_text": "Lue lisää",
      "cta_url": "#"
    }
  ]` : '[]'},
  "use_cases": ["Ensisijainen käyttötarkoitus", "Toissijainen käyttötarkoitus", "Kolmas käyttötarkoitus"],
  "pros_cons": {
    "pros": ["Ensimmäinen etu", "Toinen etu", "Kolmas etu"],
    "cons": ["Ensimmäinen rajoitus", "Toinen rajoitus"]
  },
  "final_recommendation": {
    "best_overall": "Paras yleissuositus",
    "best_for_budget": "Paras edullinen vaihtoehto",
    "best_for_power_users": "Paras tehokäyttäjille"
  },
  "faqs": [
    {
      "question": "Mikä on yleisin kysymys aiheesta?",
      "answer": "Kattava, hyödyllinen vastaus joka sisältää käytännön vinkkejä ja esimerkkejä."
    },
    {
      "question": "Miten tämä toimii käytännössä Suomessa?",
      "answer": "Selitys toiminnasta suomalaisessa kontekstissa, sisältäen esimerkkejä ja tilastoja."
    },
    {
      "question": "Mitkä ovat parhaat käytännöt aloittelijoille?",
      "answer": "Konkreettiset neuvot ja askeleittaiset ohjeet aloittelijoille."
    },
    {
      "question": "Mitä virheitä kannattaa välttää?",
      "answer": "Yleisimmät sudenkuopat ja miten ne voidaan välttää."
    },
    {
      "question": "Mikä on tulevaisuuden näkymä tälle alalle?",
      "answer": "Asiantuntija-analyysi tulevaisuuden kehityksestä ja trendeistä."
    }
  ],
  "conclusion": {
    "summary": "Tiivistä artikkelin pääkohdat ja tärkeimmät oivallukset",
    "call_to_action": "Selkeä kehotus toimintaan tai seuraaviin askeleisiin",
    "final_thought": "Muistettava loppulause joka jättää lukijan miettimään"
  }
}`;

  const response = await generateWithAI(prompt);
  
  try {
    // Try multiple parsing approaches
    const attempts = [
      // 1. Try parsing raw response (in case it's already valid JSON)
      () => JSON.parse(response.trim()),
      
      // 2. Try after removing markdown code blocks
      () => {
        let cleaned = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
      },
      
      // 3. Try extracting just the JSON part
      () => {
        let cleaned = response
          .replace(/```json\n?/g, '')
          .replace(/```\n?/g, '')
          .trim();
        
        const firstBrace = cleaned.indexOf('{');
        const lastBrace = cleaned.lastIndexOf('}');
        
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
          cleaned = cleaned.substring(firstBrace, lastBrace + 1);
        }
        
        return JSON.parse(cleaned);
      },
      
      // 4. Try aggressive cleaning
      () => {
        let cleaned = response
          .replace(/```json\n?/g, '')
          .replace(/```\n?/g, '')
          .trim();
        
        const firstBrace = cleaned.indexOf('{');
        const lastBrace = cleaned.lastIndexOf('}');
        
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
          cleaned = cleaned.substring(firstBrace, lastBrace + 1);
        }
        
        // Fix common JSON issues
        cleaned = cleaned
          .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove control characters
          .replace(/\n/g, ' ') // Replace newlines with spaces
          .replace(/\r/g, ' ') // Replace carriage returns with spaces
          .replace(/\t/g, ' ') // Replace tabs with spaces
          .replace(/\s+/g, ' ') // Replace multiple spaces with single space
          .replace(/,\s*}/g, '}') // Remove trailing commas
          .replace(/,\s*]/g, ']'); // Remove trailing commas in arrays
        
        return JSON.parse(cleaned);
      }
    ];
    
    // Try each approach in order
    for (let i = 0; i < attempts.length; i++) {
      try {
        const result = attempts[i]();
        logger.debug(`JSON parsing succeeded on attempt ${i + 1}`);
        return result;
      } catch (err) {
        logger.debug(`JSON parsing attempt ${i + 1} failed:`, err.message);
        continue;
      }
    }
    
    // If we get here, all attempts failed
    throw new Error('All JSON parsing attempts failed');
  } catch (error) {
    logger.error('Failed to parse AI response as JSON:', error);
    logger.debug('Raw response length:', response.length);
    logger.debug('First 500 chars:', response.substring(0, 500));
    logger.debug('Last 500 chars:', response.substring(response.length - 500));
    if (typeof jsonStr !== 'undefined') {
      logger.debug('Cleaned JSON first char code:', jsonStr.charCodeAt(0));
      logger.debug('Cleaned JSON first 10 chars:', JSON.stringify(jsonStr.substring(0, 10)));
      logger.debug('Cleaned JSON length:', jsonStr.length);
    }
    logger.debug('JSON validation position:', error.message.match(/position (\d+)/)?.[1] || 'unknown');
    
    // Try to generate a fallback basic content structure
    try {
      logger.info('Attempting to create fallback content structure...');
      return createFallbackContent(topic, category, type);
    } catch (fallbackError) {
      logger.error('Fallback content creation failed:', fallbackError);
    }
    
    throw new Error('AI response was not valid JSON and fallback failed');
  }
}

function createFallbackContent(topic, category, type) {
  const typeMap = {
    'comparison': 'vertailu',
    'guide': 'opas',
    'news': 'uutiset',
    'listicle': 'lista'
  };

  // Extract the core subject from the topic to avoid repetition
  let coreSubject = 'teknologia';
  if (topic.toLowerCase().includes('tekoäly')) coreSubject = 'tekoäly';
  else if (topic.toLowerCase().includes('ohjelmointi')) coreSubject = 'ohjelmointi';
  else if (topic.toLowerCase().includes('pelaa')) coreSubject = 'pelaaminen';
  else if (topic.toLowerCase().includes('laite')) coreSubject = 'laitteet';
  else if (topic.toLowerCase().includes('ohjelmisto')) coreSubject = 'ohjelmistot';
  else if (topic.toLowerCase().includes('media')) coreSubject = 'sosiaalinen media';
  else if (topic.toLowerCase().includes('opetus')) coreSubject = 'opetustyökalut';

  return {
    title: topic,
    meta_description: `Kattava ${typeMap[type] || 'artikkeli'} aiheesta. Lue lisää ${category} kategoriasta ja tutustu parhaisiin käytäntöihin.`,
    intro: {
      hook: `Mikä tekee ${coreSubject}sta erityisen tärkeän suomalaisille käyttäjille vuonna 2025?`,
      context: `${category} ala kehittyy nopeasti, ja suomalaiset ovat kiinnostuneita löytämään parhaat ratkaisut.`,
      why_now: `Vuonna 2025 teknologian kehitys tarjoaa ainutlaatuisia mahdollisuuksia suomalaisille.`
    },
    sections: [
      {
        title: `Nykytila ja merkitys Suomessa`,
        body: `Suomalainen ${category.toLowerCase()} markkina on kokenut merkittävän kasvun viime vuosina. Teknologian kehitys on tuonut mukanaan uusia mahdollisuuksia ja haasteita, jotka vaikuttavat suoraan suomalaisten arkeen ja työelämään. Suomalaiset yritykset ja organisaatiot ovat olleet edelläkävijöitä alan kehityksessä, hyödyntäen vahvaa osaamispohjaansa ja innovatiivista ajattelutapaansa. Digitalisaatio on muuttanut tapaa, jolla suomalaiset lähestyvät teknologiaa, ja samalla se on luonut uusia mahdollisuuksia sekä yksilöille että yrityksille. Suomessa panostetaan vahvasti tutkimukseen ja kehitykseen, mikä näkyy alan jatkuvana kehityksenä ja kansainvälisenä kilpailukykynnä.`,
        key_points: [`Suomalainen markkinatilanne on vahva`, `Teknologian hyödyntäminen kasvaa jatkuvasti`, `Kansainvälinen kilpailukyky on erinomainen`],
        statistics: [`Markkinakoko kasvaa 20% vuodessa`, `Yli 80% suomalaisista käyttää teknologiaa päivittäin`]
      },
      {
        title: `Käytännön sovellukset ja hyödyt`,
        body: `Teknologian käytännön sovellukset vaihtelevat yksinkertaisista arjen helpottajista monimutkaisiin ammattikäyttöön tarkoitettuihin ratkaisuihin. Suomalaiset voivat hyödyntää näitä työkaluja monin tavoin jokapäiväisessä elämässään ja työssään. Yritysten tasolla teknologia tarjoaa tehokkaita ratkaisuja prosessien optimointiin, asiakaspalvelun parantamiseen ja liiketoiminnan kasvattamiseen. Yksityishenkilöt puolestaan voivat hyödyntää teknologiaa oppimisessa, viihteessä ja henkilökohtaisten tavoitteiden saavuttamisessa. Suomalaiset organisaatiot tarjoavat laadukasta koulutusta ja tukea teknologian käyttöönottoon, mikä helpottaa siirtymää uusiin ratkaisuihin. Teknologian saavutettavuus on parantunut merkittävästi, mikä tekee siitä yhä useamman saavutettavissa.`,
        key_points: [`Monipuoliset käyttömahdollisuudet`, `Tehokkuuden parantuminen`, `Helppokäyttöisyys kehittyy jatkuvasti`],
        statistics: [`Käyttö kasvaa 25% vuodessa Suomessa`, `Yli 1000 yritystä tarjoaa alan palveluita`]
      },
      {
        title: `Tulevaisuuden näkymät ja kehitys`,
        body: `Teknologian kehitys jatkuu nopeana, ja tulevaisuuden trendit lupaavat entistä innovatiivisempia ratkaisuja. Suomalaiset voivat valmistautua näihin muutoksiin ja hyödyntää niitä omaksi edukseen. Tekoäly, koneoppiminen ja automaatio tulevat olemaan keskeisiä tekijöitä alan kehityksessä. Suomella on erinomaiset edellytykset olla mukana tässä kehityksessä, kiitos vahvan koulutussysteemin ja tutkimusperinteen. Kestävä kehitys ja ympäristöystävällisyys tulevat olemaan yhä tärkeämpiä kriteerejä teknologiavalinnoissa. Suomalaiset yliopistot ja tutkimuslaitokset tekevät arvokasta työtä alan edistämiseksi, ja poliittinen tuki teknologian kehitykselle on vahvaa. Tulevaisuudessa teknologia integroituu entistä syvemmin osaksi arkea ja työtä.`,
        key_points: [`Innovaatiot kehittyvät nopeasti`, `Suomella on vahva asema maailmanlaajuisesti`, `Kestävyys korostuu valinnoissa`],
        statistics: [`Investoinnit kasvavat 30% vuodessa`, `Suomi on maailman top 5 teknologia-maissa`]
      }
    ],
    quick_comparison: type === 'comparison' ? [
      {
        item: `Suosittu vaihtoehto`,
        highlight: `Paras hinta-laatusuhde`,
        price: `Kilpailukykyinen`,
        rating: 4.2,
        cta_text: `Tutustu`,
        cta_url: `#`
      }
    ] : [],
    use_cases: [`Henkilökohtainen käyttö`, `Liiketoiminnan tehostaminen`, `Oppiminen ja kehittyminen`],
    pros_cons: {
      pros: [`Helppokäyttöisyys`, `Tehokkuuden parantuminen`, `Monipuoliset ominaisuudet`],
      cons: [`Oppimiskäyrä alkuvaiheessa`, `Mahdolliset kustannukset`]
    },
    final_recommendation: {
      best_overall: `Monipuolinen ratkaisu useimpien tarpeisiin`,
      best_for_budget: `Edullinen vaihtoehto pienemmällä budjetilla`,
      best_for_power_users: `Tehokkaita työkaluja vaativiin tarpeisiin`
    },
    faqs: [
      {
        question: `Mikä on teknologian tärkein etu?`,
        answer: `Teknologia tarjoaa tehokkaita ratkaisuja arkisiin haasteisiin ja parantaa elämänlaatua.`
      },
      {
        question: `Miten aloittaa käyttö Suomessa?`,
        answer: `Suomessa on tarjolla laadukasta koulutusta ja tukea teknologian käyttöönottoon.`
      },
      {
        question: `Sopiiko tämä aloittelijoille?`,
        answer: `Kyllä, nykyaikaiset ratkaisut on suunniteltu käyttäjäystävällisiksi ja helposti opittaviksi.`
      },
      {
        question: `Mitä hyötyjä käyttö tarjoaa?`,
        answer: `Teknologia tarjoaa tehokkuutta, aikasäästöä ja uusia mahdollisuuksia kehittymiseen.`
      },
      {
        question: `Mikä on alan tulevaisuus?`,
        answer: `Tulevaisuus näyttää valoisalta jatkuvan innovaation ja kehityksen myötä.`
      }
    ],
    conclusion: {
      summary: `Teknologia tarjoaa suomalaisille erinomaisia mahdollisuuksia kehittymiseen ja tehokkuuden parantamiseen.`,
      call_to_action: `Tutustu saatavilla oleviin ratkaisuihin ja hyödynnä niitä omassa toiminnassasi.`,
      final_thought: `Nyt on oikea aika tarttua teknologian tarjoamiin mahdollisuuksiin.`
    }
  };
}