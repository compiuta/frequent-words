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
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            21: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
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
