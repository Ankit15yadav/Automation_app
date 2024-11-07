// import * as cheerio from "cheerio";
// import * as _ from "lodash"

// type Contribution = {
//     date: string;
//     count: number;
//     color: string;
// };

// type ContributionYearData = {
//     year: string;
//     total: number;
//     range: {
//         start: string | undefined;
//         end: string | undefined;
//     };
//     contributions: Contribution[] | Record<number, Record<number, Record<number, Contribution>>>;
// };

// const COLOR_MAP: Record<number, string> = {
//     0: "#ebedf0",
//     1: "#9be9a8",
//     2: "#40c463",
//     3: "#30a14e",
//     4: "#216e39"
// };

// async function fetchYears(username: string): Promise<{ href: string; text: string }[]> {
//     const response = await fetch(`https://github.com/${username}?tab=contributions`, {
//         headers: {
//             "x-requested-with": "XMLHttpRequest"
//         }
//     });
//     const body = await response.text();
//     const $ = cheerio.load(body);

//     return $(".js-year-link.filter-item")
//         .get()
//         .map((a) => {
//             const $a = $(a);
//             const href = $a.attr("href")!;
//             const githubUrl = new URL(`https://github.com${href}`);
//             githubUrl.searchParams.set("tab", "contributions");

//             return {
//                 href: githubUrl.pathname + githubUrl.search,
//                 text: $a.text().trim()
//             };
//         });
// }

// async function fetchDataForYear(
//     url: string,
//     year: string,
//     format: "flat" | "nested"
// ): Promise<ContributionYearData> {
//     const response = await fetch(`https://github.com${url}`, {
//         headers: {
//             "x-requested-with": "XMLHttpRequest"
//         }
//     });
//     const $ = cheerio.load(await response.text());
//     const $days = $("table.ContributionCalendar-grid td.ContributionCalendar-day");

//     const contribText = $(".js-yearly-contributions h2").text().trim().match(/^([0-9,]+)\s/);
//     let contribCount: number | undefined;
//     if (contribText) {
//         contribCount = parseInt(contribText[0].replace(/,/g, ""), 10);
//     }

//     const contributions = (() => {
//         const parseDay = (day: any) => {
//             const $day = $(day);
//             const color = COLOR_MAP[parseInt($day.attr("data-level")!, 10)];
//             return {
//                 date: $day.attr("data-date")!,
//                 count: parseInt($day.attr("data-count")!, 10) || 0,
//                 color
//             };
//         };

//         if (format !== "nested") {
//             return $days.get().map(parseDay);
//         }

//         return $days.get().reduce<Record<number, Record<number, Record<number, Contribution>>>>((o, day) => {
//             const { date, count, color } = parseDay(day);
//             const [y, m, d] = date.split("-").map((d) => parseInt(d, 10));
//             if (!o[y]) o[y] = {};
//             if (!o[y][m]) o[y][m] = {};
//             o[y][m][d] = { date, count, color };
//             return o;
//         }, {});
//     })();

//     return {
//         year,
//         total: contribCount || 0,
//         range: {
//             start: $days.get(0)?.attribs["data-date"],
//             end: $days.get($days.length - 1)?.attribs["data-date"]
//         },
//         contributions
//     };
// }

// export async function fetchDataForAllYears(
//     username: string,
//     format: "flat" | "nested" = "flat"
// ): Promise<ContributionYearData[]> {
//     const years = await fetchYears(username);
//     return Promise.all(
//         years.map((year) => fetchDataForYear(year.href, year.text, format))
//     );
// }
