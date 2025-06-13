// Extract character ID from URL
const id = window.location.search.split('=')[1] || 'demo';

// Keys
const fields = ['charName', 'charRace', 'charClass', 'charStr'];

// Load existing values
fields.forEach(field => {
  const input = document.getElementById(field);
  const saved = localStorage.getItem(`${id}_${field}`);
  if (saved) input.value = saved;

  input.addEventListener('input', () => {
    localStorage.setItem(`${id}_${field}`, input.value);
    document.getElementById('status').textContent = 'Saved!';
  });
});
