// wait for DOM to FULLY load
document.addEventListener('DOMContentLoaded', () => {
    // initialize quiz and UI
    const quiz = new TeaQuiz();
    const ui = new QuizUI(quiz);
    ui.init();

    // set up event listeners for buttons
    const startButton = document.getElementsByClassName('start-button')[0];
    const restartButton = document.getElementsByClassName('restart-button')[0];

    startButton.addEventListener('click', () => {
        ui.startQuiz();
    });

    restartButton.addEventListener('click', () => {
        ui.restartQuiz();
    });
});

//quiz questions in here
const questions = [
    {
      question: "How do you enjoy your tea time?",
      options: [
        { text: "Hosting a lively tea party with friends", type: "E" },
        { text: "Savoring a quiet cup alone with a book", type: "I" }
      ]
    },
    {
      question: "When picking a new tea, you go for...",
      options: [
        { text: "A flavor I know and trust", type: "S" },
        { text: "Something new and experimental", type: "N" }
      ]
    },
    {
      question: "Your ideal tea blend is based on...",
      options: [
        { text: "The health benefits and ingredients", type: "T" },
        { text: "How it makes me feel emotionally", type: "F" }
      ]
    },
    {
      question: "You brew your tea...",
      options: [
        { text: "With a precise steep time and temperature", type: "J" },
        { text: "By feel — I like to improvise!", type: "P" }
      ]
    },
    {
      question: "At a tea cafe, you’re more likely to...",
      options: [
        { text: "Chat with the barista and meet others", type: "E" },
        { text: "Sit in a corner and enjoy the ambiance", type: "I" }
      ]
    },
    {
      question: "Choosing a tea gift for a friend, you...",
      options: [
        { text: "Pick a practical and popular flavor", type: "S" },
        { text: "Choose a unique blend with a story", type: "N" }
      ]
    },
    {
      question: "When discussing tea types, you tend to...",
      options: [
        { text: "Stick to facts and comparisons", type: "T" },
        { text: "Talk about memories or feelings tied to each tea", type: "F" }
      ]
    },
    {
      question: "Organizing your tea collection, you prefer...",
      options: [
        { text: "Labelled jars and neat rows", type: "J" },
        { text: "A cozy, spontaneous stash", type: "P" }
      ]
    },
    {
      question: "A tea tasting event sounds...",
      options: [
        { text: "Exciting — I get to meet people and try many kinds!", type: "E" },
        { text: "A bit draining — I’d prefer a calm tasting at home", type: "I" }
      ]
    },
    {
      question: "When trying a complex tea blend, you...",
      options: [
        { text: "Focus on tasting each individual note", type: "S" },
        { text: "Imagine the story the blend is telling", type: "N" }
      ]
    },
    {
      question: "Someone doesn’t like your favorite tea. You...",
      options: [
        { text: "Debate with them about its strengths", type: "T" },
        { text: "Respect their feelings and move on", type: "F" }
      ]
    },
    {
      question: "How do you plan a tea picnic?",
      options: [
        { text: "Create a checklist and plan every detail", type: "J" },
        { text: "Pack what feels right and see where it leads", type: "P" }
      ]
    },
    {
      question: "Tea tasting in a group — you...",
      options: [
        { text: "Enjoy the chatter and exchanging thoughts", type: "E" },
        { text: "Observe quietly and note your impressions", type: "I" }
      ]
    },
    {
      question: "When reading about teas, you prefer...",
      options: [
        { text: "Historical and regional facts", type: "S" },
        { text: "Legends and philosophical meanings", type: "N" }
      ]
    },
    {
      question: "When choosing a tea cafe, you go for...",
      options: [
        { text: "The one with the best ratings and quality", type: "T" },
        { text: "The one with the best vibe and kindness", type: "F" }
      ]
    },
    {
      question: "Tea recipes: you...",
      options: [
        { text: "Follow the recipe exactly", type: "J" },
        { text: "Improvise and mix things up", type: "P" }
      ]
    }
  ];
  
