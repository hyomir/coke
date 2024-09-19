const countries = [
    { code: 'AE', en: 'United Arab Emirates', ko: '아랍에미리트' },
    { code: 'AF', en: 'Afghanistan', ko: '아프가니스탄' },
    { code: 'AL', en: 'Albania', ko: '알바니아' },
    { code: 'AR', en: 'Argentina', ko: '아르헨티나' },
    { code: 'AT', en: 'Austria', ko: '오스트리아' },
    { code: 'AU', en: 'Australia', ko: '호주' },
    { code: 'BD', en: 'Bangladesh', ko: '방글라데시' },
    { code: 'BR', en: 'Brazil', ko: '브라질' },
    { code: 'BW', en: 'Botswana', ko: '보츠와나' },
    { code: 'CA', en: 'Canada', ko: '캐나다' },
    { code: 'CH', en: 'Switzerland', ko: '스위스' },
    { code: 'CL', en: 'Chile', ko: '칠레' },
    { code: 'CN', en: 'China', ko: '중국' },
    { code: 'CO', en: 'Colombia', ko: '콜롬비아' },
    { code: 'CU', en: 'Cuba', ko: '쿠바' },
    { code: 'CZ', en: 'Czech Republic', ko: '체코' },
    { code: 'DE', en: 'Germany', ko: '독일' },
    { code: 'DK', en: 'Denmark', ko: '덴마크' },
    { code: 'DO', en: 'Dominican Republic', ko: '도미니카 공화국' },
    { code: 'DZ', en: 'Algeria', ko: '알제리' },
    { code: 'EC', en: 'Ecuador', ko: '에콰도르' },
    { code: 'EG', en: 'Egypt', ko: '이집트' },
    { code: 'ES', en: 'Spain', ko: '스페인' },
    { code: 'FI', en: 'Finland', ko: '핀란드' },
    { code: 'FR', en: 'France', ko: '프랑스' },
    { code: 'GB', en: 'United Kingdom', ko: '영국' },
    { code: 'GH', en: 'Ghana', ko: '가나' },
    { code: 'GR', en: 'Greece', ko: '그리스' },
    { code: 'HU', en: 'Hungary', ko: '헝가리' },
    { code: 'ID', en: 'Indonesia', ko: '인도네시아' },
    { code: 'IE', en: 'Ireland', ko: '아일랜드' },
    { code: 'IL', en: 'Israel', ko: '이스라엘' },
    { code: 'IN', en: 'India', ko: '인도' },
    { code: 'IQ', en: 'Iraq', ko: '이라크' },
    { code: 'IR', en: 'Iran', ko: '이란' },
    { code: 'IS', en: 'Iceland', ko: '아이슬란드' },
    { code: 'IT', en: 'Italy', ko: '이탈리아' },
    { code: 'JM', en: 'Jamaica', ko: '자메이카' },
    { code: 'JO', en: 'Jordan', ko: '요르단' },
    { code: 'JP', en: 'Japan', ko: '일본' },
    { code: 'KE', en: 'Kenya', ko: '케냐' },
    { code: 'KR', en: 'South Korea', ko: '대한민국' },
    { code: 'KW', en: 'Kuwait', ko: '쿠웨이트' },
    { code: 'LB', en: 'Lebanon', ko: '레바논' },
    { code: 'LK', en: 'Sri Lanka', ko: '스리랑카' },
    { code: 'MA', en: 'Morocco', ko: '모로코' },
    { code: 'MX', en: 'Mexico', ko: '멕시코' },
    { code: 'MY', en: 'Malaysia', ko: '말레이시아' },
    { code: 'NG', en: 'Nigeria', ko: '나이지리아' },
    { code: 'NL', en: 'Netherlands', ko: '네덜란드' },
    { code: 'NO', en: 'Norway', ko: '노르웨이' },
    { code: 'NP', en: 'Nepal', ko: '네팔' },
    { code: 'NZ', en: 'New Zealand', ko: '뉴질랜드' },
    { code: 'OM', en: 'Oman', ko: '오만' },
    { code: 'PE', en: 'Peru', ko: '페루' },
    { code: 'PH', en: 'Philippines', ko: '필리핀' },
    { code: 'PK', en: 'Pakistan', ko: '파키스탄' },
    { code: 'PL', en: 'Poland', ko: '폴란드' },
    { code: 'PT', en: 'Portugal', ko: '포르투갈' },
    { code: 'PY', en: 'Paraguay', ko: '파라과이' },
    { code: 'QA', en: 'Qatar', ko: '카타르' },
    { code: 'RO', en: 'Romania', ko: '루마니아' },
    { code: 'RU', en: 'Russia', ko: '러시아' },
    { code: 'SA', en: 'Saudi Arabia', ko: '사우디아라비아' },
    { code: 'SD', en: 'Sudan', ko: '수단' },

  ];
  
  export async function fetchCountries(query) {
    await new Promise((r) => setTimeout(r, 2_000));
    return countries.filter(
      (country) =>
        country.en.toLowerCase().includes(query.toLowerCase()) ||
        country.ko.toLowerCase().includes(query.toLowerCase())
    );
  }
  