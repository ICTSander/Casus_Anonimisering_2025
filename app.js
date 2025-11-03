const STORAGE_KEY = 'anon-demo-state-v1';
const DEFAULT_SLIDER = 40;

const defaultDataset = [
  { voornaam: 'Sanne', achternaam: 'de Vries', email: 'sanne.devries@example.nl', leeftijd: 16, woonplaats: 'Amsterdam', school: 'Hyperion Lyceum', adres: 'Prinsengracht 214, Amsterdam', geboortedatum: '2008-03-14' },
  { voornaam: 'Liam', achternaam: 'Jansen', email: 'liam.jansen@stmail.nl', leeftijd: 17, woonplaats: 'Rotterdam', school: 'Wolfert van Borselen', adres: 'Meent 45, Rotterdam', geboortedatum: '2007-11-02' },
  { voornaam: 'Noor', achternaam: 'Bakker', email: 'noor.bakker@edu.nl', leeftijd: 18, woonplaats: 'Utrecht', school: 'UniC Utrecht', adres: 'Nachtegaalstraat 88, Utrecht', geboortedatum: '2006-05-28' },
  { voornaam: 'Yara', achternaam: 'van Leeuwen', email: 'yara.vleeuwen@schoolmail.nl', leeftijd: 15, woonplaats: 'Haarlem', school: 'Coornhert Lyceum', adres: 'Kleine Houtweg 12, Haarlem', geboortedatum: '2009-09-09' },
  { voornaam: 'Daan', achternaam: 'Bos', email: 'daan.bos@campus.nl', leeftijd: 19, woonplaats: 'Eindhoven', school: 'Sint-Joriscollege', adres: 'Kastanjelaan 330, Eindhoven', geboortedatum: '2005-01-19' },
  { voornaam: 'Mila', achternaam: 'Verhoeven', email: 'mila.verhoeven@edu.nl', leeftijd: 16, woonplaats: 'Tilburg', school: 'Odulphuslyceum', adres: 'Korvelseweg 101, Tilburg', geboortedatum: '2008-07-30' },
  { voornaam: 'Timo', achternaam: 'Visser', email: 'timo.visser@schoolmail.nl', leeftijd: 17, woonplaats: 'Zwolle', school: 'Greijdanus College', adres: 'Diezerstraat 145, Zwolle', geboortedatum: '2007-02-17' },
  { voornaam: 'Evi', achternaam: 'Smits', email: 'evi.smits@campus.nl', leeftijd: 18, woonplaats: 'Den Bosch', school: 'Jeroen Bosch College', adres: 'Hinthamerstraat 86, Den Bosch', geboortedatum: '2006-10-04' },
  { voornaam: 'Owen', achternaam: 'Meijer', email: 'owen.meijer@edu.nl', leeftijd: 17, woonplaats: 'Almere', school: 'Helen Parkhurst', adres: 'Plein 15, Almere', geboortedatum: '2007-04-12' },
  { voornaam: 'Lotte', achternaam: 'Dekker', email: 'lotte.dekker@stmail.nl', leeftijd: 16, woonplaats: 'Leiden', school: 'Stedelijk Gymnasium Leiden', adres: 'Breestraat 9, Leiden', geboortedatum: '2008-08-23' },
  { voornaam: 'Ruben', achternaam: 'Mulder', email: 'ruben.mulder@edu.nl', leeftijd: 15, woonplaats: 'Enschede', school: 'Bonhoeffer College', adres: 'Oldenzaalsestraat 175, Enschede', geboortedatum: '2009-12-01' },
  { voornaam: 'Zoë', achternaam: 'Schouten', email: 'zoe.schouten@schoolmail.nl', leeftijd: 18, woonplaats: 'Amersfoort', school: 'Het Nieuwe Eemland', adres: 'Utrechtseweg 45, Amersfoort', geboortedatum: '2006-06-25' },
  { voornaam: 'Hugo', achternaam: 'Kuipers', email: 'hugo.kuipers@campus.nl', leeftijd: 17, woonplaats: 'Groningen', school: 'Werkman College', adres: 'Oosterstraat 66, Groningen', geboortedatum: '2007-03-08' },
  { voornaam: 'Luna', achternaam: 'Peters', email: 'luna.peters@edu.nl', leeftijd: 16, woonplaats: 'Nijmegen', school: 'NSG Groenewoud', adres: 'Sint Annastraat 200, Nijmegen', geboortedatum: '2008-11-15' },
  { voornaam: 'Finn', achternaam: 'Kok', email: 'finn.kok@schoolmail.nl', leeftijd: 18, woonplaats: 'Breda', school: 'Newmancollege', adres: 'Ginnekenweg 88, Breda', geboortedatum: '2006-02-19' },
  { voornaam: 'Sofia', achternaam: 'Post', email: 'sofia.post@campus.nl', leeftijd: 17, woonplaats: 'Arnhem', school: 'Lorentz Lyceum', adres: 'Velperweg 35, Arnhem', geboortedatum: '2007-09-11' },
  { voornaam: 'Thijs', achternaam: 'Peeters', email: 'thijs.peeters@edu.nl', leeftijd: 19, woonplaats: 'Maastricht', school: 'Sint-Maartenscollege', adres: 'Brusselsestraat 21, Maastricht', geboortedatum: '2005-05-06' },
  { voornaam: 'Isa', achternaam: 'Smit', email: 'isa.smit@schoolmail.nl', leeftijd: 15, woonplaats: 'Apeldoorn', school: 'Veluws College Walterbosch', adres: 'Stationsstraat 48, Apeldoorn', geboortedatum: '2009-01-27' },
  { voornaam: 'Jesse', achternaam: 'Kramer', email: 'jesse.kramer@edu.nl', leeftijd: 18, woonplaats: 'Delft', school: 'Christelijk Lyceum Delft', adres: 'Oosteinde 113, Delft', geboortedatum: '2006-09-02' },
  { voornaam: 'Maya', achternaam: 'van Dijk', email: 'maya.vdijk@campus.nl', leeftijd: 17, woonplaats: 'Zwolle', school: 'Carolus Clusius College', adres: 'Nieuwe Markt 11, Zwolle', geboortedatum: '2007-12-28' },
  { voornaam: 'Bram', achternaam: 'Hoekstra', email: 'bram.hoekstra@edu.nl', leeftijd: 16, woonplaats: 'Leeuwarden', school: 'Comenius College', adres: 'Grote Hoogstraat 72, Leeuwarden', geboortedatum: '2008-04-03' },
  { voornaam: 'Nina', achternaam: 'Hendriks', email: 'nina.hendriks@schoolmail.nl', leeftijd: 17, woonplaats: 'Zwolle', school: 'Greijdanus College', adres: 'Assendorperstraat 52, Zwolle', geboortedatum: '2007-07-21' },
  { voornaam: 'Sam', achternaam: 'Ruijter', email: 'sam.ruijter@campus.nl', leeftijd: 18, woonplaats: 'Haarlem', school: 'Sterren College', adres: 'Grote Markt 3, Haarlem', geboortedatum: '2006-03-30' },
  { voornaam: 'Eva', achternaam: 'Koster', email: 'eva.koster@edu.nl', leeftijd: 17, woonplaats: 'Amstelveen', school: 'Hermann Wesselink College', adres: 'Amsterdamseweg 150, Amstelveen', geboortedatum: '2007-10-08' },
  { voornaam: 'Olivier', achternaam: 'de Bruin', email: 'olivier.debruin@schoolmail.nl', leeftijd: 19, woonplaats: 'Hilversum', school: 'Comenius College Hilversum', adres: 'Koninginneweg 67, Hilversum', geboortedatum: '2005-07-12' }
];

