document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Simulate login success (you can replace with real validation)
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.personal-info-container').style.display = 'block';
});

document.getElementById('personalForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default submission

  // This will check all required fields in the form
  if (!this.checkValidity()) {
    this.reportValidity(); // Show validation messages
    return; // Do not proceed
  }

  // If valid, move to next section
  goToHealthinfo(); // You can define what comes next
});

document.getElementById('healthformnextbutton').addEventListener('click', function () {
    const form = document.getElementById('healthForm');
    console.log("adv")
    // Check if form is valid
    if (!form.checkValidity()) {
        form.reportValidity(); // Show validation errors
        return; // Don't go to next page
    }
    console.log("Yes")
    goToHabitssection();
});


// function goBack() {
//   document.querySelector('.personal-info-container').style.display = 'none';
//   document.querySelector('.login-container').style.display = 'block';
// }


function showRegister() {
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.register-container').style.display = 'block';
}

function showLogin() {
  document.querySelector('.register-container').style.display = 'none';
  document.querySelector('.login-container').style.display = 'block';
}

// Optional: Handle register form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Simulate successful registration
  alert('Registration successful! You can now log in.');
  showLogin();
});

// Move from personal info to health form
document.getElementById('personalForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelector('.personal-info-container').style.display = 'none';
  document.querySelector('.health-info-container').style.display = 'block';
});

// Move from health info to habits
document.getElementById('healthForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelector('.health-info-container').style.display = 'none';
  document.querySelector('.habitssection').style.display = 'block';
});


// Back from habits to health info
function goBackFromHabits() {
  document.querySelector('.habitssection').style.display = 'none';
  document.querySelector('.health-info-container').style.display = 'block';
}

// Move forward from habits to next section
function goToNextAfterHabits() {
  document.querySelector('.habitssection').style.display = 'none';
  document.querySelector('.next-section').style.display = 'block';
}


function goToPersonalInfo(){
  document.querySelector('.health-info-container').style.display = 'none';
  document.querySelector('.personal-info-container').style.display = 'block';   
}


function goToHealthinfo(){
  document.querySelector('.personal-info-container').style.display = 'none';   
  document.querySelector('.health-info-container').style.display = 'block';
}

function goBackToHealthinfo(){
  document.querySelector('#habits').style.display = 'none';
  document.querySelector('.health-info-container').style.display = 'block';

}

function goToHabitssection(){
    console.log("yes2")
  document.querySelector('.health-info-container').style.display = 'none';
  document.querySelector('#habits').style.display = 'block';   
}

function handleHabitChange(type, value) {
  const current = document.querySelector(`.${type}-current`);
  const past = document.querySelector(`.${type}-past`);

  if (value === 'yes') {
    current.classList.remove('hidden');
    past.classList.add('hidden');
  } else if (value === 'past') {
    current.classList.add('hidden');
    past.classList.remove('hidden');
  } else {
    current.classList.add('hidden');
    past.classList.add('hidden');
  }
}

// function goToHabitssection() {
//   document.querySelector('.health-info-container').style.display = 'none';
//   document.getElementById('.habitssection').style.display = 'block';
// }

function goToHealthInfo() {
  document.getElementById('habits').style.display = 'none';
  document.querySelector('.health-info-container').style.display = 'block';
}

function handleHabitChange(type, value) {
  const current = document.querySelector(`.${type}-current`);
  const past = document.querySelector(`.${type}-past`);

  if (value === 'yes') {
    current.classList.remove('hidden');
    past.classList.add('hidden');
  } else if (value === 'past') {
    current.classList.add('hidden');
    past.classList.remove('hidden');
  } else {
    current.classList.add('hidden');
    past.classList.add('hidden');
  }
}

// Show Medical History section
function goToMedicalHistory() {
  document.getElementById('habits').style.display = 'none';
  document.getElementById('medical-history').style.display = 'block';
}

// Back to Habits
function goBackToHabits() {
  document.getElementById('medical-history').style.display = 'none';
  document.getElementById('habits').style.display = 'block';
}

// Handle Medical Form Submit
document.getElementById('medicalForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Medical History and Fitness Goals Saved!');
  // Add logic to proceed further if needed
});

function toggleOtherField(el, id) {
  const target = document.getElementById(id);
  if (el.checked) {
    document.querySelectorAll(`#${id}`).forEach(div => div.classList.add("hidden"));
    target.classList.remove("hidden");
  }
}

function toggleFitnessField(el, id) {
  const target = document.getElementById(id);
  if (el.checked) {
    document.querySelectorAll(`#${id}`).forEach(div => div.classList.add("hidden"));
    target.classList.remove("hidden");
  }
}

function toggleAllergy(type, show) {
  const box = document.getElementById(`${type}AllergyBox`);
  box.classList.toggle("hidden", !show);
}

// function toggleMedical(targetId, show) {
//   const element = document.getElementById('medicalAllergyBox');
//   if (element) {
//     element.classList.toggle('hidden', !show);
//   }
// }

function toggleFitnessField() {
  const otherSelected = document.querySelector('input[name="fitnessGoal"][value="Other"]').checked;
  const box = document.getElementById('otherFitnessBox');
  if (box) {
    box.classList.toggle('hidden', !otherSelected);
  }
}

function toggleActivityInputs(show) {
  const box = document.getElementById('activityInputs');
  box.style.display = show ? 'block' : 'none';
   const inputs = box.querySelectorAll('input');
    inputs.forEach(input => {
        console.log("yes")
        if (show) {
            // if (input.dataset.originalRequired === "true" || input.dataset.originalRequired === "") {
            input.required = true;
            // }
        } else {
            input.required = false;
        }
    });
}

function toggleothersInput(show) {
  const box = document.getElementById('othersBox');
  box.style.display = show ? 'block' : 'none';
}

function toggleActivitymissedmeals(show) {
  const box = document.getElementById('activitymissedmeals');
  box.style.display = show ? 'block' : 'none';
}

function toggleMedical(id, show) {
  const element = document.getElementById(id);
  if (element) {
    element.classList.toggle('hidden', !show);
  }
}

// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   if (form.checkValidity()) {
//     alert('Form submitted!');
//   } else {
//     form.reportValidity(); // shows browser's default error messages
//   }
// });