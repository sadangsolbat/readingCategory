const questions = [
  [
    "주인공의 감정 변화를 따라가는 것이 재미있다.",
    "인물보다 세계관·설정이 더 흥미롭다.",
    "캐릭터의 성격이 매력적이면 설정이 단순해도 괜찮다.",
    "새로운 아이디어와 개념이 있으면 감정선이 약해도 괜찮다.",
    "이야기 속에서 관계의 변화가 중요한 요소다.",
    "사건 구조나 배경 설정이 치밀해야 만족스럽다."
  ],
  [
    "실제 사건이나 사회문제에서 출발한 이야기일수록 흥미롭다.",
    "완전히 다른 세계에서 벌어지는 이야기가 더 끌린다.",
    "배경이 사실적이고 현실과 맞닿아 있으면 몰입된다.",
    "현실성과 무관해도 상징과 상상이 풍부하면 좋다.",
    "역사적 사실이나 실제 자료를 참조한 소설을 선호한다.",
    "비현실적 장치(마법, 초능력 등)가 작품의 매력이다."
  ],
  [
    "휴식 시간에는 편하게 읽을 수 있는 소설이 좋다.",
    "어려워도 형식적 실험이나 낯선 서술을 환영한다.",
    "문체가 매끄럽고 읽기 쉬울수록 만족스럽다.",
    "초반이 어려워도 끝나고 나면 시야가 넓어지는 작품을 원한다.",
    "검증된 베스트셀러·스테디셀러를 먼저 찾는다.",
    "낯선 세계관/구조라도 새로우면 반갑다."
  ]
];