const state = {
  step: 'upload',
  data: [],
  metrics: null,
  anonymizedData: [],
  anonymizedMetrics: null,
  sliderLevel: DEFAULT_SLIDER,
  game: null
};

document.addEventListener('DOMContentLoaded', () => {
  initializeState();
  setupEventListeners();
  updateDatasetViews();
  updateStartButton();
  applySliderLevel(state.sliderLevel, false);
  navigateTo(state.step, false);
});

function initializeState() {
  const saved = loadState();
  state.data = saved?.data?.length ? saved.data : [...defaultDataset];
  state.step = saved?.step || 'upload';
  state.sliderLevel = typeof saved?.sliderLevel === 'number' ? saved.sliderLevel : DEFAULT_SLIDER;
  if (saved?.anonymizedData) {
    state.anonymizedData = saved.anonymizedData;
    state.anonymizedMetrics = saved.anonymizedMetrics;
  }
  state.metrics = calculateMetrics(state.data, 0);
}

function setupEventListeners() {
  const tabUpload = document.getElementById('tabUpload');
  const tabManual = document.getElementById('tabManual');
  const uploadPane = document.getElementById('uploadPane');
  const manualPane = document.getElementById('manualPane');
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const startProcessing = document.getElementById('startProcessing');
  const manualForm = document.getElementById('manualForm');
  const resetForm = document.getElementById('resetForm');
  const viewDetails = document.getElementById('viewDetails');
  const closeModal = document.getElementById('closeModal');
  const backToUpload = document.getElementById('backToUpload');
  const toSettings = document.getElementById('toSettings');
  const anonymSlider = document.getElementById('anonymSlider');
  const resetSettings = document.getElementById('resetSettings');
  const applySettings = document.getElementById('applySettings');
  const gameCards = document.getElementById('gameCards');
  const modal = document.getElementById('detailsModal');

  tabUpload.addEventListener('click', () => toggleTabs(tabUpload, tabManual, uploadPane, manualPane));
  tabManual.addEventListener('click', () => toggleTabs(tabManual, tabUpload, manualPane, uploadPane));

  ;['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, e => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
  });
  ;['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, e => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    });
  });
  dropzone.addEventListener('drop', handleDrop);
  fileInput.addEventListener('change', handleFile);

  startProcessing.addEventListener('click', startProcessingFlow);
  manualForm.addEventListener('submit', handleManualSubmit);
  resetForm.addEventListener('click', () => manualForm.reset());

  viewDetails.addEventListener('click', openDetailsModal);
  closeModal.addEventListener('click', closeDetailsModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeDetailsModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDetailsModal();
  });

  backToUpload.addEventListener('click', () => {
    state.step = 'upload';
    saveState();
    navigateTo('upload');
  });

  toSettings.addEventListener('click', () => {
    state.step = 'settings';
    saveState();
    navigateTo('settings');
  });

  anonymSlider.addEventListener('input', e => {
    const level = Number(e.target.value);
    applySliderLevel(level);
  });

  resetSettings.addEventListener('click', () => {
    applySliderLevel(DEFAULT_SLIDER);
    showToast('Instellingen teruggezet naar standaardniveau.', 'info');
  });

  applySettings.addEventListener('click', () => {
    const level = Number(document.getElementById('anonymSlider').value);
    const { data: anonData, metrics } = applyAnonymization(state.data, level);
    state.anonymizedData = anonData;
    state.anonymizedMetrics = metrics;
    state.sliderLevel = level;
    state.step = 'game';
    saveState();
    showToast('Instellingen toegepast. Klaar voor de gamification ronde!', 'success');
    navigateTo('game');
    initGame();
  });

  gameCards.addEventListener('click', e => {
    const card = e.target.closest('.game-card');
    if (!card || !state.game || state.game.completed) return;
    applyGameChoice(card.dataset.choice);
  });
}

