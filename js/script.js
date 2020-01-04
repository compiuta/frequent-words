    'use strict';

    let frequentWordsModel = (function() {
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
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            }
        }

        return {
            wordList: wordList,
        }

    })();

    let frequentWordsView = (function() {
        const appContainer = document.querySelector('[data-container="app"]');

        return {
            appContainer: appContainer,
        }

    })();

    let languageChoicesView = (function() {
        const languageChoices = document.querySelectorAll('[data-language]');

        return {
            languageChoices: languageChoices,
        }

    })();

    let frequentWordsController = (function() {

    })();

    
    
    
    
    const languageFlagSelected = document.querySelector('[data-container="flag"]');
    const languageNameSelected = document.querySelector('[data-container="country"]');
    const languageSelectorButton = document.querySelector('[data-container="language"]');
    const languageMenu = document.querySelector('[data-container="language-menu"]');
    let chosenLanguage = 'english';
    let languageCode = 'en';
    
    function populateWordList() {
        let wordContainerFragment = document.createDocumentFragment();
        
        frequentWordsView.appContainer.innerHTML = '';
    
        for(let key in frequentWordsModel.wordList) {
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
            wordContainer.href = 'https://forvo.com/word/' + frequentWordsModel.wordList[key][chosenLanguage] + '/#' + languageCode;
            word.innerText = frequentWordsModel.wordList[key][chosenLanguage];
        
            wordContainer.appendChild(wordNumber);
            wordContainer.appendChild(word);
            wordContainerFragment.appendChild(wordContainer);
        }

        frequentWordsView.appContainer.appendChild(wordContainerFragment);
    }
    
    function setLanguage() {
        const currentLanguage = chosenLanguage;
        let dataLanguage = this.dataset.language;
        let languageName = this.innerText;
        chosenLanguage = dataLanguage;
        languageCode = this.dataset.languageCode;
    
        languageChoicesView.languageChoices.forEach(function(element) {
            if(element.dataset.language !== dataLanguage) {
                element.classList.remove('hide');
            } else {
                element.classList.add('hide');
            }
        });
        
        languageFlagSelected.classList.remove(currentLanguage);
        languageFlagSelected.classList.add(chosenLanguage);
        
        if(chosenLanguage === 'all') {
            languageNameSelected.innerText = '';
        } else {
            languageNameSelected.innerText = languageName;
        }
    
        populateWordList();
    }
    
    function populateTable() {
        frequentWordsView.appContainer.innerHTML = '';
    
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
    
        for(let key in frequentWordsModel.wordList) {
            const wordRow = document.createElement('tr');
            wordRow.classList.add('word-row');
    
            if(key % 2 === 0) {
                wordRow.classList.add('even-row');
            }
    
            for(let item in frequentWordsModel.wordList[key]) {
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
                wordCellLink.href = 'https://forvo.com/word/' + frequentWordsModel.wordList[key][item] + '/#' + cellLanguageCode;
                wordCellLink.classList.add('word-cell-link');
                wordCell.classList.add('word-cell');
                wordCell.classList.add(item + '-cell');
                wordCellLink.innerText = frequentWordsModel.wordList[key][item];
                wordCell.appendChild(wordCellLink);
                wordRow.appendChild(wordCell);
            }
            wordTable.appendChild(wordRow);
        }
    
        tableWrap.appendChild(wordTable);
        frequentWordsView.appContainer.appendChild(tableWrap);
    }
    
    function showlanguageMenu() {
        languageMenu.classList.toggle('hide');
    }
    
    languageChoicesView.languageChoices.forEach(function(element) {
        element.addEventListener('click', setLanguage);
        
        if(element.dataset.language === 'all') {
            element.addEventListener('click', populateTable);
        }
    });
    
    languageSelectorButton.addEventListener('mouseover', showlanguageMenu);
    languageSelectorButton.addEventListener('mouseout', showlanguageMenu);
    
    populateWordList();
