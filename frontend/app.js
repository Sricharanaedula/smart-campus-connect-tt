async function checkApi() {
  const out = document.getElementById('api-output')
  out.textContent = 'Checking API...'
  try {
    const res = await fetch('/');
    out.textContent = `Status: ${res.status} - ${res.statusText}`
    const text = await res.text()
    if (text.length>200) out.textContent += '\n(backend returned HTML)';
  } catch (e) {
    out.textContent = 'Error: ' + e.message
  }
}

document.getElementById('api-check').addEventListener('click', checkApi)
