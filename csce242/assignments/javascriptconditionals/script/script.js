// Exercise 1 constants
const TOTAL_CLASSES = 25;
const ATTENDANCE_WEIGHT = 7; // Grade percent

document.addEventListener('DOMContentLoaded', function () {
    initMenuToggle();
    initExerciseNav();
    initMissingClassCalculator();
    initSemesterCounter();
});

// Mobile menu
function initMenuToggle() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    const arrowIcon = document.getElementById('arrowIcon');

    navToggle.addEventListener('click', function () {
        const isOpen = navList.classList.toggle('open');
        arrowIcon.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}

// Switch exercises
function initExerciseNav() {
    const exercise1 = document.getElementById('exercise1');
    const exercise2 = document.getElementById('exercise2');
    const btnEx1 = document.getElementById('btnEx1');
    const btnEx2 = document.getElementById('btnEx2');

    function showExercise(target) {
        if (target === 'exercise1') {
            exercise1.classList.add('visible');
            exercise2.classList.remove('visible');
            btnEx1.classList.add('active');
            btnEx2.classList.remove('active');
        } else {
            exercise2.classList.add('visible');
            exercise1.classList.remove('visible');
            btnEx2.classList.add('active');
            btnEx1.classList.remove('active');
        }
    }

    btnEx1.addEventListener('click', function () {
        showExercise('exercise1');
    });

    btnEx2.addEventListener('click', function () {
        showExercise('exercise2');
    });

    // Show Exercise 1 first
    showExercise('exercise1');
}

// Exercise 1 calculator
function initMissingClassCalculator() {
    const daysMissedInput = document.getElementById('daysMissed');
    const ex1Result = document.getElementById('ex1Result');

    function calculate() {
        const raw = daysMissedInput.value;

        if (raw === '') {
            ex1Result.innerHTML = '';
            return;
        }

        const days = Number(raw);

        if (isNaN(days) || days < 0) {
            ex1Result.innerHTML =
                '<div class="message">Please enter a valid number of days.</div>';
            return;
        }

        const percentPerDay = ATTENDANCE_WEIGHT / TOTAL_CLASSES;
        const percentLost = (days * percentPerDay).toFixed(1);

        let message = '';

        if (days === 0) {
            message = 'Perfect attendance! Your grade thanks you.';
        } else if (days <= 2) {
            message = 'A couple of misses here and there is normal. Just keep it in check.';
        } else if (days <= 5) {
            message = "You're starting to feel it. Try to make the rest of your classes.";
        } else if (days <= 9) {
            message = 'This is not an online class, you are missing valuable learning opportunities.';
        } else {
            message = "That's a serious chunk of the semester gone. Talk to your professor about a plan.";
        }

        const dayLabel = days === 1 ? 'day' : 'days';

        ex1Result.innerHTML =
            '<div>You will lose <span class="headline-num">' +
            percentLost +
            '%</span> for skipping ' +
            days +
            ' ' +
            dayLabel +
            '.</div>' +
            '<div class="message">' +
            message +
            '</div>';
    }

    daysMissedInput.addEventListener('input', calculate);
    calculate();
}

// Exercise 2 counter
function initSemesterCounter() {
    const ex2Result = document.getElementById('ex2Result');
    const today = new Date();
    let lastDay = new Date(today.getFullYear(), 11, 4); // December 4

    // Use next year if needed
    if (today > lastDay) {
        lastDay = new Date(today.getFullYear() + 1, 11, 4);
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((lastDay - today) / msPerDay);

    let message = '';

    if (daysLeft <= 0) {
        message = 'The semester is over! Time to relax (or panic about finals, no judgment).';
    } else if (daysLeft <= 14) {
        message = 'The end is near! Push through the final stretch.';
    } else if (daysLeft <= 30) {
        message = 'One month to go. Finals are in sight.';
    } else if (daysLeft <= 60) {
        message = "You're over halfway there. Keep the momentum going.";
    } else if (daysLeft <= 100) {
        message = "Plenty of semester left. Stay consistent and it'll fly by.";
    } else {
        message = 'Not time to start counting down yet.';
    }

    ex2Result.innerHTML =
        '<div>You have <span class="headline-num">' +
        daysLeft +
        '</span> days left in the semester.</div>' +
        '<div class="message">' +
        message +
        '</div>';
}