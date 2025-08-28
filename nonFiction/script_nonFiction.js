const questions = [
  [
    "읽은 내용을 바로 업무/생활에 적용할 수 있으면 만족스럽다.",
    "실천보다 개념의 정확한 이해와 이론 체계가 중요하다.",
    "구체적 방법·도구·체크리스트가 있는 책을 선호한다.",
    "추상적 개념과 프레임워크를 깊게 파는 책을 선호한다.",
    "사례 연구가 끝나면 '그래서 어떻게 할까'를 찾는다.",
    "실용성은 낮아도 통찰을 주는 이론서를 선호한다."
  ],
  [
    "수치·그래프·통계 등 데이터 기반 설명이 신뢰를 준다.",
    "현장 인터뷰나 개인 서사가 더 와닿는다.",
    "연구 설계·표본·방법론 설명이 있으면 좋다.",
    "스토리텔링이 좋으면 데이터는 적어도 괜찮다.",
    "메타분석/대규모 조사 같은 근거를 선호한다.",
    "에세이형/르포형 서술이 더 몰입된다."
  ],
  [
    "최근 이슈·최신 연구를 다루는 책을 먼저 찾는다.",
    "고전적 담론과 역사적 맥락을 중시한다.",
    "현실 변화에 바로 적용 가능한 최신 사례를 원한다.",
    "시간이 증명한 고전/기초 이론을 먼저 이해하고 싶다.",
    "출간 연도가 최근일수록 선호도가 높다.",
    "과거의 사상과 역사를 깊게 파는 책이 더 끌린다."
  ]
];

const types = {
    "PDU": {
        name: "실용·데이터·시사형",
        desc: "사회의 최신 이슈를 빠르게 이해하고 실생활에 활용하고 싶어합니다. 데이터, 수치, 통계로 뒷받침되는 ‘팩트’를 통해 현안에 관한 근거를 얻고, 트렌드에 민감하게 반응합니다. 독서는 곧 현실 문제 해결 도구이며, 빠르게 변하는 세상을 살아가는 전략을 얻는 과정입니다.",
        modern: "『팩트풀니스』(한스 로슬링), 『부의 미래』(앨빈 토플러), 『정의란 무엇인가』(마이클 샌델)",
        classic: "『국부론』(애덤 스미스), 『통계학』(로크), 『군주론』(마키아벨리)"
    },
    "PDH": {
        name: "실용·데이터·기초형",
        desc: "과거의 이론적 토대와 실증적 근거를 현재의 삶에 응용하는 것을 선호합니다. 대규모 역사 연구나 기초적 사회 과학 이론을 바탕으로 심원한 지혜를 끌어냅니다. 책은 단순한 정보가 아니라, 체계적 관습과 삶의 안정적 원리를 제공하는 자원으로 작동됩니다.",
        modern: "『총, 균, 쇠』(재레드 다이아몬드), 『사피엔스』(유발 하라리)",
        classic: "『국부론』(애덤 스미스), 『군주론』(마키아벨리)"
    },
    "PNU": {
        name: "실용·내러티브·시사형",
        desc: "사회문제를 직접 다루되 당대 인물의 체험담에 공감합니다. 이야기와 사례를 통해 실증적 교훈을 얻고, 현재 이슈에 감정적으로도 반응합니다. 책은 단순한 분석 도구가 아니라 현실을 살아가는 감각과 공감을 불러일으키는 거울입니다.",
        modern: "『우리는 어디에나 있고 어디에도 없다』(베셀 판 데어 콜크), 『나는 오늘 죽음을 보았다』",
        classic: "『사형수 최후의 날』(위고), 『변신』(카프카), 『먼 북쪽』(마르셀 테루)"
    },
    "PNH": {
        name: "실용·내러티브·기초형",
        desc: "역사적 체험, 전통적인 서술에서 삶의 교훈을 찾습니다. 고전 르포나 인물 회고록을 통해 인간 사회의 보편적 패턴을 학습합니다. 책은 현실과 과거를 이어주는 다리이며, 인간의 본질에 대한 성찰의 기회입니다.",
        modern: "『나는 공산주의자와 결혼했다』, 『에세이』(미셸 드 몽테뉴)",
        classic: "『몽테뉴 수상록』, 『플루타르코스 영웅전』"
    },
    "TDU": {
        name: "이론·데이터·시사형",
        desc: "최신 연구 성과, 데이터 기반의 분석서에 매료됩니다. 현실을 분석하는 데 있어 국외의 방법론과 비교분석을 중시하며, 학술적 논의를 지금 여기에 적용하고자 합니다. 책은 학문적이지만 동시에 현실과 연결되는 도전적 도구입니다.",
        modern: "『생각에 관한 생각』(대니얼 카너먼), 『총, 균, 쇠』(재레드 다이아몬드)",
        classic: "『엔트로피』(제러미 리프킨), 『과학혁명의 구조』(토머스 쿤)"
    },
    "TDH": {
        name: "이론·데이터·기초형",
        desc: "철저한 국가와 기초 학문을 바탕으로 한 이론서를 즐깁니다. 난이도가 있더라도 학문적 깊이를 추구하며, 독서를 통해 지식의 토대를 확실히 다지고 싶어합니다. 책은 일종의 학문적 성전이자 지적 훈련의 장입니다.",
        modern: "『시간의 역사』(호킹), 『자본주의의 구조』(페르낭 브로델), 『코스모스』(칼 세이건)",
        classic: "『순수이성비판』(칸트), 『자본론』(마르크스), 『리바이어던』(홉스)"
    },
    "TNU": {
        name: "이론·내러티브·시사형",
        desc: "철학, 사회학적, 인문학적 고찰을 시사 이슈와 접합해 이해하는 것을 선호합니다. 스토리와 사상을 잃지 않으며 일상을 통해 현대 사회의 의미를 해석하고자 합니다. 독서는 지적 대화이며, 관점을 나누는 채널입니다.",
        modern: "『코스모스』, 『정의란 무엇인가』(마이클 샌델), 『가벼움』(밀란 쿤데라)",
        classic: "『소크라테스의 변명』, 『리바이어던』(홉스)"
    },
    "TNH": {
        name: "이론·내러티브·기초형",
        desc: "인류 지성사의 고전적, 철학적 명저를 깊게 탐독합니다. 난해하지만 전통 서사 속에서 인류 보편의 문제를 탐구하는 것을 좋아합니다. 책은 시간과 공간을 넘어 인류와 연결되는 정신적 대화의 장입니다.",
        modern: "『모든 것의 역사』(빌 브라이슨), 『역사의 역사』(존 루카스)",
        classic: "『니코마코스 윤리학』(아리스토텔레스), 『국가』(플라톤)"
    }
};

