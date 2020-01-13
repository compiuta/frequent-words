    'use strict';

    window.app = {
        test: 'test'
    };

    /*
        1 english
        2 spanish
        3 italian
        4 portuguese
        5 french
        6 german
        7 russian
        8 japanese
        9 korean
    */

    (function(window) {

        let frequentWordsModel = {
            languageSetting: {
                chosenLanguage: 'english',
                languageCode: 'en'
            },
            wordList: {
            0: {
                english: 'the',
                spanish: 'el',
                italian: 'il',
                portuguese: 'o',
                french: 'le'
            },
            1: {
                english: 'of',
                spanish: 'de',
                italian: 'di',
                portuguese: 'de',
                french: 'de'
            },
            2: {
                english: 'a',
                spanish: 'un',
                italian: 'un',
                portuguese: 'um',
                french: 'un'
            },
            3: {
                english: 'be',
                spanish: 'ser',
                italian: 'essere',
                portuguese: 'ser',
                french: 'être'
            },
            4: {
                english: 'and',
                spanish: 'y',
                italian: 'e',
                portuguese: 'e',
                french: 'et'
            },
            5: {
                english: 'at',
                spanish: 'a',
                italian: 'a',
                portuguese: 'a',
                french: 'à'
            },
            6: {
                english: 'he',
                spanish: 'él',
                italian: 'lui',
                portuguese: 'ele',
                french: 'il'
            },
            7: {
                english: 'have',
                spanish: 'haber',
                italian: 'avere',
                portuguese: 'haver',
                french: 'avoir'
            },
            8: {
                english: 'not',
                spanish: 'ni',
                italian: 'non',
                portuguese: 'nem',
                french: 'ne'
            },
            9: {
                english: 'I',
                spanish: 'yo',
                italian: 'io',
                portuguese: 'eu',
                french: 'je'
            },
            10: {
                english: 'your',
                spanish: 'su',
                italian: 'suo',
                portuguese: 'seu',
                french: 'son'
            },
            11: {
                english: 'than',
                spanish: 'que',
                italian: 'che',
                portuguese: 'que',
                french: 'que'
            },
            12: {
                english: 'is',
                spanish: 'se',
                italian: 'si',
                portuguese: 'se',
                french: 'se'
            },
            13: {
                english: 'who',
                spanish: 'quién',
                italian: 'chi',
                portuguese: 'quem',
                french: 'qui'
            },
            14: {
                english: 'this',
                spanish: 'esto',
                italian: 'questo',
                portuguese: 'isto',
                french: 'ce'
            },
            15: {
                english: 'in',
                spanish: 'en',
                italian: 'in',
                portuguese: 'no',
                french: 'dans'
            },
            16: {
                english: 'in',
                spanish: 'en',
                italian: 'in',
                portuguese: 'em',
                french: 'en'
            },
            17: {
                english: 'of the',
                spanish: 'del',
                italian: 'dal',
                portuguese: 'do',
                french: 'du'
            },
            18: {
                english: 'her',
                spanish: 'ella',
                italian: 'lei',
                portuguese: 'ela',
                french: 'elle'
            },
            19: {
                english: 'to the',
                spanish: 'al',
                italian: 'alla',
                portuguese: 'ao',
                french: 'au'
            },
            20: {
                english: 'for',
                spanish: 'para',
                italian: 'per',
                portuguese: 'para',
                french: 'pour'
            },
            21: {
                english: 'not',
                spanish: 'no',
                italian: 'non',
                portuguese: 'não',
                french: 'pas'
            },
            22: {
                english: 'you',
                spanish: 'usted',
                italian: 'voi',
                portuguese: 'você',
                french: 'vous'
            },
            23: {
                english: 'by',
                spanish: 'por',
                italian: 'da',
                portuguese: 'por',
                french: 'par'
            },
            24: {
                english: 'on',
                spanish: 'en',
                italian: 'sul',
                portuguese: 'na',
                french: 'sur'
            },
            25: {
                english: 'do',
                spanish: 'hacer',
                italian: 'fare',
                portuguese: 'fazer',
                french: 'faire'
            },
            26: {
                english: 'more',
                spanish: 'mas',
                italian: 'piu',
                portuguese: 'mais',
                french: 'plus'
            },
            27: {
                english: 'say',
                spanish: 'decir',
                italian: 'dire',
                portuguese: 'dizer',
                french: 'dire'
            },
            28: {
                english: 'me',
                spanish: 'me',
                italian: 'mi',
                portuguese: 'me',
                french: 'me'
            },
            29: {
                english: 'we',
                spanish: 'nosotros',
                italian: 'noi',
                portuguese: 'nós',
                french: 'on'
            },
            30: {
                english: 'my',
                spanish: 'mi',
                italian: 'mio',
                portuguese: 'meu',
                french: 'mon'
            },
            31: {
                english: 'to him/her',
                spanish: 'le',
                italian: 'gli',
                portuguese: 'lhe',
                french: 'lui'
            },
            32: {
                english: 'us',
                spanish: 'nosotros',
                italian: 'noi',
                portuguese: 'nos',
                french: 'nous'
            },
            33: {
                english: 'like',
                spanish: 'como',
                italian: 'come',
                portuguese: 'como',
                french: 'comme'
            },
            34: {
                english: 'but',
                spanish: 'pero',
                italian: 'ma',
                portuguese: 'mas',
                french: 'mais'
            },
            35: {
                english: 'power',
                spanish: 'poder',
                italian: 'potere',
                portuguese: 'poder',
                french: 'pouvoir'
            },
            36: {
                english: 'with',
                spanish: 'con',
                italian: 'con',
                portuguese: 'com',
                french: 'avec'
            },
            37: {
                english: 'all',
                spanish: 'todo',
                italian: 'tutto',
                portuguese: 'tudo',
                french: 'tout'
            },
            38: {
                english: 'it/there',
                spanish: 'es/allí/ahí',
                italian: 'ci',
                portuguese: 'lá/aí',
                french: 'y'
            },
            39: {
                english: 'go',
                spanish: 'ir',
                italian: 'andare',
                portuguese: 'ir',
                french: 'aller'
            },
            40: {
                english: 'see',
                spanish: 'ver',
                italian: 'vedere',
                portuguese: 'ver',
                french: 'voir'
            },
            41: {
                english: 'good',
                spanish: 'bien',
                italian: 'bene',
                portuguese: 'bem',
                french: 'bien'
            },
            42: {
                english: 'where',
                spanish: ' dónde',
                italian: 'dove',
                portuguese: 'onde',
                french: 'où'
            },
            43: {
                english: 'without',
                spanish: 'sin',
                italian: 'senza',
                portuguese: 'sem',
                french: 'sans'
            },
            44: {
                english: 'you',
                spanish: 'tú',
                italian: 'tu',
                portuguese: 'tu',
                french: 'tu'
            },
            45: {
                english: 'or',
                spanish: 'o',
                italian: 'o',
                portuguese: 'ou',
                french: 'ou'
            },
            46: {
                english: 'them',
                spanish: 'les',
                italian: 'loro',
                portuguese: 'eles',
                french: 'leur'
            },
            47: {
                english: 'man',
                spanish: 'hombre',
                italian: 'uomo',
                portuguese: 'homem',
                french: 'homme'
            },
            48: {
                english: 'if',
                spanish: 'si',
                italian: 'se',
                portuguese: 'se',
                french: 'si'
            },
            49: {
                english: 'two',
                spanish: 'dos',
                italian: 'due',
                portuguese: 'dois',
                french: 'deux'
            },
            50: {
                english: 'husband',
                spanish: 'marido',
                italian: 'marito',
                portuguese: 'marido',
                french: 'mari'
            },
            51: {
                english: 'me',
                spanish: 'yo',
                italian: 'io',
                portuguese: 'eu',
                french: 'moi'
            },
            52: {
                english: 'want',
                spanish: 'querer',
                italian: 'volere',
                portuguese: 'querer',
                french: 'vouloir'
            },
            53: {
                english: 'to you',
                spanish: 'te',
                italian: 'ti',
                portuguese: 'te',
                french: 'te'
            },
            54: {
                english: 'woman',
                spanish: 'mujer',
                italian: 'donna',
                portuguese: 'mulher',
                french: 'femme'
            },
            55: {
                english: 'come',
                spanish: 'venir',
                italian: 'venire',
                portuguese: 'vir',
                french: 'venir'
            },
            56: {
                english: 'when',
                spanish: 'cuando',
                italian: 'quando',
                portuguese: 'quando',
                french: 'quand'
            },
            57: {
                english: 'large',
                spanish: 'grande',
                italian: 'grande',
                portuguese: 'grande',
                french: 'grand'
            },
            58: {
                english: 'that one',
                spanish: 'aquel',
                italian: 'quel',
                portuguese: 'Naquele',
                french: 'celui'
            },
            59: {
                english: 'our',
                spanish: 'nuestro',
                italian: 'nostro',
                portuguese: 'nosso',
                french: 'notre'
            },
            60: {
                english: 'must',
                spanish: 'deber',
                italian: 'dovere',
                portuguese: 'dever',
                french: 'devoir'
            }
            ,
            61: {
                english: 'there',
                spanish: 'alli',
                italian: 'li',
                portuguese: 'lá',
                french: 'là'
            },
            62: {
                english: 'day',
                spanish: 'dia',
                italian: 'giorno',
                portuguese: 'dia',
                french: 'jour'
            },
            63: {
                english: 'take',
                spanish: 'tomar',
                italian: 'prendere',
                portuguese: 'pegar',
                french: 'prendre'
            },
            64: {
                english: 'same',
                spanish: 'mismo',
                italian: 'stesso',
                portuguese: 'mesmo',
                french: 'même'
            },
            65: {
                english: 'your',
                spanish: 'su',
                italian: 'vostro',
                portuguese: 'seu',
                french: 'votre'
            },
            66: {
                english: 'nothing',
                spanish: 'nada',
                italian: 'niente',
                portuguese: 'nada',
                french: 'rien'
            },
            67: {
                english: 'small',
                spanish: 'pequeño',
                italian: 'piccolo',
                portuguese: 'pequeno',
                french: 'petit'
            },
            68: {
                english: 'still',
                spanish: 'aun',
                italian: 'ancora',
                portuguese: 'ainda',
                french: 'encore'
            },
            69: {
                english: 'also',
                spanish: 'también',
                italian: 'anche',
                portuguese: 'também',
                french: 'aussi'
            },
            70: {
                english: 'some',
                spanish: 'algún',
                italian: 'qualche',
                portuguese: 'algum',
                french: 'quelque'
            },
            71: {
                english: 'whose',
                spanish: 'cuyo',
                italian: 'cui',
                portuguese: 'cujo',
                french: 'dont'
            },
            72: {
                english: 'sea',
                spanish: 'mar',
                italian: 'mare',
                portuguese: 'mar',
                french: 'mer'
            },
            73: {
                english: 'find',
                spanish: 'encontrar',
                italian: 'trovare',
                portuguese: 'encontrar',
                french: 'trouver'
            },
            74: {
                english: 'give',
                spanish: 'dar',
                italian: 'dare',
                portuguese: 'dar',
                french: 'donner'
            },
            75: {
                english: 'time',
                spanish: 'tiempo',
                italian: 'tempo',
                portuguese: 'tempo',
                french: 'temps'
            },
            76: {
                english: 'that',
                spanish: 'eso',
                italian: 'quello',
                portuguese: 'isso',
                french: 'ça'
            },
            77: {
                english: 'not much',
                spanish: 'poco',
                italian: 'poco',
                portuguese: 'pouco',
                french: 'peu'
            },
            78: {
                english: 'need',
                spanish: 'necesitar',
                italian: 'bisogno',
                portuguese: 'precisar',
                french: 'falloir'
            },
            79: {
                english: 'below',
                spanish: 'bajo',
                italian: 'sotto',
                portuguese: 'baixo',
                french: 'sous'
            },
            80: {
                english: 'speak',
                spanish: 'hablar',
                italian: 'parlare',
                portuguese: 'falar',
                french: 'parler'
            },
            81: {
                english: 'so',
                spanish: 'entonces',
                italian: 'allora',
                portuguese: 'então',
                french: 'alors'
            },
            82: {
                english: 'hand',
                spanish: 'mano',
                italian: 'mano',
                portuguese: 'mão',
                french: 'main'
            },
            83: {
                english: 'thing',
                spanish: 'cosa',
                italian: 'cosa',
                portuguese: 'coisa',
                french: 'chose'
            },
            84: {
                english: 'your',
                spanish: 'tu',
                italian: 'tuo',
                portuguese: 'teu',
                french: 'ton'
            },
            85: {
                english: 'put',
                spanish: 'meter',
                italian: 'mettere',
                portuguese: 'meter',
                french: 'mettre'
            },
            86: {
                english: 'life',
                spanish: 'vida',
                italian: 'vita',
                portuguese: 'vida',
                french: 'vie'
            },
            87: {
                english: 'know',
                spanish: 'saber',
                italian: 'sapere',
                portuguese: 'saber',
                french: 'savoir'
            },
            88: {
                english: 'eyes',
                spanish: 'ojos',
                italian: 'occhi',
                portuguese: 'olhos',
                french: 'yeux'
            },
            89: {
                english: 'pass',
                spanish: 'pasar',
                italian: 'passare',
                portuguese: 'passar',
                french: 'passer'
            },
            90: {
                english: 'another',
                spanish: 'otro',
                italian: 'altro',
                portuguese: 'outro',
                french: 'autre'
            },
            91: {
                english: 'after',
                spanish: 'después',
                italian: 'dopo',
                portuguese: 'depois',
                french: 'après'
            },
            92: {
                english: 'look',
                spanish: 'mirar',
                italian: 'guardare',
                portuguese: 'olhar',
                french: 'regarder'
            },
            93: {
                english: 'always',
                spanish: 'siempre',
                italian: 'sempre',
                portuguese: 'sempre',
                french: 'toujours'
            },
            94: {
                english: 'then',
                spanish: 'luego',
                italian: 'poi',
                portuguese: 'depois',
                french: 'puis'
            },
            95: {
                english: 'never',
                spanish: 'jamás',
                italian: 'mai',
                portuguese: 'jamais',
                french: 'jamais'
            },
            96: {
                english: 'that',
                spanish: 'aquello',
                italian: 'quella',
                portuguese: 'isso',
                french: 'cela'
            },
            97: {
                english: 'love',
                spanish: 'amar',
                italian: 'amare',
                portuguese: 'amar',
                french: 'aimer'
            },
            98: {
                english: 'no',
                spanish: 'no',
                italian: 'non',
                portuguese: 'não',
                french: 'non'
            },
            99: {
                english: 'hour',
                spanish: 'hora',
                italian: 'ora',
                portuguese: 'hora',
                french: 'heure'
            },
            100: {
                english: 'believe',
                spanish: 'creer',
                italian: 'credere',
                portuguese: 'acreditar',
                french: 'croire'
            },
            101: {
                english: 'hundred',
                spanish: 'cien',
                italian: 'cento',
                portuguese: 'cem',
                french: 'cent'
            },
            102: {
                english: 'world',
                spanish: 'mundo',
                italian: 'mondo',
                portuguese: 'mundo',
                french: 'monde'
            },
            103: {
                english: 'therefore',
                spanish: 'entonces',
                italian: 'quindi',
                portuguese: 'portanto',
                french: 'donc'
            },
            104: {
                english: 'child',
                spanish: 'niño ',
                italian: 'bambino',
                portuguese: 'criança',
                french: 'enfant'
            },
            105: {
                english: 'time',
                spanish: 'vez',
                italian: 'volta',
                portuguese: 'vez',
                french: 'fois'
            },
            106: {
                english: 'alone',
                spanish: 'solo',
                italian: 'solo',
                portuguese: 'sozinho',
                french: 'seul'
            },
            107: {
                english: 'between',
                spanish: 'entre',
                italian: 'tra',
                portuguese: 'entre',
                french: 'entre'
            },
            108: {
                english: 'towards',
                spanish: 'hacia',
                italian: 'verso',
                portuguese: 'em direção',
                french: 'vers'
            },
            109: {
                english: 'at home',
                spanish: 'en casa',
                italian: 'em casa',
                portuguese: 'in casa',
                french: 'chez'
            },
            110: {
                english: 'ask',
                spanish: 'preguntar',
                italian: 'domandare',
                portuguese: 'perguntar',
                french: 'demander'
            },
            111: {
                english: 'young',
                spanish: 'joven',
                italian: 'giovane',
                portuguese: 'jovem',
                french: 'jeune'
            },
            112: {
                english: 'until',
                spanish: 'hasta',
                italian: 'finché',
                portuguese: 'até',
                french: 'jusque'
            },
            113: {
                english: 'very',
                spanish: 'muy',
                italian: 'molto',
                portuguese: 'muito',
                french: 'très'
            },
            114: {
                english: 'moment',
                spanish: 'momento',
                italian: 'momento',
                portuguese: 'momento',
                french: 'moment'
            },
            115: {
                english: 'remain',
                spanish: 'quedar',
                italian: 'restare',
                portuguese: 'ficar',
                french: 'rester'
            },
            116: {
                english: 'respond',
                spanish: 'responder',
                italian: 'rispondere',
                portuguese: 'responder',
                french: 'répondre'
            },
            117: {
                english: 'head',
                spanish: 'cabeza',
                italian: 'testa',
                portuguese: 'cabeça',
                french: 'tête'
            },
            118: {
                english: 'father',
                spanish: 'padre',
                italian: 'padre',
                portuguese: 'pai',
                french: 'père'
            },
            119: {
                english: 'daughter',
                spanish: 'hija',
                italian: 'figlia',
                portuguese: 'filha',
                french: 'fille'
            },
            120: {
                english: 'thousand',
                spanish: 'mil',
                italian: 'mille',
                portuguese: 'mil',
                french: 'mille'
            },
            121: {
                english: 'firt',
                spanish: 'primero',
                italian: 'primo',
                portuguese: 'primeiro',
                french: 'premier'
            },
            122: {
                english: 'because',
                spanish: 'porque',
                italian: 'perché',
                portuguese: 'porque',
                french: 'car'
            },
            123: {
                english: 'hear',
                spanish: 'oir',
                italian: 'sentire',
                portuguese: 'ouvir',
                french: 'entendre'
            },
            124: {
                english: 'nor',
                spanish: 'ni',
                italian: 'né',
                portuguese: 'nem',
                french: 'ni'
            },
            125: {
                english: 'good',
                spanish: 'bueno',
                italian: 'buono',
                portuguese: 'bom',
                french: 'bon'
            },
            126: {
                english: 'three',
                spanish: 'tres',
                italian: 'tre',
                portuguese: 'três',
                french: 'trois'
            },
            127: {
                english: 'heart',
                spanish: 'corazón',
                italian: 'cuore',
                portuguese: 'coração',
                french: 'cœur'
            },
            128: {
                english: 'like this',
                spanish: 'así',
                italian: 'così',
                portuguese: 'assim',
                french: 'ainsi'
            },
            129: {
                english: 'year',
                spanish: 'año',
                italian: 'anno',
                portuguese: 'ano',
                french: 'an'
            },
            130: {
                english: 'four',
                spanish: 'cuatro',
                italian: 'quattro',
                portuguese: 'quatro',
                french: 'quatre'
            },
            131: {
                english: 'land',
                spanish: 'tiera',
                italian: 'terra',
                portuguese: 'terra',
                french: 'terre'
            },
            132: {
                english: 'against',
                spanish: 'contra',
                italian: 'contro',
                portuguese: 'contra',
                french: 'contre'
            },
            133: {
                english: 'god',
                spanish: 'dios',
                italian: 'dio',
                portuguese: 'deus',
                french: 'dieu'
            },
            134: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            135: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            }
        }
    }

        window.app = window.app || {};
        window.app.frequentWordsModel = frequentWordsModel;

    })(window);

    (function(window) {
        let frequentWordsView = {
            init: function(setLanguage, populateTable){
                frequentWordsView.languageFlagSelected = document.querySelector('[data-container="flag"]');
                frequentWordsView.languageNameSelected = document.querySelector('[data-container="country"]');
                frequentWordsView.languageSelectorButton = document.querySelector('[data-container="language"]');
                frequentWordsView.languageMenu = document.querySelector('[data-container="language-menu"]');
                frequentWordsView.appContainer = document.querySelector('[data-container="app"]');
                frequentWordsView.languageChoices = document.querySelectorAll('[data-language]');

                app.frequentWordsView.addEventListeners(setLanguage, populateTable);
            },
            showlanguageMenu: function() {
                app.frequentWordsView.languageMenu.classList.toggle('hide');
            },       
            addEventListeners: function(setLanguage, populateTable) {
                app.frequentWordsView.languageChoices.forEach(function(element) {
                    element.addEventListener('click', setLanguage);
                    
                    if(element.dataset.language === 'all') {
                        element.addEventListener('click', populateTable);
                    }
                });
                
                app.frequentWordsView.languageSelectorButton.addEventListener('mouseover', app.frequentWordsView.showlanguageMenu);
                app.frequentWordsView.languageSelectorButton.addEventListener('mouseout', app.frequentWordsView.showlanguageMenu);
            }
        }
        
        window.app = window.app || {};
        window.app.frequentWordsView = frequentWordsView;

    })(window);

    (function(window) {
        let frequentWordsController = {
            init: function(){
                app.frequentWordsView.init(app.frequentWordsController.setLanguage, app.frequentWordsController.populateTable);
                app.frequentWordsController.render();
            },
            populateTable: function() {
                app.frequentWordsView.appContainer.innerHTML = '';
                const languageArray = ['English', 'Español', 'Italiano', 'Português', 'Français']
                const tableWrap = document.createElement('div');
                const wordTable = document.createElement('table');
                const tableHeaderRow = document.createElement('tr');
            
                tableWrap.classList.add('responsive-table');
                wordTable.classList.add('word-table');
                tableHeaderRow.classList.add('table-header-row');
            
                for(let i = 0; i < languageArray.length; i++) {
                    let tableHeader = document.createElement('th');
                    tableHeader.classList.add('table-header');
                    tableHeader.innerText = languageArray[i];
                    tableHeaderRow.appendChild(tableHeader);
                }
            
                wordTable.appendChild(tableHeaderRow);
                
            
                for(let key in app.frequentWordsModel.wordList) {
                    const wordRow = document.createElement('tr');
                    wordRow.classList.add('word-row');
            
                    if(key % 2 === 0) {
                        wordRow.classList.add('even-row');
                    }
            
                    for(let item in app.frequentWordsModel.wordList[key]) {
                        let wordCell = document.createElement('td');
                        let wordCellLink = document.createElement('a');
                        let cellLanguageCode = '';
            
                        if(item === 'spanish') {
                            cellLanguageCode = 'es';
                        } else if(item === 'italian') {
                            cellLanguageCode = 'it';
                        } else if(item === 'portuguese') {
                            cellLanguageCode = 'pt';
                        }  else if(item === 'french') {
                            cellLanguageCode = 'fr';
                        }  else {
                            cellLanguageCode = 'en';
                        }  
            
                        wordCellLink.setAttribute('target', '_blank');
                        wordCellLink.href = 'https://forvo.com/word/' + app.frequentWordsModel.wordList[key][item] + '/#' + cellLanguageCode;
                        wordCellLink.classList.add('word-cell-link');
                        wordCell.classList.add('word-cell');
                        wordCell.classList.add(item + '-cell');
                        wordCellLink.innerText = app.frequentWordsModel.wordList[key][item];
                        wordCell.appendChild(wordCellLink);
                        wordRow.appendChild(wordCell);
                    }
                    wordTable.appendChild(wordRow);
                }
            
                tableWrap.appendChild(wordTable);
                app.frequentWordsView.appContainer.appendChild(tableWrap);
            },
            render: function() {
                const mainContent = document.createElement('div');
                let wordContainerFragment = document.createDocumentFragment();
        
                mainContent.classList.add('main-content');
        
                app.frequentWordsView.appContainer.innerHTML = '';
            
                for(let key in app.frequentWordsModel.wordList) {

                    const wordContainer = document.createElement('a');
                    const wordNumber = document.createElement('div');
                    const word = document.createElement('div');
                    const translatedWordsContainer = document.createElement('div');
                    translatedWordsContainer.classList.add('translated-words-container');
                    
                    let index = key;
            
                        // format the number infront of the word
                        if(index.length === 1) {
                            index = '000' + key;
                        } else if(index.length === 2) {
                            index = '00' + key;
                        } else if(index.length === 3) {
                            index = '0' + key;
                        }
                
                    wordContainer.classList.add('word-container');
                    wordContainer.setAttribute('target', '_blank');
                    wordNumber.classList.add('word-number');
                    word.classList.add('word');
                    
                    wordNumber.innerText = index;
                    wordContainer.href = 'https://forvo.com/word/' + app.frequentWordsModel.wordList[key][app.frequentWordsModel.languageSetting.chosenLanguage] + '/#' + app.frequentWordsModel.languageSetting.languageCode;
                    word.innerText = app.frequentWordsModel.wordList[key][app.frequentWordsModel.languageSetting.chosenLanguage];
    
                    
                for(let item in app.frequentWordsModel.wordList[key]) {
                    let langCode;
    
                    if(item === 'spanish') {
                        langCode = 'es';
                    } else if(item === 'italian') {
                        langCode = 'it';
                    } else if(item === 'portuguese') {
                        langCode = 'pt';
                    }  else if(item === 'french') {
                        langCode = 'fr';
                    }  else {
                        langCode = 'en';
                    };
                    
                    if(langCode !== app.frequentWordsModel.languageSetting.languageCode) {
                        //addTranslatedItemProperties here
                        const translatedWordContainer = document.createElement('a');
                        const langCodeContainer = document.createElement('span');
                        const translatedWord = document.createElement('span');

                        translatedWordContainer.href = 'https://forvo.com/word/' + app.frequentWordsModel.wordList[key][item] + '/#' + langCode;
                        translatedWordContainer.setAttribute('target', '_blank');
                        translatedWord.innerText = app.frequentWordsModel.wordList[key][item];
                        langCodeContainer.innerText = langCode;
                        translatedWord.classList.add('translated-word');
                        langCodeContainer.classList.add('translated-word-lang');
                        translatedWordContainer.classList.add('translated-word-container');
                        translatedWordContainer.appendChild(langCodeContainer);
                        translatedWordContainer.appendChild(translatedWord);
                        translatedWordsContainer.appendChild(translatedWordContainer);
                    };
                }
        

                    wordContainer.appendChild(wordNumber);
                    wordContainer.appendChild(word);
                    wordContainer.appendChild(translatedWordsContainer);
                    wordContainerFragment.appendChild(wordContainer);
                }
                
                
                mainContent.appendChild(wordContainerFragment);
                app.frequentWordsView.appContainer.appendChild(mainContent);
            },
            setLanguage: function() {
                const currentLanguage = app.frequentWordsModel.languageSetting.chosenLanguage;
                let dataLanguage = this.dataset.language;
                let languageName = this.innerText;
                app.frequentWordsModel.languageSetting.chosenLanguage = dataLanguage;
                app.frequentWordsModel.languageSetting.languageCode = this.dataset.languageCode;
            
                app.frequentWordsView.languageChoices.forEach(function(element) {
                    if(element.dataset.language !== dataLanguage) {
                        element.classList.remove('hide');
                    } else {
                        element.classList.add('hide');
                    }
                });
                
                app.frequentWordsView.languageFlagSelected.classList.remove(currentLanguage);
                app.frequentWordsView.languageFlagSelected.classList.add(app.frequentWordsModel.languageSetting.chosenLanguage);
                
                if(app.frequentWordsModel.languageSetting.chosenLanguage === 'all') {
                    app.frequentWordsView.languageNameSelected.innerText = '';
                } else {
                    app.frequentWordsView.languageNameSelected.innerText = languageName;
                }
            
                app.frequentWordsController.render();
            }
        }
        
        window.app = window.app || {};
        window.app.frequentWordsController = frequentWordsController;

        app.frequentWordsController.init();

    })(window);
