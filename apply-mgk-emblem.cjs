// Replace fabricated design icon with the exact MGK General Secretariat emblem.
// Official source: https://www.mgk.gov.tr/index.php/kurumsal/amblem-logo
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const componentPath = path.join(root, 'components/Portal.jsx');
let source = fs.readFileSync(componentPath, 'utf8');
const old = `function Monogram({compact=false}) {
  return <span className={'monogram '+(compact?'monogram-compact':'')} aria-hidden="true">
    <span className="mono-orbit mono-orbit-a"/><span className="mono-orbit mono-orbit-b"/>
    <span className="mono-core"><Layers size={compact?16:23} strokeWidth={1.45}/></span>
  </span>;
}`;
const replacement = `// MGK Genel Sekreterliginin kendi resmi amblemi (mgk.gov.tr).
// Bu site KONA AI'nin bagimsiz ve resmi olmayan tasarim demosudur.
const MGK_OFFICIAL_EMBLEM = 'https://www.mgk.gov.tr/images/kaynaklar/amblem/001_yuvarlak/mgkamblemlogo_yuvarlak.png';
const MGK_OFFICIAL_EMBLEM_JPG = 'https://www.mgk.gov.tr/images/kaynaklar/amblem/001_yuvarlak/mgkamblemlogo_yuvarlak.jpg';
function OfficialEmblem({compact=false}) {
  return <img
    className={'official-emblem '+(compact?'official-emblem-compact':'')}
    src={MGK_OFFICIAL_EMBLEM}
    alt="Millî Güvenlik Kurulu Genel Sekreterliği resmî amblemi"
    width={compact?44:56}
    height={compact?44:56}
    decoding="async"
    onError={e=>{if(!e.currentTarget.src.endsWith('.jpg'))e.currentTarget.src=MGK_OFFICIAL_EMBLEM_JPG;}}
  />;
}`;
if (!source.includes(old)) throw Error('Original Monogram not found; refusing overwrite');
source = source.replace(old, replacement)
  .replaceAll('<Monogram compact/>', '<OfficialEmblem compact/>')
  .replaceAll('<Monogram/>', '<OfficialEmblem/>');
if (source.includes('<Monogram')) throw Error('Original monogram still referenced');
fs.writeFileSync(componentPath, source);
const cssPath = path.join(root, 'app/globals.css');
fs.appendFileSync(cssPath, `
/* Original, unchanged MGK round emblem from www.mgk.gov.tr */
.official-emblem { width:56px; height:56px; object-fit:contain; border:0; display:block; flex-shrink:0; }
.official-emblem-compact { width:44px; height:44px; }
.i-card-top .official-emblem-compact { width:36px; height:36px; }
@media (max-width:800px) { .main-nav .official-emblem { width:44px; height:44px; } }
.demo-bar { position:sticky; top:0; z-index:110; }
`);
const layoutPath = path.join(root, 'app/layout.jsx');
let layout = fs.readFileSync(layoutPath, 'utf8');
if (!layout.includes('icons: { icon: "/favicon.svg" }')) throw Error('Original favicon metadata not found');
layout = layout.replace('icons: { icon: "/favicon.svg" }', 'icons: { icon: "https://www.mgk.gov.tr/images/kaynaklar/amblem/001_yuvarlak/mgkamblemlogo_yuvarlak.png" }');
fs.writeFileSync(layoutPath, layout);
try { fs.unlinkSync(path.join(root, 'public/favicon.svg')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
console.log('Official MGK emblem integrated; unofficial-demo notices retained.');