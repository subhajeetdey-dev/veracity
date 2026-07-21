import React from "react";

type Level = "high" | "moderate" | "low" | "unverified";

export type Article = {
    id: string;
    title: string;
    source: string;
    publishedLabel: string;
    summary: string;
    sourceCount: number;
    level: Level;
    sourceUrl: string;
}

const LEVELS: Record<
Level,
{color: string; pips: number; label:string}
> = {
    high: {color: "var(--c-high)", pips:5, label:"High corroboration"},
    moderate: {color: "var(--c-mid)", pips:3, label: "Moderate"},
    low: {color: "var(--c-low)",pips:1,label: "Single source"},
    unverified: {color: "var(--c-none)",pips:0,label:"Unverified"},
}

const TOTAL_PIPS = 5;

function CorroborationMeter({
    level,
    sourceCount,
}:
{
    level: Level;
    sourceCount: number;
}){
    const {color, pips, label} = LEVELS[level];

    return(
        <span className="meter"
        style={{["--meter-color" as any]: color} as React.CSSProperties}>
            <span className="meter__pips" aria-hidden="true">
                {Array.from({ length: TOTAL_PIPS}).map((_,i) => (
                    <span
                    key={i}
                    className={`meter__pip ${i<pips ? "meter__pip--on": ""}`}
                    />
                ))}
            </span>

            <span className="meter__label">
                {sourceCount} {sourceCount===1 ? "source": "sources"} · {label}
            </span>
        </span>
    )
}

export default function ArticleCard({article}: {article: Article}){
    return(
        <article className="card">
            <div className="card__meta">
                <span className="card__source">{article.source}</span>
                <span>·</span>
                <span>{article.publishedLabel}</span>
            </div>

            <h2 className="card__title">{article.title}</h2>

            <p className="card_summary">{article.summary}</p>

            <div className="card__footer">
                <CorroborationMeter
                level={article.level}
                sourceCount={article.sourceCount}
                />

                <a
                className="sources-link"
                 href={article.sourceUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                    Read the sources →
                 </a>
            </div>
        </article>
    )
}