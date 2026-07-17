Veracity

Every story, cross-checked.

Veracity is a daily news application that does more than list headlines. Each story is automatically summarized and translated, then cross-referenced against multiple independent outlets to gauge how well it's corroborated — shown as a simple corroboration meter — with direct links to the original sources so readers can verify anything themselves.

Rather than stamping stories "true" or "false," Veracity shows its work: how many independent sources confirm a claim, and where to read them. An automated system can't reliably decide what's true, but it can measure corroboration and surface the evidence — which is both more honest and more useful.


Features


Summaries — every article condensed to a few clear sentences.
Translation — read summaries in your preferred language.
Proof links — every story keeps a direct link to its original source.
Corroboration meter — a signal-strength–style gauge showing how many independent sources confirm a story, from High corroboration down to Unverified.
Daily feed — fresh articles pulled automatically from a news API.



How it works

News sources  ->  Daily ingestion  ->  AI enrichment  ->  Corroboration  ->  Database  ->  Website
 (APIs/RSS)       (fetch + store)     (summarize +        (cross-check       (article,      (reader
                                       translate)          + score)           links, score)  feed)


A scheduled job fetches the latest articles from a news API and stores them, keeping each article's original URL as proof.
Summaries and translations are generated on demand by a language model.
The corroboration step searches for the same story across independent outlets and fact-check databases, then produces a corroboration level and source count — never a bare "true/false" verdict.
The frontend displays the feed, each card carrying its summary, corroboration meter, and source link.



Tech stack

LayerChoiceFrameworkNext.js (App Router)LanguageTypeScriptDatabasePostgreSQLORMPrisma 7 (with the @prisma/adapter-pg driver adapter)StylingTailwind CSS + custom CSS design tokensFontsLibre Franklin (display), Source Serif 4 (body), IBM Plex Mono (data)News dataNewsData.io APIAILLM API for summarization, translation, and corroboration reasoning


Project structure

veracity/
├── prisma/
│   └── schema.prisma          # Article, Summary, Translation models
├── scripts/
│   └── fetchNews.ts           # Fetches and stores the latest articles
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Page shell, fonts, header/footer
│   │   ├── page.tsx           # The news feed
│   │   └── globals.css        # Design tokens and component styles
│   ├── components/
│   │   └── ArticleCard.tsx    # Article card + corroboration meter
│   └── lib/
│       ├── prisma.ts          # Prisma client (with pg driver adapter)
│       └── news.ts            # News API client + storage logic
├── .env                       # Secrets (not committed)
└── package.json

