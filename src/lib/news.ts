import { prisma } from "./prisma"

const BASE = "https://newsdata.io/api/1/latest";

type NewsDataArticle = {
    article_id: string;
    title: string | null;
    link: string;
    description: string | null;
    content: string | null;
    publishData: string | null;
    source_name: string| null;
}

type NewsDataResponse = {
    status: string;
    results?: NewsDataArticle[];
}

export async function fetchAndStoreNews() {
    const apiKey = process.env.NEWSDATA_API_KEY;
    if(!apiKey) throw new Error("Missing NEWSDATA_API_KEY");

    const url = `${BASE}?apikey=${apiKey}&language=en&country=in`;
    const res = await fetch(url);
    if(!res.ok) throw new Error(`NewsData request failed: ${res.status}`);

    const data = (await res.json()) as NewsDataResponse;
    const articles = data.results ?? [];
    
    let stored = 0;
    for (const a of articles) {
        if(!a.article_id || !a.title || !a.link) continue;

        await prisma.article.upsert({
            where: {externalId: a.article_id},
            update: {},
            create: {
                externalId: a.article_id,
                title: a.title,
                description: a.description,
                content: a.content,
                sourceUrl: a.link,
                sourceName: a.source_name,
                publishedAt: a.publishData ? new Date(a.publishData) : null,
            },
        });
        stored++;
    }

    return {fetched: articles.length, stored}
}