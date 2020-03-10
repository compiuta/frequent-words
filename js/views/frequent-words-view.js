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
            frequentWordsView.paginationContainer = document.querySelector('[data-ja="pagination"]');

            app.frequentWordsView.addEventListeners(setLanguage, populateTable);
        },
        createPaginationInnerElement: function(index, startCount) {
            let paginationElement = document.createElement('a');
            paginationElement.setAttribute('data-pagination-start', startCount);
            paginationElement.setAttribute('data-pagination', 'element');
            paginationElement.setAttribute('href', 'javascript:void(0);')
            paginationElement.classList.add('pagination-index');
            paginationElement.innerText = index;

            paginationElement.addEventListener('click', app.frequentWordsController.startPagination)
            return paginationElement;
        },
        createPagination: function(dataLength) {
            let maxObjectItemCount = dataLength;

            let fragment = document.createDocumentFragment();
            let counter = 1;

            for(let i = 0; i < maxObjectItemCount; i += 100) {
                
                let paginationElement = app.frequentWordsView.createPaginationInnerElement(counter, i);
                fragment.appendChild(paginationElement);

                counter++;
            }

            app.frequentWordsView.paginationContainer.appendChild(fragment);
        },
        setActivePagination: function(clickedElement) {
            let paginationElements = document.querySelectorAll('[data-pagination="element"]');
            paginationElements.forEach((element) => {
                if(element === clickedElement) {
                    element.classList.add('active-pagination');
                } else {
                    element.classList.remove('active-pagination');
                }
            });
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
        togglePagination: function() {
            frequentWordsView.paginationContainer.classList.toggle('hide');
        },
        render: function(wordData, chosenLanguage, wordDataLangCode) {
            const mainContent = document.createElement('div');
            let wordContainerFragment = document.createDocumentFragment();
            let maxWordCount = app.frequentWordsController.setMaxWordCount();
            let minWordCount = app.frequentWordsController.setMinWordCount(maxWordCount);

            mainContent.classList.add('main-content');
    
            app.frequentWordsView.appContainer.innerHTML = '';
        
            for(let key = minWordCount; key < maxWordCount; key++) {
                const wordContainer = document.createElement('a');
                const wordNumber = document.createElement('div');
                const word = document.createElement('div');
                const translatedWordsContainer = document.createElement('div');
                translatedWordsContainer.classList.add('translated-words-container');
                
                let index = key.toString().length;
                
                    // format the number infront of the word
                    if(index === 1) {
                        index = '000' + key;
                    } else if(index === 2) {
                        index = '00' + key;
                    } else if(index === 3) {
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