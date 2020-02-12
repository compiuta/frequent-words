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
                french: 'pendant'
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
                spanish: 'ningún',
                italian: 'Nessuno',
                portuguese: 'nehum',
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
                french: 'lever'
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
                french: 'vrai'
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
                english: 'rock',
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
                french: 'mieux'
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
                french: 'finir'
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
                italian: 'tipo',
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
                spanish: 'miedo',
                italian: 'paura',
                portuguese: 'medo',
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
                french: 'payer'
            },
            416: {
                english: 'bring',
                spanish: 'traer',
                italian: 'aportare',
                portuguese: 'trazer',
                french: 'apporter'
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
                french: 'atteindre'
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
            }
        }
    }

    window.app = window.app || {};
    window.app.frequentWordsModel = frequentWordsModel;

})(window);