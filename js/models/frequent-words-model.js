(function(window) {
    'use strict';

    let frequentWordsModel = {
        languageChoicesArray: [
            'English', 
            'Español', 
            'Italiano', 
            'Português', 
            'Français'
        ],
        tableLanguagesRemoved: [],
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
                italian: 'per',
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
                italian: 'lui',
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
                english: 'it',
                spanish: 'lo',
                italian: 'lo',
                portuguese: 'lo',
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
                spanish: 'me',
                italian: 'mi',
                portuguese: 'me',
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
                english: 'few',
                spanish: 'poco',
                italian: 'poco',
                portuguese: 'pouco',
                french: 'peu'
            },
            78: {
                english: 'needed',
                spanish: 'nececitar',
                italian: 'necessario',
                portuguese: 'precisar',
                french: 'falloir'
            },
            79: {
                english: 'under',
                spanish: 'abajo',
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
                english: 'watch',
                spanish: 'mirar',
                italian: 'guardare',
                portuguese: 'ver',
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
                italian: 'quello',
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
                spanish: 'pedir',
                italian: 'chiedere',
                portuguese: 'pedir',
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
                english: 'first',
                spanish: 'primero',
                italian: 'primo',
                portuguese: 'primeiro',
                french: 'premier'
            },
            122: {
                english: 'why',
                spanish: 'porque',
                italian: 'perché',
                portuguese: 'porque',
                french: 'pourquoi'
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
                english: 'sir',
                spanish: 'señor',
                italian: 'Signore',
                portuguese: 'senhor',
                french: 'monsieur'
            },
            135: {
                english: 'voice',
                spanish: 'voz',
                italian: 'voce',
                portuguese: 'voz',
                french: 'voix'
            },
            136: {
                english: 'think',
                spanish: 'pensar',
                italian: 'pensare',
                portuguese: 'pensar',
                french: 'penser'
            },
            137: {
                english: 'which',
                spanish: 'cual',
                italian: 'quale',
                portuguese: 'qual',
                french: 'quel'
            },
            138: {
                english: 'arrive',
                spanish: 'llegar',
                italian: 'arrivare',
                portuguese: 'chegar',
                french: 'arriver'
            },
            139: {
                english: 'house',
                spanish: 'casa',
                italian: 'casa',
                portuguese: 'casa',
                french: 'maison'
            },
            140: {
                english: 'ahead',
                spanish: 'delante',
                italian: 'davanti',
                portuguese: 'diante',
                french: 'devant'
            },
            141: {
                english: 'blow',
                spanish: 'golpe',
                italian: 'colpo',
                portuguese: 'golpe',
                french: 'coup'
            },
            142: {
                english: 'beautiful',
                spanish: 'bello',
                italian: 'bello',
                portuguese: 'belo',
                french: 'beau'
            },
            143: {
                english: 'know',
                spanish: 'conocer',
                italian: ' conoscere',
                portuguese: 'conhecer',
                french: 'connaître'
            },
            144: {
                english: 'become',
                spanish: 'convertir',
                italian: 'diventare',
                portuguese: 'tornar',
                french: 'devenir'
            },
            145: {
                english: 'air',
                spanish: 'aire',
                italian: 'aria',
                portuguese: 'ar',
                french: 'air'
            },
            146: {
                english: 'word',
                spanish: 'palabra',
                italian: 'parola',
                portuguese: 'palavra',
                french: 'mot'
            },
            147: {
                english: 'night',
                spanish: 'noche',
                italian: 'notte',
                portuguese: 'noite',
                french: 'nuit'
            },
            148: {
                english: 'feel',
                spanish: 'sentir',
                italian: 'sentire',
                portuguese: 'sentir',
                french: 'sentir'
            },
            149: {
                english: 'water',
                spanish: 'agua',
                italian: 'aqua',
                portuguese: 'água',
                french: 'eau'
            },
            150: {
                english: 'old',
                spanish: 'viejo',
                italian: 'vecchio',
                portuguese: 'velho',
                french: 'vieux'
            },
            151: {
                english: 'seem',
                spanish: 'parecer',
                italian: 'sembrare',
                portuguese: 'parecer',
                french: 'sembler'
            },
            152: {
                english: 'minus',
                spanish: 'menos',
                italian: 'meno',
                portuguese: 'menos',
                french: 'moins'
            },
            153: {
                english: 'hold',
                spanish: 'tener',
                italian: 'tenere',
                portuguese: 'ter',
                french: 'tenir'
            },
            154: {
                english: 'here',
                spanish: 'aquí',
                italian: 'qui',
                portuguese: 'aqui',
                french: 'ici'
            },
            155: {
                english: 'understand',
                spanish: 'comprender',
                italian: 'comprendere',
                portuguese: 'compreender',
                french: 'comprendre'
            },
            156: {
                english: 'yes',
                spanish: 'sí',
                italian: 'sì',
                portuguese: 'sim',
                french: 'oui'
            },
            157: {
                english: 'render',
                spanish: 'rendir',
                italian: 'rendere',
                portuguese: 'tornar',
                french: 'rendre'
            },
            158: {
                english: 'you',
                spanish: 'tú',
                italian: 'tu',
                portuguese: 'você',
                french: 'toi'
            },
            159: {
                english: 'twenty',
                spanish: 'veinte',
                italian: 'venti',
                portuguese: 'vinte',
                french: 'vingt'
            },
            160: {
                english: 'since',
                spanish: 'desde',
                italian: 'da',
                portuguese: 'desde',
                french: 'depuis'
            },
            161: {
                english: 'wait',
                spanish: 'esperar',
                italian: 'aspettare',
                portuguese: 'esperar',
                french: 'attendre'
            },
            162: {
                english: 'exit',
                spanish: 'salir',
                italian: 'uscire',
                portuguese: 'sair',
                french: 'sortir'
            },
            163: {
                english: 'friend',
                spanish: 'amigo',
                italian: 'amico',
                portuguese: 'amigo',
                french: '`ami'
            },
            164: {
                english: 'too',
                spanish: 'demasiado',
                italian: 'troppo',
                portuguese: 'demasiado',
                french: 'trop'
            },
            165: {
                english: 'door',
                spanish: 'puerta',
                italian: 'porta',
                portuguese: 'porta',
                french: 'porte'
            },
            166: {
                english: 'each',
                spanish: 'cada',
                italian: 'ogni',
                portuguese: 'cada',
                french: 'chaque'
            },
            167: {
                english: 'love',
                spanish: 'amor',
                italian: 'amore',
                portuguese: 'amor',
                french: 'amour'
            },
            168: {
                english: 'during',
                spanish: 'mientras',
                italian: 'mentre',
                portuguese: 'enquanto',
                french: 'pendant'
            },
            170: {
                english: 'already',
                spanish: 'ya',
                italian: 'già',
                portuguese: 'já',
                french: 'déjà'
            },
            171: {
                english: 'foot',
                spanish: 'pie',
                italian: 'piede',
                portuguese: 'pé',
                french: 'pied'
            },
            172: {
                english: 'much',
                spanish: 'tanto',
                italian: 'tanto',
                portuguese: 'tanto',
                french: 'tant'
            },
            173: {
                english: 'people',
                spanish: 'gente',
                italian: 'gente',
                portuguese: 'gente',
                french: 'gens'
            },
            174: {
                english: 'name',
                spanish: 'nombre',
                italian: 'nome',
                portuguese: 'nome',
                french: 'nom'
            },
            175: {
                english: 'live',
                spanish: 'vivir',
                italian: 'vivere',
                portuguese: 'viver',
                french: 'vivre'
            },
            176: {
                english: 'retake',
                spanish: 'retomar',
                italian: 'reprendere',
                portuguese: 'retomar',
                french: 'reprendre'
            },
            177: {
                english: 'enter',
                spanish: 'entrar',
                italian: 'entrare',
                portuguese: 'entrar',
                french: 'entrer'
            },
            178: {
                english: 'carry',
                spanish: 'cargar',
                italian: 'portare',
                portuguese: 'carregar',
                french: 'porter'
            },
            179: {
                english: 'country',
                spanish: 'país',
                italian: 'paese',
                portuguese: 'país',
                french: 'pays'
            },
            180: {
                english: 'sky',
                spanish: 'cielo',
                italian: 'cielo',
                portuguese: 'céu ',
                french: 'ciel'
            },
            181: {
                english: 'before',
                spanish: 'antes',
                italian: 'prima',
                portuguese: 'antes',
                french: 'avant'
            },
            182: {
                english: 'brother',
                spanish: 'hermano',
                italian: 'fratello',
                portuguese: 'irmão',
                french: 'frère'
            },
            183: {
                english: 'look',
                spanish: 'mirada',
                italian: 'sguardo',
                portuguese: 'olhar',
                french: 'regard'
            },
            184: {
                english: 'search',
                spanish: 'buscar',
                italian: 'cercare',
                portuguese: 'procurar',
                french: 'chercher'
            },
            185: {
                english: 'soul',
                spanish: 'alma',
                italian: 'anima',
                portuguese: 'alma',
                french: 'âme'
            },
            186: {
                english: 'side',
                spanish: 'lado',
                italian: 'lato',
                portuguese: 'lado',
                french: 'côté'
            },
            187: {
                english: 'death',
                spanish: 'muerte',
                italian: 'morto',
                portuguese: 'morte',
                french: 'mort'
            },
            188: {
                english: 'return',
                spanish: 'regresar',
                italian: 'ritornare',
                portuguese: 'voltar',
                french: 'revenir'
            },
            189: {
                english: 'black',
                spanish: 'negro',
                italian: 'nero',
                portuguese: 'preto',
                french: 'noir'
            },
            190: {
                english: 'now',
                spanish: 'ahora',
                italian: 'adesso',
                portuguese: 'agora',
                french: 'maintenant'
            },
            191: {
                english: 'new',
                spanish: 'nuevo',
                italian: 'nuovo',
                portuguese: 'novo',
                french: 'nouveau'
            },
            192: {
                english: 'city',
                spanish: 'ciudad',
                italian: 'città',
                portuguese: 'cidade',
                french: 'ville'
            },
            193: {
                english: 'street',
                spanish: 'calle',
                italian: 'via',
                portuguese: 'rua',
                french: 'rue'
            },
            194: {
                eenglish: 'finally',
                spanish: 'finalmente',
                italian: 'infine',
                portuguese: 'finalente',
                french: 'enfin'
            },
            195: {
                english: 'call',
                spanish: 'llamar',
                italian: 'chiamare',
                portuguese: 'chamar',
                french: 'appeler'
            },
            196: {
                english: 'evening',
                spanish: 'tardes',
                italian: 'sera',
                portuguese: 'tardes',
                french: 'soir'
            },
            197: {
                english: 'room',
                spanish: 'cuarto',
                italian: 'stanza',
                portuguese: 'quarto',
                french: 'chambre'
            },
            198: {
                english: 'die',
                spanish: 'morir',
                italian: 'morire',
                portuguese: 'morrer',
                french: 'mourir'
            },
            199: {
                english: 'not',
                spanish: 'no',
                italian: 'non',
                portuguese: 'nem',
                french: 'pas'
            },
            200: {
                english: 'leave',
                spanish: 'partir',
                italian: 'partire',
                portuguese: 'partir',
                french: 'partir'
            },
            201: {
                english: 'five',
                spanish: 'cinco',
                italian: 'cinque',
                portuguese: 'cinco',
                french: 'cinq'
            },
            202: {
                english: 'spirit',
                spanish: 'espirito',
                italian: 'spirito',
                portuguese: 'espirito',
                french: 'esprit'
            },
           203: {
                english: 'sun',
                spanish: 'sol',
                italian: 'sole',
                portuguese: 'sol',
                french: 'soleil'
            },
            204: {
                english: 'last',
                spanish: 'último',
                italian: 'ultimo',
                portuguese: 'último',
                french: 'dernier'
            },
            205: {
                english: 'throw',
                spanish: 'tirar',
                italian: 'gettare',
                portuguese: 'atirar',
                french: 'jeter'
            },
            206: {
                english: 'ten',
                spanish: 'diez',
                italian: 'dieci',
                portuguese: 'dez',
                french: 'dix'
            },
            207: {
                english: 'king',
                spanish: 'rey',
                italian: 're',
                portuguese: 'rei',
                french: 'roi'
            },
            208: {
                english: 'state',
                spanish: 'estado',
                italian: 'stato',
                portuguese: 'estado',
                french: 'état'
            },
            209: {
                english: 'body',
                spanish: 'cuerpo',
                italian: 'corpo',
                portuguese: 'corpo',
                french: 'corps'
            },
            210: {
                english: 'much',
                spanish: 'mucho',
                italian: 'molto',
                portuguese: 'muito',
                french: 'beaucoup'
            },
            211: {
                english: 'follow',
                spanish: 'seguir',
                italian: 'seguire',
                portuguese: 'seguir',
                french: 'suivre'
            },
            212: {
                english: 'arm',
                spanish: 'brazo',
                italian: 'braccio',
                portuguese: 'braço',
                french: 'bras'
            },
            213: {
                english: 'write',
                spanish: 'escribir',
                italian: 'scrivere',
                portuguese: 'escrever',
                french: 'écrire'
            },
            214: {
                english: 'white',
                spanish: 'blanco',
                italian: 'bianco',
                portuguese: 'branco',
                french: 'blanc'
            },
            215: {
                english: 'show',
                spanish: 'mostrar',
                italian: 'mostrare',
                portuguese: 'mostrar',
                french: 'montrer'
            },
            216: {
                english: 'fall',
                spanish: 'caer',
                italian: 'cadere',
                portuguese: 'cair',
                french: 'tomber'
            },
            217: {
                english: 'place',
                spanish: 'lugar',
                italian: 'posto',
                portuguese: 'lugar',
                french: 'place'
            },
            218: {
                english: 'open',
                spanish: 'abrir',
                italian: 'aprire',
                portuguese: 'abrir',
                french: 'ouvrir'
            },
            219: {
                english: 'party',
                spanish: 'partido',
                italian: 'partito',
                portuguese: 'partido',
                french: 'parti'
            },
            220: {
                english: 'enough',
                spanish: 'suficiente',
                italian: 'abbastanza',
                portuguese: 'suficiente',
                french: 'assez'
            },
            221: {
                english: 'their',
                spanish: 'les',
                italian: 'loro',
                portuguese: 'seus',
                french: 'leur'
            },
            222: {
                english: 'expensive',
                spanish: 'caro',
                italian: 'caro',
                portuguese: 'caro',
                french: 'cher'
            },
            223: {
                english: 'here is',
                spanish: 'aqui esta',
                italian: 'ecco',
                portuguese: 'eis',
                french: 'voilà'
            },
            224: {
                english: 'year',
                spanish: 'año',
                italian: 'anno',
                portuguese: 'ano',
                french: 'année'
            },
            225: {
                english: 'far',
                spanish: 'lejos',
                italian: 'lontano',
                portuguese: 'longe',
                french: 'loin'
            },
            226: {
                english: 'point',
                spanish: 'punto',
                italian: 'punto',
                portuguese: 'ponto',
                french: 'point'
            },
            227: {
                english: 'face',
                spanish: 'cara',
                italian: 'faccia',
                portuguese: 'cara',
                french: 'visage'
            },
            228: {
                english: 'noise',
                spanish: 'ruido',
                italian: 'rumore',
                portuguese: 'barulho',
                french: 'bruit'
            },
            229: {
                english: 'letter',
                spanish: 'letra',
                italian: 'lettera',
                portuguese: 'letra',
                french: 'lettre'
            },
            230: {
                english: 'background',
                spanish: 'fondo',
                italian: 'fondo',
                portuguese: 'fundo',
                french: 'fond'
            },
            231: {
                english: 'force',
                spanish: 'fuerza',
                italian: 'forza',
                portuguese: 'força',
                french: 'force'
            },
            232: {
                english: 'stop',
                spanish: 'detener',
                italian: 'fermare',
                portuguese: 'deter',
                french: 'arrêter'
            },
            233: {
                english: 'lose',
                spanish: 'perder',
                italian: 'perdere',
                portuguese: 'perder',
                french: 'perdre'
            },
            234: {
                english: 'start',
                spanish: 'comenzar',
                italian: 'cominciare',
                portuguese: 'começar',
                french: 'commencer'
            },
            235: {
                english: 'seem',
                spanish: 'parecer',
                italian: 'sembrare',
                portuguese: 'parecer',
                french: 'paraître'
            },
            236: {
                english: 'any',
                spanish: 'ningún',
                italian: 'Nessuno',
                portuguese: 'nehum',
                french: 'aucun'
            },
            237: {
                english: 'walk',
                spanish: 'caminar',
                italian: 'camminare',
                portuguese: 'caminhar',
                french: 'marcher'
            },
            238: {
                english: 'middle',
                spanish: 'medio',
                italian: 'mezzo',
                portuguese: 'meio',
                french: 'milieu'
            },
            239: {
                english: 'saint',
                spanish: 'santo',
                italian: 'santo',
                portuguese: 'santo',
                french: 'saint'
            },
            240: {
                english: 'idea',
                spanish: 'idea',
                italian: 'idea',
                portuguese: 'ideia',
                french: 'idée'
            },
            241: {
                english: 'almost',
                spanish: 'casi',
                italian: 'quasi',
                portuguese: 'quase',
                french: 'presque'
            },
            242: {
                english: 'elsewhere',
                spanish: 'otro lugar',
                italian: 'altrove',
                portuguese: 'outro lugar',
                french: 'ailleurs'
            },
            243: {
                english: 'work',
                spanish: 'trabajo',
                italian: 'lavoro',
                portuguese: 'trabalho',
                french: 'travail'
            },
            244: {
                english: 'light',
                spanish: 'luz',
                italian: 'luce',
                portuguese: 'luz',
                french: 'lumière'
            },
            245: {
                english: 'long',
                spanish: 'largo',
                italian: 'lungo',
                portuguese: 'longo',
                french: 'long'
            },
            246: {
                english: 'only',
                spanish: 'solamente',
                italian: 'soltanto',
                portuguese: 'somente',
                french: 'seulement'
            },
            247: {
                english: 'month',
                spanish: 'mes',
                italian: 'mese',
                portuguese: 'mês',
                french: 'mois'
            },
            248: {
                english: 'son',
                spanish: 'hijo',
                italian: 'figlio',
                portuguese: 'filho',
                french: 'fils'
            },
            249: {
                english: 'nine',
                spanish: 'nueve',
                italian: 'nove',
                portuguese: 'nove',
                french: 'neuf'
            },
            250: {
                english: 'such',
                spanish: 'tal',
                italian: 'tale',
                portuguese: 'tal',
                french: 'tel'
            },
            251: {
                english: 'raise',
                spanish: 'levantar',
                italian: 'alzare',
                portuguese: 'levantar',
                french: 'lever'
            },
            252: {
                english: 'reason',
                spanish: 'razón',
                italian: 'ragione',
                portuguese: 'razão',
                french: 'raison'
            },
            253: {
                english: 'effect',
                spanish: 'efecto',
                italian: 'effetto',
                portuguese: 'efeito',
                french: 'effet'
            },
            254: {
                english: 'government',
                spanish: 'gobierno',
                italian: 'governo',
                portuguese: 'governo',
                french: 'gouvernement'
            },
            255: {
                english: 'allow',
                spanish: 'permitir',
                italian: 'permettere',
                portuguese: 'permitir',
                french: 'permettre'
            },
            256: {
                english: 'poor',
                spanish: 'pobre',
                italian: 'povero',
                portuguese: 'pobre',
                french: 'pauvre'
            },
            257: {
                english: 'sit',
                spanish: 'sentar',
                italian: 'sedere',
                portuguese: 'sentar',
                french: 'asseoir'
            },
            258: {
                english: 'point',
                spanish: 'punto',
                italian: 'punto',
                portuguese: 'ponto',
                french: 'point'
            },
            259: {
                english: 'full',
                spanish: 'lleno',
                italian: 'pieno',
                portuguese: 'cheio',
                french: 'plein'
            },
            260: {
                english: 'person',
                spanish: 'persona',
                italian: 'persona',
                portuguese: 'pessoa',
                french: 'personne'
            },
            261: {
                english: 'true',
                spanish: 'verdarero',
                italian: 'vero',
                portuguese: 'verdade',
                french: 'vrai'
            },
            262: {
                english: 'people',
                spanish: 'gente',
                italian: 'gente',
                portuguese: 'gente',
                french: 'gens'
            },
            263: {
                english: 'done',
                spanish: 'hecho',
                italian: 'fatto',
                portuguese: 'faz',
                french: 'fait'
            },
            264: {
                english: 'war',
                spanish: 'guerra',
                italian: 'guerra',
                portuguese: 'guerra',
                french: 'guerre'
            },
            265: {
                english: 'listen',
                spanish: 'escuchar',
                italian: 'ascoltare',
                portuguese: 'escutar',
                french: 'écouter'
            },
            266: {
                english: 'thought',
                spanish: 'pensamiento',
                italian: 'pendiero',
                portuguese: 'pensamento',
                french: 'pensée'
            },
            267: {
                english: 'matter',
                spanish: 'asunto',
                italian: 'affare',
                portuguese: 'asssunto',
                french: 'affaire'
            },
            268: {
                english: 'morning',
                spanish: 'mañana',
                italian: 'mattina',
                portuguese: 'manhã',
                french: 'matin'
            },
            269: {
                english: 'rock',
                spanish: 'piedra',
                italian: 'pietra',
                portuguese: 'pedra',
                french: 'pierre'
            },
            271: {
                english: 'mount',
                spanish: 'montar',
                italian: 'montare',
                portuguese: 'montar',
                french: 'monter'
            },
            272: {
                english: 'low',
                spanish: 'bajo',
                italian: 'basso',
                portuguese: 'sob',
                french: 'bas'
            },
            273: {
                english: 'wind',
                spanish: 'viento',
                italian: 'vento',
                portuguese: 'vento',
                french: 'vent'
            },
            274: {
                english: 'doubt',
                spanish: 'duda',
                italian: 'dubbio',
                portuguese: 'dúvida',
                french: 'doute'
            },
            275: {
                english: 'front',
                spanish: 'frente',
                italian: 'fronte',
                portuguese: 'frente',
                french: 'front'
            },
            276: {
                english: 'shadow',
                spanish: 'sombra',
                italian: 'ombre',
                portuguese: 'somra',
                french: 'ombre'
            },
            277: {
                english: 'part',
                spanish: 'parte',
                italian: 'parte',
                portuguese: 'parte',
                french: 'part'
            },
            278: {
                english: 'master',
                spanish: 'maestro',
                italian: 'maestro',
                portuguese: 'mestre',
                french: 'maître'
            },
            279: {
                english: 'today',
                spanish: 'hoy',
                italian: 'oggi',
                portuguese: 'hoje',
                french: "aujourd'hui"
            },
            280: {
                english: 'need',
                spanish: 'necesidad',
                italian: 'bisogno',
                portuguese: 'necessidade',
                french: 'besoin'
            },
            282: {
                english: 'question',
                spanish: 'pregunta',
                italian: 'domanda',
                portuguese: 'pergunta',
                french: 'question'
            },
            283: {
                english: 'perceive',
                spanish: 'percibir',
                italian: 'scorgere',
                portuguese: 'perceber',
                french: 'apercevoir'
            },
            284: {
                english: 'receive',
                spanish: 'recibir',
                italian: 'ricevere',
                portuguese: 'receber',
                french: 'recevoir'
            },
            285: {
                english: 'better',
                spanish: 'mejor',
                italian: 'meglio',
                portuguese: 'melhor ',
                french: 'mieux'
            },
            286: {
                english: 'penalty',
                spanish: 'pena',
                italian: 'pena',
                portuguese: 'pena',
                french: 'peine'
            },
            287: {
                english: 'tower',
                spanish: 'torre',
                italian: 'torre',
                portuguese: 'torre',
                french: 'tour'
            },
            288: {
                english: 'serve',
                spanish: 'servir',
                italian: 'servire',
                portuguese: 'servir',
                french: 'servir'
            },
            289: {
                english: 'around',
                spanish: 'alrededor',
                italian: 'intorno',
                portuguese: 'redor',
                french: 'autour'
            },
            290: {
                english: 'near',
                spanish: 'cerca',
                italian: 'vicino',
                portuguese: 'perto',
                french: 'près'
            },
            292: {
                english: 'finish',
                spanish: 'acabar',
                italian: 'finire',
                portuguese: 'acabar',
                french: 'finir'
            },
            293: {
                english: 'family',
                spanish: 'familia',
                italian: 'famiglia',
                portuguese: 'família',
                french: 'famille'
            },
            294: {
                english: 'often',
                spanish: 'frecuentemente',
                italian: 'spesso',
                portuguese: 'frequentemente',
                french: 'souvent'
            },
            295: {
                english: 'laugh',
                spanish: 'reír',
                italian: 'ridere',
                portuguese: 'rir',
                french: 'rire'
            },
            296: {
                english: 'above',
                spanish: 'arriba',
                italian: 'sopra',
                portuguese: 'acima',
                french: 'dessus'
            },
            297: {
                english: 'mrs',
                spanish: 'señora',
                italian: 'signora',
                portuguese: 'senhora',
                french: 'madame'
            },
            298: {
                english: 'sort',
                spanish: 'tipo',
                italian: 'tipo',
                portuguese: 'tipo',
                french: 'sorte'
            },
            299: {
                english: 'figure',
                spanish: 'figura',
                italian: 'figura',
                portuguese: 'figura',
                french: 'figure'
            },
            300: {
                english: 'right',
                spanish: 'derecho',
                italian: 'diritto',
                portuguese: 'direito',
                french: 'droit'
            },
            302: {
                english: 'fear',
                spanish: 'miedo',
                italian: 'paura',
                portuguese: 'medo',
                french: 'peur'
            },
            303: {
                english: 'tip',
                spanish: 'punta',
                italian: 'punta',
                portuguese: 'ponta',
                french: 'bout'
            },
            304: {
                english: 'silence',
                spanish: 'silencio',
                italian: 'silenzio',
                portuguese: 'silêncio',
                french: 'silence'
            },
            305: {
                english: 'big',
                spanish: 'gordo',
                italian: 'grosso',
                portuguese: 'gordo',
                french: 'gros'
            },
            306: {
                english: 'chief',
                spanish: 'jefe',
                italian: 'capo',
                portuguese: 'chefe',
                french: 'chef'
            },
            307: {
                english: 'six',
                spanish: 'seis',
                italian: 'sei',
                portuguese: 'seis',
                french: 'six'
            },
            308: {
                english: 'woods',
                spanish: 'bosque',
                italian: 'bosco',
                portuguese: 'bosque',
                french: 'bois'
            },
            309: {
                english: 'history',
                spanish: 'historia',
                italian: 'storia',
                portuguese: 'história',
                french: 'histoire'
            },
            310: {
                english: 'scream',
                spanish: 'gritar',
                italian: 'gridare',
                portuguese: 'gritar',
                french: 'crier'
            },
            311: {
                english: 'play',
                spanish: 'jugar',
                italian: 'giocare',
                portuguese: 'jogar',
                french: 'jouer'
            },
            312: {
                english: 'fire',
                spanish: 'fuego',
                italian: 'fuoco',
                portuguese: 'fogo',
                french: 'feu'
            },
            313: {
                english: 'turn',
                spanish: 'girar',
                italian: 'girare',
                portuguese: 'girar',
                french: 'tourner'
            },
            314: {
                english: 'sweet',
                spanish: 'dulce',
                italian: 'dolce',
                portuguese: 'doce',
                french: 'doux'
            },
            315: {
                english: 'strong',
                spanish: 'fuerte',
                italian: 'forte',
                portuguese: 'forte',
                french: 'fort'
            },
            316: {
                english: 'happy',
                spanish: 'feliz',
                italian: 'felice',
                portuguese: 'feliz',
                french: 'heureux'
            },
            317: {
                english: 'guard',
                spanish: 'guardar',
                italian: 'mantenere',
                portuguese: 'guardar',
                french: 'garder'
            },
            318: {
                english: 'movement',
                spanish: 'movimiento',
                italian: 'movimento',
                portuguese: 'movimento',
                french: 'mouvement'
            },
            319: {
                english: 'end',
                spanish: 'fin',
                italian: 'fine',
                portuguese: 'fim',
                french: 'fin'
            },
            320: {
                english: 'recognize',
                spanish: 'reconocer',
                italian: 'reconoscere',
                portuguese: 'reconhecer',
                french: 'reconnaître'
            },
            321: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: 'quitter'
            },
            322: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            323: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
                english: '',
                spanish: '',
                italian: '',
                portuguese: '',
                french: ''
            },
            320: {
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