const types = {
  "ERC": {
    name: "현실 감성 · 편안형",
    desc: "일상과 크게 다르지 않은 배경에서 살아가는 인물들의 감정과 성장 이야기에 깊이 공감합니다. 현실을 투영한 소설을 통해 위로와 공감을 얻고, “나도 저럴 수 있겠다”는 친근한 감각을 느끼는 것을 좋아합니다. 무겁지 않고 잔잔하게 마음에 스며드는 작품을 선호하며, 독서 시간을 휴식과 정서적 안정으로 삼습니다. 책은 주로 감정 치유와 생활의 온기를 얻는 통로로 작동합니다.",
    modern: "『82년생 김지영』(조남주), 『파친코』(이민진)",
    classic: "『안나 카레니나』(톨스토이), 『데미안』(헤르만 헤세)"
  },
  "ERX": {
    name: "현실 감성 · 도전형",
    desc: "사회적 실존, 비극적 삶, 인간의 고통과 같은 주제를 감정적으로 탐험하는 독서를 즐깁니다. 작품을 통해 복잡한 현실의 질문들을 마주하고, 사람들의 삶과 고통을 더 깊이 이해하려는 태도가 강합니다. 읽는 과정이 쉽지는 않지만, 그 안에서 오는 짜릿한 몰입을 즐깁니다. 감정적 자극을 넘어 사회적 연대감까지 얻고, 독소리는 영적(비상적) 탐험의 도구가 됩니다.",
    modern: "『죄와 벌』(도스토옙스키), 『변신』(카프카)",
    classic: "『전쟁과 평화』(톨스토이), 『죄와 벌』(도스토옙스키)"
  },
  "EMC": {
    name: "상상 감성 · 편안형",
    desc: "현실에서 벗어난 따뜻하고 감성적인 상상의 세계에 몰입합니다. 마법, 동화적 설정, 로맨틱한 판타지 등 상상력이 가득한 편안하게 읽히는 작품을 좋아합니다. 이야기 속에서 희망과 즐거움을 찾고, 가볍고 비상적인 기분을 얻습니다. 읽는 자체가 깊고, 길게 쓰고, 드러난 통찰력으로 이끌어가는 것을 지향합니다. ",
    modern: "『연의 편지』(조현아), 『해리 포터』(J.K. 롤링)",
    classic: "『작은 아씨들』(루이자 메이 올컷), 『이상한 나라의 앨리스』(루이스 캐럴)"
  },
  "EMX": {
    name: "상상 감성 · 도전형",
    desc: "마술적 리얼리즘, 음울한 판타지, 실험적인 문체 등 독특한 서사를 감정적으로 경험합니다. 이해하기 쉽지 않더라도 새로운 상징과 표현을 통해 감각에 자극받는 것을 선호합니다. 현실을 직접적으로 다루지 않아도, 모험과 상상으로 전환되는 감정의 깊이를 찾아냅니다. 독서는 단순한 오락적 체험이 아니라, 한계에 대한 탐험이자, 그 한계를 벗어나는 경험입니다.",
    modern: "『맨부커상 수상작』(이종석), 『1Q84』(무라카미 하루키)",
    classic: "『백 년의 고독』(가브리엘 가르시아 마르케스), 『오즈의 마법사』(라이먼 프랭크 바움)"
  },
  "IRC": {
    name: "현실 아이디어 · 편안형",
    desc: "사회 역사적 주제를 다루지만 난해하지 않고, 명쾌한 메시지를 담은 작품을 선호합니다. 교훈적이고 위트 넘치는 서술 속에서 세상에 대한 지식을 쌓아갑니다. 독서를 통해 현실을 옳게 사회에 대한 지혜를 구하고 싶습니다. 읽는 것은 곧 지식을 얻는 동시에 재미를 즐기는 것입니다.",
    modern: "『지식사회학』(한정환), 『팩트풀니스』(하버드 로슬링)",
    classic: "『역사의 연구』(아널드 J. 토인비), 『걸리버 여행기』(조너선 스위프트)"
  },
  "IRX": {
    name: "현실 아이디어 · 도전형",
    desc: "정치, 사회, 사회적 구조적 문제를 다루는 주지적 서사를 좋아하며, 작품을 통해 현실의 모순과 문제점을 파헤치려 합니다. 감정적 몰입보다는 구조적 이해와 사회적 메시지에 더 몰입합니다. 책은 때로 난해하고 비판적이지만, 현실과 나의 사고의 지평을 넓혀주는 도전이 됩니다. 독서는 지적 탐험이며, 현실을 더 깊이 이해하려는 도구입니다.",
    modern: "『1984』(조지 오웰), 『감성 사회학』(알랭 드 보통), 『모든 책은 다를 수 있다』(유재원)",
    classic: "『죄와 벌』(도스토옙스키), 『파우스트』(괴테)"
  },
  "IMC": {
    name: "상상 아이디어 · 편안형",
    desc: "추리, 미스터리, 상상적 구조 실험처럼 재미있는 이야기와 논리를 좋아하며, 가벼움과 몰입감을 중시합니다. 복잡한 학문보다 플롯의 긴장감과 아이디어의 재미를 즐기며, 독서는 오락이자 지적 자극제입니다. 지나치게 무겁지 않으면서도 '머리를 쓰는 즐거움'을 주는 책이 좋습니다. 읽는 과정이 쉽고 빠르며 흥미진진한 스토리를 강하게 느낍니다. ",
    modern: "『셜록 홈즈 시리즈』(코난 도일), 『다빈치 코드』(댄 브라운)",
    classic: "『걸리버 여행기』(조너선 스위프트), 『드라큘라』(브램 스토커)"
  },
  "IMX": {
    name: "상상 아이디어 · 도전형",
    desc: "하드 SF, 현대 픽션, 형이상학 소설 등 난이도 높은 작품에 매료됩니다. 비현실적 상상력을 통해 철학적 문제와 개념적 실험을 다루는 책을 선호합니다. 독서는 쉽지 않지만, 책을 읽는 과정에서 사물의 개념을 확장하고 상상하는 고도의 지적 유희로 작동합니다. 이해하기 어렵더라도 '이야기의 가능성' 자체를 탐구하는 데 가치를 둡니다.",
    modern: "『프랑켄슈타인』(메리 셸리), 『위대한 개츠비』(F. 스콧 피츠제럴드)",
    classic: "『프랑켄슈타인』(메리 셸리), 『유토피아』(토머스 모어)"
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
  resultString += result[0] >= 0 ? "E" : "I";
  resultString += result[1] >= 0 ? "R" : "M";
  resultString += result[2] >= 0 ? "C" : "X";

  const resultData = types[resultString];

  document.getElementById("result-type").textContent = resultString;
  document.getElementById("result-name").textContent = resultData.name;
  document.getElementById("result-description").textContent = resultData.desc;
  document.getElementById("recommend-modern").textContent = resultData.modern;
  document.getElementById("recommend-classic").textContent = resultData.classic;
  console.log('loadQuestion called. session question:', JSON.parse(sessionStorage.getItem('question')));    
}
