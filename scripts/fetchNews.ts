import {fetchAndStoreNews} from "../src/lib/news";
import {prisma} from "../src/lib/prisma";

async function main() {
    const result = await fetchAndStoreNews();
    console.log('Fetched ${result.fetched}, stored ${result.stored} articles');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(() => prisma.$disconnect());