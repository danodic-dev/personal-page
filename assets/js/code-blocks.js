document.querySelectorAll('.post__body h1, .post__body h2, .post__body h3, .post__body h4, .post__body h5, .post__body h6').forEach(function (heading) {
  if (!heading.id) return;
  var anchor = document.createElement('a');
  anchor.href = '#' + heading.id;
  anchor.className = 'heading-anchor';
  anchor.setAttribute('aria-hidden', 'true');
  anchor.textContent = '#';
  heading.appendChild(anchor);
});

document.querySelectorAll('.chrome__content table').forEach(function (table) {
  var wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';
  table.parentNode.insertBefore(wrapper, table);
  wrapper.appendChild(table);
});

document.querySelectorAll('.highlighter-rouge').forEach(function (outer) {
  var code = outer.querySelector('code');
  if (!code) return;

  var langClass = Array.from(outer.classList).find(function (c) { return c.startsWith('language-'); });
  var lang = langClass ? langClass.replace('language-', '') : '';

  if (!outer.querySelector('.highlight')) return;

  // Header
  var header = document.createElement('div');
  header.className = 'code-block__header';

  var langLabel = document.createElement('span');
  langLabel.className = 'code-block__lang';
  langLabel.textContent = lang;

  var copyBtn = document.createElement('button');
  copyBtn.className = 'code-block__copy';
  copyBtn.textContent = 'copy';
  copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(code.textContent.replace(/\n$/, '')).then(function () {
      copyBtn.textContent = 'copied!';
      setTimeout(function () { copyBtn.textContent = 'copy'; }, 2000);
    });
  });

  header.appendChild(langLabel);
  header.appendChild(copyBtn);

  // Line numbers
  var lines = code.textContent.split('\n');
  if (lines[lines.length - 1] === '') lines.pop();

  var lineNumbers = document.createElement('pre');
  lineNumbers.className = 'code-block__lines';
  lineNumbers.setAttribute('aria-hidden', 'true');
  lineNumbers.textContent = lines.map(function (_, i) { return i + 1; }).join('\n');

  // Body
  var body = document.createElement('div');
  body.className = 'code-block__body';
  body.appendChild(lineNumbers);

  // Wrapper — insert into the DOM before moving outer, so parentNode is still valid
  var wrapper = document.createElement('div');
  wrapper.className = 'code-block';

  outer.parentNode.insertBefore(wrapper, outer);
  wrapper.appendChild(header);
  wrapper.appendChild(body);
  body.appendChild(outer);
});
