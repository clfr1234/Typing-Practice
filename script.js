const sentence = [
    "마음은 산다. 마음이 죽으면 산도 무서워하지 않는다.",
    "포기할 수 있는 것은 포기하고, 포기할 수 없는 것은 포기하지 마라.",
    "하늘을 나는 새가 되려면 먼저 떨어져야 한다.",
    "계획 없는 목표는 단순한 꿈에 불과하다.",
    "더 나은 세상을 만들기 위해 먼저 나 자신을 개선하라.",
    "성공은 훌륭한 준비와 기회의 조화이다.",
    "먼저 할 일을 먼저 하라. 그리고 나머지는 쉽다.",
    "삶은 모험이다. 모험이 없다면 지루할 뿐이다.",
    "마음이 흔들리지 않는다면, 땅이 흔들리더라도 괜찮다.",
    "평범함이 아름다움을 숨긴다.",
    "도전은 성장의 씨앗이다.",
    "삶이 있는 한 희망은 있다.",
    "당신이 생각하는 대로 되고 있다.",
    "어제보다 나은 오늘을 만들어라.",
    "어려운 길일수록 더 가치가 있다.",
    "당신이 가는 길에 꽃길을 만들어라.",
    "포기는 쉽다. 하지만 후회는 어렵다.",
    "목표를 향해 나아가면 언젠가는 도달할 것이다.",
    "일은 기회로 변한다.",
    "행복은 내 안에 있다.",
    "마음은 작은 것에서 만들어진다.",
    "어떤 시련도 인내로 극복된다.",
    "인내는 언제나 얻는다.",
    "성공은 결코 우연이 아니다.",
    "목표를 향해 나아가라. 그리고 두려움에 맞서라.",
    "모든 일에는 시작이 있다. 가장 어려운 것은 시작하는 것이다.",
    "어제의 나보다 오늘의 나가 더 나아지길 바란다.",
    "마음은 작은 행동에서 만들어진다.",
    "계획은 중요하다. 하지만 실행이 더 중요하다.",
    "가장 큰 적은 자기 자신의 불확실성이다.",
    "지혜는 경험에서 나온다.",
    "목표를 향해 나아가는 과정에서 성장한다.",
    "눈에 띄게 성공한 사람은 실패를 두려워하지 않는다.",
    "자신을 믿어라. 당신이 할 수 있다고 믿는 순간, 가능해진다.",
    "인내는 쓰지만 그 열매는 달다.",
    "가장 어둡고 긴 밤이 지나면 반드시 새벽이 온다.",
    "노력한 만큼 결과가 따라온다.",
    "당신이 어디서 시작하든 중요한 것은 시작하는 것이다.",
    "미래는 현재의 선택에 달려있다.",
    "작은 성취도 큰 의미를 가진다.",
    "계획 없는 여행은 결국 방황에 불과하다.",
    "성공의 비결은 항상 더 나은 선택을 하는 것이다.",
    "지혜로운 사람은 과거의 실수에서 배워 미래를 준비한다.",
    "당신의 노력이 보이지 않을 때가 가장 중요한 때이다.",
    "불가능은 자신의 생각에서 시작된다.",
    "성공은 자기 계발의 결과이다.",
    "가장 큰 위험은 위험이 없는 것이다.",
    "자기 자신을 이기는 것이 가장 큰 승리이다.",
    "당신은 자신이 믿는 것만큼 강해진다.",
    "목표를 향해 끊임없이 나아가라.",
    "노력 없이 얻는 것은 없다.",
    "가장 중요한 순간은 지금이다.",
    "당신은 이미 모든 답을 알고 있다. 답은 내면에 있다.",
    "실패는 성공의 어머니이다.",
    "작은 것을 간과하지 말고 감사하라.",
    "어려운 시기일수록 더 강해진다.",
    "당신의 생각이 현실을 만든다.",
    "매일 매일 나아지는 것이 목표이다.",
    "힘든 시기를 이기는 것은 자기 자신을 이기는 것이다.",
    "가장 큰 성취는 가장 어려운 과제에 도전하고 이겨내는 것이다.",
    "포기하지 않으면 언젠가는 이긴다.",
    "생각하는 대로 살지 않으면, 사는 대로 생각하게 된다.",
    "도전 없이 성장은 없다.",
    "매일 새로운 기회가 주어진다.",
    "마음이 먼저 움직여야 몸이 움직인다.",
    "힘들어질수록 더 강해진다.",
    "당신은 언제나 선택의 주인이다.",
    "인생은 짧다. 그러니 웃으면서 살자.",
    "지금 당장 시작하는 것이 가장 빠른 성공의 길이다.",
    "당신이 가진 것에 감사하면 더 많은 것을 얻게 된다.",
    "어려움은 극복해야만 가치가 있는 것이다.",
    "자기 자신을 이기는 것은 자기 자신을 이긴다.",
    "당신이 내린 결정이 당신의 운명을 결정한다.",
    "오늘의 노력은 내일의 자랑이 된다.",
    "노력은 결코 배신하지 않는다.",
    "마음이 흔들리지 않으면 어떤 돌풍도 무섭지 않다.",
    "성공은 작은 노력의 연속이다.",
    "매일 조금씩 나아간다면 언젠가는 큰 성취를 이룰 것이다.",
];

let selectSentence = [];
let userSentence = [];
let cnt = 0;
let sentenceLength = 5;

let letterNum = 0;

let startTime;
let elapsedSeconds;

function start() {
    alert("확인을 누르면 바로 시작됩니다.");

    document.getElementById('resetBtn').style.display = "block";
    document.getElementById('startBtn').style.display = "none";

    document.querySelector('#answer').focus();

    setSentence();

    for (let i = 0; i < sentenceLength; i++) {
        letterNum += userSentence[i].length;
    }

    console.log(letterNum);

    document.querySelector("#sentence").innerHTML = userSentence[cnt];

    startTime = new Date();

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            checkSentence();
            e.preventDefault();
        }
    });

    setInterval(updateTimer, 10);
}

function setSentence() {
    selectSentence = [];
    userSentence = [];

    for (let i = 0; i < sentence.length; i++) {
        selectSentence.push(sentence[i]);
    }

    for (let i = 0; i < sentenceLength; i++) {
        if (selectSentence.length > 0) {
            let randomSelect = Math.floor(Math.random() * selectSentence.length);
            let selectedSentence = selectSentence[randomSelect];

            if (!userSentence.includes(selectedSentence)) {
                userSentence.push(selectedSentence);
            }

            selectSentence.splice(randomSelect, 1);
        }
    }

    console.log(userSentence);
}

function checkSentence() {
    const user = document.getElementById('answer').value;

    if (userSentence[cnt] === user) {
        cnt++;
        document.getElementById('answer').value = "";
        if (cnt === sentenceLength) {
            gameEnd();
        } else {
            document.querySelector('#sentence').innerHTML = userSentence[cnt];
        }
    }
    document.getElementById('answer').focus();
}

function updateTimer() {
    const currentTime = new Date();
    elapsedSeconds = (currentTime - startTime) / 1000;
    document.getElementById('timer').innerHTML = elapsedSeconds.toFixed(2) + 's';
}

function gameEnd() {
    const 한글타수 = (letterNum / elapsedSeconds) * 60 * 2.7;
    alert("축하합니다! 게임을 종료합니다.\n걸린 시간 : " + elapsedSeconds.toFixed(2) + '초\n타수 : ' + 한글타수.toFixed(1) + "타");
    reset();
}

function reset() {
    window.location.reload();
}