function toggleTabs(active, inactive, activePane, inactivePane) {
  active.classList.add('active');
  inactive.classList.remove('active');
  active.setAttribute('aria-selected', 'true');
  inactive.setAttribute('aria-selected', 'false');
  activePane.hidden = false;
  inactivePane.hidden = true;
}

function handleDrop(event) {
  const files = event.dataTransfer.files;
  if (!files.length) return;
  handleCsvFile(files[0]);
}

function handleFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  handleCsvFile(file);
}

function handleCsvFile(file) {
  if (!file.name.endsWith('.csv')) {
    showToast('Alleen CSV-bestanden worden ondersteund.', 'error');
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    const parsed = parseCsv(e.target.result);
    if (!parsed.length) {
      showToast('Het bestand bevat geen records.', 'error');
      return;
    }
    state.data = parsed;
    state.metrics = calculateMetrics(state.data, 0);
    state.step = 'upload';
    updateDatasetViews();
    updateStartButton();
    saveState();
    const fileInfo = document.getElementById('fileInfo');
    fileInfo.hidden = false;
    document.getElementById('fileName').textContent = file.name;
    showToast(`Dataset geladen met ${parsed.length} records.`, 'success');
  };
  reader.readAsText(file, 'utf-8');
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(',').map(h => h.trim().toLowerCase());
  return lines
    .map(line => line.split(',').map(part => part.trim()))
    .filter(row => row.length === headers.length && row.some(Boolean))
    .map(row => {
      const record = {};
      headers.forEach((header, idx) => {
        const value = row[idx] || '';
        if (header === 'leeftijd') {
          record[header] = Number(value);
        } else {
          record[header] = value;
        }
      });
      return record;
    });
}

function handleManualSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const record = {};
  for (const [key, value] of data.entries()) {
    if (!value) {
      showToast('Vul alle velden in om het record op te slaan.', 'error');
      return;
    }
    record[key] = key === 'leeftijd' ? Number(value) : value.trim();
  }
  state.data.push(record);
  state.metrics = calculateMetrics(state.data, 0);
  updateDatasetViews();
  updateStartButton();
  saveState();
  form.reset();
  showToast('Record toegevoegd aan de dataset.', 'success');
}

function updateDatasetViews() {
  renderTable(state.data, document.getElementById('datasetTable'));
  renderTable(state.data.slice(0, 5), document.getElementById('previewTable'));
}

function renderTable(data, container) {
  if (!data.length) {
    container.innerHTML = '<p class="muted">Geen records beschikbaar.</p>';
    return;
  }
  const headers = Object.keys(data[0]);
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header.charAt(0).toUpperCase() + header.slice(1);
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  const tbody = document.createElement('tbody');
  data.forEach(row => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
      const td = document.createElement('td');
      td.textContent = row[header];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  container.innerHTML = '';
  container.appendChild(table);
}

function updateStartButton() {
  const startButton = document.getElementById('startProcessing');
  startButton.disabled = state.data.length === 0;
}

function startProcessingFlow() {
  state.step = 'processing';
  saveState();
  navigateTo('processing');
  simulateProcessing();
}

function simulateProcessing() {
  const progressBar = document.getElementById('progressBar');
  const progressValue = document.getElementById('progressValue');
  let progress = 0;
  const targetDuration = 3000 + Math.random() * 3000;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const normalized = Math.min(elapsed / targetDuration, 1);
    const randomFactor = 0.7 + Math.random() * 0.3;
    progress = Math.min(100, Math.round(normalized * 100 * randomFactor));
    progressBar.style.width = `${progress}%`;
    progressValue.textContent = progress;
    if (progress >= 100) {
      progressBar.style.width = '100%';
      progressValue.textContent = 100;
      setTimeout(() => completeProcessing(), 500);
    } else {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function completeProcessing() {
  state.metrics = calculateMetrics(state.data, 0);
  state.step = 'summary';
  saveState();
  updateSummary();
  navigateTo('summary');
  showToast('Verwerking voltooid. Bekijk het privacyoverzicht.', 'success');
}

function updateSummary() {
  if (!state.metrics) return;
  document.getElementById('anonScore').textContent = `${state.metrics.anonimiteitsscore}%`;
  document.getElementById('uniqueRecords').textContent = state.metrics.uniekeRecords;
  document.getElementById('minK').textContent = state.metrics.minimaleGroepsgrootte;
  document.getElementById('uniqueScore').textContent = `${state.metrics.uniekheidsScore}%`;
}

function openDetailsModal() {
  const modal = document.getElementById('detailsModal');
  const modalBody = document.getElementById('modalBody');
  const combos = getTopCombinations(state.data);
  if (!combos.length) {
    modalBody.innerHTML = '<p>Geen combinaties beschikbaar.</p>';
  } else {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['#', 'Combinatie (leeftijd • woonplaats • school • geboortejaar)', 'Aantal'].forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    const tbody = document.createElement('tbody');
    combos.forEach((combo, index) => {
      const tr = document.createElement('tr');
      const pos = document.createElement('td');
      pos.textContent = index + 1;
      const desc = document.createElement('td');
      desc.textContent = combo.key;
      const count = document.createElement('td');
      count.textContent = combo.count;
      tr.appendChild(pos);
      tr.appendChild(desc);
      tr.appendChild(count);
      tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    modalBody.innerHTML = '';
    modalBody.appendChild(table);
  }
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeDetailsModal() {
  const modal = document.getElementById('detailsModal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

function applySliderLevel(level, store = true) {
  state.sliderLevel = level;
  document.getElementById('anonymSlider').value = level;
  document.getElementById('sliderValue').textContent = level;
  const { data: anonData, metrics } = applyAnonymization(state.data, level);
  state.anonymizedData = anonData;
  state.anonymizedMetrics = metrics;
  updatePreviewRecord(anonData[0]);
  updateSettingsMetrics(metrics);
  if (store) {
    saveState();
  }
}

function updatePreviewRecord(record) {
  const list = document.getElementById('previewRecord');
  if (!record) {
    list.innerHTML = '<li>Geen data beschikbaar.</li>';
    return;
  }
  list.innerHTML = '';
  Object.entries(record).forEach(([key, value]) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${capitalize(key)}</strong><span>${value}</span>`;
    list.appendChild(li);
  });
}

function updateSettingsMetrics(metrics) {
  const list = document.getElementById('settingsMetrics');
  list.innerHTML = '';
  const entries = [
    ['Anonimiteitsscore', `${metrics.anonimiteitsscore}%`],
    ['Unieke records', metrics.uniekeRecords],
    ['Minimale groepsgrootte (k)', metrics.minimaleGroepsgrootte],
    ['Uniekheidsscore', `${metrics.uniekheidsScore}%`],
    ['Bruikbaarheid', `${metrics.bruikbaarheidsscore}%`]
  ];
  entries.forEach(([label, value]) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${label}</span><span>${value}</span>`;
    list.appendChild(li);
  });
}

function initGame() {
  if (!state.anonymizedMetrics) return;
  state.game = {
    round: 1,
    anonymity: state.anonymizedMetrics.anonimiteitsscore,
    utility: state.anonymizedMetrics.bruikbaarheidsscore,
    completed: false
  };
  updateGameUI();
  const result = document.getElementById('gameResult');
  result.hidden = true;
  result.className = 'game-result';
}

function applyGameChoice(choice) {
  const effects = {
    A: { anonimiteit: 30, bruikbaarheid: -20, message: 'Sterke anonimisering toegepast.' },
    B: { anonimiteit: 15, bruikbaarheid: -5, message: 'Slim maskeren verhoogt de balans.' },
    C: { anonimiteit: 0, bruikbaarheid: 10, message: 'Focus op analyse verhoogt bruikbaarheid.' }
  };
  const effect = effects[choice];
  if (!effect) return;
  state.game.anonymity = clamp(state.game.anonymity + effect.anonimiteit, 0, 100);
  state.game.utility = clamp(state.game.utility + effect.bruikbaarheid, 0, 100);
  showToast(effect.message, 'info');
  if (state.game.anonymity >= 70 && state.game.utility >= 60) {
    state.game.completed = true;
    showGameSuccess();
    return;
  }
  if (state.game.round >= 5) {
    state.game.completed = true;
    showGameFailure();
    return;
  }
  state.game.round += 1;
  updateGameUI();
}

function showGameSuccess() {
  updateGameUI();
  const cards = document.querySelectorAll('.game-card');
  cards.forEach(card => card.setAttribute('disabled', 'true'));
  const result = document.getElementById('gameResult');
  result.hidden = false;
  result.classList.add('success');
  result.innerHTML = `
    <div class="badge">🏅 Privacy-pro</div>
    <p>Fantastisch! Je hebt zowel anonimiteit als bruikbaarheid binnen de doelen gehouden.</p>
    <div class="game-actions">
      <button class="btn accent" id="exportCsv">Exporteer anonieme CSV</button>
      <button class="btn ghost" id="reviewDetails">Bekijk details</button>
    </div>
  `;
  document.getElementById('exportCsv').addEventListener('click', exportAnonymizedCsv);
  document.getElementById('reviewDetails').addEventListener('click', () => {
    showToast('Je kunt de details opnieuw bekijken in het privacyoverzicht.', 'info');
    state.step = 'summary';
    saveState();
    navigateTo('summary');
    updateSummary();
  });
  triggerConfetti();
}

function showGameFailure() {
  updateGameUI();
  const cards = document.querySelectorAll('.game-card');
  cards.forEach(card => card.setAttribute('disabled', 'true'));
  const result = document.getElementById('gameResult');
  result.hidden = false;
  result.classList.add('fail');
  result.innerHTML = `
    <p>De doelen zijn niet gehaald binnen vijf rondes.</p>
    <p class="tips">Tip: combineer sterke anonimisering met behoud van bruikbaarheid door af te wisselen.</p>
    <button class="btn accent" id="restartGame">Herstart ronde</button>
  `;
  document.getElementById('restartGame').addEventListener('click', () => {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => card.removeAttribute('disabled'));
    initGame();
    showToast('Nieuwe gamification ronde gestart.', 'success');
  });
}

function updateGameUI() {
  if (!state.game) return;
  document.getElementById('gameAnon').textContent = `${Math.round(state.game.anonymity)}%`;
  document.getElementById('gameUtility').textContent = `${Math.round(state.game.utility)}%`;
  document.getElementById('gameRound').textContent = `${state.game.round} / 5`;
}

function exportAnonymizedCsv() {
  if (!state.anonymizedData.length) {
    showToast('Er is geen geanonimiseerde dataset om te exporteren.', 'error');
    return;
  }
  const headers = Object.keys(state.anonymizedData[0]);
  const rows = state.anonymizedData.map(record => headers.map(key => sanitizeCsvValue(record[key])).join(','));
  const csv = `${headers.join(',')}\n${rows.join('\n')}`;
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'anonieme_dataset.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('Anonieme dataset geëxporteerd.', 'success');
}

function sanitizeCsvValue(value) {
  if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function triggerConfetti() {
  const confetti = document.getElementById('confetti');
  confetti.hidden = false;
  confetti.classList.remove('animate');
  void confetti.offsetWidth;
  confetti.classList.add('animate');
  setTimeout(() => {
    confetti.hidden = true;
  }, 1500);
}

function navigateTo(step, store = true) {
  const sections = {
    upload: document.getElementById('uploadSection'),
    processing: document.getElementById('processingSection'),
    summary: document.getElementById('summarySection'),
    settings: document.getElementById('settingsSection'),
    game: document.getElementById('gameSection')
  };
  Object.values(sections).forEach(section => section.classList.add('hidden'));
  if (sections[step]) {
    sections[step].classList.remove('hidden');
  } else {
    sections.upload.classList.remove('hidden');
    state.step = 'upload';
  }
  updateStepIndicator(step);
  if (step === 'summary') {
    updateSummary();
  }
  if (step === 'settings') {
    applySliderLevel(state.sliderLevel, false);
  }
  if (step === 'game' && (!state.game || state.game.completed)) {
    initGame();
  }
  if (store) {
    state.step = step;
    saveState();
  }
}

function updateStepIndicator(activeStep) {
  document.querySelectorAll('.step-indicator span').forEach(span => {
    span.classList.toggle('active', span.dataset.step === activeStep);
  });
}

function calculateMetrics(data, loss) {
  const combos = new Map();
  data.forEach(record => {
    const birthYear = record.geboortedatum ? String(record.geboortedatum).slice(0, 4) : 'onbekend';
    const key = [record.leeftijd, record.woonplaats, record.school, birthYear].join(' • ');
    combos.set(key, (combos.get(key) || 0) + 1);
  });
  const total = data.length;
  const counts = Array.from(combos.values());
  const minK = counts.length ? Math.min(...counts) : 0;
  const uniqueCount = combos.size;
  const anonimiteitsscore = Math.min(100, minK * 12);
  const uniekheidsScore = total ? Math.round((uniqueCount / total) * 100) : 0;
  const bruikbaarheidsscore = clamp(100 - loss, 0, 100);
  return {
    anonimiteitsscore,
    uniekeRecords: uniqueCount,
    minimaleGroepsgrootte: minK,
    uniekheidsScore,
    bruikbaarheidsscore
  };
}

function getTopCombinations(data) {
  const combos = new Map();
  data.forEach(record => {
    const birthYear = record.geboortedatum ? String(record.geboortedatum).slice(0, 4) : 'onbekend';
    const key = `${record.leeftijd} • ${record.woonplaats} • ${record.school} • ${birthYear}`;
    combos.set(key, (combos.get(key) || 0) + 1);
  });
  return Array.from(combos.entries())
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

function applyAnonymization(data, level) {
  const transformed = data.map(record => transformRecord(record, level));
  const loss = determineLoss(level);
  const metrics = calculateMetrics(transformed, loss);
  return { data: transformed, metrics };
}

function transformRecord(record, level) {
  const output = { ...record };
  const birthYear = record.geboortedatum ? String(record.geboortedatum).slice(0, 4) : '';

  if (level <= 30) {
    output.leeftijd = ageBucket(record.leeftijd, 3);
    output.email = maskEmailDomain(record.email);
  }

  if (level > 30 && level <= 70) {
    output.leeftijd = ageBucket(record.leeftijd + addNoise(0, 2), 4);
    output.woonplaats = generalizeLocation(record.woonplaats, 'region');
    output.achternaam = maskSurname(record.achternaam);
    output.email = hashLike(record.email);
    output.school = generalizeSchool(record.school);
  }

  if (level > 70) {
    output.leeftijd = ageBucket(record.leeftijd + addNoise(0, 2), 5);
    output.voornaam = initials(record.voornaam);
    output.achternaam = `${initials(record.achternaam)}*`;
    output.woonplaats = generalizeLocation(record.woonplaats, 'province');
    output.adres = stripHouseNumber(record.adres);
    output.email = hashLike(record.email).slice(0, 8) + '…';
  }

  if (level > 30) {
    output.geboortedatum = `${birthYear}-XX-XX`;
  }

  return output;
}

function determineLoss(level) {
  let loss = 0;
  if (level > 0) {
    loss += 5; // leeftijd bucket
    loss += 4; // e-maildomein maskeren
  }
  if (level > 30) {
    loss += 8; // achternaam maskeren
    loss += 10; // e-mail hashen
    loss += 3; // noise leeftijd
  }
  if (level > 70) {
    loss += 6; // adres generalisatie
  }
  return clamp(loss, 0, 100);
}

function ageBucket(age, size) {
  if (typeof age !== 'number') {
    const parsed = parseInt(age, 10);
    if (!Number.isFinite(parsed)) return age;
    age = parsed;
  }
  const start = Math.max(0, Math.floor(age / size) * size);
  const end = start + size - 1;
  return `${start}-${end}`;
}

function maskEmailDomain(email) {
  if (!email || !email.includes('@')) return email;
  const [local, domain] = email.split('@');
  const obfuscatedDomain = domain.replace(/[^.]/g, '*');
  return `${local}@${obfuscatedDomain}`;
}

function generalizeLocation(city, mode) {
  const regionMap = {
    Amsterdam: 'Randstad Noord',
    Haarlem: 'Randstad Noord',
    Amstelveen: 'Randstad Noord',
    Hilversum: 'Randstad Noord',
    Utrecht: 'Randstad Midden',
    Amersfoort: 'Randstad Midden',
    Rotterdam: 'Randstad Zuid',
    Delft: 'Randstad Zuid',
    Leiden: 'Randstad Zuid',
    'Den Haag': 'Randstad Zuid',
    Eindhoven: 'Brabant',
    Tilburg: 'Brabant',
    Breda: 'Brabant',
    Nijmegen: 'Gelderland',
    Arnhem: 'Gelderland',
    Apeldoorn: 'Gelderland',
    Zwolle: 'Overijssel',
    Enschede: 'Overijssel',
    Groningen: 'Groningen',
    Leeuwarden: 'Friesland',
    Maastricht: 'Limburg',
    Almere: 'Flevoland',
    'Den Bosch': 'Brabant'
  };
  const provinceMap = {
    Amsterdam: 'Noord-Holland',
    Haarlem: 'Noord-Holland',
    Amstelveen: 'Noord-Holland',
    Hilversum: 'Noord-Holland',
    Utrecht: 'Utrecht',
    Amersfoort: 'Utrecht',
    Rotterdam: 'Zuid-Holland',
    Delft: 'Zuid-Holland',
    Leiden: 'Zuid-Holland',
    'Den Haag': 'Zuid-Holland',
    'Den Bosch': 'Noord-Brabant',
    Eindhoven: 'Noord-Brabant',
    Tilburg: 'Noord-Brabant',
    Breda: 'Noord-Brabant',
    Arnhem: 'Gelderland',
    Nijmegen: 'Gelderland',
    Apeldoorn: 'Gelderland',
    Zwolle: 'Overijssel',
    Enschede: 'Overijssel',
    Groningen: 'Groningen',
    Leeuwarden: 'Friesland',
    Maastricht: 'Limburg',
    Almere: 'Flevoland'
  };
  if (mode === 'region') {
    return regionMap[city] || 'Landelijk';
  }
  if (mode === 'province') {
    return provinceMap[city] || 'Onbekend';
  }
  return city;
}

function generalizeSchool(school) {
  if (!school) return school;
  const keywords = ['Lyceum', 'College', 'Gymnasium'];
  const found = keywords.find(keyword => school.includes(keyword));
  return found ? `Regionaal ${found}` : 'Voortgezet onderwijs';
}

function maskSurname(name) {
  if (!name) return name;
  return `${name.charAt(0)}*****`;
}

function initials(name) {
  if (!name) return name;
  return `${name.charAt(0).toUpperCase()}.`;
}

function stripHouseNumber(address) {
  if (!address) return address;
  return address
    .replace(/\d+/g, '')
    .replace(/\s+,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function hashLike(str) {
  if (!str) return str;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return `hash_${Math.abs(hash).toString(36)}`;
}

function addNoise(base, range) {
  if (!range) return 0;
  return Math.floor(Math.random() * (range * 2 + 1)) - range;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'success' : type === 'error' ? 'error' : ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
  }, 3400);
  setTimeout(() => {
    toast.remove();
  }, 3900);
}

function saveState() {
  const snapshot = {
    step: state.step,
    data: state.data,
    sliderLevel: state.sliderLevel,
    anonymizedData: state.anonymizedData,
    anonymizedMetrics: state.anonymizedMetrics
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error('Kon opgeslagen staat niet laden:', error);
    return null;
  }
}

window.addEventListener('beforeunload', () => {
  saveState();
});
