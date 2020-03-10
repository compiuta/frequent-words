(function(window) {
    'use-strict';

    let frequentWordsController = {
        init: function(){
            app.frequentWordsView.init(app.frequentWordsController.setLanguage, app.frequentWordsController.populateTable);
            app.frequentWordsView.render(app.frequentWordsModel.wordList, app.frequentWordsModel.languageSetting.chosenLanguage, app.frequentWordsModel.languageSetting.languageCode);
            app.frequentWordsView.createPagination(Object.keys(app.frequentWordsModel.wordList).length);
        },
        setMaxWordCount: function() {
            let maxWordCount = app.frequentWordsModel.currentWordrange + 100;

            if(maxWordCount > Object.keys(app.frequentWordsModel.wordList).length) {
                maxWordCount = Object.keys(app.frequentWordsModel.wordList).length;
            }

            app.frequentWordsModel.currentWordRange = maxWordCount;

            return maxWordCount;
        },
        setMinWordCount: function(maxWordCount) {
            let minWordCount = maxWordCount - 100;

            return minWordCount
        },
        startPagination: function() {
            app.frequentWordsView.setActivePagination(this);
            app.frequentWordsModel.currentWordrange = parseInt(this.dataset.paginationStart);
            app.frequentWordsView.render(app.frequentWordsModel.wordList, app.frequentWordsModel.languageSetting.chosenLanguage, app.frequentWordsModel.languageSetting.languageCode);
        },
        toggleTableLanguage: function() {
            const cellClassSelected = this.dataset.table + '-cell';
            const cellsToToggle = document.querySelectorAll('.' + cellClassSelected);
            let addLanguageToRemoveArray = '';
            let languageIndex = '';

            if(this.dataset.table === 'español') {
                addLanguageToRemoveArray = 'spanish';
            } else if(this.dataset.table === 'italiano') {
                addLanguageToRemoveArray = 'italian';
            } else if(this.dataset.table === 'português') {
                addLanguageToRemoveArray = 'portuguese';
            }  else if(this.dataset.table === 'français') {
                addLanguageToRemoveArray = 'french';
            }  else {
                addLanguageToRemoveArray = 'english';
            }  
            
            if(this.classList.contains('show-cells')){
                

                app.frequentWordsModel.tableLanguagesRemoved.forEach(function(el, index) {
                    console.log(addLanguageToRemoveArray);
                    if(el === addLanguageToRemoveArray){

                        languageIndex = index;
                    }
                });
                
                app.frequentWordsModel.tableLanguagesRemoved.splice(languageIndex, 1);

                app.frequentWordsController.populateTable();
            } else {
               

                app.frequentWordsModel.tableLanguagesRemoved.push(addLanguageToRemoveArray);
                app.frequentWordsController.populateTable();
            }
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
                let addLanguageToRemoveArray = '';

                if(app.frequentWordsModel.languageChoicesArray[i] === 'Español') {
                    addLanguageToRemoveArray = 'spanish';
                } else if(app.frequentWordsModel.languageChoicesArray[i] === 'Italiano') {
                    addLanguageToRemoveArray = 'italian';
                } else if(app.frequentWordsModel.languageChoicesArray[i] === 'Português') {
                    addLanguageToRemoveArray = 'portuguese';
                }  else if(app.frequentWordsModel.languageChoicesArray[i] === 'Français') {
                    addLanguageToRemoveArray = 'french';
                }  else if(app.frequentWordsModel.languageChoicesArray[i] === 'English') {
                    addLanguageToRemoveArray = 'english';
                } 

                
                if(!app.frequentWordsModel.tableLanguagesRemoved.includes(addLanguageToRemoveArray) ) {
                    
                    let tableHeader = document.createElement('th');
                    let tableHeaderInnerContainer = document.createElement('div');
                    let tableHeaderButton = document.createElement('span');
                    tableHeader.classList.add('table-header');
                    tableHeaderInnerContainer.classList.add('table-header-inner');
                    tableHeaderButton.classList.add('table-header-toggle');
                    tableHeaderButton.setAttribute('data-table', app.frequentWordsModel.languageChoicesArray[i].toLowerCase());
                    tableHeaderButton.addEventListener('click', app.frequentWordsController.toggleTableLanguage);
                    tableHeaderInnerContainer.innerText = app.frequentWordsModel.languageChoicesArray[i];
                    tableHeaderInnerContainer.appendChild(tableHeaderButton);
                    tableHeader.appendChild(tableHeaderInnerContainer);
                    tableHeaderRow.appendChild(tableHeader);
                }
                
            }

            for(let i = 0; i < app.frequentWordsModel.tableLanguagesRemoved.length; i++) {
                    let addLanguageToRemoveArray = '';

                    if(app.frequentWordsModel.tableLanguagesRemoved[i] === 'spanish') {
                        addLanguageToRemoveArray = 'Español';
                    } else if(app.frequentWordsModel.tableLanguagesRemoved[i] === 'italian') {
                        addLanguageToRemoveArray = 'Italiano';
                    } else if(app.frequentWordsModel.tableLanguagesRemoved[i] === 'portuguese') {
                        addLanguageToRemoveArray = 'Português';
                    }  else if(app.frequentWordsModel.tableLanguagesRemoved[i] === 'french') {
                        addLanguageToRemoveArray = 'Français';
                    }  else if(app.frequentWordsModel.tableLanguagesRemoved[i] === 'english') {
                        addLanguageToRemoveArray = 'English';
                    }

                    let tableHeader = document.createElement('th');
                    let tableHeaderInnerContainer = document.createElement('div');
                    let tableHeaderButton = document.createElement('span');
                    tableHeader.classList.add('table-header');
                    tableHeaderInnerContainer.classList.add('table-header-inner');
                    tableHeaderButton.classList.add('table-header-toggle');
                    tableHeaderButton.classList.add('show-cells');
                    tableHeaderButton.setAttribute('data-table', addLanguageToRemoveArray.toLowerCase());
                    tableHeaderButton.addEventListener('click', app.frequentWordsController.toggleTableLanguage);
                    tableHeaderInnerContainer.innerText = addLanguageToRemoveArray;
                    tableHeaderInnerContainer.appendChild(tableHeaderButton);
                    tableHeader.appendChild(tableHeaderInnerContainer);
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
                    if(!app.frequentWordsModel.tableLanguagesRemoved.includes(item)) {
                        let wordCell = document.createElement('td');
                        let wordCellLink = document.createElement('a');
                        let cellLanguageCode = '';
                        let cellLanguage = '';
            
                        if(item === 'spanish') {
                            cellLanguageCode = 'es';
                            cellLanguage = 'español';
                        } else if(item === 'italian') {
                            cellLanguageCode = 'it';
                            cellLanguage = 'italiano';
                        } else if(item === 'portuguese') {
                            cellLanguageCode = 'pt';
                            cellLanguage = 'português';
                        }  else if(item === 'french') {
                            cellLanguageCode = 'fr';
                            cellLanguage = 'français';
                        }  else {
                            cellLanguageCode = 'en';
                            cellLanguage = 'english';
                        }  
            
                        wordCellLink.setAttribute('target', '_blank');
                        wordCellLink.href = 'https://forvo.com/word/' + app.frequentWordsModel.wordList[key][item] + '/#' + cellLanguageCode;
                        wordCellLink.classList.add('word-cell-link');
                        wordCell.classList.add('word-cell');
                        wordCellLink.classList.add(cellLanguage + '-cell');
                        wordCellLink.innerText = app.frequentWordsModel.wordList[key][item];
                        wordCell.appendChild(wordCellLink);
                        wordRow.appendChild(wordCell);
                    }
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
                app.frequentWordsView.togglePagination();
                app.frequentWordsView.languageNameSelected.innerText = '';
            } else {
                if(app.frequentWordsView.paginationContainer.classList.contains('hide')) {
                    app.frequentWordsView.togglePagination();
                }
                app.frequentWordsView.languageNameSelected.innerText = languageName;

                app.frequentWordsView.render(app.frequentWordsModel.wordList, app.frequentWordsModel.languageSetting.chosenLanguage, app.frequentWordsModel.languageSetting.languageCode);
            }
        }
    }
    
    window.app = window.app || {};
    window.app.frequentWordsController = frequentWordsController;

})(window);