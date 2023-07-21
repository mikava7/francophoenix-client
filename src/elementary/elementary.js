export const elementaryData = [
  {
    lesson: 0,
    "lesson title": "Tu t’appelles comment?",
    grammer: [
      {
        title: "Le Verbe s'appeler au présent",
        titleGeo: "ზმნა რქმევა აწმყოში",
        verbe: ["Je m'appelle", "Tu t'appelles", "il, elle s'appelle"],
        verbeGeo: ["მე მქვია", "ჭენ გქვია", "მას ჰქვია"],
        examples: [
          "Je m’appelle Claire.",
          "Tu t’appelles comment?",
          "Il s’appelle Christian.",
          "Comment vous vous appelez?",
        ],
        examplesGeo: [
          "მე მქვია კლერი",
          "შენ რა გქვია?",
          "მას ჰქვია კრისტიანი.",
          "თქვენ რა გქვიათ?",
        ],
      },
    ],
    dialogue: [
      {
        speaker: "jamie",
        message: "Bonjour.Je m’appelle Jamie",
        translation: "გამარჯობა. მე მქვია ჯეიმი",
      },
      {
        speaker: "Claire",
        message: "Bonjour jamie",
        translation: "გამარჯობა ჯეიმი",
      },

      {
        speaker: "jamie",
        message: "Et toi, tu t'appelles comment?",
        translation: "და შენ, შენ რა გქვია",
      },
      {
        speaker: "Claire",
        message: "Je m’appelle Claire.",
        translation: "მე მქვია კლერი",
      },
      {
        speaker: "jamie",
        message: "enchanté Claire",
        translation: "სასიაომოვნოა კლერ",
      },
      {
        speaker: "Claire",
        message: "enchanté.",
        translation: "ჩემთვისაც",
      },
    ],
    dialogueExercise: [
      {
        message: "Je ____ Jamie",
        options: ["t'appelles", "m’appelle"],
        correctAnswer: "m’appelle",
      },
      {
        message: "Et toi, tu ____ comment?",
        options: ["t'appelles", "m’appelle"],
        correctAnswer: "t'appelles",
      },
      {
        message: "Il ____ Jacques",
        options: ["s’appelle", "m’appelle"],
        correctAnswer: "s’appelle",
      },
    ],
    sentenceBuilder: [
      {
        sentence: "Bonjour. Je m’appelle Jamie",
        words: ["Bonjour.", "Je", "m’appelle", "Jamie"],
      },
      {
        sentence: "Comment ça va ?",
        words: ["Comment", "ça", "va", "?"],
      },
      // Add more sentences and their words as needed
    ],
    phrases: {
      originalPhrases: [
        "Bonjour",
        "Au revoir",
        "Tu t'appelles comment?",
        "Comment tu t’appelles?",
        "Vous vous appelez comment?",
        "Comment vous vous appelez?",
        "Je m’appelle Claire",
        "enchanté",
      ],
      translatedPhrases: [
        "გამარჯობა",
        "ნახვამდი",
        "რა გქვია?",
        "რა გქვია?",
        "თქვენ რა გქვიათ? (თავაზიანი ფორმა)",
        "თქვენ რა გქვიათ? (თავაზიანი ფორმა)",
        "მე მქვია კლერი",
        "სასიამოვნოა",
      ],
    },
  },
  {
    lesson: 1,
    "lesson title": "Tu es française?",
    grammer: [
      {
        title: "Le Verbe etre au présent",
        titleGeo: "ზმნა ყოფნა აწმყოში",
        verbe: [
          "Je suis",
          "Tu	es",
          "il, elle est",
          "Nous sommes",
          "Vous étes",
          "Ils,elles sont",
        ],
        verbeGeo: [
          "მე ვარ",
          "შენ ხარ",
          "ის არის",
          "ჩვენ ვართ",
          "თქვენ ხართ",
          "ისინი არიან",
        ],
        examples: [
          "Je	suis française.",
          "tu es écossais",
          "il est géorgien.",
          "Elle	est	canadienne.",
        ],
        examplesGeo: [
          "მე ვარ ფრანგი",
          "შენ ხარ შოტლანდიელი",
          "ის(ბიჭი) არის ქართველი",
          "ის(გოგო) არის კანადელი",
        ],
      },
    ],
    dialogue: [
      {
        speaker: "Jamie",
        message: "Tu es anglaise?",
        translation: "ინგლისელი ხარ?",
      },
      {
        speaker: "Claire",
        message: "Non, je suis française, et toi?",
        translation: "არა, მე ვარ ფრანგი. და შენ",
      },

      {
        speaker: "Jamie",
        message: "Je suis écossais. Tu es mariée?",
        translation: "მე ვარ შოტლანდიელი. დაქორწინებული ხარ?",
      },
      {
        speaker: "Claire",
        message: "Non, je suis Célibataire",
        translation: "არა, მარტოხელა(დაუქორწინებელი) ვარ",
      },
      {
        speaker: "Jamie",
        message: "Moi aussi, je suis célibataire.",
        translation: "მეც ასევე, მეც მარტოხელა ვარ.",
      },
    ],
    dialogueExercise: [
      {
        message: "Tu ____ anglaise?",

        options: ["es", "est"],
        correctAnswer: "es",
      },
      {
        message: "Non, je ____ Célibataire",

        options: ["suis", "m’appelle"],
        correctAnswer: "suis",
      },
      {
        message: "il ____ géorgien.",

        options: ["es", "est"],
        correctAnswer: "est",
      },
      {
        message: "Elle ____	canadienne.",

        options: ["es", "est"],
        correctAnswer: "est",
      },
    ],
    sentenceBuilder: {
      sentence: "je suis française",
      words: ["suis", "Je", , "française"],
    },
    phrases: {
      originalPhrases: [
        "française",
        "canadienne",
        "anglaise",
        "géorgien",
        "Je suis",
        "Célibataire",
        "mariée",
      ],
      translatedPhrases: [
        "ფრანგი",
        "კანადელი",
        "ინგლისელი",
        "ქართველი",
        "მე ვარ",
        "დაუქორწინებელი",
        "დაქორწინებული",
      ],
    },
  },
  {
    lesson: 2,
    "lesson title": "Qui est-ce?",
    dialogue: [
      {
        speaker: "Dougal",
        message: "Qui est-ce?",
        translation: "ეს ვინ არის?",
      },
      {
        speaker: "Colum",
        message: "C'est jamie,no?",
        translation: "გამარჯობა ჯეიმი",
      },

      {
        speaker: "Dougal",
        message: "Oui, Jamie Fraser. Il est soldat.",
        translation: "ხო, ჯეიმი ფრეიზერი. ის ჯარისკაცია.",
      },
      {
        speaker: "Colum",
        message: "Et c'est qui cette femme?",
        translation: "და ის ქალი ვინ არის?",
      },
      {
        speaker: "Dougal",
        message: "Je ne sais pas",
        translation: "არ ვიცი.",
      },
    ],
    dialogueExercise: [
      {
        message: "Je ne ____ pas",

        options: ["sais", "sias"],
        correctAnswer: "sais",
      },
      {
        message: "Il ____ soldat",

        options: ["est", "et"],
        correctAnswer: "est",
      },
      {
        message: "Et c'est ____ cette femme?",

        options: ["qui", "oui"],
        correctAnswer: "qui",
      },
    ],
    sentenceBuilder: {
      sentence: "Il est soldat",
      words: ["soldat", "Il", "est"],
    },
    phrases: {
      originalPhrases: [
        "Qui est-ce?",
        "C'est jamie",
        "Il est",
        "femme",
        "homme",
        "Je ne sais pas",
      ],
      translatedPhrases: [
        "ვინ არის?",
        "ეს ჯეიმია",
        "ის არის ",
        "ქალი",
        "კაცი",
        "არ ვიცი",
      ],
    },
  },
];
