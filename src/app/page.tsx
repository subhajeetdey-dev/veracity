import ArticleCard, {type Article} from "@/components/ArticleCard";

const articles: Article[] = [
  {
    id: "1",
    title: "Central bank holds interest rates steady amid cooling inflation",
    source: "Reuters",
    publishedLabel: "2h ago",
    summary:
      "Policymakers left the benchmark rate unchanged, citing slowing price growth while signaling caution about cutting too soon.",
    sourceCount: 8,
    level: "high",
    sourceUrl: "#",
  },
  {
    id: "2",
    title: "Regional flooding displaces thousands as rivers crest",
    source: "Associated Press",
    publishedLabel: "4h ago",
    summary:
      "Emergency crews evacuated low-lying districts after days of heavy rain pushed several rivers past flood stage.",
    sourceCount: 6,
    level: "high",
    sourceUrl: "#",
  },
  {
    id: "3",
    title: "Tech firm says new chip doubles on-device AI speed",
    source: "The Verge",
    publishedLabel: "6h ago",
    summary:
      "The company published benchmark claims ahead of independent testing; analysts note the figures come from the maker itself.",
    sourceCount: 3,
    level: "moderate",
    sourceUrl: "#",
  },
  {
    id: "4",
    title: "Viral post claims city will ban all gas vehicles next year",
    source: "Local Blog",
    publishedLabel: "9h ago",
    summary:
      "A widely shared post asserts an imminent ban, but no official announcement or ordinance has been located so far.",
    sourceCount: 1,
    level: "low",
    sourceUrl: "#",
  },
  {
    id: "5",
    title: "Unconfirmed reports of a merger between two retail chains",
    source: "Social media",
    publishedLabel: "11h ago",
    summary:
      "Claims are circulating online, but no named outlet or company statement corroborates them at this time.",
    sourceCount: 0,
    level: "unverified",
    sourceUrl: "#",
  },
];

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return(
    <>
      <h1 className="feed-heading">Today · {today}</h1>

      <div className="feed">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a}/>
        ))}
      </div>
    </>
  )
}