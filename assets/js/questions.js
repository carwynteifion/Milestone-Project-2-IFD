//Question pool array

const allQuestions = [
    {
        question: "What sea separates Italy and the Balkan Peninsula?",
        answers: [
            {text: "Baltic", correct: false},
            {text: "Adriatic", correct: true},
            {text: "Mediterranean", correct: false},
            {text: "Aegean", correct: false}
        ],
        category: "geography"
    },
    {
        question: "Kerry Katona was once a member of which all-girl band?",
        answers: [
            {text: "Pussycat Dolls", correct: false},
            {text: "Sugababes", correct: false},
            {text: "Girls Aloud", correct: false},
            {text: "Atomic Kitten", correct: true}
        ],
        category: "entertainment"
    },
    {
        question: "Which British monarch introduced Window Tax in 1696?",
        answers: [
            {text: "William III", correct: true},
            {text: "Charles I", correct: false},
            {text: "Charles II", correct: false},
            {text: "Mary II", correct: false}
        ],
        category: "history"
    },
    {
        question: "Which revolutionary substance did Leo Baekeland invent in 1907?",
        answers: [
            {text: "Plasticine", correct: false},
            {text: "Polythene", correct: false},
            {text: "Bakelite", correct: true},
            {text: "Polystyrene", correct: false}
        ],
        category: "artsLiterature"
    },
    {
        question: "What is the most abundant chemical element in the universe?",
        answers: [
            {text: "Helium", correct: false},
            {text: "Hydrogen", correct: true},
            {text: "Oxygen", correct: false},
            {text: "Nitrogen", correct: false}
        ],
        category: "scienceNature"
    },
    {
        question: "Which sport featured in the 2005 Woody Allen thriller Match Point?",
        answers: [
            {text: "Badminton", correct: false},
            {text: "Squash", correct: false},
            {text: "Tennis", correct: true},
            {text: "Baseball", correct: false}
        ],
        category: "sportLeisure"
    },
    {
        question: "What country do the Galapagos Islands belong to?",
        answers: [
            {text: "Argentina", correct: false},
            {text: "Venezuela", correct: false},
            {text: "Suriname", correct: false},
            {text: "Ecuador", correct: true}
        ],
        category: "geography"
    },
    {
        question: "What is the name of the car the Ghostbusters used to hunt down ghouls?",
        answers: [
            {text: "Ecto-1", correct: true},
            {text: "Ghoul-1", correct: false},
            {text: "Ghost-1", correct: false},
            {text: "Buster-1", correct: false}
        ],
        category: "entertainment"
    },
    {
        question: "Who starred in The Good, The Bad and the Ugly and served as mayor of Carmel, California?",
        answers: [
            {text: "John Wayne", correct: false},
            {text: "Clint Eastwood", correct: true},
            {text: "Lee van Cleef", correct: false},
            {text: "Eli Wallach", correct: false}
        ],
        category: "history"
    },
    {
        question: "What character has lively adventures at Green Gables, Avonlea and Windy Poplars?",
        answers: [
            {text: "Beth", correct: false},
            {text: "Lily", correct: false},
            {text: "Anne", correct: true},
            {text: "Jane", correct: false}
        ],
        category: "artsLiterature"
    },
    {
        question: "What is micropaleontology the study of?",
        answers: [
            {text: "Tiny plants", correct: false},
            {text: "Tiny fungi", correct: false},
            {text: "Tiny mammals", correct: false},
            {text: "Tiny fossils", correct: true}
        ],
        category: "scienceNature"
    },
    {
        question: "In which event did Elena Isinbaeva win Olympic gold in 2004 and 2008?",
        answers: [
            {text: "Pole vaulting", correct: true},
            {text: "Javelin", correct: false},
            {text: "Shotput", correct: false},
            {text: "Discus", correct: false}
        ],
        category: "sportLeisure"
    },
    {
        question: "What is the capital of Jamaica?",
        answers: [
            {text: "Nassau", correct: false},
            {text: "Port-au-Prince", correct: false},
            {text: "Kingston", correct: true},
            {text: "Bridgetown", correct: false}
        ],
        category: "geography"
    },
    {
        question: "For which role did Robert de Niro receive his first Oscar?",
        answers: [
            {text: "Jake LaMotta (Raging Bull)", correct: false},
            {text: "Don Vito Corleone (The Godfather Part II)", correct: true},
            {text: "Travis Bickle (Taxi Driver)", correct: false},
            {text: "Mike Vronsky (The Deer Hunter)", correct: false}
        ],
        category: "entertainment"
    },
    {
        question: "What actress has the same name as William Shakespeare's wife?",
        answers: [
            {text: "Anne Heche", correct: false},
            {text: "Anne Hegerty", correct: false},
            {text: "Anne Boleyn", correct: false},
            {text: "Anne Hathaway", correct: true}
        ],
        category: "history"
    },
    {
        question: "What architect designed the Walt Disney Concert Hall, Guggenheim Bilbao and Experience Music Project?",
        answers: [
            {text: "Frank Lloyd Wright", correct: false},
            {text: "Frank Gehry", correct: true},
            {text: "Ludwig Mies van der Rohe", correct: false},
            {text: "Isambard Kingdom Brunel", correct: false}
        ],
        category: "artsLiterature"
    },
    {
        question: "A Venn diagram is created by drawing what overlapping geometric shapes?",
        answers: [
            {text: "Squares", correct: false},
            {text: "Triangles", correct: false},
            {text: "Circles", correct: true},
            {text: "Rectangles", correct: false}
        ],
        category: "scienceNature"
    },
    {
        question: "How long in feet is a tournament-size snooker table?",
        answers: [
            {text: "9ft", correct: false},
            {text: "10ft", correct: false},
            {text: "11ft", correct: false},
            {text: "12ft", correct: true}
        ],
        category: "sportLeisure"
    },
    {
        question: "The northern and southern parts of which country are separated by the Cook Strait?",
        answers: [
            {text: "Japan", correct: false},
            {text: "New Zealand", correct: true},
            {text: "Indonesia", correct: false},
            {text: "Panama", correct: false}
        ],
        category: "geography"
    },
    {
        question: "What species was the dead parrot in Monty Python's legendary sketch?",
        answers: [
            {text: "African Grey", correct: false},
            {text: "American Red", correct: false},
            {text: "Norwegian Blue", correct: true},
            {text: "Rhodesian Green", correct: false}
        ],
        category: "entertainment"
    },
    {
        question: "After Oxford and Cambridge, which city boasts the oldest existing university in England?",
        answers: [
            {text: "Leeds", correct: false},
            {text: "Bristol", correct: false},
            {text: "Durham", correct: true},
            {text: "Manchester", correct: false}
        ],
        category: "history"
    },
    {
        question: "What year was Lady Chatterley's Lover finally published in the UK, after D.H. Lawrence finished writing it in 1928?",
        answers: [
            {text: "1950", correct: false},
            {text: "1960", correct: true},
            {text: "1970", correct: false},
            {text: "1980", correct: false}
        ],
        category: "artsLiterature"
    },
    {
        question: "What nation has, on average, the tallest people?",
        answers: [
            {text: "The Netherlands", correct: true},
            {text: "Denmark", correct: false},
            {text: "Estonia", correct: false},
            {text: "Latvia", correct: false}
        ],
        category: "scienceNature"
    },
    {
        question: "What are soba in Japanese cuisine?",
        answers: [
            {text: "Rice", correct: false},
            {text: "Noodles", correct: true},
            {text: "Sushi", correct: false},
            {text: "Curry", correct: false}
        ],
        category: "sportLeisure"
    },
    {
        question: "What is the Japanese art of growing miniaturised trees and shrubs?",
        answers: [
            {text: "Shinto", correct: false},
            {text: "Aikido", correct: false},
            {text: "Bonsai", correct: true},
            {text: "Hanafuda", correct: false}
        ],
        category: "geography"
    },
    {
        question: "Which rap star's real name is Curtis James Jackson III?",
        answers: [
            {text: "Snoop Dogg", correct: false},
            {text: "Eminem", correct: false},
            {text: "Notorious B.I.G.", correct: false},
            {text: "50 Cent", correct: true}
        ],
        category: "entertainment"
    },
    {
        question: "Which Swedish prime minister was assassinated while walking home from the cinema in 1986?",
        answers: [
            {text: "Olof Palme", correct: true},
            {text: "Tage Erlander", correct: false},
            {text: "Ola Ullsten", correct: false},
            {text: "Ingvar Carlsson", correct: false}
        ],
        category: "history"
    },
    {
        question: "While a Briton in the bathroom would use the word 'tap', what word might an American use?",
        answers: [
            {text: "tap", correct: false},
            {text: "faucet", correct: true},
            {text: "spigot", correct: false},
            {text: "valve", correct: false}
        ],
        category: "artsLiterature"
    },
    {
        question: "How many moons does the planet Jupiter have?",
        answers: [
            {text: "15-30", correct: false},
            {text: "31-45", correct: false},
            {text: "46-60", correct: false},
            {text: "More than 60", correct: true}
        ],
        category: "scienceNature"
    },
    {
        question: "Which piece in chess moves two squares in one direction followed by one square at a right angle, ignoring any pieces en route?",
        answers: [
            {text: "Bishop", correct: false},
            {text: "Rook", correct: false},
            {text: "Knight", correct: true},
            {text: "Pawn", correct: false}
        ],
        category: "sportLeisure"
    },
]