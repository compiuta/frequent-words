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

        let languageSetting = {
            chosenLanguage: 'english',
            languageCode: 'en'
        };

        const wordList = {
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
                spanish: 'no',
                italian: 'non',
                portuguese: 'não',
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
                english: 'to him/her/them',
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
            72: {
                english: 'whose',
                spanish: 'cuyo',
                italian: 'cui',
                portuguese: 'cujo',
                french: 'dont'
            },
            73: {
                english: 'sea',
                spanish: 'mar',
                italian: 'mare',
                portuguese: 'mar',
                french: 'mer'
            },
            74: {
                english: 'find',
                spanish: 'encontrar',
                italian: 'trovare',
                portuguese: 'encontrar',
                french: 'trouver'
            },
            75: {
                english: 'give',
                spanish: 'dar',
                italian: 'dare',
                portuguese: 'dar',
                french: 'donner'
            },
            76: {
                english: 'time',
                spanish: 'tiempo',
                italian: 'tempo',
                portuguese: 'tempo',
                french: 'temps'
            },
            77: {
                english: 'that',
                spanish: 'eso',
                italian: 'quello',
                portuguese: 'isso',
                french: 'ça'
            },
            78: {
                english: 'not much',
                spanish: 'poco',
                italian: 'poco',
                portuguese: 'pouco',
                french: 'peu'
            },
            79: {
                english: 'need',
                spanish: 'necesitar',
                italian: 'bisogno',
                portuguese: 'precisar',
                french: 'falloir'
            },
            80: {
                english: 'under',
                spanish: 'bajo',
                italian: 'sotto',
                portuguese: 'baixo',
                french: 'sous'
            }
        };

        window.app = window.app || {};
        window.app.wordList = wordList;
        window.app.languageSetting = languageSetting;

    })(window);

    (function(window) {
        const appContainer = document.querySelector('[data-container="app"]');
        const languageChoices = document.querySelectorAll('[data-language]');

        window.app = window.app || {};
        window.app.appContainer = appContainer;
        window.app.languageChoices = languageChoices;

    })(window);

    const languageFlagSelected = document.querySelector('[data-container="flag"]');
    const languageNameSelected = document.querySelector('[data-container="country"]');
    const languageSelectorButton = document.querySelector('[data-container="language"]');
    const languageMenu = document.querySelector('[data-container="language-menu"]');
    
    
    function populateWordList() {
        let wordContainerFragment = document.createDocumentFragment();
        
        app.appContainer.innerHTML = '';
    
        for(let key in app.wordList) {
            const wordContainer = document.createElement('a');
            const wordNumber = document.createElement('span');
            const word = document.createElement('span');
            let index = key;
        
            wordContainer.classList.add('word-container');
            wordNumber.classList.add('word-number');
            word.classList.add('word');
    
            // format the number infront of the word
            if(index.length === 1) {
                index = '000' + key;
            } else if(index.length === 2) {
                index = '00' + key;
            } else if(index.length === 3) {
                index = '0' + key;
            }
    
            wordNumber.innerText = index;
            wordContainer.setAttribute('target', '_blank');
            wordContainer.href = 'https://forvo.com/word/' + app.wordList[key][app.languageSetting.chosenLanguage] + '/#' + app.languageSetting.languageCode;
            word.innerText = app.wordList[key][app.languageSetting.chosenLanguage];
        
            wordContainer.appendChild(wordNumber);
            wordContainer.appendChild(word);
            wordContainerFragment.appendChild(wordContainer);
        }

        app.appContainer.appendChild(wordContainerFragment);
    }
    
    function setLanguage() {
        const currentLanguage = app.languageSetting.chosenLanguage;
        let dataLanguage = this.dataset.language;
        let languageName = this.innerText;
        app.languageSetting.chosenLanguage = dataLanguage;
        app.languageSetting.languageCode = this.dataset.languageCode;
    
        app.languageChoices.forEach(function(element) {
            if(element.dataset.language !== dataLanguage) {
                element.classList.remove('hide');
            } else {
                element.classList.add('hide');
            }
        });
        
        languageFlagSelected.classList.remove(currentLanguage);
        languageFlagSelected.classList.add(app.languageSetting.chosenLanguage);
        
        if(app.languageSetting.chosenLanguage === 'all') {
            languageNameSelected.innerText = '';
        } else {
            languageNameSelected.innerText = languageName;
        }
    
        populateWordList();
    }
    
    function populateTable() {
        app.appContainer.innerHTML = '';
    
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
    
        for(let key in app.wordList) {
            const wordRow = document.createElement('tr');
            wordRow.classList.add('word-row');
    
            if(key % 2 === 0) {
                wordRow.classList.add('even-row');
            }
    
            for(let item in app.wordList[key]) {
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
                wordCellLink.href = 'https://forvo.com/word/' + app.wordList[key][item] + '/#' + cellLanguageCode;
                wordCellLink.classList.add('word-cell-link');
                wordCell.classList.add('word-cell');
                wordCell.classList.add(item + '-cell');
                wordCellLink.innerText = app.wordList[key][item];
                wordCell.appendChild(wordCellLink);
                wordRow.appendChild(wordCell);
            }
            wordTable.appendChild(wordRow);
        }
    
        tableWrap.appendChild(wordTable);
        app.appContainer.appendChild(tableWrap);
    }
    
    function showlanguageMenu() {
        languageMenu.classList.toggle('hide');
    }
    
    app.languageChoices.forEach(function(element) {
        element.addEventListener('click', setLanguage);
        
        if(element.dataset.language === 'all') {
            element.addEventListener('click', populateTable);
        }
    });
    
    languageSelectorButton.addEventListener('mouseover', showlanguageMenu);
    languageSelectorButton.addEventListener('mouseout', showlanguageMenu);
    
    populateWordList();