// Helper 함수: sessionStorage 저장/로드
function save(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}
function load(key, defaultValue) {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
}

function onStart() {
  console.log('onStart called');
  save("phase", 0);
  save("questionIndex", 0);
  save("result", [0, 0, 0]);
  save("stack", []);
  save("stackCounter", 0);
  save("question", questions[0][0]);

  console.log('phase:', sessionStorage.getItem('phase'));
  window.location.href = "question.html";
}

function onNext() {
  let selected = document.querySelector('input[name="rating"]:checked');
  if (!selected) {
    alert("답변을 선택해 주세요.");
    return;
  }
  let selectedValue = parseInt(selected.value);

  let phase = load("phase", 0);
  let questionIndex = load("questionIndex", 0);
  let result = load("result", [0, 0, 0]);
  let stack = load("stack", []);
  let stackCounter = load("stackCounter", 0);

  if (questionIndex % 2 === 0) {
    result[phase] += selectedValue;
    stack[stackCounter] = selectedValue;
  } else {
    result[phase] -= selectedValue;
    stack[stackCounter] = -selectedValue;
  }

  stackCounter++;

  if (questionIndex === 5) {
    phase++;
    questionIndex = 0;
  } else {
    questionIndex++;
  }

  if (phase === 3) {
    save("result", result);
    window.location.href = "result.html";
    return;
  }

  const question = questions[phase][questionIndex];

  save("phase", phase);
  save("questionIndex", questionIndex);
  save("result", result);
  save("stack", stack);
  save("stackCounter", stackCounter);
  save("question", question);

  loadQuestion(question);
}

function onBack() {
  let phase = load("phase", 0);
  let questionIndex = load("questionIndex", 0);
  let result = load("result", [0, 0, 0]);
  let stack = load("stack", []);
  let stackCounter = load("stackCounter", 0);

  if (questionIndex === 0) {
    phase--;
    questionIndex = 5;
  } else {
    questionIndex--;
  }

  stackCounter--;
  const value = stack[stackCounter];
  result[phase] -= value;

  const question = questions[phase][questionIndex];

  save("phase", phase);
  save("questionIndex", questionIndex);
  save("result", result);
  save("stack", stack);
  save("stackCounter", stackCounter);
  save("question", question);

  loadQuestion(question);
}

function loadQuestion() {
  const question = sessionStorage.getItem('question');
  const questionElem = document.getElementById("question-text");

  if (question && questionElem) {
    questionElem.textContent = JSON.parse(question);
  }
  
  // 체크된 라디오 초기화
  const radios = document.querySelectorAll('input[name="rating"]');
  radios.forEach(radio => radio.checked = false);
}

function loadResult() {
  const result = load("result", [0, 0, 0]);

  let resultString = "";
  resultString += result[0] >= 0 ? "P" : "T";
  resultString += result[1] >= 0 ? "D" : "N";
  resultString += result[2] >= 0 ? "U" : "H";

  const resultData = types[resultString];

  document.getElementById("result-type").textContent = resultString;
  document.getElementById("result-name").textContent = resultData.name;
  document.getElementById("result-description").textContent = resultData.desc;
  document.getElementById("recommend-modern").textContent = resultData.modern;
  document.getElementById("recommend-classic").textContent = resultData.classic;
  console.log('loadQuestion called. session question:', JSON.parse(sessionStorage.getItem('question')));    
}
