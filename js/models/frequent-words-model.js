(function (window) {
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
        currentWordrange: 0,
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
                french: 'soit/être'
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
                english: 'oneself',
                spanish: 'se',
                italian: 'sé',
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
                french: 'ce/ceci'
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
                french: 'pour/afin'
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
                french: 'plus/davantage'
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
                french: 'peu/guère'
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
                french: 'puis/ensuite'
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
                french: 'entre/parmi'
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
                french: "premier/d'abord"
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
                french: 'monsieur/seigneur'
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
                french: 'vieux/vieillard'
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
                french: 'ami'
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
                spanish: 'durante',
                italian: 'durante',
                portuguese: 'durante',
                french: 'pendant/durant'
            },
            169: {
                english: 'already',
                spanish: 'ya',
                italian: 'già',
                portuguese: 'já',
                french: 'déjà'
            },
            170: {
                english: 'foot',
                spanish: 'pie',
                italian: 'piede',
                portuguese: 'pé',
                french: 'pied'
            },
            171: {
                english: 'much',
                spanish: 'tanto',
                italian: 'tanto',
                portuguese: 'tanto',
                french: 'tant/autant'
            },
            172: {
                english: 'people',
                spanish: 'gente',
                italian: 'gente',
                portuguese: 'gente',
                french: 'gens'
            },
            173: {
                english: 'name',
                spanish: 'nombre',
                italian: 'nome',
                portuguese: 'nome',
                french: 'nom'
            },
            174: {
                english: 'live',
                spanish: 'vivir',
                italian: 'vivere',
                portuguese: 'viver',
                french: 'vivre'
            },
            175: {
                english: 'retake',
                spanish: 'retomar',
                italian: 'reprendere',
                portuguese: 'retomar',
                french: 'reprendre'
            },
            176: {
                english: 'enter',
                spanish: 'entrar',
                italian: 'entrare',
                portuguese: 'entrar',
                french: 'entrer'
            },
            177: {
                english: 'carry',
                spanish: 'cargar',
                italian: 'portare',
                portuguese: 'carregar',
                french: 'porter/mener'
            },
            178: {
                english: 'country',
                spanish: 'país',
                italian: 'paese',
                portuguese: 'país',
                french: 'pays'
            },
            179: {
                english: 'sky',
                spanish: 'cielo',
                italian: 'cielo',
                portuguese: 'céu ',
                french: 'ciel'
            },
            180: {
                english: 'before',
                spanish: 'antes',
                italian: 'prima',
                portuguese: 'antes',
                french: 'avant'
            },
            181: {
                english: 'brother',
                spanish: 'hermano',
                italian: 'fratello',
                portuguese: 'irmão',
                french: 'frère'
            },
            182: {
                english: 'look',
                spanish: 'mirada',
                italian: 'sguardo',
                portuguese: 'olhar',
                french: 'regard'
            },
            183: {
                english: 'search',
                spanish: 'buscar',
                italian: 'cercare',
                portuguese: 'procurar',
                french: 'chercher'
            },
            184: {
                english: 'soul',
                spanish: 'alma',
                italian: 'anima',
                portuguese: 'alma',
                french: 'âme'
            },
            185: {
                english: 'side',
                spanish: 'lado',
                italian: 'lato',
                portuguese: 'lado',
                french: 'côté'
            },
            186: {
                english: 'death',
                spanish: 'muerte',
                italian: 'morto',
                portuguese: 'morte',
                french: 'mort'
            },
            187: {
                english: 'return',
                spanish: 'regresar',
                italian: 'ritornare',
                portuguese: 'voltar',
                french: 'revenir'
            },
            188: {
                english: 'black',
                spanish: 'negro',
                italian: 'nero',
                portuguese: 'preto',
                french: 'noir'
            },
            189: {
                english: 'now',
                spanish: 'ahora',
                italian: 'adesso',
                portuguese: 'agora',
                french: 'maintenant'
            },
            190: {
                english: 'new',
                spanish: 'nuevo',
                italian: 'nuovo',
                portuguese: 'novo',
                french: 'nouveau'
            },
            191: {
                english: 'city',
                spanish: 'ciudad',
                italian: 'città',
                portuguese: 'cidade',
                french: 'ville'
            },
            192: {
                english: 'street',
                spanish: 'calle',
                italian: 'via',
                portuguese: 'rua',
                french: 'rue'
            },
            193: {
                english: 'finally',
                spanish: 'finalmente',
                italian: 'infine',
                portuguese: 'finalmente',
                french: 'enfin'
            },
            194: {
                english: 'call',
                spanish: 'llamar',
                italian: 'chiamare',
                portuguese: 'chamar',
                french: 'appeler'
            },
            195: {
                english: 'evening',
                spanish: 'tardes',
                italian: 'sera',
                portuguese: 'tardes',
                french: 'soir'
            },
            196: {
                english: 'room',
                spanish: 'cuarto',
                italian: 'stanza',
                portuguese: 'quarto',
                french: 'chambre'
            },
            197: {
                english: 'die',
                spanish: 'morir',
                italian: 'morire',
                portuguese: 'morrer',
                french: 'mourir'
            },
            198: {
                english: 'not',
                spanish: 'no',
                italian: 'non',
                portuguese: 'nem',
                french: 'pas'
            },
            199: {
                english: 'leave',
                spanish: 'partir',
                italian: 'partire',
                portuguese: 'partir',
                french: 'partir'
            },
            200: {
                english: 'five',
                spanish: 'cinco',
                italian: 'cinque',
                portuguese: 'cinco',
                french: 'cinq'
            },
            201: {
                english: 'spirit',
                spanish: 'espirito',
                italian: 'spirito',
                portuguese: 'espirito',
                french: 'esprit'
            },
            202: {
                english: 'sun',
                spanish: 'sol',
                italian: 'sole',
                portuguese: 'sol',
                french: 'soleil'
            },
            203: {
                english: 'last',
                spanish: 'último',
                italian: 'ultimo',
                portuguese: 'último',
                french: 'dernier'
            },
            204: {
                english: 'throw',
                spanish: 'tirar',
                italian: 'gettare',
                portuguese: 'atirar',
                french: 'jeter'
            },
            205: {
                english: 'ten',
                spanish: 'diez',
                italian: 'dieci',
                portuguese: 'dez',
                french: 'dix'
            },
            206: {
                english: 'king',
                spanish: 'rey',
                italian: 're',
                portuguese: 'rei',
                french: 'roi'
            },
            207: {
                english: 'state',
                spanish: 'estado',
                italian: 'stato',
                portuguese: 'estado',
                french: 'état'
            },
            208: {
                english: 'body',
                spanish: 'cuerpo',
                italian: 'corpo',
                portuguese: 'corpo',
                french: 'corps'
            },
            209: {
                english: 'much',
                spanish: 'mucho',
                italian: 'molto',
                portuguese: 'muito',
                french: 'beaucoup'
            },
            210: {
                english: 'follow',
                spanish: 'seguir',
                italian: 'seguire',
                portuguese: 'seguir',
                french: 'suivre'
            },
            211: {
                english: 'arm',
                spanish: 'brazo',
                italian: 'braccio',
                portuguese: 'braço',
                french: 'bras'
            },
            212: {
                english: 'write',
                spanish: 'escribir',
                italian: 'scrivere',
                portuguese: 'escrever',
                french: 'écrire'
            },
            213: {
                english: 'white',
                spanish: 'blanco',
                italian: 'bianco',
                portuguese: 'branco',
                french: 'blanc'
            },
            214: {
                english: 'show',
                spanish: 'mostrar',
                italian: 'mostrare',
                portuguese: 'mostrar',
                french: 'montrer'
            },
            215: {
                english: 'fall',
                spanish: 'caer',
                italian: 'cadere',
                portuguese: 'cair',
                french: 'tomber'
            },
            216: {
                english: 'place',
                spanish: 'lugar',
                italian: 'posto',
                portuguese: 'lugar',
                french: 'place/endroit'
            },
            217: {
                english: 'open',
                spanish: 'abrir',
                italian: 'aprire',
                portuguese: 'abrir',
                french: 'ouvrir'
            },
            218: {
                english: 'party',
                spanish: 'partido',
                italian: 'partito',
                portuguese: 'partido',
                french: 'parti'
            },
            219: {
                english: 'enough',
                spanish: 'suficiente',
                italian: 'abbastanza',
                portuguese: 'suficiente',
                french: 'assez'
            },
            220: {
                english: 'their',
                spanish: 'les',
                italian: 'loro',
                portuguese: 'seus',
                french: 'leur'
            },
            221: {
                english: 'expensive',
                spanish: 'caro',
                italian: 'caro',
                portuguese: 'caro',
                french: 'cher'
            },
            222: {
                english: 'here is',
                spanish: 'aqui esta',
                italian: 'ecco',
                portuguese: 'eis',
                french: 'voilà'
            },
            223: {
                english: 'year',
                spanish: 'año',
                italian: 'anno',
                portuguese: 'ano',
                french: 'année'
            },
            224: {
                english: 'far',
                spanish: 'lejos',
                italian: 'lontano',
                portuguese: 'longe',
                french: 'loin'
            },
            225: {
                english: 'point',
                spanish: 'punto',
                italian: 'punto',
                portuguese: 'ponto',
                french: 'point'
            },
            226: {
                english: 'face',
                spanish: 'cara',
                italian: 'faccia',
                portuguese: 'cara',
                french: 'visage'
            },
            227: {
                english: 'noise',
                spanish: 'ruido',
                italian: 'rumore',
                portuguese: 'barulho',
                french: 'bruit'
            },
            228: {
                english: 'letter',
                spanish: 'letra',
                italian: 'lettera',
                portuguese: 'letra',
                french: 'lettre'
            },
            229: {
                english: 'background',
                spanish: 'fondo',
                italian: 'fondo',
                portuguese: 'fundo',
                french: 'fond'
            },
            230: {
                english: 'force',
                spanish: 'fuerza',
                italian: 'forza',
                portuguese: 'força',
                french: 'force'
            },
            231: {
                english: 'stop',
                spanish: 'detener',
                italian: 'fermare',
                portuguese: 'deter',
                french: 'arrêter'
            },
            232: {
                english: 'lose',
                spanish: 'perder',
                italian: 'perdere',
                portuguese: 'perder',
                french: 'perdre'
            },
            233: {
                english: 'start',
                spanish: 'comenzar',
                italian: 'cominciare',
                portuguese: 'começar',
                french: 'commencer'
            },
            234: {
                english: 'seem',
                spanish: 'parecer',
                italian: 'sembrare',
                portuguese: 'parecer',
                french: 'paraître'
            },
            235: {
                english: 'any',
                spanish: 'algun',
                italian: 'alcun',
                portuguese: 'algum',
                french: 'aucun'
            },
            236: {
                english: 'walk',
                spanish: 'caminar',
                italian: 'camminare',
                portuguese: 'caminhar',
                french: 'marcher'
            },
            237: {
                english: 'middle',
                spanish: 'medio',
                italian: 'mezzo',
                portuguese: 'meio',
                french: 'milieu'
            },
            238: {
                english: 'saint',
                spanish: 'santo',
                italian: 'santo',
                portuguese: 'santo',
                french: 'saint'
            },
            239: {
                english: 'idea',
                spanish: 'idea',
                italian: 'idea',
                portuguese: 'ideia',
                french: 'idée'
            },
            240: {
                english: 'almost',
                spanish: 'casi',
                italian: 'quasi',
                portuguese: 'quase',
                french: 'presque'
            },
            241: {
                english: 'elsewhere',
                spanish: 'otro lugar',
                italian: 'altrove',
                portuguese: 'outro lugar',
                french: 'ailleurs'
            },
            242: {
                english: 'work',
                spanish: 'trabajo',
                italian: 'lavoro',
                portuguese: 'trabalho',
                french: 'travail'
            },
            243: {
                english: 'light',
                spanish: 'luz',
                italian: 'luce',
                portuguese: 'luz',
                french: 'lumière'
            },
            244: {
                english: 'long',
                spanish: 'largo',
                italian: 'lungo',
                portuguese: 'longo',
                french: 'long'
            },
            245: {
                english: 'only',
                spanish: 'solamente',
                italian: 'soltanto',
                portuguese: 'somente',
                french: 'seulement'
            },
            246: {
                english: 'month',
                spanish: 'mes',
                italian: 'mese',
                portuguese: 'mês',
                french: 'mois'
            },
            247: {
                english: 'son',
                spanish: 'hijo',
                italian: 'figlio',
                portuguese: 'filho',
                french: 'fils'
            },
            248: {
                english: 'nine',
                spanish: 'nueve',
                italian: 'nove',
                portuguese: 'nove',
                french: 'neuf'
            },
            249: {
                english: 'such',
                spanish: 'tal',
                italian: 'tale',
                portuguese: 'tal',
                french: 'tel'
            },
            250: {
                english: 'raise',
                spanish: 'levantar',
                italian: 'alzare',
                portuguese: 'levantar',
                french: 'lever/soulever'
            },
            251: {
                english: 'reason',
                spanish: 'razón',
                italian: 'ragione',
                portuguese: 'razão',
                french: 'raison'
            },
            252: {
                english: 'effect',
                spanish: 'efecto',
                italian: 'effetto',
                portuguese: 'efeito',
                french: 'effet'
            },
            253: {
                english: 'government',
                spanish: 'gobierno',
                italian: 'governo',
                portuguese: 'governo',
                french: 'gouvernement'
            },
            254: {
                english: 'allow',
                spanish: 'permitir',
                italian: 'permettere',
                portuguese: 'permitir',
                french: 'permettre'
            },
            255: {
                english: 'poor',
                spanish: 'pobre',
                italian: 'povero',
                portuguese: 'pobre',
                french: 'pauvre'
            },
            256: {
                english: 'sit',
                spanish: 'sentar',
                italian: 'sedere',
                portuguese: 'sentar',
                french: 'asseoir'
            },
            257: {
                english: 'point',
                spanish: 'punto',
                italian: 'punto',
                portuguese: 'ponto',
                french: 'point'
            },
            258: {
                english: 'full',
                spanish: 'lleno',
                italian: 'pieno',
                portuguese: 'cheio',
                french: 'plein'
            },
            259: {
                english: 'person',
                spanish: 'persona',
                italian: 'persona',
                portuguese: 'pessoa',
                french: 'personne'
            },
            260: {
                english: 'true',
                spanish: 'verdarero',
                italian: 'vero',
                portuguese: 'verdadeiro',
                french: 'vrai/véritable'
            },
            261: {
                english: 'people',
                spanish: 'gente',
                italian: 'gente',
                portuguese: 'gente',
                french: 'gens'
            },
            262: {
                english: 'done',
                spanish: 'hecho',
                italian: 'fatto',
                portuguese: 'faz',
                french: 'fait'
            },
            263: {
                english: 'war',
                spanish: 'guerra',
                italian: 'guerra',
                portuguese: 'guerra',
                french: 'guerre'
            },
            264: {
                english: 'listen',
                spanish: 'escuchar',
                italian: 'ascoltare',
                portuguese: 'escutar',
                french: 'écouter'
            },
            265: {
                english: 'thought',
                spanish: 'pensamiento',
                italian: 'pensiero',
                portuguese: 'pensamento',
                french: 'pensée'
            },
            266: {
                english: 'matter',
                spanish: 'asunto',
                italian: 'affare',
                portuguese: 'asssunto',
                french: 'affaire'
            },
            267: {
                english: 'morning',
                spanish: 'mañana',
                italian: 'mattina',
                portuguese: 'manhã',
                french: 'matin'
            },
            268: {
                english: 'stone',
                spanish: 'piedra',
                italian: 'pietra',
                portuguese: 'pedra',
                french: 'pierre'
            },
            269: {
                english: 'mount',
                spanish: 'montar',
                italian: 'montare',
                portuguese: 'montar',
                french: 'monter'
            },
            270: {
                english: 'low',
                spanish: 'bajo',
                italian: 'basso',
                portuguese: 'sob',
                french: 'bas'
            },
            271: {
                english: 'wind',
                spanish: 'viento',
                italian: 'vento',
                portuguese: 'vento',
                french: 'vent'
            },
            272: {
                english: 'doubt',
                spanish: 'duda',
                italian: 'dubbio',
                portuguese: 'dúvida',
                french: 'doute'
            },
            273: {
                english: 'front',
                spanish: 'frente',
                italian: 'fronte',
                portuguese: 'frente',
                french: 'front'
            },
            274: {
                english: 'shadow',
                spanish: 'sombra',
                italian: 'ombre',
                portuguese: 'somra',
                french: 'ombre'
            },
            275: {
                english: 'part',
                spanish: 'parte',
                italian: 'parte',
                portuguese: 'parte',
                french: 'part'
            },
            276: {
                english: 'master',
                spanish: 'maestro',
                italian: 'maestro',
                portuguese: 'mestre',
                french: 'maître'
            },
            277: {
                english: 'today',
                spanish: 'hoy',
                italian: 'oggi',
                portuguese: 'hoje',
                french: "aujourd'hui"
            },
            278: {
                english: 'need',
                spanish: 'necesidad',
                italian: 'bisogno',
                portuguese: 'necessidade',
                french: 'besoin'
            },
            279: {
                english: 'question',
                spanish: 'pregunta',
                italian: 'domanda',
                portuguese: 'pergunta',
                french: 'question'
            },
            280: {
                english: 'perceive',
                spanish: 'percibir',
                italian: 'scorgere',
                portuguese: 'perceber',
                french: 'apercevoir'
            },
            281: {
                english: 'receive',
                spanish: 'recibir',
                italian: 'ricevere',
                portuguese: 'receber',
                french: 'recevoir'
            },
            282: {
                english: 'better',
                spanish: 'mejor',
                italian: 'meglio',
                portuguese: 'melhor ',
                french: 'mieux/meilleur'
            },
            283: {
                english: 'penalty',
                spanish: 'pena',
                italian: 'pena',
                portuguese: 'pena',
                french: 'peine'
            },
            284: {
                english: 'tower',
                spanish: 'torre',
                italian: 'torre',
                portuguese: 'torre',
                french: 'tour'
            },
            285: {
                english: 'serve',
                spanish: 'servir',
                italian: 'servire',
                portuguese: 'servir',
                french: 'servir'
            },
            286: {
                english: 'around',
                spanish: 'alrededor',
                italian: 'intorno',
                portuguese: 'redor',
                french: 'autour'
            },
            287: {
                english: 'near',
                spanish: 'cerca',
                italian: 'vicino',
                portuguese: 'perto',
                french: 'près'
            },
            288: {
                english: 'finish',
                spanish: 'acabar',
                italian: 'finire',
                portuguese: 'acabar',
                french: 'finir/achever'
            },
            289: {
                english: 'family',
                spanish: 'familia',
                italian: 'famiglia',
                portuguese: 'família',
                french: 'famille'
            },
            290: {
                english: 'often',
                spanish: 'frecuentemente',
                italian: 'spesso',
                portuguese: 'frequentemente',
                french: 'souvent'
            },
            291: {
                english: 'laugh',
                spanish: 'reír',
                italian: 'ridere',
                portuguese: 'rir',
                french: 'rire'
            },
            292: {
                english: 'above',
                spanish: 'arriba',
                italian: 'sopra',
                portuguese: 'acima',
                french: 'dessus'
            },
            293: {
                english: 'mrs',
                spanish: 'señora',
                italian: 'signora',
                portuguese: 'senhora',
                french: 'madame'
            },
            294: {
                english: 'sort',
                spanish: 'tipo',
                italian: 'sorta',
                portuguese: 'tipo',
                french: 'sorte'
            },
            295: {
                english: 'figure',
                spanish: 'figura',
                italian: 'figura',
                portuguese: 'figura',
                french: 'figure'
            },
            296: {
                english: 'right',
                spanish: 'derecho',
                italian: 'diritto',
                portuguese: 'direito',
                french: 'droit'
            },
            297: {
                english: 'fear',
                spanish: 'miedo/pavor',
                italian: 'paura',
                portuguese: 'medo/pavor',
                french: 'peur'
            },
            298: {
                english: 'tip',
                spanish: 'punta',
                italian: 'punta',
                portuguese: 'ponta',
                french: 'bout'
            },
            299: {
                english: 'silence',
                spanish: 'silencio',
                italian: 'silenzio',
                portuguese: 'silêncio',
                french: 'silence'
            },
            300: {
                english: 'big',
                spanish: 'gordo',
                italian: 'grosso',
                portuguese: 'gordo',
                french: 'gros'
            },
            301: {
                english: 'chief',
                spanish: 'jefe',
                italian: 'capo',
                portuguese: 'chefe',
                french: 'chef'
            },
            302: {
                english: 'six',
                spanish: 'seis',
                italian: 'sei',
                portuguese: 'seis',
                french: 'six'
            },
            303: {
                english: 'woods',
                spanish: 'bosque',
                italian: 'bosco',
                portuguese: 'bosque',
                french: 'bois'
            },
            304: {
                english: 'history',
                spanish: 'historia',
                italian: 'storia',
                portuguese: 'história',
                french: 'histoire'
            },
            305: {
                english: 'scream',
                spanish: 'gritar',
                italian: 'gridare',
                portuguese: 'gritar',
                french: 'crier'
            },
            306: {
                english: 'play',
                spanish: 'jugar',
                italian: 'giocare',
                portuguese: 'jogar',
                french: 'jouer'
            },
            307: {
                english: 'fire',
                spanish: 'fuego',
                italian: 'fuoco',
                portuguese: 'fogo',
                french: 'feu'
            },
            308: {
                english: 'turn',
                spanish: 'girar',
                italian: 'girare',
                portuguese: 'girar',
                french: 'tourner'
            },
            309: {
                english: 'sweet',
                spanish: 'dulce',
                italian: 'dolce',
                portuguese: 'doce',
                french: 'doux'
            },
            310: {
                english: 'strong',
                spanish: 'fuerte',
                italian: 'forte',
                portuguese: 'forte',
                french: 'fort'
            },
            311: {
                english: 'happy',
                spanish: 'feliz',
                italian: 'felice',
                portuguese: 'feliz',
                french: 'heureux'
            },
            312: {
                english: 'guard',
                spanish: 'guardar',
                italian: 'mantenere',
                portuguese: 'guardar',
                french: 'garder'
            },
            313: {
                english: 'movement',
                spanish: 'movimiento',
                italian: 'movimento',
                portuguese: 'movimento',
                french: 'mouvement'
            },
            314: {
                english: 'end',
                spanish: 'fin',
                italian: 'fine',
                portuguese: 'fim',
                french: 'fin'
            },
            315: {
                english: 'recognize',
                spanish: 'reconocer',
                italian: 'reconoscere',
                portuguese: 'reconhecer',
                french: 'reconnaître'
            },
            316: {
                english: 'how',
                spanish: 'como',
                italian: 'come',
                portuguese: 'como',
                french: 'comment'
            },
            317: {
                english: 'route',
                spanish: 'ruta',
                italian: 'rotta',
                portuguese: 'rota',
                french: 'route'
            },
            318: {
                english: 'from',
                spanish: 'desde',
                italian: 'da',
                portuguese: 'desde',
                french: 'dès'
            },
            319: {
                english: 'eat',
                spanish: 'comer',
                italian: 'mangiare ',
                portuguese: 'comer',
                french: 'manger'
            },
            320: {
                english: 'book',
                spanish: 'libro',
                italian: 'libro',
                portuguese: 'livro',
                french: 'livre'
            },
            321: {
                english: 'tree',
                spanish: 'árbol',
                italian: 'albero',
                portuguese: 'árvore',
                french: 'arbre'
            },
            322: {
                english: 'run',
                spanish: 'correr',
                italian: 'correre',
                portuguese: 'correr',
                french: 'courir'
            },
            323: {
                english: 'case',
                spanish: 'caso',
                italian: 'caso',
                portuguese: 'caso',
                french: 'cas'
            },
            324: {
                english: 'eight',
                spanish: 'ocho',
                italian: 'otto',
                portuguese: 'oito',
                french: 'huit'
            },
            325: {
                english: 'when',
                spanish: 'cuando',
                italian: 'quando',
                portuguese: 'quando',
                french: 'lorsque'
            },
            326: {
                english: 'wall',
                spanish: 'muro',
                italian: 'muro',
                portuguese: 'muro',
                french: 'mur'
            },
            327: {
                english: 'order',
                spanish: 'orden',
                italian: 'ordine',
                portuguese: 'ordem',
                french: 'ordre'
            },
            328: {
                english: 'continue',
                spanish: 'continuar',
                italian: 'continuare',
                portuguese: 'continuar',
                french: 'continuer'
            },
            329: {
                english: 'happiness',
                spanish: 'felicidad',
                italian: 'felicità',
                portuguese: 'felicidade',
                french: 'bonheur'
            },
            330: {
                english: 'forget',
                spanish: 'olvidar',
                italian: 'dimenticare',
                portuguese: 'esquecer',
                french: 'oublier'
            },
            331: {
                english: 'descend',
                spanish: 'descender',
                italian: 'scendere',
                portuguese: 'descer',
                french: 'descendre'
            },
            332: {
                english: 'high',
                spanish: 'alto',
                italian: 'alto',
                portuguese: 'alto',
                french: 'haut'
            },
            333: {
                english: 'interest',
                spanish: 'interés',
                italian: 'interesse',
                portuguese: 'interesse',
                french: 'intérêt'
            },
            334: {
                english: 'hide',
                spanish: 'esconder',
                italian: 'nascondere',
                portuguese: 'esconder',
                french: 'cacher'
            },
            335: {
                english: 'each',
                spanish: 'cada',
                italian: 'ognuno',
                portuguese: 'cada',
                french: 'chacun'
            },
            336: {
                english: 'profound',
                spanish: 'profundo',
                italian: 'profondo',
                portuguese: 'profundo',
                french: 'profond'
            },
            337: {
                english: 'money',
                spanish: 'dinero',
                italian: 'soldi',
                portuguese: 'dinheiro',
                french: 'argent'
            },
            338: {
                english: 'cause',
                spanish: 'causa',
                italian: 'causa',
                portuguese: 'causa',
                french: 'cause'
            },
            339: {
                english: 'pose',
                spanish: 'poner',
                italian: 'porre',
                portuguese: 'pôr',
                french: 'poser'
            },
            340: {
                english: 'march',
                spanish: 'marcha',
                italian: 'marcia',
                portuguese: 'marcha',
                french: 'marche'
            },
            341: {
                english: 'is',
                spanish: 'es',
                italian: 'è',
                portuguese: 'é',
                french: 'est'
            },
            342: {
                english: 'through',
                spanish: 'través',
                italian: 'traverso',
                portuguese: 'través',
                french: 'travers'
            },
            343: {
                english: 'instant',
                spanish: 'instante',
                italian: 'istante',
                portuguese: 'instante',
                french: 'instant'
            },
            344: {
                english: 'manner/way',
                spanish: 'manera',
                italian: 'maniera',
                portuguese: 'maneira',
                french: 'façon/manière'
            },
            345: {
                english: 'eye',
                spanish: 'ojo',
                italian: 'occhio',
                portuguese: 'olho',
                french: 'oeil'
            },
            346: {
                english: 'shoot',
                spanish: 'disparar',
                italian: 'stirare',
                portuguese: 'disparar',
                french: 'tirer'
            },
            347: {
                english: 'form',
                spanish: 'forma',
                italian: 'forma',
                portuguese: 'forma',
                french: 'forme'
            },
            348: {
                english: 'present',
                spanish: 'apresentar',
                italian: 'presentare',
                portuguese: 'presentar',
                french: 'présenter'
            },
            349: {
                english: 'add',
                spanish: 'añadir',
                italian: 'aggiungere',
                portuguese: 'acrescentar',
                french: 'ajouter'
            },
            350: {
                english: 'act',
                spanish: 'actuar',
                italian: 'agire',
                portuguese: 'agir',
                french: 'agir'
            },
            351: {
                english: 'path',
                spanish: 'camino',
                italian: 'cammino',
                portuguese: 'caminho',
                french: 'chemin'
            },
            352: {
                english: 'hair',
                spanish: 'cabello',
                italian: 'capello',
                portuguese: 'cabelo',
                french: 'cheveu'
            },
            353: {
                english: 'offer',
                spanish: 'ofrecer',
                italian: 'offrire',
                portuguese: 'oferecer',
                french: 'offrir'
            },
            354: {
                english: 'above all',
                spanish: 'sobre todo',
                italian: 'sopratutto',
                portuguese: 'sobretudo',
                french: 'surtout'
            },
            355: {
                english: 'certain',
                spanish: 'cierto',
                italian: 'certo',
                portuguese: 'certo',
                french: 'certain'
            },
            356: {
                english: 'pleasure',
                spanish: 'placer',
                italian: 'piacere',
                portuguese: 'prazer',
                french: 'plaisir'
            },
            357: {
                english: 'following',
                spanish: 'seguido',
                italian: 'seguito',
                portuguese: 'seguido',
                french: 'suite'
            },
            358: {
                english: 'learn',
                spanish: 'aprender',
                italian: 'imparare',
                portuguese: 'aprender',
                french: 'apprendre'
            },
            359: {
                english: 'despite',
                spanish: 'a pesar',
                italian: 'sebbene',
                portuguese: 'apesar',
                french: 'malgré'
            },
            360: {
                english: 'kill',
                spanish: 'matar',
                italian: 'uccidere',
                portuguese: 'matar',
                french: 'tuer'
            },
            360: {
                english: 'kill',
                spanish: 'matar',
                italian: 'uccidere',
                portuguese: 'matar',
                french: 'tuer'
            },
            360: {
                english: 'kill',
                spanish: 'matar',
                italian: 'uccidere',
                portuguese: 'matar',
                french: 'tuer'
            },
            360: {
                english: 'kill',
                spanish: 'matar',
                italian: 'uccidere',
                portuguese: 'matar',
                french: 'tuer'
            },
            360: {
                english: 'kill',
                spanish: 'matar',
                italian: 'uccidere',
                portuguese: 'matar',
                french: 'tuer'
            },
            360: {
                english: 'kill',
                spanish: 'matar',
                italian: 'uccidere',
                portuguese: 'matar',
                french: 'tuer'
            },
            361: {
                english: 'red',
                spanish: 'rojo',
                italian: 'rosso',
                portuguese: 'vermelho',
                french: 'rouge'
            },
            362: {
                english: 'blood',
                spanish: 'sangre',
                italian: 'sangue',
                portuguese: 'sangue',
                french: 'sang'
            },
            363: {
                english: 'meet',
                spanish: 'encontrar',
                italian: 'incontrare',
                portuguese: 'encontrar',
                french: 'rencontrer'
            },
            364: {
                english: 'feeling',
                spanish: 'sentimiento',
                italian: 'sentimento',
                portuguese: 'sentimento',
                french: 'sentiment'
            },
            365: {
                english: 'flower',
                spanish: 'flor',
                italian: 'fiore',
                portuguese: 'flor',
                french: 'fleur'
            },
            366: {
                english: 'however',
                spanish: 'sin embargo',
                italian: 'tuttavia',
                portuguese: 'entanto',
                french: 'cependant'
            },
            367: {
                english: 'service',
                spanish: 'servicio',
                italian: 'servizio',
                portuguese: 'serviço',
                french: 'service'
            },
            368: {
                english: 'several',
                spanish: 'varias',
                italian: 'parecchi',
                portuguese: 'vários',
                french: 'plusieurs'
            },
            369: {
                english: 'table',
                spanish: 'mesa',
                italian: 'tavolo',
                portuguese: 'mesa',
                french: 'table'
            },
            370: {
                english: 'fast',
                spanish: 'pronto',
                italian: 'fretta',
                portuguese: 'depressa',
                french: 'vite'
            },
            371: {
                english: 'peace',
                spanish: 'paz',
                italian: 'pace',
                portuguese: 'paz',
                french: 'paix'
            },
            372: {
                english: 'send',
                spanish: 'enviar',
                italian: 'inviare',
                portuguese: 'enviar',
                french: 'envoyer'
            },
            373: {
                english: 'medium',
                spanish: 'medio',
                italian: 'medio',
                portuguese: 'médio',
                french: 'moyen'
            },
            374: {
                english: 'sleep',
                spanish: 'dormir',
                italian: 'dormire',
                portuguese: 'dormir',
                french: 'dormir'
            },
            375: {
                english: 'push',
                spanish: 'empujar',
                italian: 'spingere',
                portuguese: 'empurrar',
                french: 'pousser'
            },
            376: {
                english: 'bed',
                spanish: 'cama',
                italian: 'lettino',
                portuguese: 'cama',
                french: 'lit'
            },
            377: {
                english: 'human',
                spanish: 'humano',
                italian: 'umano',
                portuguese: 'humano',
                french: 'humain'
            },
            378: {
                english: 'car',
                spanish: 'carro',
                italian: 'auto',
                portuguese: 'carro',
                french: 'voiture'
            },
            379: {
                english: 'remember',
                spanish: 'recprdar',
                italian: 'ricordare',
                portuguese: 'recordar',
                french: 'rappeler'
            },
            380: {
                english: 'read',
                spanish: 'leer',
                italian: 'leggere',
                portuguese: 'ler',
                french: 'lire'
            },
            381: {
                english: 'general',
                spanish: 'general',
                italian: 'generale',
                portuguese: 'geral',
                french: 'général'
            },
            382: {
                english: 'nature',
                spanish: 'naturaleza',
                italian: 'natura',
                portuguese: 'natureza',
                french: 'nature'
            },
            383: {
                english: 'gold',
                spanish: 'oro',
                italian: 'oro',
                portuguese: 'ouro',
                french: 'or'
            },
            384: {
                english: 'joy',
                spanish: 'alegría',
                italian: 'gioia',
                portuguese: 'alegria',
                french: 'joie'
            },
            385: {
                english: 'seven',
                spanish: 'siete',
                italian: 'sette',
                portuguese: 'sete',
                french: 'sept'
            },
            386: {
                english: 'late',
                spanish: 'tarde',
                italian: 'tardi',
                portuguese: 'tarde',
                french: 'tard'
            },
            387: {
                english: 'president',
                spanish: 'presidente',
                italian: 'presidente',
                portuguese: 'presidente',
                french: 'président'
            },
            388: {
                english: 'mouth',
                spanish: 'boca',
                italian: 'bocca',
                portuguese: 'boca',
                french: 'bouche'
            },
            389: {
                english: 'change',
                spanish: 'cambiar',
                italian: 'cambiare',
                portuguese: 'mudar',
                french: 'changer'
            },
            390: {
                english: 'cold',
                spanish: 'frío',
                italian: 'freddo',
                portuguese: 'frio',
                french: 'froid'
            },
            391: {
                english: 'count',
                spanish: 'contar',
                italian: 'contare',
                portuguese: 'contar',
                french: 'compter'
            },
            392: {
                english: 'occupy',
                spanish: 'ocupar',
                italian: 'occupare',
                portuguese: 'ocupar',
                french: 'occuper'
            },
            393: {
                english: 'sense',
                spanish: 'sentido',
                italian: 'senso',
                portuguese: 'sentido',
                french: 'sens'
            },
            394: {
                english: 'cry',
                spanish: 'grito',
                italian: 'grido',
                portuguese: 'grito',
                french: 'cri'
            },
            395: {
                english: 'horse',
                spanish: 'caballo',
                italian: 'cavallo',
                portuguese: 'cavalo',
                french: 'cheval'
            },
            396: {
                english: 'law',
                spanish: 'ley',
                italian: 'legge',
                portuguese: 'lei',
                french: 'loi'
            },
            397: {
                english: 'dark',
                spanish: 'oscuro',
                italian: 'scuro',
                portuguese: 'escuro',
                french: 'sombre'
            },
            398: {
                english: 'sure',
                spanish: 'seguro',
                italian: 'sicuro',
                portuguese: 'seguro',
                french: 'sûr'
            },
            399: {
                english: 'species',
                spanish: 'especie',
                italian: 'specie',
                portuguese: 'espécie',
                french: 'espèce'
            },
            400: {
                english: 'ancient',
                spanish: 'antiguo',
                italian: 'antico',
                portuguese: 'antigo',
                french: 'ancien'
            },
            401: {
                english: 'while',
                spanish: 'mientras',
                italian: 'mentre',
                portuguese: 'enquanto',
                french: 'tandis'
            },
            402: {
                english: 'hit',
                spanish: 'golpear',
                italian: 'colpire',
                portuguese: 'bater',
                french: 'frapper/batter'
            },
            403: {
                english: 'minister',
                spanish: 'ministro',
                italian: 'ministro',
                portuguese: 'ministro',
                french: 'ministre'
            },
            404: {
                english: 'according',
                spanish: 'según',
                italian: 'secondo',
                portuguese: 'segundo',
                french: 'selon'
            },
            405: {
                english: 'explain',
                spanish: 'explicar',
                italian: 'spiegare',
                portuguese: 'explicar',
                french: 'expliquer'
            },
            406: {
                english: 'own',
                spanish: 'propio',
                italian: 'proprio',
                portuguese: 'próprio',
                french: 'propre'
            },
            407: {
                english: 'obtain',
                spanish: 'obtener',
                italian: 'ottenere',
                portuguese: 'obter',
                french: 'obtenir'
            },
            408: {
                english: 'wrong',
                spanish: 'mal',
                italian: 'male',
                portuguese: 'mal',
                french: 'mal'
            },
            409: {
                english: 'crying',
                spanish: 'llorar',
                italian: 'piangere',
                portuguese: 'chorar',
                french: 'pleurer'
            },
            410: {
                english: 'try',
                spanish: 'intentar',
                italian: 'tentare',
                portuguese: 'tentar',
                french: 'essayer'
            },
            411: {
                english: 'repeat',
                spanish: 'repetir',
                italian: 'repetere',
                portuguese: 'repetir',
                french: 'répéter'
            },
            412: {
                english: 'society',
                spanish: 'sociedad',
                italian: 'società',
                portuguese: 'sociedade',
                french: 'société'
            },
            413: {
                english: 'politics',
                spanish: 'política',
                italian: 'politica',
                portuguese: 'política',
                french: 'politique'
            },
            414: {
                english: 'ear',
                spanish: 'oído',
                italian: 'orecchio',
                portuguese: 'orelha',
                french: 'oreille'
            },
            415: {
                english: 'pay',
                spanish: 'pagar',
                italian: 'pagare',
                portuguese: 'pagar',
                french: 'payer/verser'
            },
            416: {
                english: 'bring',
                spanish: 'traer',
                italian: 'aportare',
                portuguese: 'trazer',
                french: 'apporter/amener'
            },
            417: {
                english: 'window',
                spanish: 'ventana',
                italian: 'finestra',
                portuguese: 'janela',
                french: 'fenêtre'
            },
            418: {
                english: 'behind',
                spanish: 'detrás',
                italian: 'dietro',
                portuguese: 'atrás',
                french: 'derrière'
            },
            419: {
                english: 'possible',
                spanish: 'posible',
                italian: 'possibile',
                portuguese: 'possível',
                french: 'possible'
            },
            420: {
                english: 'fortune',
                spanish: 'fortuna',
                italian: 'fortuna',
                portuguese: 'fortuna',
                french: 'fortune'
            },
            421: {
                english: 'account',
                spanish: 'cuenta',
                italian: 'conto',
                portuguese: 'conta',
                french: 'compte'
            },
            422: {
                english: 'field',
                spanish: 'campo',
                italian: 'campo',
                portuguese: 'campo',
                french: 'champ'
            },
            423: {
                english: 'handle',
                spanish: 'manejar',
                italian: 'maneggiare',
                portuguese: 'manejar',
                french: 'manier'
            },
            424: {
                english: 'truly',
                spanish: 'verdaderamente',
                italian: 'veramente',
                portuguese: 'verdadeiramente',
                french: 'vraiment'
            },
            425: {
                english: 'immense',
                spanish: 'inmenso',
                italian: 'immenso',
                portuguese: 'imenso',
                french: 'immense'
            },
            426: {
                english: 'action',
                spanish: 'acción',
                italian: 'azione',
                portuguese: 'acção',
                french: 'action'
            },
            427: {
                english: 'drink',
                spanish: 'beber',
                italian: 'bere',
                portuguese: 'beber',
                french: 'boire'
            },
            428: {
                english: 'public',
                spanish: 'público',
                italian: 'pubblico',
                portuguese: 'público',
                french: 'public'
            },
            429: {
                english: 'guy',
                spanish: 'chico',
                italian: 'ragazzi',
                portuguese: 'rapaz',
                french: 'garçon'
            },
            430: {
                english: 'blue',
                spanish: 'azul',
                italian: 'blu',
                portuguese: 'azul',
                french: 'bleu'
            },
            431: {
                english: 'smile',
                spanish: 'sonrisa',
                italian: 'sorriso',
                portuguese: 'sorriso',
                french: 'sourire'
            },
            432: {
                english: 'color',
                spanish: 'color',
                italian: 'colore',
                portuguese: 'cor',
                french: 'couleur'
            },
            433: {
                english: 'lie down',
                spanish: 'acostar',
                italian: 'coricarsi',
                portuguese: 'deitar',
                french: 'coucher'
            },
            434: {
                english: 'paper',
                spanish: 'papel',
                italian: 'carta',
                portuguese: 'papel',
                french: 'papier'
            },
            435: {
                english: 'soon',
                spanish: 'pronto',
                italian: 'presto',
                portuguese: 'breve',
                french: 'bientôt'
            },
            436: {
                english: 'cause',
                spanish: 'causar',
                italian: 'causare',
                portuguese: 'causar',
                french: 'causer'
            },
            437: {
                english: 'mountain',
                spanish: 'montaña',
                italian: 'montagna',
                portuguese: 'montanha',
                french: 'montagne'
            },
            438: {
                english: 'ground',
                spanish: 'suelo',
                italian: 'suolo',
                portuguese: 'chão',
                french: 'sol'
            },
            439: {
                english: 'artwork',
                spanish: 'obra',
                italian: 'opera',
                portuguese: 'obra',
                french: 'œuvre'
            },
            440: {
                english: 'thirty',
                spanish: 'treinta',
                italian: 'trenta',
                portuguese: 'trinta',
                french: 'trente'
            },
            441: {
                english: 'exist',
                spanish: 'existir',
                italian: 'esistere',
                portuguese: 'existir',
                french: 'exister'
            },
            442: {
                english: 'course',
                spanish: 'curso',
                italian: 'corso',
                portuguese: 'curso',
                french: 'cours'
            },
            443: {
                english: 'tighten',
                spanish: 'apretar',
                italian: 'stringere',
                portuguese: 'apertar',
                french: 'serrer'
            },
            444: {
                english: 'desire',
                spanish: 'deseo',
                italian: 'desiderio',
                portuguese: 'desejo',
                french: 'désir'
            },
            445: {
                english: 'lack',
                spanish: 'faltar',
                italian: 'mancare',
                portuguese: 'faltar',
                french: 'manquer'
            },
            446: {
                english: 'court',
                spanish: 'corte',
                italian: 'cortile',
                portuguese: 'corte',
                french: 'cour'
            },
            447: {
                english: 'nominate',
                spanish: 'nominar',
                italian: 'nominare',
                portuguese: 'nomear',
                french: 'nommer'
            },
            448: {
                english: 'edge',
                spanish: 'bordo',
                italian: 'bordo',
                portuguese: 'bordo',
                french: 'bord'
            },
            449: {
                english: 'pain',
                spanish: 'dolor',
                italian: 'dolore',
                portuguese: 'dor',
                french: 'douleur'
            },
            450: {
                english: 'drive',
                spanish: 'conducir',
                italian: 'guidare',
                portuguese: 'conduzir',
                french: 'conduire'
            },
            451: {
                english: 'hall',
                spanish: 'sala',
                italian: 'sala',
                portuguese: 'sala',
                french: 'salle'
            },
            452: {
                english: 'seize',
                spanish: 'aprovechar',
                italian: 'cogliere',
                portuguese: 'aproveitar',
                french: 'saisir'
            },
            453: {
                english: 'project',
                spanish: 'proyecto',
                italian: 'progetto',
                portuguese: 'projecto',
                french: 'projet'
            },
            454: {
                english: 'remain',
                spanish: 'permanecer',
                italian: 'rimanere',
                portuguese: 'permanecer',
                french: 'demeurer'
            },
            455: {
                english: 'simple',
                spanish: 'simple',
                italian: 'semplice',
                portuguese: 'simples',
                french: 'simple'
            },
            456: {
                english: 'study',
                spanish: 'estudio',
                italian: 'studio',
                portuguese: 'estudo',
                french: 'étude'
            },
            457: {
                english: 'journal',
                spanish: 'diario',
                italian: 'giornale',
                portuguese: 'jornal',
                french: 'journal'
            },
            458: {
                english: 'gesture',
                spanish: 'gesto',
                italian: 'gesto',
                portuguese: 'gesto',
                french: 'geste'
            },
            459: {
                english: 'disappear',
                spanish: 'desaparecer',
                italian: 'sparire',
                portuguese: 'desaparecer',
                french: 'disparaître'
            },
            460: {
                english: 'touch',
                spanish: 'tocar',
                italian: 'toccare',
                portuguese: 'tocar',
                french: 'toucher'
            },
            461: {
                english: 'situation',
                spanish: 'situación',
                italian: 'situazione',
                portuguese: 'situação',
                french: 'situation'
            },
            462: {
                english: 'bird',
                spanish: 'pájaro',
                italian: 'uccello',
                portuguese: 'pássaro',
                french: 'oiseau'
            },
            463: {
                english: 'necessary',
                spanish: 'necesario',
                italian: 'necessario',
                portuguese: 'necessário',
                french: 'nécessaire'
            },
            464: {
                english: 'example',
                spanish: 'ejemplo',
                italian: 'esempio',
                portuguese: 'exemplo',
                french: 'exemple'
            },
            465: {
                english: 'century',
                spanish: 'siglo',
                italian: 'secolo',
                portuguese: 'século',
                french: 'siècle'
            },
            466: {
                english: 'appear',
                spanish: 'aparecer',
                italian: 'apparire',
                portuguese: 'aparecer',
                french: 'apparaître'
            },
            467: {
                english: 'suffer',
                spanish: 'sufrir',
                italian: 'soffrire',
                portuguese: 'sofrer',
                french: 'souffrir'
            },
            468: {
                english: 'million',
                spanish: 'millón',
                italian: 'milione',
                portuguese: 'milhão',
                french: 'million'
            },
            469: {
                english: 'price',
                spanish: 'precio',
                italian: 'prezzo',
                portuguese: 'preço',
                french: 'prix'
            },
            470: {
                english: 'group',
                spanish: 'grupo',
                italian: 'gruppo',
                portuguese: 'grupo',
                french: 'groupe'
            },
            471: {
                english: 'center',
                spanish: 'centro',
                italian: 'centro',
                portuguese: 'centro',
                french: 'centre'
            },
            472: {
                english: 'misfortune',
                spanish: 'infortunio',
                italian: 'sfortuna',
                portuguese: 'infortúnio',
                french: 'malheur'
            },
            473: {
                english: 'honor',
                spanish: 'honor',
                italian: 'onore',
                portuguese: 'honra',
                french: 'honneur'
            },
            474: {
                english: 'close',
                spanish: 'cerrar',
                italian: 'chiudere',
                portuguese: 'fechar',
                french: 'fermer'
            },
            475: {
                english: 'accept',
                spanish: 'aceptar',
                italian: 'accettare',
                portuguese: 'aceitar',
                french: 'accepter'
            },
            476: {
                english: 'guard',
                spanish: 'guardia',
                italian: 'guardia',
                portuguese: 'guarda',
                french: 'garde'
            },
            477: {
                english: 'bad',
                spanish: 'malo',
                italian: 'sbagliato',
                portuguese: 'mau',
                french: 'mauvais'
            },
            478: {
                english: 'tender',
                spanish: 'tierno',
                italian: 'tenero',
                portuguese: 'terno',
                french: 'tendre'
            },
            479: {
                english: 'born',
                spanish: 'nacer',
                italian: 'nascere',
                portuguese: 'nascer',
                french: 'naître'
            },
            480: {
                english: 'save',
                spanish: 'salvar',
                italian: 'salvare',
                portuguese: 'salvar',
                french: 'sauver'
            },
            481: {
                english: 'whole',
                spanish: 'entero',
                italian: 'intero',
                portuguese: 'inteiro',
                french: 'entier'
            },
            482: {
                english: 'problem',
                spanish: 'problema',
                italian: 'problema',
                portuguese: 'problema',
                french: 'problème'
            },
            483: {
                english: 'tear',
                spanish: 'lágrima',
                italian: 'lacrima',
                portuguese: 'lágrima',
                french: 'larme'
            },
            484: {
                english: 'advance',
                spanish: 'avanzar',
                italian: 'avanzare',
                portuguese: 'avançar',
                french: 'avancer'
            },
            485: {
                english: 'dog',
                spanish: 'perro',
                italian: 'cane',
                portuguese: 'cachorro',
                french: 'chien'
            },
            486: {
                english: 'skin',
                spanish: 'piel',
                italian: 'pelle',
                portuguese: 'pele',
                french: 'peau'
            },
            487: {
                english: 'rest',
                spanish: 'resto',
                italian: 'resto',
                portuguese: 'resto',
                french: 'reste'
            },
            488: {
                english: 'cross',
                spanish: 'atravesar',
                italian: 'attraversare',
                portuguese: 'atravessar',
                french: 'traverser'
            },
            489: {
                english: 'number',
                spanish: 'número',
                italian: 'numero',
                portuguese: 'número',
                french: 'nombre'
            },
            490: {
                english: 'standing',
                spanish: 'parado',
                italian: 'alzato',
                portuguese: 'parado',
                french: 'debout'
            },
            491: {
                english: 'measurement',
                spanish: 'medida',
                italian: 'misurazione',
                portuguese: 'medida',
                french: 'mesure'
            },
            492: {
                english: 'social',
                spanish: 'social',
                italian: 'sociale',
                portuguese: 'social',
                french: 'social'
            },
            493: {
                english: 'souvenir',
                spanish: 'recuerdo',
                italian: 'ricordo',
                portuguese: 'recordação',
                french: 'souvenir'
            },
            494: {
                english: 'article',
                spanish: 'artículo',
                italian: 'articolo',
                portuguese: 'artigo',
                french: 'article'
            },
            495: {
                english: 'view',
                spanish: 'vista',
                italian: 'vista',
                portuguese: 'vista',
                french: 'vue'
            },
            496: {
                english: 'cover',
                spanish: 'cubrir',
                italian: 'coprire',
                portuguese: 'cobrir',
                french: 'couvrir'
            },
            497: {
                english: 'age',
                spanish: 'edad',
                italian: 'età',
                portuguese: 'idade',
                french: 'âge'
            },
            498: {
                english: 'win',
                spanish: 'ganar',
                italian: 'guadagnare',
                portuguese: 'ganhar',
                french: 'gagner'
            },
            499: {
                english: 'system',
                spanish: 'sistema',
                italian: 'sistema',
                portuguese: 'sistema',
                french: 'système'
            },
            500: {
                english: 'form',
                spanish: 'formar',
                italian: 'formare',
                portuguese: 'formar',
                french: 'former'
            },
            501: {
                english: 'like',
                spanish: 'gustar',
                italian: 'piace',
                portuguese: 'gostar',
                french: 'plaire'
            },
            502: {
                english: 'kiss',
                spanish: 'besar',
                italian: 'baciare',
                portuguese: 'beijar',
                french: 'embrasser'
            },
            503: {
                english: 'dream',
                spanish: 'sueño',
                italian: 'sogno',
                portuguese: 'sonho',
                french: 'rêve'
            },
            504: {
                english: 'dare',
                spanish: 'atreverse',
                italian: 'osare',
                portuguese: 'ousar',
                french: 'oser'
            },
            505: {
                english: 'passion',
                spanish: 'pasión',
                italian: 'passione',
                portuguese: 'paixão',
                french: 'passion'
            },
            506: {
                english: 'report',
                spanish: 'reporte',
                italian: 'rapporto',
                portuguese: 'reporte',
                french: 'rapport'
            },
            507: {
                english: 'refuse',
                spanish: 'rechazar',
                italian: 'rifiutare',
                portuguese: 'rejeitar',
                french: 'refuser'
            },
            508: {
                english: 'important',
                spanish: 'importante',
                italian: 'importante',
                portuguese: 'importante',
                french: 'important'
            },
            509: {
                english: 'decide',
                spanish: 'decidir',
                italian: 'decidere',
                portuguese: 'decidir',
                french: 'décider'
            },
            510: {
                english: 'produce',
                spanish: 'producir',
                italian: 'produrre',
                portuguese: 'produzir',
                french: 'produire'
            },
            511: {
                english: 'soldier',
                spanish: 'soldado',
                italian: 'soldato',
                portuguese: 'soldado',
                french: 'soldat'
            },
            512: {
                english: 'lip',
                spanish: 'labio',
                italian: 'labbro',
                portuguese: 'lábio',
                french: 'lèvre'
            },
            513: {
                english: 'sign',
                spanish: 'señal',
                italian: 'segno',
                portuguese: 'sinal',
                french: 'signe'
            },
            514: {
                english: 'truth',
                spanish: 'verdad',
                italian: 'verità',
                portuguese: 'verdade',
                french: 'vérité'
            },
            515: {
                english: 'charge',
                spanish: 'cargar',
                italian: 'caricare',
                portuguese: 'carregar',
                french: 'charger'
            },
            516: {
                english: 'marriage',
                spanish: 'matrimonio',
                italian: 'matrimonio',
                portuguese: 'matrimónio',
                french: 'mariage'
            },
            517: {
                english: 'mix',
                spanish: 'mezclar',
                italian: 'mescola',
                portuguese: 'mexe',
                french: 'mêler'
            },
            518: {
                english: 'plan',
                spanish: 'plan',
                italian: 'piano',
                portuguese: 'plano',
                french: 'plan'
            },
            519: {
                english: 'cease',
                spanish: 'cesar',
                italian: 'cessare',
                portuguese: 'cessar',
                french: 'cesser'
            },
            520: {
                english: 'dorsum',
                spanish: 'dorso',
                italian: 'dorso',
                portuguese: 'dorso',
                french: 'dos'
            },
            521: {
                english: 'lady',
                spanish: 'dama',
                italian: 'signora',
                portuguese: 'dama',
                french: 'dame'
            },
            522: {
                english: 'sing',
                spanish: 'cantar',
                italian: 'cantare',
                portuguese: 'cantar',
                french: 'chanter'
            },
            523: {
                english: 'quite',
                spanish: 'bastante',
                italian: 'piutostto',
                portuguese: 'bastante',
                french: 'plutôt'
            },
            524: {
                english: 'advise',
                spanish: 'consejo',
                italian: 'consiglio',
                portuguese: 'conselho',
                french: 'conseil'
            },
            525: {
                english: 'sad',
                spanish: 'triste',
                italian: 'triste',
                portuguese: 'triste',
                french: 'triste'
            },
            526: {
                english: 'corner',
                spanish: 'esquina',
                italian: 'angolo',
                portuguese: 'canto',
                french: 'coin'
            },
            527: {
                english: 'garden',
                spanish: 'jardin',
                italian: 'giardino',
                portuguese: 'jardim',
                french: 'jardin'
            },
            528: {
                english: 'prevent',
                spanish: 'impedir',
                italian: 'impedire',
                portuguese: 'impedir',
                french: 'empêcher'
            },
            529: {
                english: 'finger',
                spanish: 'dedo',
                italian: 'dito',
                portuguese: 'dedo',
                french: 'doigt'
            },
            530: {
                english: 'object',
                spanish: 'objeto',
                italian: 'oggetto',
                portuguese: 'objecto',
                french: 'objet'
            },
            531: {
                english: 'iron',
                spanish: 'hierro',
                italian: 'ferro',
                portuguese: 'ferro',
                french: 'fer'
            },
            532: {
                english: 'slowly',
                spanish: 'lentamente',
                italian: 'lentamente',
                portuguese: 'lentamente',
                french: 'lentement'
            },
            533: {
                english: 'how many',
                spanish: 'cuánto',
                italian: 'quanto',
                portuguese: 'quanto',
                french: 'combien'
            },
            534: {
                english: 'aproach',
                spanish: 'acercarse',
                italian: 'avvicinare',
                portuguese: 'aproximar',
                french: 'approcher'
            },
            535: {
                english: 'pray',
                spanish: 'rezar',
                italian: 'pregare',
                portuguese: 'rezar',
                french: 'prier'
            },
            536: {
                english: 'train',
                spanish: 'tren',
                italian: 'treno',
                portuguese: 'trem',
                french: 'train'
            },
            537: {
                english: 'expect',
                spanish: 'esperar',
                italian: 'sperare',
                portuguese: 'esperar',
                french: 'espérer'
            },
            538: {
                english: 'diferent',
                spanish: 'diferente',
                italian: 'diverso',
                portuguese: 'diferente',
                french: 'différent'
            },
            539: {
                english: 'value',
                spanish: 'valor',
                italian: 'valore',
                portuguese: 'valor',
                french: 'valeur'
            },
            540: {
                english: 'game',
                spanish: 'juego',
                italian: 'gioco',
                portuguese: 'jogo',
                french: 'jeu'
            },
            541: {
                english: 'escape',
                spanish: 'escapar',
                italian: 'scapare',
                portuguese: 'escapar',
                french: 'échapper'
            },
            542: {
                english: 'slide',
                spanish: 'resbalar',
                italian: 'scivolare',
                portuguese: 'escorregar',
                french: 'glisser'
            },
            543: {
                english: 'secret',
                spanish: 'secreto',
                italian: 'segreto',
                portuguese: 'segredo',
                french: 'secret'
            },
            544: {
                english: 'high',
                spanish: 'alto',
                italian: 'alto',
                portuguese: 'alto',
                french: 'haut'
            },
            545: {
                english: 'shine',
                spanish: 'brillar',
                italian: 'brillare',
                portuguese: 'brilhar',
                french: 'briller'
            },
            546: {
                english: 'doctor',
                spanish: 'doctor',
                italian: 'dottore',
                portuguese: 'doutor',
                french: 'docteur'
            },
            547: {
                english: 'burn',
                spanish: 'quemar',
                italian: 'bruciare',
                portuguese: 'queimare',
                french: 'brûler'
            },
            548: {
                english: 'terrible',
                spanish: 'terrible',
                italian: 'terribile',
                portuguese: 'terrível',
                french: 'terrible'
            },
            549: {
                english: 'place',
                spanish: 'colocar',
                italian: 'collocare',
                portuguese: 'colocar',
                french: 'placer'
            },
            550: {
                english: 'leg',
                spanish: 'pierna',
                italian: 'gamba',
                portuguese: 'perna',
                french: 'jambe'
            },
            551: {
                english: 'judge',
                spanish: 'juzgar',
                italian: 'giudicare',
                portuguese: 'julgar',
                french: 'juger'
            },
            552: {
                english: 'be enough',
                spanish: 'bastar',
                italian: 'bastare',
                portuguese: 'bastar',
                french: 'suffire'
            },
            553: {
                english: 'minute',
                spanish: 'minuto',
                italian: 'minuto',
                portuguese: 'minuto',
                french: 'minute'
            },
            554: {
                english: 'achieve',
                spanish: 'lograr',
                italian: 'raggiungere',
                portuguese: 'atingir',
                french: 'atteindre/parvenir'
            },
            555: {
                english: 'cloud',
                spanish: 'nuble',
                italian: 'novola',
                portuguese: 'nuvem',
                french: 'nuage'
            },
            556: {
                english: 'presence',
                spanish: 'presencia',
                italian: 'presenza',
                portuguese: 'presença',
                french: 'présence'
            },
            557: {
                english: 'crazy',
                spanish: 'loco',
                italian: 'pazzo',
                portuguese: 'loucura',
                french: 'fou'
            },
            558: {
                english: 'shoulder',
                spanish: 'hombro',
                italian: 'spalla',
                portuguese: 'ombro',
                french: 'épaule'
            },
            559: {
                english: 'light',
                spanish: 'ligero',
                italian: 'leggero',
                portuguese: 'leve',
                french: 'léger'
            },
            560: {
                english: 'sheet',
                spanish: 'hoja',
                italian: 'foglio',
                portuguese: 'folha',
                french: 'feuille'
            },
            561: {
                english: 'liberty',
                spanish: 'libertad',
                italian: 'libertà',
                portuguese: 'liberdade',
                french: 'liberté'
            },
            562: {
                english: 'free',
                spanish: 'libre',
                italian: 'libero',
                portuguese: 'livre',
                french: 'libre'
            },
            563: {
                english: 'announce',
                spanish: 'anunciar',
                italian: 'annunciare',
                portuguese: 'anunciar',
                french: 'annoncer'
            },
            564: {
                english: 'future',
                spanish: 'futuro',
                italian: 'futuro',
                portuguese: 'futuro',
                french: 'futur/avenir'
            },
            565: {
                english: 'yesterday',
                spanish: 'ayer',
                italian: 'ieri',
                portuguese: 'ontem',
                french: 'hier'
            },
            566: {
                english: 'result',
                spanish: 'resultado',
                italian: 'resultato',
                portuguese: 'resultado',
                french: 'résultat'
            },
            567: {
                english: 'raise',
                spanish: 'elevar',
                italian: 'elevare',
                portuguese: 'elevar',
                french: 'élever'
            },
            568: {
                english: 'buy',
                spanish: 'comprar',
                italian: 'comprare',
                portuguese: 'comprar',
                french: 'acheter'
            },
            569: {
                english: 'prepare',
                spanish: 'preparar',
                italian: 'preparare',
                portuguese: 'preparar',
                french: 'préparer'
            },
            570: {
                english: 'hotel',
                spanish: 'hotel',
                italian: 'hotel',
                portuguese: 'hotel',
                french: 'hôtel'
            },
            571: {
                english: 'week',
                spanish: 'semana',
                italian: 'settimana',
                portuguese: 'semana',
                french: 'semaine'
            },
            572: {
                english: 'forest',
                spanish: 'bosque',
                italian: ' foresta',
                portuguese: 'floresta',
                french: 'forêt'
            },
            573: {
                english: 'assure',
                spanish: 'asegurar',
                italian: 'assicurare',
                portuguese: 'assegurar',
                french: 'assurer'
            },
            574: {
                english: 'pure',
                spanish: 'puro',
                italian: 'puro',
                portuguese: 'puro',
                french: 'pur'
            },
            575: {
                english: 'quality',
                spanish: 'cualidad',
                italian: 'qualità',
                portuguese: 'qualidade',
                french: 'qualité'
            },
            576: {
                english: 'prince',
                spanish: 'príncipe',
                italian: 'principe',
                portuguese: 'principe',
                french: 'prince'
            },
            577: {
                english: 'equally',
                spanish: 'igualmente',
                italian: 'ugualmente',
                portuguese: 'igualmente',
                french: 'également'
            },
            578: {
                english: 'guess',
                spanish: 'adivinar',
                italian: 'indovinare',
                portuguese: 'adivinhar',
                french: 'deviner'
            },
            579: {
                english: 'medic',
                spanish: 'médico',
                italian: 'medico',
                portuguese: 'médico',
                french: 'médecin'
            },
            580: {
                english: 'consider',
                spanish: 'considerar',
                italian: 'considerare',
                portuguese: 'considerar',
                french: 'considérer'
            },
            581: {
                english: 'will',
                spanish: 'voluntad',
                italian: 'volontà',
                portuguese: 'vontade',
                french: 'volonté'
            },
            582: {
                english: 'effort',
                spanish: 'esfuerzo',
                italian: 'sforzo',
                portuguese: 'esforço',
                french: 'effort'
            },
            583: {
                english: 'green',
                spanish: 'verde',
                italian: 'verde',
                portuguese: 'verde',
                french: 'vert'
            },
            584: {
                english: 'art',
                spanish: 'arte',
                italian: 'arte',
                portuguese: 'arte',
                french: 'art'
            },
            585: {
                english: 'lesser',
                spanish: 'menos',
                italian: 'minore',
                portuguese: 'menor',
                french: 'moindre'
            },
            586: {
                english: 'tomorrow',
                spanish: 'mañana',
                italian: 'domani',
                portuguese: 'amanhã',
                french: 'demain'
            },
            587: {
                english: 'forty',
                spanish: 'cuarenta',
                italian: 'quaranta',
                portuguese: 'quarenta',
                french: 'quarante'
            },
            588: {
                english: 'fifty',
                spanish: 'cincuenta',
                italian: 'cinquanta',
                portuguese: 'cinquenta',
                french: 'cinquante'
            },
            589: {
                english: 'crowd',
                spanish: 'multitud',
                italian: 'folla',
                portuguese: 'multidão',
                french: 'foule'
            },
            590: {
                english: 'belong',
                spanish: 'pertenecer',
                italian: 'appartenere',
                portuguese: 'pertencer',
                french: 'appartenir'
            },
            591: {
                english: 'at once',
                spanish: 'ahora mismo',
                italian: 'subito',
                portuguese: 'agora mesmo',
                french: 'aussitôt'
            },
            592: {
                english: 'line',
                spanish: 'línea',
                italian: 'linea',
                portuguese: 'linha',
                french: 'ligne'
            },
            593: {
                english: 'represent',
                spanish: 'representar',
                italian: 'rapprensentare',
                portuguese: 'representar',
                french: 'représenter'
            },
            594: {
                english: 'deceive',
                spanish: 'engañar',
                italian: 'ingannare',
                portuguese: 'enganar',
                french: 'tromper'
            },
            595: {
                english: 'interior',
                spanish: 'interior',
                italian: 'interiore',
                portuguese: 'interior',
                french: 'intérieur'

            },
            596: {
                english: 'sell',
                spanish: 'vender',
                italian: 'vendere',
                portuguese: 'vender',
                french: 'vendre'
            },
            597: {
                english: 'beuty',
                spanish: 'belleza',
                italian: 'bellezza',
                portuguese: 'beleza',
                french: 'beauté'
            },
            598: {
                english: 'rich',
                spanish: 'rico',
                italian: 'ricco',
                portuguese: 'rico',
                french: 'riche'
            },
            599: {
                english: 'strange',
                spanish: 'extraño,',
                italian: 'strano',
                portuguese: 'estranho',
                french: 'étrange'
            },
            600: {
                english: 'care',
                spanish: 'cuidado',
                italian: 'attento',
                portuguese: 'cuidado',
                french: 'soin'
            },
            601: {
                english: 'fearing',
                spanish: 'temer',
                italian: 'temere',
                portuguese: 'temer',
                french: 'craindre'
            },
            602: {
                english: 'natural',
                spanish: 'natural',
                italian: 'naturale',
                portuguese: 'natural',
                french: 'naturel'
            },
            603: {
                english: 'chance',
                spanish: 'azar',
                italian: 'casualità',
                portuguese: 'acaso',
                french: 'hasard'
            },
            604: {
                english: 'condition',
                spanish: 'condición',
                italian: 'condizione',
                portuguese: 'condição',
                french: 'condition'
            },
            605: {
                english: 'fifteen',
                spanish: 'quince',
                italian: 'quindici',
                portuguese: 'quinze',
                french: 'quinze'
            },
            606: {
                english: 'class',
                spanish: 'clase',
                italian: 'classe',
                portuguese: 'classe',
                french: 'classe'
            },
            607: {
                english: 'trip',
                spanish: 'viaje',
                italian: 'viaggio',
                portuguese: 'viagem',
                french: 'voyage'
            },
            608: {
                english: 'close',
                spanish: 'ante',
                italian: 'presso',
                portuguese: 'perante',
                french: 'auprès'
            },
            609: {
                english: 'present',
                spanish: 'presente',
                italian: 'presente',
                portuguese: 'presente',
                french: 'présent'
            },
            610: {
                english: 'character',
                spanish: 'carácter',
                italian: 'carattere',
                portuguese: 'carácter',
                french: 'caractère'
            },
            611: {
                english: 'attention',
                spanish: 'attention',
                italian: 'attenzione',
                portuguese: 'atenção',
                french: 'attention'
            },
            612: {
                english: 'grey',
                spanish: 'gris',
                italian: 'grigio',
                portuguese: 'cinza',
                french: 'gris'
            },
            613: {
                english: 'gold',
                spanish: 'oro',
                italian: 'oro',
                portuguese: 'ouro',
                french: 'or'
            },
            614: {
                english: 'roll',
                spanish: 'rodar',
                italian: 'rotolare',
                portuguese: 'rolar',
                french: 'rouler'
            },
            615: {
                english: 'feeble',
                spanish: 'débil',
                italian: 'debole',
                portuguese: 'fraco',
                french: 'faible'
            },
            616: {
                english: 'possess',
                spanish: 'poseer',
                italian: 'possedere',
                portuguese: 'possuir',
                french: 'posséder'
            },
            617: {
                english: 'scene',
                spanish: 'escena',
                italian: 'scena',
                portuguese: 'cena',
                french: 'scène'
            },
            618: {
                english: 'difficult',
                spanish: 'difícil',
                italian: 'difficile',
                portuguese: 'difícil',
                french: 'difficile'
            },
            619: {
                english: 'wake',
                spanish: 'despertar',
                italian: 'svegliare',
                portuguese: 'acordar',
                french: 'réveiller'
            },
            620: {
                english: 'faith',
                spanish: 'fe',
                italian: 'fede',
                portuguese: 'fé',
                french: 'foi'
            },
            621: {
                english: 'help',
                spanish: 'ayudar',
                italian: 'aiutare',
                portuguese: 'ajudar',
                french: 'aider'
            },
            622: {
                english: 'discover',
                spanish: 'descubrir',
                italian: 'scoprire',
                portuguese: 'descobrir',
                french: 'découvrir'
            },
            623: {
                english: 'odor',
                spanish: 'olor',
                italian: 'odore',
                portuguese: 'cheiro',
                french: 'odeur'
            },
            624: {
                english: 'choose',
                spanish: 'elegir',
                italian: 'scegliere',
                portuguese: 'escolher',
                french: 'choisir'
            },
            625: {
                english: 'music',
                spanish: 'música',
                italian: 'musica',
                portuguese: 'música',
                french: 'musique'
            },
            626: {
                english: 'uncle',
                spanish: 'tío',
                italian: 'zio',
                portuguese: 'tio',
                french: 'oncle'
            },
            627: {
                english: 'event',
                spanish: 'evento',
                italian: 'evento',
                portuguese: 'evento',
                french: 'événement'
            },
            628: {
                english: 'pronounce',
                spanish: 'pronunciar',
                italian: 'pronunciare',
                portuguese: 'pronunciar',
                french: 'prononcer'
            },
            629: {
                english: 'village',
                spanish: 'pueblo',
                italian: 'villagio',
                portuguese: 'aldeia',
                french: 'village'
            },
            630: {
                english: 'to silence',
                spanish: 'callar',
                italian: 'tacere',
                portuguese: 'calar',
                french: 'taire'
            },
            631: {
                english: 'envy',
                spanish: 'envidia',
                italian: 'invidia',
                portuguese: 'inveja',
                french: 'envie'
            },
            632: {
                english: 'noon',
                spanish: 'mediodía',
                italian: 'mezzogiorno',
                portuguese: 'meio-dia',
                french: 'midi'
            },
            633: {
                english: 'together',
                spanish: 'juntos',
                italian: 'insieme',
                portuguese: 'juntos',
                french: 'ensemble'
            },
            634: {
                english: 'expression',
                spanish: 'expresión',
                italian: 'espressione',
                portuguese: 'expressão',
                french: 'expression'
            },
            635: {
                english: 'rain',
                spanish: 'lluvia',
                italian: 'pioggia',
                portuguese: 'chuvia',
                french: 'pluie'
            },
            636: {
                english: 'support',
                spanish: 'apoyar',
                italian: 'appoggiaire',
                portuguese: 'apoiar',
                french: 'appuyer'
            },
            637: {
                english: 'extend',
                spanish: 'extender',
                italian: 'estendere',
                portuguese: 'estender',
                french: 'étendre'
            },
            638: {
                english: 'fight',
                spanish: 'lucha',
                italian: 'lota',
                portuguese: 'uta',
                french: 'lutte'
            },
            639: {
                english: 'tremble',
                spanish: 'temblar',
                italian: 'tremare',
                portuguese: 'tremer',
                french: 'trembler'
            },
            640: {
                english: 'responce',
                spanish: 'respuesta',
                italian: 'rispota',
                portuguese: 'resposta',
                french: 'réponse'
            },
            641: {
                english: 'thanks',
                spanish: 'gracias',
                italian: 'grazia',
                portuguese: 'graça',
                french: 'grâce'
            },
            642: {
                english: 'space',
                spanish: 'espacio',
                italian: 'spazio',
                portuguese: 'espaço',
                french: 'espace'
            },
            643: {
                english: 'habit',
                spanish: 'hábito',
                italian: 'abitudine',
                portuguese: 'hábito',
                french: 'habitude'
            },
            644: {
                english: 'defend',
                spanish: 'defender',
                italian: 'difendere',
                portuguese: 'defender',
                french: 'défendre'
            },
            645: {
                english: 'memory',
                spanish: 'memoria',
                italian: 'memoria',
                portuguese: 'memória',
                french: 'mémoire'
            },
            646: {
                english: 'create',
                spanish: 'crear',
                italian: 'creare',
                portuguese: 'criar',
                french: 'créer'
            },
            647: {
                english: 'grave',
                spanish: 'grave',
                italian: 'grave',
                portuguese: 'grave',
                french: 'grave'
            },
            648: {
                english: 'maintain',
                spanish: 'mantener',
                italian: 'mantenere',
                portuguese: 'manter',
                french: 'maintenir'
            },
            649: {
                english: 'glass',
                spanish: 'vidrio',
                italian: 'vetro',
                portuguese: 'vidro',
                french: 'verre'
            },
            650: {
                english: 'campaign',
                spanish: 'campaña',
                italian: 'campagna',
                portuguese: 'campanha',
                french: 'campagne'
            },
            651: {
                english: 'judge',
                spanish: 'juez',
                italian: 'giudice',
                portuguese: 'juiz',
                french: 'juge'
            },
            652: {
                english: 'knee',
                spanish: 'rodilla',
                italian: 'gionicchio',
                portuguese: 'joelho',
                french: 'genou'
            },
            653: {
                english: 'impossible',
                spanish: 'imposible',
                italian: 'impossibile',
                portuguese: 'impossível',
                french: 'impossible'
            },
            654: {
                english: 'party',
                spanish: 'fiesta',
                italian: 'festa',
                portuguese: 'festa',
                french: 'fête'
            },
            655: {
                english: 'indicate',
                spanish: 'indicar',
                italian: 'indicare',
                portuguese: 'indicar',
                french: 'indiquer'
            },
            656: {
                english: 'ready',
                spanish: 'listo',
                italian: 'pronto',
                portuguese: 'pronto',
                french: 'prêt'
            },
            657: {
                english: 'promise',
                spanish: 'prometer',
                italian: 'promettere',
                portuguese: 'prometer',
                french: 'promettre'
            },
            658: {
                english: 'abandon',
                spanish: 'abandonar',
                italian: 'abbandonare',
                portuguese: 'abandonar',
                french: 'abandonner'
            },
            659: {
                english: 'ignor',
                spanish: 'ignorar',
                italian: 'ignorare',
                portuguese: 'ignorar',
                french: 'ignorer'
            },
            660: {
                english: 'large',
                spanish: 'amplio',
                italian: 'ampio',
                portuguese: 'amplo',
                french: 'large'
            },
            661: {
                english: 'parent',
                spanish: 'padre',
                italian: 'genitore',
                portuguese: 'parente',
                french: 'parent'
            },
            662: {
                english: 'anger',
                spanish: 'rabia',
                italian: 'rabbia',
                portuguese: 'raiva',
                french: 'colère'
            },
            663: {
                english: 'express',
                spanish: 'expresar',
                italian: 'esprimere',
                portuguese: 'expressar',
                french: 'exprimer'
            },
            664: {
                english: 'star',
                spanish: 'estrella',
                italian: 'stella',
                portuguese: 'estrela',
                french: 'étoile'
            },
            665: {
                english: 'conscience',
                spanish: 'conciencia',
                italian: 'coscienza',
                portuguese: 'consciência',
                french: 'conscience'
            },
            666: {
                english: 'existence',
                spanish: 'existencia',
                italian: 'esistenza',
                portuguese: 'existência',
                french: 'existence'
            },
            667: {
                english: 'accompany',
                spanish: 'acompañar',
                italian: 'accompagnare',
                portuguese: 'acompanhar',
                french: 'accompagner'
            },
            668: {
                english: 'immobile',
                spanish: 'inmóvil ',
                italian: 'immobile',
                portuguese: 'imóvel',
                french: 'immobile'
            },
            669: {
                english: 'address',
                spanish: 'dirigir',
                italian: 'rivolgere',
                portuguese: 'dirigir',
                french: 'adresser'
            },
            670: {
                english: 'observe',
                spanish: 'observar',
                italian: 'osservare',
                portuguese: 'observar',
                french: 'observer'
            },
            671: {
                english: 'just',
                spanish: 'sólo',
                italian: 'solo',
                portuguese: 'só',
                french: 'juste'
            },
            672: {
                english: 'potency',
                spanish: 'potencia',
                italian: 'potenza',
                portuguese: 'potência',
                french: 'puissance'
            },
            673: {
                english: 'matter',
                spanish: 'materia',
                italian: 'materia',
                portuguese: 'matéria',
                french: 'matière'
            },
            674: {
                english: 'sand',
                spanish: 'arena',
                italian: 'sabbia',
                portuguese: 'areia',
                french: 'sable'
            },
            675: {
                english: 'seperate',
                spanish: 'separar',
                italian: 'separare',
                portuguese: 'separar',
                french: 'séparer'
            },
            676: {
                english: 'marry',
                spanish: 'casar',
                italian: 'sposare',
                portuguese: 'casar',
                french: 'marier'
            },
            677: {
                english: 'provide',
                spanish: 'prever',
                italian: 'prevedere',
                portuguese: 'prever',
                french: 'prévoir'
            },
            678: {
                english: 'living',
                spanish: 'vivo',
                italian: 'vivo',
                portuguese: 'vivo',
                french: 'vivant'
            },
            679: {
                english: 'agreement',
                spanish: 'acuerdo',
                italian: 'accordo',
                portuguese: 'acordo',
                french: 'accord'
            },
            680: {
                english: 'winter',
                spanish: 'invierno',
                italian: 'inverno',
                portuguese: 'inverno',
                french: 'hiver'
            },
            681: {
                english: 'return',
                spanish: 'retorno',
                italian: 'ritorno',
                portuguese: 'retorno',
                french: 'retour'
            },
            682: {
                english: 'genre',
                spanish: 'género',
                italian: 'genere',
                portuguese: 'gênero',
                french: 'genre'
            },
            683: {
                english: 'oblige',
                spanish: 'obligar',
                italian: 'obbligare',
                portuguese: 'obrigar',
                french: 'obliger'
            },
            684: {
                english: 'act',
                spanish: 'acto',
                italian: 'atto',
                portuguese: 'acto',
                french: 'acte'
            },
            685: {
                english: 'image',
                spanish: 'imagen',
                italian: 'immagine',
                portuguese: 'imagem',
                french: 'image'
            },
            686: {
                english: 'horizon',
                spanish: 'horizonte',
                italian: 'orizzonte',
                portuguese: 'horizonte',
                french: 'horizon'
            },
            687: {
                english: 'illuminate',
                spanish: 'iluminar',
                italian: 'illuminare',
                portuguese: 'iluminar',
                french: 'éclairer'
            },
            688: {
                english: 'danger',
                spanish: 'peligro',
                italian: 'pericolo',
                portuguese: 'perigo',
                french: 'danger'
            },
            689: {
                english: 'deliver',
                spanish: 'entregar',
                italian: 'consegnare',
                portuguese: 'entegrar',
                french: 'livrer'
            },
            690: {
                english: 'role',
                spanish: 'rol',
                italian: 'ruolo',
                portuguese: 'papel',
                french: 'rôle'
            },
            691: {
                english: 'stair',
                spanish: 'escalera',
                italian: 'scala',
                portuguese: 'escada',
                french: 'escalier'
            },
            692: {
                english: 'taste',
                spanish: 'gusto',
                italian: 'gusto',
                portuguese: 'gosto',
                french: 'goût'
            },
            693: {
                english: 'beast',
                spanish: 'bestia',
                italian: 'bestia',
                portuguese: 'besta',
                french: 'bête'
            },
            694: {
                english: 'research',
                spanish: 'investigación',
                italian: 'ricerca',
                portuguese: 'pesquisa',
                french: 'recherche'
            },
            695: {
                english: 'member',
                spanish: 'miembro',
                italian: 'membro',
                portuguese: 'membro',
                french: 'membre'
            },
            696: {
                english: 'bread',
                spanish: 'pan',
                italian: 'pane',
                portuguese: 'pão',
                french: 'pain'
            },
            697: {
                english: 'phrase',
                spanish: 'frase',
                italian: 'frase',
                portuguese: 'frase',
                french: 'phrase'
            },
            698: {
                english: 'contain',
                spanish: 'contener',
                italian: 'contenere',
                portuguese: 'conter',
                french: 'contenir'
            },
            699: {
                english: 'flee',
                spanish: 'huir',
                italian: 'fuggire',
                portuguese: 'fugir',
                french: 'fuir'
            },
            700: {
                english: 'nail',
                spanish: 'clavar',
                italian: 'inchiodare',
                portuguese: 'cravar',
                french: 'couler'
            },
            701: {
                english: 'term',
                spanish: 'término',
                italian: 'termine',
                portuguese: 'termo',
                french: 'terme'
            },
            702: {
                english: 'police',
                spanish: 'policia',
                italian: 'polizia',
                portuguese: 'polícia',
                french: 'police'
            },
            703: {
                english: 'rock',
                spanish: 'roca',
                italian: 'roccia',
                portuguese: 'rocha',
                french: 'rocher'
            },
            704: {
                english: 'propose',
                spanish: 'proponer',
                italian: 'proporre',
                portuguese: 'propor',
                french: 'proposer'
            },
            705: {
                english: 'tranquil',
                spanish: 'tranquilo',
                italian: 'tranquillo',
                portuguese: 'tranquilo',
                french: 'tranquille'
            },
            706: {
                english: 'unique',
                spanish: 'único',
                italian: 'unico',
                portuguese: 'único',
                french: 'unique'
            },
            707: {
                english: 'prove',
                spanish: 'probar',
                italian: 'provare',
                portuguese: 'provar',
                french: 'éprouver'
            },
            708: {
                english: 'retain',
                spanish: 'retener',
                italian: 'trattenere',
                portuguese: 'reter',
                french: 'retenir'
            },
            709: {
                english: 'type',
                spanish: 'tipo',
                italian: 'tipo',
                portuguese: 'tipo',
                french: 'type'
            },
            710: {
                english: 'wine',
                spanish: 'vino',
                italian: 'vino',
                portuguese: 'vinho',
                french: 'vin'
            },
            711: {
                english: 'superior',
                spanish: 'superior',
                italian: 'superiore',
                portuguese: 'superior',
                french: 'supérieur'
            },
            712: {
                english: 'attach',
                spanish: 'atarse',
                italian: 'allegare',
                portuguese: 'anexar',
                french: 'attacher'
            },
            713: {
                english: 'steal',
                spanish: 'robar',
                italian: 'rubare',
                portuguese: 'roubar',
                french: 'dérober/voler'
            },
            714: {
                english: 'dry',
                spanish: 'seco',
                italian: 'secco',
                portuguese: 'seco',
                french: 'sec'
            },
            715: {
                english: 'justice',
                spanish: 'justicia',
                italian: 'giustizia',
                portuguese: 'justiça',
                french: 'justice'
            },
            716: {
                english: 'epoch',
                spanish: 'época',
                italian: 'epoca',
                portuguese: 'época',
                french: 'époque'
            },
            717: {
                english: 'passage',
                spanish: 'pasaje',
                italian: 'passaggio',
                portuguese: 'passagem',
                french: 'passage'
            },
            718: {
                english: 'sum',
                spanish: 'suma',
                italian: 'somma',
                portuguese: 'soma',
                french: 'somme'
            },
            719: {
                english: 'science',
                spanish: 'ciencia',
                italian: 'scienza',
                portuguese: 'ciência',
                french: 'science'
            },
            720: {
                english: 'surprise',
                spanish: 'sorprender',
                italian: 'sorprendere',
                portuguese: 'surpreender',
                french: 'surprendre'
            },
            721: {
                english: 'softly',
                spanish: 'suavemente',
                italian: 'morbidemente',
                portuguese: 'suavemente',
                french: 'doucement'
            },
            722: {
                english: 'left',
                spanish: 'izquierda',
                italian: 'sinistra',
                portuguese: 'esquerda',
                french: 'gauche'
            },
            723: {
                english: 'fault',
                spanish: 'culpa',
                italian: 'colpa',
                portuguese: 'culpa',
                french: 'faute'
            },
            724: {
                english: 'school',
                spanish: 'escuela',
                italian: 'scuola',
                portuguese: 'escola',
                french: 'école'
            },
            725: {
                english: 'good',
                spanish: 'bueno',
                italian: 'buon',
                portuguese: 'bom',
                french: 'bon'
            },
            726: {
                english: 'radius',
                spanish: 'radio',
                italian: 'raggio',
                portuguese: 'raio',
                french: 'rayon'
            },
            727: {
                english: 'break',
                spanish: 'romper',
                italian: 'rompere',
                portuguese: 'romper',
                french: 'briser'
            },
            728: {
                english: 'subject',
                spanish: 'asunto',
                italian: 'soggetto',
                portuguese: 'assunto',
                french: 'sujet'
            },
            729: {
                english: 'imagine',
                spanish: 'imaginarse',
                italian: 'immaginare',
                portuguese: 'imaginar',
                french: 'imaginer'
            },
            730: {
                english: 'direct',
                spanish: 'dirigir',
                italian: 'dirigere',
                portuguese: 'dirigir',
                french: 'diriger'
            },
            731: {
                english: 'twelve',
                spanish: 'doce',
                italian: 'dodici',
                portuguese: 'doze',
                french: 'douze'
            },
            732: {
                english: 'notice',
                spanish: 'aviso',
                italian: 'avviso',
                portuguese: 'aviso',
                french: 'avis'
            },
            733: {
                english: 'open',
                spanish: 'abierto',
                italian: 'aperto',
                portuguese: 'aberto',
                french: 'ouvert'
            },
            734: {
                english: 'poet',
                spanish: 'poeta',
                italian: 'poeta',
                portuguese: 'poeta',
                french: 'poète'
            },
            735: {
                english: 'farmer',
                spanish: 'campesino',
                italian: 'paesano',
                portuguese: 'camponês',
                french: 'paysan'
            },
            736: {
                english: 'remark',
                spanish: 'notar',
                italian: 'notare',
                portuguese: 'notar',
                french: 'remarquer'
            },
            737: {
                english: 'flesh',
                spanish: 'carne',
                italian: 'carne',
                portuguese: 'carne',
                french: 'chair'
            },
            738: {
                english: 'avoid',
                spanish: 'evitar',
                italian: 'evitare',
                portuguese: 'evitar',
                french: 'éviter'
            },
            739: {
                english: 'suddenly',
                spanish: 'repente',
                italian: 'improvviso',
                portuguese: 'repente',
                french: 'soudain'
            },
            740: {
                english: 'succes',
                spanish: 'éxito',
                italian: 'successo',
                portuguese: 'sucesos',
                french: 'succès'
            },
            741: {
                english: 'island',
                spanish: 'isla',
                italian: 'isola',
                portuguese: 'ilha',
                french: 'île'
            },
            742: {
                english: 'establish',
                spanish: 'estabelecer',
                italian: 'stabilire',
                portuguese: 'estabelecer',
                french: 'établir'
            },
            743: {
                english: 'succeed',
                spanish: 'lograr',
                italian: 'riuscire',
                portuguese: 'conseguir',
                french: 'réussir'
            },
            744: {
                english: 'leaning',
                spanish: 'inclinado',
                italian: 'inclinato',
                portuguese: 'inclinado',
                french: 'pencher'
            },
            745: {
                english: 'live',
                spanish: 'vivir',
                italian: 'abitare',
                portuguese: 'morar',
                french: 'habiter'
            },
            746: {
                english: 'surround',
                spanish: 'rodear',
                italian: 'circondare',
                portuguese: 'rodear',
                french: 'entourer'
            },
            747: {
                english: 'declare',
                spanish: 'declarar',
                italian: 'dichiarare',
                portuguese: 'declarar',
                french: 'déclarer'
            },
            748: {
                english: 'detail',
                spanish: 'detalle',
                italian: 'dettaglio',
                portuguese: 'detalhe',
                french: 'détail'
            },
            749: {
                english: 'arms',
                spanish: 'arma',
                italian: 'arma',
                portuguese: 'arma',
                french: 'arme'
            },
            750: {
                english: 'reality',
                spanish: 'realidad',
                italian: 'realtà',
                portuguese: 'realidade',
                french: 'réalité'
            },
            751: {
                english: 'confidence',
                spanish: 'confianza',
                italian: 'fiducia',
                portuguese: 'confiança',
                french: 'confiance'
            },
            752: {
                english: 'mass',
                spanish: 'masa',
                italian: 'massa',
                portuguese: 'massa',
                french: 'masse'
            },
            753: {
                english: 'crisis',
                spanish: 'crisis',
                italian: 'crisi',
                portuguese: 'crise',
                french: 'crise'
            },
            754: {
                english: 'astonished',
                spanish: 'asombrado',
                italian: 'attonito',
                portuguese: 'surpreso',
                french: 'étonner'
            },
            755: {
                english: 'post',
                spanish: 'puesto',
                italian: 'posto',
                portuguese: 'posto',
                french: 'poste'
            },
            756: {
                english: 'last',
                spanish: 'durar',
                italian: 'durare',
                portuguese: 'durar',
                french: 'durer'
            },
            757: {
                english: 'false',
                spanish: 'falso',
                italian: 'falso',
                portuguese: 'falso',
                french: 'faux'
            },
            758: {
                english: 'fix',
                spanish: 'fijar',
                italian: 'fissare',
                portuguese: 'fixar',
                french: 'fixer'
            },
            759: {
                english: 'enormous',
                spanish: 'enorme',
                italian: 'enorme',
                portuguese: 'enorme',
                french: 'énorme'
            },
            760: {
                english: 'principle',
                spanish: 'principio',
                italian: 'principio',
                portuguese: 'principio',
                french: 'principe'
            },
            761: {
                english: 'direction',
                spanish: 'dirección',
                italian: 'direzione',
                portuguese: 'direcção',
                french: 'direction'
            },
            762: {
                english: 'size',
                spanish: 'talla',
                italian: 'taglia',
                portuguese: 'tamanho',
                french: 'taille'
            },
            763: {
                english: 'desire',
                spanish: 'desear',
                italian: 'desiderare',
                portuguese: 'desejar',
                french: 'désirer'
            },
            764: {
                english: 'health',
                spanish: 'salud',
                italian: 'salute',
                portuguese: 'saúde',
                french: 'santé'
            },
            765: {
                english: 'belly',
                spanish: 'vientre',
                italian: 'ventre',
                portuguese: 'ventre',
                french: 'ventre'
            },
            766: {
                english: 'market',
                spanish: 'mercado',
                italian: 'mercato',
                portuguese: 'mercado',
                french: 'marché'
            },
            767: {
                english: 'powerful',
                spanish: 'poderoso',
                italian: 'potente',
                portuguese: 'poderoso',
                french: 'puissant'
            },
            768: {
                english: 'simply',
                spanish: 'simplemente',
                italian: 'simplesmente',
                portuguese: 'semplicemente',
                french: 'simplement'
            },
            769: {
                english: 'about',
                spanish: 'aproximadamente',
                italian: 'circa',
                portuguese: 'aproximadamente',
                french: 'environ'
            },
            770: {
                english: 'so/such',
                spanish: 'tan',
                italian: 'talmente',
                portuguese: 'tão',
                french: 'tellement'
            },
            771: {
                english: 'rip',
                spanish: 'arrancar',
                italian: 'strappare',
                portuguese: 'arrancar',
                french: 'arracher'
            },
            772: {
                english: 'train',
                spanish: 'entrenar',
                italian: 'allenare',
                portuguese: 'treinar',
                french: 'entraîner'
            },
            773: {
                english: 'support',
                spanish: 'sostener',
                italian: 'sostenere',
                portuguese: 'apoiar',
                french: 'soutenir'
            },
            774: {
                english: 'cut',
                spanish: 'cortar',
                italian: 'tagliare',
                portuguese: 'cortar',
                french: 'couper'
            },
            775: {
                english: 'hole',
                spanish: 'agujero',
                italian: 'buco',
                portuguese: 'buraco',
                french: 'trou'
            },
            776: {
                english: 'unknown',
                spanish: 'desconocido',
                italian: 'sconosciuto',
                portuguese: 'desconhecido',
                french: 'inconnu'
            },
            777: {
                english: 'bridge',
                spanish: 'puente',
                italian: 'ponte',
                portuguese: 'ponte',
                french: 'pont'
            },
            778: {
                english: 'moon',
                spanish: 'luna',
                italian: 'luna',
                portuguese: 'lua',
                french: 'lune'
            },
            779: {
                english: 'outside',
                spanish: 'afuera',
                italian: 'fora',
                portuguese: 'fuori',
                french: 'dehors'
            },
            780: {
                english: 'certainly',
                spanish: 'ciertamente',
                italian: 'certo',
                portuguese: 'certamente ',
                french: 'certes'
            },
            781: {
                english: 'beautiful',
                spanish: 'bellos',
                italian: 'belli',
                portuguese: 'belos',
                french: 'beaux'
            },
            782: {
                english: 'dress',
                spanish: 'vestido',
                italian: 'vestito',
                portuguese: 'vestido',
                french: 'robe'
            },
            783: {
                english: 'doubt',
                spanish: 'dudar',
                italian: 'duitare',
                portuguese: 'duvidar',
                french: 'douter'
            },
            784: {
                english: 'remove',
                spanish: 'retirar',
                italian: 'ritirare',
                portuguese: 'retirar',
                french: 'retirer/enlever'
            },
            785: {
                english: 'unceasingly',
                spanish: 'incesantemente',
                italian: 'incessantemente',
                portuguese: 'incessantemente',
                french: 'cesse'
            },
            786: {
                english: 'abruptly',
                spanish: 'bruscamente',
                italian: 'bruscamente',
                portuguese: 'bruscamente',
                french: 'brusquement'
            },
            787: {
                english: 'entry',
                spanish: 'entrada',
                italian: 'entrata',
                portuguese: 'entrada',
                french: 'entrée'
            },
            788: {
                english: 'source',
                spanish: 'fuente',
                italian: 'fonte',
                portuguese: 'fonte',
                french: 'source'
            },
            789: {
                english: 'comrade',
                spanish: 'camarada',
                italian: 'compagno',
                portuguese: 'camarada',
                french: 'camarade'
            },
            790: {
                english: 'tooth',
                spanish: 'diente',
                italian: 'dente',
                portuguese: 'dente',
                french: 'dent'
            },
            791: {
                english: 'knowledge',
                spanish: 'conocimiento',
                italian: 'conoscenza',
                portuguese: 'conhecimiento',
                french: 'connaissance'
            },
            792: {
                english: 'neck',
                spanish: 'cuello',
                italian: 'collo',
                portuguese: 'pescoço',
                french: 'cou'
            },
            793: {
                english: 'purpose',
                spanish: 'propósito',
                italian: 'proposito',
                portuguese: 'propósito',
                french: 'but'
            },
            794: {
                english: 'walking',
                spanish: 'caminando',
                italian: 'camminato',
                portuguese: 'caminhado',
                french: 'promener'
            },
            795: {
                english: 'wave',
                spanish: 'ola',
                italian: 'onda',
                portuguese: 'onda',
                french: 'vague'
            },
            796: {
                english: 'element',
                spanish: 'elemento',
                italian: 'elemento',
                portuguese: 'elemento',
                french: 'élément'
            },
            797: {
                english: 'wire',
                spanish: 'hilo',
                italian: 'filo',
                portuguese: 'fio',
                french: 'fil'
            },
            798: {
                english: 'way',
                spanish: 'vía',
                italian: 'via',
                portuguese: 'via',
                french: 'voie'
            },
            799: {
                english: 'nose',
                spanish: 'nariz',
                italian: 'naso',
                portuguese: 'nariz',
                french: 'nez'
            },
            800: {
                english: 'force',
                spanish: 'forzar',
                italian: 'forzare',
                portuguese: 'forçar',
                french: 'forcer'
            },
            801: {
                english: 'particular',
                spanish: 'particular',
                italian: 'particolare',
                portuguese: 'particular',
                french: 'particulier'
            },
            802: {
                english: 'discourse',
                spanish: 'discurso',
                italian: 'discorso',
                portuguese: 'discurso',
                french: 'discours'
            },
            803: {
                english: 'illness',
                spanish: 'enfermedad',
                italian: 'malattia',
                portuguese: 'doença',
                french: 'maladie'
            },
            804: {
                english: 'heat',
                spanish: 'calor',
                italian: 'calore',
                portuguese: 'calor',
                french: 'chaleur'
            },
            805: {
                english: 'glory',
                spanish: 'gloria',
                italian: 'gloria',
                portuguese: 'glória',
                french: 'gloire'
            },
            806: {
                english: 'void',
                spanish: 'vacío',
                italian: 'vuoto',
                portuguese: 'vazio',
                french: 'vide'
            },
            807: {
                english: 'examine',
                spanish: 'examinar',
                italian: 'esaminare',
                portuguese: 'examinar',
                french: 'examiner'
            },
            808: {
                english: 'review',
                spanish: 'revisar',
                italian: 'rivedere',
                portuguese: 'rever',
                french: 'revoir'
            },
            809: {
                english: 'aid',
                spanish: 'ayuda',
                italian: 'aiuto',
                portuguese: 'ajuda',
                french: 'aide'
            },
            810: {
                english: 'beginning',
                spanish: 'inicio',
                italian: 'inizio',
                portuguese: 'início',
                french: 'début'
            },
            811: {
                english: 'enemy',
                spanish: 'enemigo',
                italian: 'nemico',
                portuguese: 'inimigo',
                french: 'ennemi'
            },
            812: {
                english: 'second',
                spanish: 'segundo',
                italian: 'secondo',
                portuguese: 'segundo',
                french: 'second'
            },
            813: {
                english: 'wing',
                spanish: 'ala',
                italian: 'ala',
                portuguese: 'ala',
                french: 'aile'
            },
            814: {
                english: 'flame',
                spanish: 'llama',
                italian: 'fiamma',
                portuguese: 'chama',
                french: 'flamme'
            },
            815: {
                english: 'heavy',
                spanish: 'pesado',
                italian: 'pesante',
                portuguese: 'pesado',
                french: 'lourd'
            },
            816: {
                english: 'breast',
                spanish: 'seno',
                italian: 'seno',
                portuguese: 'seio',
                french: 'sein'
            },
            817: {
                english: 'roof',
                spanish: 'techo',
                italian: 'tetto',
                portuguese: 'teto',
                french: 'toit'
            },
            818: {
                english: 'fill',
                spanish: 'llenar',
                italian: 'riempire',
                portuguese: 'encher',
                french: 'remplir'
            },
            819: {
                english: 'finish',
                spanish: 'terminar',
                italian: 'terminare',
                portuguese: 'terminar',
                french: 'terminer'
            },
            820: {
                english: 'vast',
                spanish: 'vasto',
                italian: 'vasto',
                portuguese: 'vasto',
                french: 'vaste'
            },
            821: {
                english: 'naked',
                spanish: 'desnudo',
                italian: 'nudo',
                portuguese: 'nu',
                french: 'nu'
            },
            822: {
                english: 'dust',
                spanish: 'polvo',
                italian: 'polvere',
                portuguese: 'pó',
                french: 'poussière'
            },
            823: {
                english: 'north',
                spanish: 'norte',
                italian: 'nord',
                portuguese: 'norte',
                french: 'nord'
            },
            824: {
                english: 'attempt',
                spanish: 'intentar',
                italian: 'tentare',
                portuguese: 'tentar',
                french: 'tenter'
            },
            825: {
                english: 'emotion',
                spanish: 'emoción',
                italian: 'emozione',
                portuguese: 'emoção',
                french: 'émotion'
            },
            826: {
                english: 'revolution',
                spanish: 'revolución',
                italian: 'revoluzione',
                portuguese: 'revolução',
                french: 'révolution'
            },
            827: {
                english: 'theatre',
                spanish: 'teatro',
                italian: 'teatro',
                portuguese: 'teatro',
                french: 'théâtre'
            },
            828: {
                english: 'army',
                spanish: 'ejército',
                italian: 'esercito',
                portuguese: 'exército',
                french: 'armée'
            },
            829: {
                english: 'short',
                spanish: 'corto',
                italian: 'corto',
                portuguese: 'curta',
                french: 'court'
            },
            830: {
                english: 'apartment',
                spanish: 'apartamento',
                italian: 'appartamento',
                portuguese: 'apartamento',
                french: 'appartement'
            },
            831: {
                english: 'similar',
                spanish: 'similar',
                italian: 'simile',
                portuguese: 'similar',
                french: 'semblable'
            },
            832: {
                english: 'install',
                spanish: 'instalar',
                italian: 'installare',
                portuguese: 'instalar',
                french: 'installer'
            },
            833: {
                english: 'hate',
                spanish: 'odio',
                italian: 'odio',
                portuguese: 'ódio',
                french: 'haine'
            },
            834: {
                english: 'position',
                spanish: 'posición',
                italian: 'posizione',
                portuguese: 'posição',
                french: 'position'
            },
            835: {
                english: 'second',
                spanish: 'segundo',
                italian: 'secondo',
                portuguese: 'segundo',
                french: 'seconde'
            },
            836: {
                english: 'fresh',
                spanish: 'fresco',
                italian: 'fresco',
                portuguese: 'fresco',
                french: 'frais'
            },
            837: {
                english: 'hope',
                spanish: 'esperanza',
                italian: 'speranza',
                portuguese: 'esperança',
                french: 'espoir'
            },
            838: {
                english: 'ignite',
                spanish: 'encender',
                italian: 'accendere',
                portuguese: 'acender',
                french: 'allumer'
            },
            839: {
                english: 'impose',
                spanish: 'imponer',
                italian: 'imporre',
                portuguese: 'impor',
                french: 'imposer'
            },
            840: {
                english: 'breathe',
                spanish: 'respirar',
                italian: 'respirare',
                portuguese: 'respirar',
                french: 'respirer'
            },
            841: {
                english: 'back',
                spanish: 'atrás',
                italian: 'posteriore',
                portuguese: 'atrás',
                french: 'arrière'
            },
            842: {
                english: 'lower',
                spanish: 'bajar',
                italian: 'abbassare',
                portuguese: 'baixar',
                french: 'baisser'
            },
            843: {
                english: 'right',
                spanish: 'derecha',
                italian: 'destra',
                portuguese: 'direita',
                french: 'droite'
            },
            844: {
                english: 'chest',
                spanish: 'pecho',
                italian: 'petto',
                portuguese: 'peito',
                french: 'poitrine'
            },
            845: {
                english: 'youth',
                spanish: 'juventud',
                italian: 'gioventù',
                portuguese: 'juventude',
                french: 'jeunesse'
            },
            846: {
                english: 'sack',
                spanish: 'saco',
                italian: 'sacco',
                portuguese: 'saco',
                french: 'sac'
            },
            847: {
                english: 'stranger',
                spanish: 'extraño',
                italian: 'estraneo',
                portuguese: 'estranho',
                french: 'étranger'
            },
            848: {
                english: 'courage',
                spanish: 'coraje',
                italian: 'coraggio',
                portuguese: 'coragem',
                french: 'courage'
            },
            849: {
                english: 'blow',
                spanish: 'soplar',
                italian: 'soffiare',
                portuguese: 'soprare',
                french: 'souffler'
            },
            850: {
                english: 'yellow',
                spanish: 'amarillo',
                italian: 'giallo',
                portuguese: 'amarelo',
                french: 'jaune'
            },
            851: {
                english: 'page',
                spanish: 'página',
                italian: 'pagina',
                portuguese: 'página',
                french: 'page'
            },
            852: {
                english: 'bet',
                spanish: 'apostar',
                italian: 'scommettere',
                portuguese: 'apostar',
                french: 'miser'
            },
            853: {
                english: 'past',
                spanish: 'pasado',
                italian: 'passato',
                portuguese: 'passado',
                french: 'passé'
            },
            854: {
                english: 'rapid',
                spanish: 'rápido',
                italian: 'rapido',
                portuguese: 'rápido',
                french: 'rapide'
            },
            855: {
                english: 'dignified',
                spanish: 'digno',
                italian: 'degno',
                portuguese: 'digno',
                french: 'digne'
            },
            856: {
                english: 'hot',
                spanish: 'caliente',
                italian: 'caldo',
                portuguese: 'quente',
                french: 'chaud'
            },
            857: {
                english: 'purpose',
                spanish: 'propósito',
                italian: 'proposito',
                portuguese: 'propósito',
                french: 'propos'
            },
            858: {
                english: 'attract',
                spanish: 'atraer',
                italian: 'attirare',
                portuguese: 'atrair',
                french: 'attirer'
            },
            859: {
                english: 'lend',
                spanish: 'prestar',
                italian: 'prestare',
                portuguese: 'prestar',
                french: 'prêter'
            },
            860: {
                english: 'clear',
                spanish: 'claro',
                italian: 'chiaro',
                portuguese: 'claro',
                french: 'clair'
            },
            861: {
                english: 'amuse',
                spanish: 'divertir',
                italian: 'divertire',
                portuguese: 'divertir',
                french: 'amuser'
            },
            862: {
                english: 'occasion',
                spanish: 'ocasión',
                italian: 'occassione',
                portuguese: 'ocasião',
                french: 'occasion'
            },
            863: {
                english: 'sail',
                spanish: 'vela',
                italian: 'vela',
                portuguese: 'vela',
                french: 'voile'
            },
            864: {
                english: 'burst',
                spanish: 'estallar',
                italian: 'scoppiare',
                portuguese: 'rebentar',
                french: 'éclater'
            },
            865: {
                english: 'importance',
                spanish: 'importancia',
                italian: 'importanza',
                portuguese: 'Importância',
                french: 'importance'
            },
            866: {
                english: 'neighborhood',
                spanish: 'barrio',
                italian: 'quartiere',
                portuguese: 'bairro',
                french: 'quartier'
            },
            867: {
                english: 'author',
                spanish: 'autor',
                italian: 'autore',
                portuguese: 'autor',
                french: 'auteur'
            },
            868: {
                english: 'religion',
                spanish: 'religión',
                italian: 'religione',
                portuguese: 'religião',
                french: 'religion'
            },
            869: {
                english: 'palace',
                spanish: 'palacio',
                italian: 'palazzo',
                portuguese: 'palácio',
                french: 'palais'
            },
            870: {
                english: 'reunite',
                spanish: 'reunir',
                italian: 'riunire',
                portuguese: 'reunir',
                french: 'réunir'
            },
            871: {
                english: 'treat',
                spanish: 'tratar',
                italian: 'trattare',
                portuguese: 'tratar',
                french: 'traiter'
            },
            872: {
                english: 'intelligence ',
                spanish: 'inteligencia',
                italian: 'intelligenza',
                portuguese: 'inteligência',
                french: 'intelligence'
            },
            873: {
                english: 'neighbor',
                spanish: 'vecino',
                italian: 'vicino',
                portuguese: 'vizinho',
                french: 'voisin'
            },
            874: {
                english: 'card',
                spanish: 'carta',
                italian: 'carta',
                portuguese: 'carta',
                french: 'carte'
            },
            875: {
                english: 'secret',
                spanish: 'secreto',
                italian: 'segreto',
                portuguese: 'segredo',
                french: 'secret'
            },
            876: {
                english: 'animal',
                spanish: 'animal',
                italian: 'animale',
                portuguese: 'animal',
                french: 'animal'
            },
            877: {
                english: 'summer',
                spanish: 'verano',
                italian: 'estate',
                portuguese: 'verão',
                french: 'été'
            },
            878: {
                english: 'drag',
                spanish: 'arrastrar',
                italian: 'trascinare',
                portuguese: 'arrastar',
                french: 'traîner'
            },
            879: {
                english: 'cabinet',
                spanish: 'gabinete',
                italian: 'gabinetto',
                portuguese: 'gabinete',
                french: 'cabinet'
            },
            880: {
                english: 'capable',
                spanish: 'capaz',
                italian: 'capace',
                portuguese: 'capaz',
                french: 'capable'
            },
            881: {
                english: 'suffering',
                spanish: 'sufrimiento',
                italian: 'sofferenza',
                portuguese: 'sofrimento',
                french: 'souffrance'
            },
            882: {
                english: 'mark',
                spanish: 'marcar',
                italian: 'marcare',
                portuguese: 'marcar',
                french: 'marquer'
            },
            883: {
                english: 'import',
                spanish: 'importar',
                italian: 'importare',
                portuguese: 'importar',
                french: 'importer'
            },
            884: {
                english: 'title',
                spanish: 'titulo',
                italian: 'titolo',
                portuguese: 'titulo',
                french: 'titre'
            },
            885: {
                english: 'desert',
                spanish: 'desierto',
                italian: 'deserto',
                portuguese: 'deserto',
                french: 'désert'
            },
            886: {
                english: 'easy',
                spanish: 'fácil',
                italian: 'facile',
                portuguese: 'fácil',
                french: 'facile'
            },
            887: {
                english: 'spectacle',
                spanish: 'espectáculo',
                italian: 'spettacolo',
                portuguese: 'espetáculo',
                french: 'spectacle'
            },
            888: {
                english: 'demand',
                spanish: 'exigir',
                italian: 'esigere',
                portuguese: 'exigir',
                french: 'exiger'
            },
            889: {
                english: 'rest',
                spanish: 'reposar',
                italian: 'riposare',
                portuguese: 'repousar',
                french: 'reposer'
            },
            890: {
                english: 'departure',
                spanish: 'partida',
                italian: 'partenza',
                portuguese: 'partida',
                french: 'départ'
            },
            891: {
                english: 'proud',
                spanish: 'orgulloso',
                italian: 'orgoglioso',
                portuguese: 'orgulhoso',
                french: 'fier'
            },
            892: {
                english: 'dance',
                spanish: 'bailar',
                italian: 'ballare',
                portuguese: 'dançar',
                french: 'danser'
            },
            893: {
                english: 'salute',
                spanish: 'saludar',
                italian: 'salutare',
                portuguese: 'saudar',
                french: 'saluer'
            },
            894: {
                english: 'glimmer',
                spanish: 'resplandor',
                italian: 'barlume',
                portuguese: 'lampejo',
                french: 'lueur'
            },
            895: {
                english: 'concede',
                spanish: 'conceder',
                italian: 'concedere/accordare',
                portuguese: 'conceder',
                french: 'concéder/accorder'
            },
            896: {
                english: 'prayer',
                spanish: 'plegaria',
                italian: 'preghiera',
                portuguese: 'prece',
                french: 'prière'
            },
            897: {
                english: 'admit',
                spanish: 'admitir',
                italian: 'ammettere',
                portuguese: 'admitir',
                french: 'admettre/avouer'
            },
            898: {
                english: 'distinguish',
                spanish: 'distinguir',
                italian: 'distinguere',
                portuguese: 'distinguir',
                french: 'distinguer'
            },
            899: {
                english: 'function',
                spanish: 'función',
                italian: 'funzione',
                portuguese: 'função',
                french: 'fonction'
            },
            900: {
                english: 'aspect',
                spanish: 'aspecto',
                italian: 'aspetto',
                portuguese: 'aspecto',
                french: 'aspect'
            },
            901: {
                english: 'sleep',
                spanish: 'sueño',
                italian: 'sonno',
                portuguese: 'sono',
                french: 'sommeil'
            },
            902: {
                english: 'splinter',
                spanish: 'astilla',
                italian: 'scheggia',
                portuguese: 'lasca',
                french: 'éclat'
            },
            903: {
                english: 'half',
                spanish: 'mitad',
                italian: 'metà',
                portuguese: 'metade',
                french: 'moitié/demi'
            },
            904: {
                english: 'calm',
                spanish: 'calma',
                italian: 'calma',
                portuguese: 'calma',
                french: 'calme'
            },
            905: {
                english: 'contrary',
                spanish: 'contrario',
                italian: 'contrario',
                portuguese: 'contrário',
                french: 'contraire'
            },
            906: {
                english: 'hill',
                spanish: 'colina',
                italian: 'collina',
                portuguese: 'colina',
                french: 'colline'
            },
            907: {
                english: 'agitate',
                spanish: 'agitar',
                italian: 'agitare',
                portuguese: 'agitar',
                french: 'agiter'
            },
            908: {
                english: 'hesitate',
                spanish: 'hesitar',
                italian: 'esitare',
                portuguese: 'hesitar',
                french: 'hésiter'
            },
            909: {
                english: 'terrain',
                spanish: 'terreno',
                italian: 'terreno',
                portuguese: 'terreno',
                french: 'terrain'
            },
            910: {
                english: 'rare',
                spanish: 'raro',
                italian: 'raro',
                portuguese: 'raro',
                french: 'rare'
            },
            911: {
                english: 'weight',
                spanish: 'peso',
                italian: 'peso',
                portuguese: 'peso',
                french: 'poids'
            },
            912: {
                english: 'sound',
                spanish: 'sonar',
                italian: 'suonare',
                portuguese: 'soar',
                french: 'sonner'
            },
            913: {
                english: 'change',
                spanish: 'cambio',
                italian: 'cambiamento',
                portuguese: 'mudança',
                french: 'changement'
            },
            914: {
                english: 'compose',
                spanish: 'componer',
                italian: 'comporre',
                portuguese: 'compor',
                french: 'composer'
            },
            915: {
                english: 'pocket',
                spanish: 'bolsillo',
                italian: 'tasca',
                portuguese: 'bolso',
                french: 'poche'
            },
            916: {
                english: 'join',
                spanish: 'unirse',
                italian: 'unirsi',
                portuguese: 'juntar',
                french: 'rejoindre'
            },
            917: {
                english: 'eve',
                spanish: 'víspera',
                italian: 'viglia',
                portuguese: 'véspera',
                french: 'veille'
            },
            918: {
                english: 'fruit',
                spanish: 'fruta',
                italian: 'frutta',
                portuguese: 'fruta',
                french: 'fruit'
            },
            919: {
                english: 'complete',
                spanish: 'completo',
                italian: 'completo',
                portuguese: 'completo',
                french: 'complet'
            },
            920: {
                english: 'study',
                spanish: 'estudiar',
                italian: 'studiare',
                portuguese: 'estudar',
                french: 'étudier'
            },
            921: {
                english: 'share',
                spanish: 'compartir',
                italian: 'condividere',
                portuguese: 'partilhar',
                french: 'partager'
            },
            922: {
                english: 'cross',
                spanish: 'cruz',
                italian: 'croce',
                portuguese: 'cruz',
                french: 'croix'
            },
            923: {
                english: 'following',
                spanish: 'siguiente',
                italian: 'seguente',
                portuguese: 'seguinte',
                french: 'suivant'
            },
            924: {
                english: 'chase',
                spanish: 'perseguir',
                italian: 'inseguire',
                portuguese: 'perseguir',
                french: 'chasser'
            },
            925: {
                english: 'interrupt',
                spanish: 'interrumpir',
                italian: 'interrompere',
                portuguese: 'interromper',
                french: 'interrompre'
            },
            926: {
                english: 'to distance',
                spanish: 'alejar',
                italian: 'allontanare',
                portuguese: 'afastar',
                french: 'éloigner'
            },
            927: {
                english: 'treasure',
                spanish: 'tesoro',
                italian: 'tesoro',
                portuguese: 'tesouro',
                french: 'trésor'
            },
            928: {
                english: 'company',
                spanish: 'compañía',
                italian: 'compagnia',
                portuguese: 'companhia',
                french: 'compagnie'
            },
            929: {
                english: 'narrow',
                spanish: 'estrecho',
                italian: 'stretto',
                portuguese: 'estreito',
                french: 'étroit'
            },
            930: {
                english: 'kitchen',
                spanish: 'cocina',
                italian: 'cucina',
                portuguese: 'cozinha',
                french: 'cuisine'
            },
            931: {
                english: 'reduce',
                spanish: 'reducir',
                italian: 'ridurre',
                portuguese: 'reduzir',
                french: 'réduire'
            },
            932: {
                english: 'engage',
                spanish: 'comprometerse',
                italian: 'impegnare',
                portuguese: 'comprometer',
                french: 'engager'
            },
            933: {
                english: 'equal',
                spanish: 'igual',
                italian: 'uguale',
                portuguese: 'igual',
                french: 'égal'
            },
            934: {
                english: 'empire',
                spanish: 'imperio',
                italian: 'impero',
                portuguese: 'império',
                french: 'empire'
            },
            935: {
                english: 'nation',
                spanish: 'nación',
                italian: 'nazione',
                portuguese: 'nação',
                french: 'nation'
            },
            936: {
                english: 'off',
                spanish: 'apagar',
                italian: 'spegnere',
                portuguese: 'apagar',
                french: 'éteindre'
            },
            937: {
                english: 'restart',
                spanish: 'recomenzar',
                italian: 'ricominciare',
                portuguese: 'recomeçar',
                french: 'recommencer'
            },
            938: {
                english: 'jump',
                spanish: 'saltar',
                italian: 'saltare',
                portuguese: 'saltar',
                french: 'sauter'
            },
            939: {
                english: 'conversation',
                spanish: 'conversación',
                italian: 'conversazione',
                portuguese: 'conversação',
                french: 'conversation'
            },
            940: {
                english: 'trait',
                spanish: 'rasgo',
                italian: 'tratto',
                portuguese: 'traço',
                french: 'trait'
            },
            941: {
                english: 'violent',
                spanish: 'violento',
                italian: 'violento',
                portuguese: 'violento',
                french: 'violent'
            },
            942: {
                english: 'impression',
                spanish: 'impresión',
                italian: 'impressione',
                portuguese: 'impressão',
                french: 'impression'
            },
            943: {
                english: 'prefer',
                spanish: 'preferir',
                italian: 'preferire',
                portuguese: 'preferir',
                french: 'préférer'
            },
            944: {
                english: 'reveal',
                spanish: 'revelar',
                italian: 'rivelare',
                portuguese: 'revelar',
                french: 'révéler'
            },
            945: {
                english: 'yours',
                spanish: 'suyo',
                italian: 'suo',
                portuguese: 'seu',
                french: 'sien'
            },
            946: {
                english: 'magnificent',
                spanish: 'magnifico',
                italian: 'magnifico',
                portuguese: 'magnifico',
                french: 'magnifique'
            },
            947: {
                english: 'despair',
                spanish: 'desesperación',
                italian: 'disperazione',
                portuguese: 'desespero',
                french: 'désespoir'
            },
            948: {
                english: 'witness',
                spanish: 'testigo',
                italian: 'testimone',
                portuguese: 'testemunha',
                french: 'témoin'
            },
            949: {
                english: 'visit',
                spanish: 'visita',
                italian: 'visita',
                portuguese: 'visita',
                french: 'visite'
            },
            950: {
                english: 'respect',
                spanish: 'respeto',
                italian: 'rispetto',
                portuguese: 'respeito',
                french: 'respect'
            },
            951: {
                english: 'solitude',
                spanish: 'soledad',
                italian: 'solitudine',
                portuguese: 'solidã',
                french: 'solitude'
            },
            952: {
                english: 'undergo',
                spanish: 'someterse',
                italian: 'subire',
                portuguese: 'submeter',
                french: 'subir'
            },
            953: {
                english: 'next',
                spanish: 'próximo',
                italian: 'prossimo',
                portuguese: 'próximo',
                french: 'prochain'
            },
            954: {
                english: 'cost',
                spanish: 'costar',
                italian: 'costare',
                portuguese: 'custar',
                french: 'coûter'
            },
            955: {
                english: 'reflect',
                spanish: 'reflejar',
                italian: 'riflettere',
                portuguese: 'refletir',
                french: 'réfléchir'
            },
            956: {
                english: 'officer',
                spanish: 'oficial',
                italian: 'ufficiale',
                portuguese: 'oficial',
                french: 'officier'
            },
            957: {
                english: 'thank',
                spanish: 'agradecer',
                italian: 'rigraziare',
                portuguese: 'agradecer',
                french: 'remercier'
            },
            958: {
                english: 'folder',
                spanish: 'carpeta',
                italian: 'cartella',
                portuguese: 'pasta',
                french: 'déposer'
            },
            959: {
                english: 'smoke',
                spanish: 'fumar',
                italian: 'fumare',
                portuguese: 'fumar',
                french: 'fumer'
            },
            960: {
                english: 'chair',
                spanish: 'silla',
                italian: 'sedia',
                portuguese: 'cadeira',
                french: 'chaise/fauteuil'
            },
            961: {
                english: 'early',
                spanish: 'temprano',
                italian: 'presto',
                portuguese: 'cedo',
                french: 'tôt'
            },
            962: {
                english: 'affirm',
                spanish: 'afirmar',
                italian: 'affermare',
                portuguese: 'afirmar',
                french: 'affirmer'
            },
            963: {
                english: 'relationship',
                spanish: 'relación',
                italian: 'relazione',
                portuguese: 'relação',
                french: 'relation'
            },
            964: {
                english: 'fumes',
                spanish: 'humo',
                italian: 'fumo',
                portuguese: 'fumo',
                french: 'fumée'
            },
            965: {
                english: 'agree',
                spanish: 'convenir',
                italian: 'convenire',
                portuguese: 'concordar',
                french: 'convenir'
            },
            966: {
                english: 'branch',
                spanish: 'rama',
                italian: 'ramo',
                portuguese: 'ramo',
                french: 'branche'
            },
            967: {
                english: 'sick',
                spanish: 'enfermo',
                italian: 'malato',
                portuguese: 'doente',
                french: 'malade'
            },
            968: {
                english: 'circumstance',
                spanish: 'circunstancia',
                italian: 'circostanza',
                portuguese: 'circunstância',
                french: 'circonstance'
            },
            969: {
                english: 'companion',
                spanish: 'compañero',
                italian: 'compagno',
                portuguese: 'compaanheiro',
                french: 'compagnon'
            },
            970: {
                english: 'dress',
                spanish: 'vestir',
                italian: 'vestire',
                portuguese: 'vestir',
                french: 'vêtir'
            },
            971: {
                english: 'experience',
                spanish: 'experiencia',
                italian: 'esperienza',
                portuguese: 'experiência',
                french: 'expérience'
            },
            972: {
                english: 'port',
                spanish: 'puerto',
                italian: 'porto',
                portuguese: 'porto',
                french: 'port'
            },
            973: {
                english: 'accomplish',
                spanish: 'cumplir',
                italian: 'compiere',
                portuguese: 'cumprir',
                french: 'accomplir'
            },
            974: {
                english: 'resolve',
                spanish: 'resolver',
                italian: 'resolvere',
                portuguese: 'resolver',
                french: 'résoudre'
            },
            975: {
                english: 'plunge',
                spanish: 'sumergirse',
                italian: 'tuffarsi',
                portuguese: 'submergir',
                french: 'plonger'
            },
            976: {
                english: 'drop',
                spanish: 'gota',
                italian: 'goccia',
                portuguese: 'gota',
                french: 'goutte'
            },
            977: {
                english: 'mine',
                spanish: 'mío',
                italian: 'mio',
                portuguese: 'meu',
                french: 'mien'
            },
            978: {
                english: 'singing',
                spanish: 'canto',
                italian: 'canto',
                portuguese: 'canto',
                french: 'chant'
            },
            979: {
                english: 'destroy',
                spanish: 'destruir',
                italian: 'distruggere',
                portuguese: 'destruir',
                french: 'détruire'
            },
            980: {
                english: 'combat',
                spanish: 'combate',
                italian: 'combattimento',
                portuguese: 'combate',
                french: 'combat'
            },
            981: {
                english: 'character',
                spanish: 'personaje',
                italian: 'personaggio',
                portuguese: 'personagem',
                french: 'personnage'
            },
            982: {
                english: 'adventure',
                spanish: 'aventura',
                italian: 'avventura',
                portuguese: 'aventura',
                french: 'aventure'
            },
            983: {
                english: 'interest',
                spanish: 'interesar',
                italian: 'interessare',
                portuguese: 'interessar',
                french: 'intéresser'
            },
            984: {
                english: 'dispose',
                spanish: 'disponer',
                italian: 'disporre',
                portuguese: 'dispor',
                french: 'disposer'
            },
            985: {
                english: 'absence',
                spanish: 'ausencia',
                italian: 'assenza',
                portuguese: 'ausência',
                french: 'absence'
            },
            986: {
                english: 'machine',
                spanish: 'máquina',
                italian: 'macchina',
                portuguese: 'máquina',
                french: 'machine'
            },
            987: {
                english: 'chain',
                spanish: 'cadena',
                italian: 'catena',
                portuguese: 'cadeia',
                french: 'chaîne'
            },
            988: {
                english: 'shame',
                spanish: 'vergüenza',
                italian: 'vergogna',
                portuguese: 'vergonha',
                french: 'honte'
            },
            989: {
                english: 'atraighten',
                spanish: 'alisar',
                italian: 'lisciare',
                portuguese: 'alisar',
                french: 'lisser'
            },
            990: {
                english: 'hunger',
                spanish: 'hambre',
                italian: 'fame',
                portuguese: 'fome',
                french: 'faim'
            },
            991: {
                english: 'plain',
                spanish: 'planicie',
                italian: 'pianura',
                portuguese: 'planície',
                french: 'plaine'
            },
            992: {
                english: 'tip',
                spanish: 'punta',
                italian: 'punta',
                portuguese: 'punta',
                french: 'pointe'
            },
            993: {
                english: 'obey',
                spanish: 'obedecer',
                italian: 'obbedire',
                portuguese: 'obedecer',
                french: 'obéir'
            },
            994: {
                english: 'evidence',
                spanish: 'prueba',
                italian: 'prova',
                portuguese: 'prova',
                french: 'preuve'
            },
            995: {
                english: 'eternal',
                spanish: 'eterno',
                italian: 'eterno',
                portuguese: 'eterno',
                french: 'éternel'
            },
            996: {
                english: 'fight',
                spanish: 'luchar',
                italian: 'lottare',
                portuguese: 'lutar',
                french: 'lutter'
            },
            997: {
                english: 'pretend',
                spanish: 'pretender',
                italian: 'pretendere',
                portuguese: 'pretender',
                french: 'prétendre'
            },
            998: {
                english: 'battle',
                spanish: 'batalla',
                italian: 'battaglia',
                portuguese: 'batalha',
                french: 'bataille'
            },
            999: {
                english: 'construct',
                spanish: 'construir',
                italian: 'construire',
                portuguese: 'construir',
                french: 'construire'
            },
            1000: {
                english: 'energy',
                spanish: 'energía',
                italian: 'energia',
                portuguese: 'energia',
                french: 'énergie'
            },
            1001: {
                english: 'victim',
                spanish: 'víctima',
                italian: 'vittima',
                portuguese: 'vítima',
                french: 'victime'
            },
            1002: {
                english: 'savage',
                spanish: 'salvaje',
                italian: 'selvaggio',
                portuguese: 'selvagem',
                french: 'sauvage'
            },
            1003: {
                english: 'submit',
                spanish: 'someter',
                italian: 'sottoporre',
                portuguese: 'submeter',
                french: 'soumettre'
            },
            1004: {
                english: 'use',
                spanish: 'uso',
                italian: 'uso',
                portuguese: 'uso',
                french: 'usage'
            },
            1005: {
                english: 'weight',
                spanish: 'pesar',
                italian: 'pesare',
                portuguese: 'pesar',
                french: 'peser'
            },
            1006: {
                english: 'double',
                spanish: 'doble',
                italian: 'doppio',
                portuguese: 'dupla',
                french: 'double'
            },
            1007: {
                english: 'stain',
                spanish: 'mancha',
                italian: 'macchia',
                portuguese: 'mancha',
                french: 'tache'
            },
            1008: {
                english: 'curiosity',
                spanish: 'curiosidad',
                italian: 'curiosità',
                portuguese: 'curiosidade',
                french: 'curiosité'
            },
            1009: {
                english: 'spread',
                spanish: 'esparcir',
                italian: 'spargere',
                portuguese: 'espalhar',
                french: 'répandre'
            },
            1010: {
                english: 'ice',
                spanish: 'hielo',
                italian: 'ghiaccio',
                portuguese: 'gelo',
                french: 'glace'
            },
            1011: {
                english: 'resist',
                spanish: 'resistir',
                italian: 'resistere',
                portuguese: 'resistir',
                french: 'résister'
            },
            1012: {
                english: 'prison',
                spanish: 'prisión',
                italian: 'prigione',
                portuguese: 'prisão',
                french: 'prison'
            },
            1013: {
                english: 'floor',
                spanish: 'piso',
                italian: 'piano',
                portuguese: 'chão',
                french: 'étage'
            },
            1014: {
                english: 'ticket',
                spanish: 'billete',
                italian: 'biglietto',
                portuguese: 'bilhete',
                french: 'billet'
            },
            1015: {
                english: 'serious',
                spanish: 'serio',
                italian: 'serio',
                portuguese: 'sério',
                french: 'sérieux'
            },
            1016: {
                english: 'protect',
                spanish: 'proteger',
                italian: 'proteggere',
                portuguese: 'proteger',
                french: 'protéger'
            },
            1017: {
                english: 'rose',
                spanish: 'rosa',
                italian: 'rosa',
                portuguese: 'rosa',
                french: 'rose'
            },
            1018: {
                english: 'enclose',
                spanish: 'encerrar',
                italian: 'rinchiudere',
                portuguese: 'prender',
                french: 'enfermer'
            },
            1019: {
                english: 'attitude',
                spanish: 'actitude',
                italian: 'atteggiamento',
                portuguese: 'atitude',
                french: 'attitude'
            },
            1020: {
                english: 'hard',
                spanish: 'duro',
                italian: 'duro',
                portuguese: 'duro',
                french: 'dur'
            },
            1021: {
                english: 'mode',
                spanish: 'modo',
                italian: 'modo',
                portuguese: 'modo',
                french: 'mode'
            },
            1022: {
                english: 'fear',
                spanish: 'temor',
                italian: 'timore',
                portuguese: 'temor',
                french: 'crainte'
            },
            1023: {
                english: 'excavate',
                spanish: 'excavar',
                italian: 'scavare',
                portuguese: 'escavar',
                french: 'creuser'
            },
            1024: {
                english: 'grow',
                spanish: 'crecer',
                italian: 'crescere',
                portuguese: 'crescer',
                french: 'grandir'
            },
            1025: {
                english: 'sink',
                spanish: 'hundir',
                italian: 'affondare',
                portuguese: 'afundar',
                french: 'enfoncer'
            },
            1026: {
                english: 'clothing',
                spanish: 'ropa',
                italian: 'abiti',
                portuguese: 'roupa',
                french: 'vêtement'
            },
            1027: {
                english: 'wrap',
                spanish: 'envolver',
                italian: 'avvolgere',
                portuguese: 'envolver',
                french: 'envelopper'
            },
            1028: {
                english: 'prevent',
                spanish: 'prevenir',
                italian: 'prevenire',
                portuguese: 'prevenir',
                french: 'prévenir'
            },
            1029: {
                english: 'violence',
                spanish: 'violencia',
                italian: 'violenza',
                portuguese: 'violência',
                french: 'violence'
            },
            1030: {
                english: 'inspire',
                spanish: 'inspirar',
                italian: 'ispirare',
                portuguese: 'inspirar',
                french: 'inspirer'
            },
            1031: {
                english: 'useless',
                spanish: 'inútil',
                italian: 'inutile',
                portuguese: 'inútil',
                french: 'inutile'
            },
            1032: {
                english: 'happy',
                spanish: 'contento',
                italian: 'contento',
                portuguese: 'contente',
                french: 'content'
            },
            1033: {
                english: 'current',
                spanish: 'corriente',
                italian: 'corrente',
                portuguese: 'corrente',
                french: 'courant'
            },
            1034: {
                english: 'madness',
                spanish: 'locura',
                italian: 'follia',
                portuguese: 'loucura',
                french: 'folie'
            },
            1035: {
                english: 'pity',
                spanish: 'piedad',
                italian: 'pietà',
                portuguese: 'piedade',
                french: 'pitié'
            },
            1036: {
                english: 'intention',
                spanish: 'intención',
                italian: 'intenzione',
                portuguese: 'intenção',
                french: 'intention'
            },
            1037: {
                english: 'gather',
                spanish: 'recoger',
                italian: 'raccogliere',
                portuguese: 'recolher',
                french: 'ramasser'
            },
            1038: {
                english: 'invent',
                spanish: 'inventar',
                italian: 'inventare',
                portuguese: 'inventar',
                french: 'inventer'
            },
            1039: {
                english: 'trace',
                spanish: 'rastro',
                italian: 'traccia',
                portuguese: 'rasto',
                french: 'trace'
            },
            1040: {
                english: 'cloth',
                spanish: 'tela',
                italian: 'tela',
                portuguese: 'tela',
                french: 'toile'
            },
            1041: {
                english: 'press',
                spanish: 'presionar',
                italian: 'premere',
                portuguese: 'pressionar',
                french: 'presser'
            },
            1042: {
                english: 'trust',
                spanish: 'confiar',
                italian: 'affidare',
                portuguese: 'confiar',
                french: 'confier'
            },
            1043: {
                english: 'erase',
                spanish: 'borrar',
                italian: 'cancellare',
                portuguese: 'apagar',
                french: 'effacer'
            },
            1044: {
                english: 'retreat',
                spanish: 'retroceder',
                italian: 'rinculare',
                portuguese: 'retroceder',
                french: 'reculer'
            },
            1045: {
                english: 'use',
                spanish: 'usar',
                italian: 'usare',
                portuguese: 'usar',
                french: 'user'
            },
            1046: {
                english: 'nourish',
                spanish: 'nutrir',
                italian: 'nutrire',
                portuguese: 'nutrir',
                french: 'nourrir'
            },
            1047: {
                english: 'dangerous',
                spanish: 'peligroso',
                italian: 'pericoloso',
                portuguese: 'perigoso',
                french: 'dangereux'
            },
            1048: {
                english: 'poetry',
                spanish: 'poesía',
                italian: 'poesia',
                portuguese: 'poesia',
                french: 'poésie'
            },
            1049: {
                english: 'summit',
                spanish: 'cumbre',
                italian: 'vertice',
                portuguese: 'cimeira',
                french: 'sommet'
            },
            1050: {
                english: 'replace',
                spanish: 'reempazar',
                italian: 'rimpiazzare',
                portuguese: 'trocar',
                french: 'remplacer'
            },
            1051: {
                english: 'wish',
                spanish: 'desear',
                italian: 'augurare',
                portuguese: 'desejar',
                french: 'souhaiter'
            },
            1052: {
                english: 'advance',
                spanish: 'anticipo',
                italian: 'anticipo',
                portuguese: 'adiantamento',
                french: 'avance'
            },
            1053: {
                english: 'authority',
                spanish: 'autoridad',
                italian: 'autorità',
                portuguese: 'autoridade',
                french: 'autorité'
            },
            1054: {
                english: 'thick',
                spanish: 'espeso',
                italian: 'spesso',
                portuguese: 'espesso',
                french: 'épais'
            },
            1055: {
                english: 'restlessness',
                spanish: 'inquietud',
                italian: 'inquietudine',
                portuguese: 'inquietação',
                french: 'inquiétude'
            }
        }
    }

    window.app = window.app || {};
    window.app.frequentWordsModel = frequentWordsModel;

})(window);