//quiz characters in here
const MBTICharacters = {
    INTJ: {
      title: "Oolong Tea",
      traits: "The Architect",
      description: "Refined, complex, and full of depth — like INTJs who appreciate subtlety and strategy.",
      quote: "Efficiency is doing things right; effectiveness is doing the right things.",
      population: "2%",
      image: "assets/oolong_tea.png",
      stats: {
        sweetness: 2,
        adaptability: 3,
        boldness: 4,
        complexity: 5
      },
      compatibleTypes: ["INFJ", "ENTP"],
      incompatibleTypes: ["ESFP"]
    },
    INTP: {
      title: "White Tea",
      traits: "The Logician",
      description: "Delicate, cerebral, and often overlooked. Quietly brilliant, just like the thinkers.",
      quote: "I think, therefore I am.",
      population: "3%",
      image: "assets/white_tea.png",
      stats: {
        sweetness: 2,
        adaptability: 3,
        boldness: 2,
        complexity: 5
      },
      compatibleTypes: ["ENTP", "INTJ"],
      incompatibleTypes: ["ESFJ"]
    },
    ENTJ: {
      title: "Black Tea",
      traits: "The Commander",
      description: "Bold, strong, and commanding — reliable and energizing for natural-born leaders.",
      quote: "Lead, follow, or get out of the way.",
      population: "2%",
      image: "assets/black_tea.png",
      stats: {
        sweetness: 2,
        adaptability: 4,
        boldness: 5,
        complexity: 4
      },
      compatibleTypes: ["INTP", "ENFP"],
      incompatibleTypes: ["ISFP"]
    },
    ENTP: {
      title: "Chai Tea",
      traits: "The Debater",
      description: "Spicy, unpredictable, and full of zest — like ENTPs, who always keep things exciting.",
      quote: "Why follow the rules when you can bend them?",
      population: "4%",
      image: "assets/chai_tea.png",
      stats: {
        sweetness: 3,
        adaptability: 5,
        boldness: 5,
        complexity: 4
      },
      compatibleTypes: ["INFJ", "INTP"],
      incompatibleTypes: ["ISTJ"]
    },
    INFJ: {
      title: "Jasmine Tea",
      traits: "The Advocate",
      description: "Subtle yet deeply soothing, with floral complexity — just like INFJs’ rare inner world.",
      quote: "Treat people as if they were what they ought to be.",
      population: "1%",
      image: "assets/jasmine_tea.png",
      stats: {
        sweetness: 3,
        adaptability: 4,
        boldness: 2,
        complexity: 5
      },
      compatibleTypes: ["ENFP", "INTJ"],
      incompatibleTypes: ["ESTP"]
    },
    INFP: {
      title: "Chamomile Tea",
      traits: "The Mediator",
      description: "Gentle, calming, and idealistic — brings peace, just like an INFP’s presence.",
      quote: "The only way to make sense out of change is to plunge into it.",
      population: "4%",
      image: "assets/chamo.png",
      stats: {
        sweetness: 4,
        adaptability: 3,
        boldness: 2,
        complexity: 4
      },
      compatibleTypes: ["ENFJ", "ISFP"],
      incompatibleTypes: ["ESTJ"]
    },
    ENFJ: {
      title: "Peach Tea",
      traits: "The Protagonist",
      description: "Warm, friendly, and appealing to everyone — they’re uplifting and sweet.",
      quote: "Be the change you wish to see in the world.",
      population: "3%",
      image: "assets/peach_tea.png",
      stats: {
        sweetness: 5,
        adaptability: 4,
        boldness: 3,
        complexity: 3
      },
      compatibleTypes: ["INFP", "ISFJ"],
      incompatibleTypes: ["INTP"]
    },
    ENFP: {
      title: "Fruity Herbal Tea",
      traits: "The Campaigner",
      description: "Bursting with flavor and creativity — every sip is an adventure, like ENFPs themselves.",
      quote: "The world is full of magic things, patiently waiting.",
      population: "7%",
      image: "assets/fruity_tea.png",
      stats: {
        sweetness: 4,
        adaptability: 5,
        boldness: 4,
        complexity: 4
      },
      compatibleTypes: ["INFJ", "ENTP"],
      incompatibleTypes: ["ISTJ"]
    },
    ISTJ: {
      title: "Earl Grey Tea",
      traits: "The Logistician",
      description: "Dependable, traditional, and classic — no-nonsense and always gets the job done.",
      quote: "Discipline is the bridge between goals and accomplishment.",
      population: "11%",
      image: "assets/earlgrey_tea.png",
      stats: {
        sweetness: 2,
        adaptability: 2,
        boldness: 3,
        complexity: 3
      },
      compatibleTypes: ["ESFJ", "ISFJ"],
      incompatibleTypes: ["ENFP"]
    },
    ISFJ: {
      title: "Green Tea",
      traits: "The Defender",
      description: "Nurturing, healing, and quietly strong — like ISFJs, always there for you.",
      quote: "A caring heart brings peace to all.",
      population: "9%",
      image: "assets/green_tea.png",
      stats: {
        sweetness: 3,
        adaptability: 3,
        boldness: 2,
        complexity: 3
      },
      compatibleTypes: ["ESFP", "ENFJ"],
      incompatibleTypes: ["ENTP"]
    },
    ESTJ: {
      title: "English Breakfast Tea",
      traits: "The Executive",
      description: "Assertive, sharp, and time-tested — an authoritative classic.",
      quote: "Order is the shape upon which beauty depends.",
      population: "9%",
      image: "assets/english_tea.png",
      stats: {
        sweetness: 2,
        adaptability: 3,
        boldness: 5,
        complexity: 3
      },
      compatibleTypes: ["ISFJ", "ISTJ"],
      incompatibleTypes: ["INFP"]
    },
    ESFJ: {
      title: "Chrysanthemum Tea",
      traits: "The Consul",
      description: "Floral, approachable, and comforting — great for gatherings and heartfelt conversations.",
      quote: "We rise by lifting others.",
      population: "12%",
      image: "assets/chrysunthanum_tea.png",
      stats: {
        sweetness: 4,
        adaptability: 3,
        boldness: 2,
        complexity: 2
      },
      compatibleTypes: ["ISFP", "ISTJ"],
      incompatibleTypes: ["INTP"]
    },
    ESTP: {
      title: "Iced Lemon Tea",
      traits: "The Entrepreneur",
      description: "Cool, refreshing, and a little daring — energizing and great on the go.",
      quote: "Life is either a daring adventure or nothing.",
      population: "4%",
      image: "assets/icelemon_tea.png",
      stats: {
        sweetness: 3,
        adaptability: 4,
        boldness: 5,
        complexity: 3
      },
      compatibleTypes: ["ISFP", "ESFP"],
      incompatibleTypes: ["INFJ"]
    },
    ISFP: {
      title: "Matcha Tea",
      traits: "The Adventurer",
      description: "Artistic, serene, and earthy — a mindful experience with a flair for aesthetics.",
      quote: "Let your life be your art.",
      population: "5%",
      image: "assets/matcha_tea.png",
      stats: {
        sweetness: 3,
        adaptability: 3,
        boldness: 2,
        complexity: 4
      },
      compatibleTypes: ["INFP", "ESFP"],
      incompatibleTypes: ["ENTJ"]
    },
    ESFP: {
      title: "Bubble Tea (Boba)",
      traits: "The Entertainer",
      description: "Fun, sweet, and trendy — always the center of attention and never boring.",
      quote: "Live life colorfully.",
      population: "8%",
      image: "assets/bubble_tea.png",
      stats: {
        sweetness: 5,
        adaptability: 4,
        boldness: 4,
        complexity: 3
      },
      compatibleTypes: ["ISFP", "ESTP"],
      incompatibleTypes: ["INTJ"]
    }
  };

