const FORTUNES = [
  {
    icon: '☀️',
    title: '태양',
    message: '오늘은 그동안의 노력이 빛을 발하는 날입니다. 자신감을 갖고 나아가면 좋은 성과가 따라올 거예요.'
  },
  {
    icon: '🌙',
    title: '달',
    message: '무리하지 말고 마음을 차분히 가라앉히세요. 조용한 휴식이 내일의 힘이 되어줄 거예요.'
  },
  {
    icon: '⭐',
    title: '별',
    message: '뜻밖의 행운이 찾아올 수 있는 날이에요. 평소와 다른 작은 시도가 좋은 기회로 이어질 거예요.'
  },
  {
    icon: '🧭',
    title: '나침반',
    message: '중요한 결정을 앞두고 있다면 서두르지 마세요. 마음의 소리를 따르면 옳은 방향이 보일 거예요.'
  },
  {
    icon: '🗝️',
    title: '열쇠',
    message: '새로운 시작에 좋은 기운이 감도는 날입니다. 미뤄왔던 일을 지금 시작해보세요.'
  },
  {
    icon: '🔮',
    title: '크리스탈',
    message: '오늘은 직감이 유난히 예리해지는 날이에요. 머리보다 마음이 이끄는 쪽을 믿어보세요.'
  },
  {
    icon: '🌘',
    title: '초승달',
    message: '작은 변화가 큰 전환점이 될 수 있어요. 익숙함에서 벗어나는 용기가 필요한 때입니다.'
  },
  {
    icon: '🃏',
    title: '타로 카드',
    message: '소중한 인연이 곁에 있음을 느끼게 되는 날이에요. 주변 사람에게 먼저 마음을 표현해보세요.'
  }
];

const cardGrid = document.getElementById('cardGrid');
const resultBox = document.getElementById('resultBox');
const resultMessage = document.getElementById('resultMessage');
const resetBtn = document.getElementById('resetBtn');

let hasDrawn = false;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderCards() {
  cardGrid.innerHTML = '';
  hasDrawn = false;
  resultBox.hidden = true;
  resetBtn.hidden = true;

  const shuffledFortunes = shuffle(FORTUNES);

  shuffledFortunes.forEach((fortune) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-face card-back"></div>
      <div class="card-face card-front">
        <span class="card-icon">${fortune.icon}</span>
        <span class="card-title">${fortune.title}</span>
      </div>
    `;

    card.addEventListener('click', () => onCardClick(card, fortune));
    cardGrid.appendChild(card);
  });
}

function onCardClick(selectedCard, fortune) {
  if (hasDrawn) return;
  hasDrawn = true;

  const allCards = cardGrid.querySelectorAll('.card');
  allCards.forEach((card) => {
    if (card === selectedCard) {
      card.classList.add('flipped');
    } else {
      card.classList.add('disabled');
    }
  });

  resultMessage.textContent = fortune.message;

  setTimeout(() => {
    resultBox.hidden = false;
    resetBtn.hidden = false;
  }, 500);
}

resetBtn.addEventListener('click', renderCards);

renderCards();
