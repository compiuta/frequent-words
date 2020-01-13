(function(window) {
    'use-strict';

    let frequentWordsController = {
        init: function(){
            app.frequentWordsView.init(app.frequentWordsController.setLanguage, app.frequentWordsController.populateTable);
            app.frequentWordsView.render(app.frequentWordsModel.wordList, app.frequentWordsModel.languageSetting.chosenLanguage, app.frequentWordsModel.languageSetting.languageCode);
        },
        populateTable: function() {
            app.frequentWordsView.appContainer.innerHTML = '';
            const tableWrap = document.createElement('div');
            const wordTable = document.createElement('table');
            const tableHeaderRow = document.createElement('tr');
        
            tableWrap.classList.add('responsive-table');
            wordTable.classList.add('word-table');
            tableHeaderRow.classList.add('table-header-row');
        
            for(let i = 0; i < app.frequentWordsModel.languageChoicesArray.length; i++) {
                let tableHeader = document.createElement('th');
                tableHeader.classList.add('table-header');
                tableHeader.innerText = app.frequentWordsModel.languageChoicesArray[i];
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
        
            app.frequentWordsView.render(app.frequentWordsModel.wordList, app.frequentWordsModel.languageSetting.chosenLanguage, app.frequentWordsModel.languageSetting.languageCode);
        }
    }
    
    window.app = window.app || {};
    window.app.frequentWordsController = frequentWordsController;

})(window);