function getTypeImage(type) {
    return MBTICharacters[type]?.image || "";
}

class QuizUI {
    constructor(quiz) {
        // store reference to quiz logic
        this.quiz = quiz;

        // DOM elements
        this.introPage = document.getElementsByClassName("intro-page")[0];
        this.quizPage = document.getElementsByClassName("quiz-page")[0];
        this.resultsPage = document.getElementsByClassName("results-page")[0];
        this.questionText = document.getElementsByClassName("question-text")[0];
        this.optionsContainer = document.getElementsByClassName("options")[0];
        this.progressBar = document.getElementsByClassName("progress")[0];
        this.questionNumber = document.getElementsByClassName("question-number")[0];
        
        // character card elements
        this.resultType = document.getElementsByClassName("result-type")[0];
        this.characterImage = document.getElementsByClassName("character-image")[1];    // the <img> one is the second one
        this.populationText = document.getElementsByClassName("population-text")[0];
        this.trait = document.getElementsByClassName("trait")[0];
        this.quote = document.getElementsByClassName("quote")[0];
        this.description = document.getElementsByClassName("description")[0];

        // stats elements
        this.sweetnessStat = document.getElementsByClassName("sweetness-stat")[0];
        this.adaptabilityStat = document.getElementsByClassName("adaptability-stat")[0]
        this.boldnessStat = document.getElementsByClassName("boldness-stat")[0];
        this.complexityStat = document.getElementsByClassName("complexity-stat")[0];
        ;

        // compatibility elements
        this.compatible1 = document.getElementsByClassName("compatible1")[0].querySelector("img");
        this.compatible2 = document.getElementsByClassName("compatible2")[0].querySelector("img");
        this.incompatible1 = document.getElementsByClassName("incompatible1")[0].querySelector("img");    }
    
    // Initialize the quiz UI
    init() {
        // Hide all pages initially
        this.quizPage.style.display = "none";
        this.resultsPage.style.display = "none";
    }

    // Show the intro page
    showIntro() {
        this.introPage.style.display = "block";
        this.quizPage.style.display = "none";
        this.resultsPage.style.display = "none";
    }

    // start the quiz and show the first question
    startQuiz() {
        this.introPage.style.display = "none";
        this.quizPage.style.display = "block";
        this.resultsPage.style.display = "none";
        this.loadQuestion();
    }

