const controls = {
  weight: document.querySelector('#weight'),
  width: document.querySelector('#width'),
  slant: document.querySelector('#slant'),
  size: document.querySelector('#size')
};
const specimen = document.querySelector('#specimen');
const cssOutput = document.querySelector('#css-output');
const status = document.querySelector('#status');

function cssValue() {
  return `font-family: "Science Gothic", sans-serif;\nfont-size: ${controls.size.value}px;\nfont-variation-settings: "wght" ${controls.weight.value}, "wdth" ${controls.width.value}, "slnt" ${controls.slant.value};`;
}

function update() {
  specimen.classList.remove('breathing');
  document.querySelector('#animate-button').textContent = '开始呼吸动画';
  specimen.style.fontSize = `${controls.size.value}px`;
  specimen.style.fontVariationSettings = `"wght" ${controls.weight.value}, "wdth" ${controls.width.value}, "slnt" ${controls.slant.value}`;
  Object.entries(controls).forEach(([name, input]) => {
    document.querySelector(`#${name}-output`).textContent = input.value;
  });
  cssOutput.textContent = cssValue();
  status.textContent = '';
}

Object.values(controls).forEach(input => input.addEventListener('input', update));

document.querySelector('#reset-button').addEventListener('click', () => {
  controls.weight.value = 700;
  controls.width.value = 100;
  controls.slant.value = 0;
  controls.size.value = 128;
  update();
  status.textContent = '已恢复默认字体参数';
});

document.querySelector('#random-button').addEventListener('click', () => {
  controls.weight.value = Math.round((100 + Math.random() * 800) / 10) * 10;
  controls.width.value = Math.round(50 + Math.random() * 150);
  controls.slant.value = (Math.round(Math.random() * 20) / -2).toFixed(1);
  controls.size.value = Math.round(60 + Math.random() * 110);
  update();
});

document.querySelector('#animate-button').addEventListener('click', event => {
  const active = specimen.classList.toggle('breathing');
  event.target.textContent = active ? '停止呼吸动画' : '开始呼吸动画';
  status.textContent = active ? '正在循环演示 weight、width 与 slant 轴。' : '';
});

document.querySelector('#copy-button').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(cssValue());
    status.textContent = 'CSS 已复制到剪贴板';
  } catch {
    status.textContent = '无法访问剪贴板，请从下方代码框手动复制。';
  }
});

specimen.addEventListener('input', () => {
  if (!specimen.textContent.trim()) specimen.innerHTML = 'TYPE';
});

document.fonts.ready.then(() => {
  status.textContent = document.fonts.check('16px "Science Gothic"') ? 'Science Gothic 已加载' : '字体加载失败，当前显示系统备用字体';
});

update();
