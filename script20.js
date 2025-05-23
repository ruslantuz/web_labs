const form = document.getElementById('courseForm');
const totalCostElement = document.getElementById('totalCost');

form.addEventListener('change', handleCheckboxClick);

function handleCheckboxClick() {
    const checkboxes = form.querySelectorAll('input[name="course"]');
    let totalCost = 0;
    let totalHours = 0;
    let selectedCourses = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            totalCost += parseFloat(checkbox.value); 
            totalHours += parseFloat(checkbox.dataset.hours); 
            const courseName = checkbox.parentElement.textContent.split('(')[0].trim();
            selectedCourses.push(courseName);
        }
    });

    totalCostElement.textContent = totalCost.toFixed(2); 
    const totalHoursElement = document.getElementById('totalHours');
    const selectedCoursesElement = document.getElementById('selectedCourses');

    totalHoursElement.textContent = totalHours; 
    selectedCoursesElement.textContent = selectedCourses.join(', ');
}


