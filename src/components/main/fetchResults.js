import React from 'react'
import 'assets/css/header.css'

const results = [
  { code: "AE", en: "United Arab Emirates", ko: "아랍에미리트" },
  { code: "AF", en: "Afghanistan", ko: "아프가니스탄" },
  // ... 생략 ...
  { code: "ZA", en: "South Africa", ko: "남아프리카 공화국" },
  { code: "ZW", en: "Zimbabwe", ko: "짐바브웨" },
];
export async function fetchResults(query) {
  await new Promise((r) => setTimeout(r, 2_000)); // 2초 지연
  return results.filter(
    (results) =>
      results.en.toLowerCase().includes(query.toLowerCase()) ||
      results.ko.toLowerCase().includes(query.toLowerCase())
  );
}
