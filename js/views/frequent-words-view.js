(function(window) {
    'user strict';

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
        },
        render: function(wordData, chosenLanguage, wordDataLangCode) {
            const mainContent = document.createElement('div');
            let wordContainerFragment = document.createDocumentFragment();
    
            mainContent.classList.add('main-content');
    
            app.frequentWordsView.appContainer.innerHTML = '';
        
            for(let key in wordData) {

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
                wordContainer.href = 'https://forvo.com/word/' + wordData[key][chosenLanguage].split('/')[0] + '/#' + wordDataLangCode;
                word.innerText = wordData[key][chosenLanguage];
                
                for(let item in wordData[key]) {
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
                
                    if(langCode !== wordDataLangCode) {
                        const wordSplitArray = wordData[key][item].split('/');
                        const langCodeContainer = document.createElement('span');
                        const translatedWordwrapper = document.createElement('div');
                        translatedWordwrapper.classList.add('translated-word-wrap');

                        for(let i = 0; i < wordSplitArray.length; i++) {
                            const translatedWordContainer = document.createElement('a');
                            const translatedWord = document.createElement('span');

                            translatedWordContainer.classList.add('translated-word-container');
                            translatedWord.classList.add('translated-word');
                            translatedWordContainer.href = 'https://forvo.com/word/' + wordSplitArray[i] + '/#' + langCode;
                            translatedWordContainer.setAttribute('target', '_blank');
                            if(i > 0) {
                                translatedWord.innerText = '/' + wordSplitArray[i];
                            } else {
                                translatedWord.innerText = wordSplitArray[i];
                            }
                            
                            translatedWordContainer.appendChild(translatedWord);

                            if(i === 0) {
                                langCodeContainer.innerText = langCode;
                                langCodeContainer.classList.add('translated-word-lang');
                                translatedWordwrapper.appendChild(langCodeContainer);
                            }

                            translatedWordwrapper.appendChild(translatedWordContainer);

                        }

                        translatedWordsContainer.appendChild(translatedWordwrapper);
                    };
                }
    
                wordContainer.appendChild(wordNumber);
                wordContainer.appendChild(word);
                wordContainer.appendChild(translatedWordsContainer);
                wordContainerFragment.appendChild(wordContainer);
            }
            
            mainContent.appendChild(wordContainerFragment);
            app.frequentWordsView.appContainer.appendChild(mainContent);
        }
    }
    
    window.app = window.app || {};
    window.app.frequentWordsView = frequentWordsView;

})(window);