import { mdiTextToSpeech, mdiSpeaker, mdiCalculator } from '@mdi/js'
import SpeechOnText from './../images/portfolio/speechtotext.png';
import texttospeech from './../images/portfolio/texttospeech.png';
import Calculator from './../../assets/images/portfolio/calculator.png';
import { vue, html, css, js } from './colorCodes.js'

export default [
     {
          key: 3,
          title: "Web Calculator",
          icon: mdiCalculator,
          content: "Calculator is one fascinating computer that is created during the early days. People Have been using it for computing a lot of stuff. Its been a useful tool for eveyone specially students and workers. So I created a simple calculator using Vue sincce I have been learning how to create and build using vuejs.",
          link: 'https://jenuelganawed-calculator-vue.netlify.app/',
          image: Calculator,
          langUsed: [
               {
                    color: vue,
                    text: 'VueJs'
               }
          ]
     },
     {
          key: 1,
          title: "Speech To Text",
          icon: mdiSpeaker,
          content: "This is a simple speech to text using HTML, CSS, and JS. I was fascinated with what javascrip can do so I made a simple, project to try and convert speech to text. And JavaScript has a library called Speech Recognition. 👍👍👍",
          image: SpeechOnText,
          link: 'https://jenuelganawed-speechtotext.netlify.app/',
          langUsed: [
               {
                    color: html,
                    text: 'html'
               },
               {
                    color: css,
                    text: 'css'
               },
               {
                    color: js,
                    text: 'javaScript'
               }
          ]
     },
     {
          key: 2,
          title: "Text To Speech",
          icon: mdiTextToSpeech,
          content: "This is a simple Text to Speech using HTML, CSS, and JS. I was fascinated with what javascrip can do so I made a simple, project to try and convert speech to text. And JavaScript has a library called Speech Recognition. 👍👍",
          image: texttospeech,
          link: 'https://jenuelganawed-texttospeach.netlify.app/',
          langUsed: [
               {
                    color: html,
                    text: 'html'
               },
               {
                    color: css,
                    text: 'css'
               },
               {
                    color: js,
                    text: 'javaScript'
               }
          ]
     }
];