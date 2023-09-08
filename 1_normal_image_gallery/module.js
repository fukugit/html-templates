import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';

const e1 = document.querySelector('#item1');
const annotation1 = annotate(e1, { type: 'box', color: '#213555', animationDuration: 200 });
const e2 = document.querySelector('#item2');
const annotation2 = annotate(e2, { type: 'box', color: '#213555', animationDuration: 200 });
const e3 = document.querySelector('#item3');
const annotation3 = annotate(e3, { type: 'box', color: '#213555', animationDuration: 200 });

const e4 = document.querySelector('#item4');
const annotation4 = annotate(e4, { type: 'box', color: '#213555', animationDuration: 200 });
const e5 = document.querySelector('#item5');
const annotation5 = annotate(e5, { type: 'box', color: '#213555', animationDuration: 200 });
const e6 = document.querySelector('#item6');
const annotation6 = annotate(e6, { type: 'box', color: '#213555', animationDuration: 200 });

const e7 = document.querySelector('#item7');
const annotation7 = annotate(e7, { type: 'box', color: '#213555', animationDuration: 200 });
const e8 = document.querySelector('#item8');
const annotation8 = annotate(e8, { type: 'box', color: '#213555', animationDuration: 200 });
const e9 = document.querySelector('#item9');
const annotation9 = annotate(e9, { type: 'box', color: '#213555', animationDuration: 200 });

const title = document.querySelector('#title');
const annotationTiitle = annotate(title, { type: 'underline', color: '#b5263e', animationDuration: 300 });

const news = document.querySelector('#news');
const annotationNews = annotate(news, { type: 'underline', color: '#b5263e', animationDuration: 300 });
const category = document.querySelector('#category');
const annotationCategory = annotate(category, { type: 'underline', color: '#b5263e', animationDuration: 300 });
const about = document.querySelector('#about');
const annotationAbout = annotate(about, { type: 'underline', color: '#b5263e', animationDuration: 300 });

const ag = annotationGroup([annotation1, annotation2, annotation3,
  annotation4, annotation5, annotation6, annotation7, annotation8, annotation9,
  annotationTiitle,
  annotationNews, annotationCategory, annotationAbout]);
ag.show();
// annotation1.show();
