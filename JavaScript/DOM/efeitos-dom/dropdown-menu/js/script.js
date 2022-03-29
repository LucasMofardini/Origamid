//organizar o codigo em direfentes arquivos
import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initToolTip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';

//import {initTabNav, teste} from './modules/nav-tab.js';
//import * as teste from './modules/nav-tab.js';
//teste.initA();






initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initToolTip();
initDropDownMenu();


//Modo estrito
//Não tem mais variaveis globais sem declaração  ex: lucas = 10;
//Nao pode deletar o que nao é deletavel ex: delete Array.prototype;
//Não pode colocar palavras reservadas ex: const arguments = 10;


//As variaveis ficam nos mudules, nao sai no escopo 
//Por padrão no type module o THIS é undefined e nao window
//Carrega de forma assincrona, e executa na ordem