    // Load the current question and options
    loadQuestion() {
        // Update progress bar and question number
        const progress = this.quiz.getProgress();
        this.progressBar.style.width = `${progress}%`;
        this.questionNumber.textContent = `Question ${this.quiz.getQuestionNumber()} of ${questions.length}`;

        // Get current question and update UI
        const currentQuestion = this.quiz.getCurrentQuestion();
        this.questionText.textContent = currentQuestion.question;

        // Clear previous options
        this.optionsContainer.innerHTML = "";

        // Create option buttons
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("option-button");
            button.textContent = option.text;
            
            button.addEventListener("click", () => this.handleOptionSelect(option.type));
            this.optionsContainer.appendChild(button);
        });
    }

    // Handle option selection
    handleOptionSelect(type) {
        // Record answer and check if quiz is complete
        const isComplete = this.quiz.answerQuestion(type);
        
        // Load next question or show result
        if (isComplete) {
            this.showResults();
        } else {
            this.loadQuestion();
        }
    }

    // generate star rating html
    generateStarRating(rating) {
        let stars = "";
        for (let i = 0; i < 5; i++) {
            stars += `<span class="star ${i < rating ? "filled" : "empty"}">☕</span>`;
        }
        return stars;
    }

    // display quiz results as a character card
    showResults() {
        this.quizPage.style.display = "none";
        this.resultsPage.style.display = "block";

        const result = this.quiz.getResult();
        const mbtiType = result.type;
        const character = MBTICharacters[mbtiType];

        // set character data
        this.resultType.textContent = mbtiType + " - " + character.title;

        // set character image
        this.characterImage.src = character.image;
        this.characterImage.alt = character.title;

        // set population text
        this.populationText.textContent = `This ingredient is ${character.population} of all ingredients in the world!`;

        // set traits
        this.trait.textContent = character.traits;

        //set description
        this.description.textContent = character.description;

        // set quote
        this.quote.textContent = `"${character.quote}"`;

        // set stats with star ratings
        this.sweetnessStat.innerHTML = this.generateStarRating(character.stats.sweetness);
        this.adaptabilityStat.innerHTML = this.generateStarRating(character.stats.adaptability);
        this.boldnessStat.innerHTML = this.generateStarRating(character.stats.boldness);
        this.complexityStat.innerHTML = this.generateStarRating(character.stats.complexity);
        

        // set compatibility images
        const compatibles = character.compatibleTypes;
        const incompatibles = character.incompatibleTypes;

        this.compatible1.src = getTypeImage(compatibles[0]);
        this.compatible1.alt = compatibles[0];

        
        this.compatible2.src = getTypeImage(compatibles[1]);
        this.compatible2.alt = compatibles[1];
        
        this.incompatible1.src = getTypeImage(incompatibles[0]);
        this.incompatible1.alt = incompatibles[0];
        

    }

    // reset and restart quiz
    restartQuiz() {
        this.quiz.reset();
        this.showIntro();
    }
}

class TeaQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.userAnswers = {
            E: 0,
            I: 0,
            S: 0,
            N: 0,
            T: 0,
            F: 0,
            J: 0,
            P: 0
        };
    }

    // get current question
    getCurrentQuestion() {
        return questions[this.currentQuestion];
    }

    // record user's answer and move to next question
    answerQuestion(type) {
        this.userAnswers[type] += 1;
        this.currentQuestion += 1;
        return this.isQuizComplete();
    }

    // check if quiz is complete
    isQuizComplete() {
        return this.currentQuestion >= questions.length;
    }

    // get current progress percentage
    getProgress() {
        return (this.currentQuestion / questions.length) * 100;
    }

    // get current question number
    getQuestionNumber() {
        return this.currentQuestion + 1;
    }

    // get personality type based on user answers
    calculateMBTI() {
        const type = [
            this.userAnswers.E >= this.userAnswers.I ? 'E' : 'I',
            this.userAnswers.S >= this.userAnswers.N ? 'S' : 'N',
            this.userAnswers.T >= this.userAnswers.F ? 'T' : 'F',
            this.userAnswers.J >= this.userAnswers.P ? 'J' : 'P'
        ].join('');

        return type;
    }

    // get result personality type details
    getResult() {
        const mbtiType = this.calculateMBTI();
        return {
            type: mbtiType,
            ...MBTICharacters[mbtiType]
        };
    }

    // reset the quiz
    reset() {
        this.currentQuestion = 0;
        this.userAnswers = {
            E: 0,
            I: 0,
            S: 0,
            N: 0,
            T: 0,
            F: 0,
            J: 0,
            P: 0
        };
    }
}