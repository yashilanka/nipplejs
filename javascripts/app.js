var elDemo = document.getElementById('demo').parentNode.nextElementSibling;
elDemo.innerHTML = 'See the Pen <a href="http://codepen.io/YoannM/pen/gapmMG/">nippleJS</a>'+
	'by Yoann Moinet (<a href="http://codepen.io/YoannM">@YoannM</a>) on'+
	'<a href="http://codepen.io">CodePen</a>.';
elDemo.className = 'codepen';
elDemo.setAttribute('data-user', 'YoannM');
elDemo.setAttribute('data-default-tab', 'result');
elDemo.setAttribute('data-slug-hash', 'gapmMG');
elDemo.setAttribute('data-theme-id', '1775');
elDemo.setAttribute('data-height', '735');

var codepenScript = document.createElement('script');
codepenScript.src = 'http://assets.codepen.io/assets/embed/ei.js';
codepenScript.async = true;
document.body.appendChild(codepenScript);