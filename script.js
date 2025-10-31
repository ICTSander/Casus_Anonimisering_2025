const toggleMode = document.getElementById('toggleMode');
const originalRecord = document.querySelector('.record.original');
const anonymizedRecord = document.querySelector('.record.anonymized');
const anonymizeBtn = document.getElementById('anonymizeBtn');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const faqItems = document.querySelectorAll('.faq-item');

const patterns = [
  {
    regex: /\b([A-ZÀ-ÖØ-Ý][a-zà-öø-ý]+)\s([A-ZÀ-ÖØ-Ý][a-zà-öø-ý]+)\b/g,
    mask: (match, first, second) => {
      const firstInitial = first.charAt(0);
      const secondInitial = second.charAt(0);
      return `${firstInitial}${'•'.repeat(Math.max(first.length - 1, 1))} ${secondInitial}${'•'.repeat(Math.max(second.length - 1, 1))}`;
    }
  },
  { regex: /\b\d{2,4}\s?\d{2}\s?\d{3}\b/g, mask: () => '•••• •• •••' },
  {
    regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
    mask: (match) => {
      const [local, domain] = match.split('@');
      return `${local.charAt(0)}${'•'.repeat(Math.max(local.length - 1, 3))}@${domain}`;
    }
  },
  {
    regex: /\b([A-ZÀ-ÖØ-Ý][a-zà-öø-ý]+\s?(straat|laan|weg|gracht)\s?\d+)\b/gi,
    mask: (match) =>
      match.replace(/[A-Za-zÀ-ÖØ-Ýà-öø-ý0-9]/g, (char, index) => (index === 0 ? char : '•'))
  }
];

if (toggleMode && originalRecord && anonymizedRecord) {
  toggleMode.addEventListener('change', () => {
    if (toggleMode.checked) {
      originalRecord.classList.add('hidden');
      anonymizedRecord.classList.remove('hidden');
    } else {
      originalRecord.classList.remove('hidden');
      anonymizedRecord.classList.add('hidden');
    }
  });

  toggleMode.dispatchEvent(new Event('change'));
}

if (anonymizeBtn && inputText && outputText) {
  anonymizeBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (!text.trim()) {
      outputText.value = '';
      return;
    }

    let result = text;
    patterns.forEach(({ regex, mask }) => {
      result = result.replace(regex, (match, ...groups) => mask(match, ...groups));
    });

    outputText.value = result;
  });
}

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
