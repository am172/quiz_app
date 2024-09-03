const quizData = [
    {
        question: "ما هي عاصمة فرنسا؟",
        a: "برلين",
        b: "مدريد",
        c: "باريس",
        d: "روما",
        correct: "c",
    },
    {
        question: "من هو مخترع الهاتف؟",
        a: "توماس إديسون",
        b: "ألكسندر غراهام بيل",
        c: "نيكولا تسلا",
        d: "غوتنبرغ",
        correct: "b",
    },
    {
        question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
        a: "الأرض",
        b: "المشتري",
        c: "زحل",
        d: "المريخ",
        correct: "b",
    },
    {
        question: "ما هي أطول نهر في العالم؟",
        a: "نهر النيل",
        b: "نهر الأمازون",
        c: "نهر اليانغتسي",
        d: "نهر الميسيسيبي",
        correct: "a",
    },
    {
        question: "ما هو العنصر الكيميائي الذي يرمز له بالرمز H؟",
        a: "الهيليوم",
        b: "الهيدروجين",
        c: "الحديد",
        d: "الزئبق",
        correct: "b",
    },
    {
        question: "ما هي أكبر قارة من حيث المساحة؟",
        a: "أفريقيا",
        b: "آسيا",
        c: "أوروبا",
        d: "أمريكا الشمالية",
        correct: "b",
    },
    {
        question: "من هو الكاتب الشهير لرواية 'الأمير الصغير'؟",
        a: "مارسيل بروست",
        b: "أنطوان دو سانت إكزوبيري",
        c: "فيودور دوستويفسكي",
        d: "غابرييل غارثيا ماركيز",
        correct: "b",
    },
    {
        question: "ما هي لغة البرمجة التي تعتبر الأقدم؟",
        a: "جافا",
        b: "سي",
        c: "باسكال",
        d: "الأسيمبلي",
        correct: "d",
    },
    {
        question: "ما هو الحيوان الذي يعتبر أبطأ حيوان بري؟",
        a: "السلحفاة",
        b: "التمساح",
        c: "الدب",
        d: "الزرافة",
        correct: "a",
    },
    {
        question: "ما هي العملة الرسمية في اليابان؟",
        a: "اليوان",
        b: "الدولار",
        c: "الين",
        d: "اليورو",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>لقد أجبت بشكل صحيح على ${score}/${quizData.length} من الأسئلة</h2>

                <button onclick="location.reload()">إعادة تحميل</button>
            `
        }
    }
})

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(savedTheme);

// Toggle theme
themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '🌞'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode
        localStorage.setItem('theme', 'light-mode');
    }
});


