// Add new Company Experience
function addNewCompany() {
    // Create a new form group div
    let newCompanyDiv = document.createElement('div');
    newCompanyDiv.classList.add('form-group', 'Company', 'mt-2');

    // Create a new row div
    let newRow = document.createElement('div');
    newRow.classList.add('row');

    // Create the column for company name
    let companyCol = document.createElement('div');
    companyCol.classList.add('col-md-6');

    let companyLabel = document.createElement('label');
    companyLabel.textContent = 'Company Name';
    companyLabel.setAttribute('for', 'companyNameField'); // This 'for' attribute should match the input's id if needed

    let newCompanyInput = document.createElement('input');
    newCompanyInput.classList.add('form-control', 'companyNameField');
    newCompanyInput.setAttribute('placeholder', 'Company Name');
    newCompanyInput.setAttribute('id', 'companyNameField'); // Set the id if you need it

    companyCol.appendChild(companyLabel);
    companyCol.appendChild(newCompanyInput);

    // Create the column for experience
    let experienceCol = document.createElement('div');
    experienceCol.classList.add('col-md-6');

    let experienceLabel = document.createElement('label');
    experienceLabel.textContent = 'Experience';
    experienceLabel.setAttribute('for', 'experienceField'); // Same for experience field

    let newCompanyExperienceInput = document.createElement('input');
    newCompanyExperienceInput.classList.add('form-control', 'experienceField');
    newCompanyExperienceInput.setAttribute('placeholder', 'Experience');
    newCompanyExperienceInput.setAttribute('id', 'experienceField'); // Set the id if you need it

    experienceCol.appendChild(experienceLabel);
    experienceCol.appendChild(newCompanyExperienceInput);

    // Append the columns to the row
    newRow.appendChild(companyCol);
    newRow.appendChild(experienceCol);

    // Create close button to remove the company fields
    let closeButton = document.createElement('button');
    closeButton.classList.add('btn', 'btn-danger', 'mt-2', 'btn-sm');
    closeButton.textContent = 'Remove';
    closeButton.onclick = function() {
        newCompanyDiv.remove();
    };

    // Append the row and close button to the new company div
    newCompanyDiv.appendChild(newRow);
    newCompanyDiv.appendChild(closeButton);

    // Get reference to the container where new inputs will be added
    let addCompanyField = document.getElementById('addCompanyField');
    
    // Insert the new company div before the addCompanyField div
    addCompanyField.parentNode.insertBefore(newCompanyDiv, addCompanyField);
}


// Add new Project field
function addNewProject() {
    // Create new textarea for project details
    let newProjectTextarea = document.createElement('textarea');
    newProjectTextarea.classList.add('form-control', 'mt-2', 'projectField');
    newProjectTextarea.setAttribute('rows', '2');
    newProjectTextarea.setAttribute('cols', '30');
    newProjectTextarea.setAttribute('placeholder', 'Enter Your Project Details');

    // Create new input for project title
    let newProjectTitle = document.createElement('input');
    newProjectTitle.classList.add('form-control', 'mt-2', 'projectTitleField');
    newProjectTitle.setAttribute('placeholder', 'Project Title');

    // Create close button to remove the project fields
    let closeButton = document.createElement('button');
    closeButton.classList.add('btn', 'btn-danger', 'mt-2', 'btn-sm');
    closeButton.textContent = 'Remove';
    closeButton.onclick = function() {
        newProjectTextarea.remove();
        newProjectTitle.remove();
        closeButton.remove();
    };

    // Get reference to the container where new inputs will be added
    let addProjectField = document.getElementById('addProjectField');
    let projectContainer = document.querySelector('.project');

    // Insert the new input and textarea elements before the addProjectField div
    projectContainer.insertBefore(newProjectTitle, addProjectField);
    projectContainer.insertBefore(newProjectTextarea, addProjectField);
    projectContainer.insertBefore(closeButton, addProjectField);
}


// -------------------------------------------------------Resume Template----------------------------------------


function generateResume() {
    // ---Name----
    let nameField = document.getElementById('nameField');  // Get the input element
    let nameValue = nameField.value.trim();  // Get the value of the input field
    let tempName = document.getElementById('tempName');
    tempName.innerHTML = nameValue;

    // ---Email----
    // let emailField = document.getElementById('emailField');  // Get the input element
    // let emailValue = emailField.value.trim();  // Get the value of the input field
    // let tempEmail = document.getElementById('tempEmail');
    // tempEmail.innerHTML = emailValue;

    document.getElementById('tempEmail').innerHTML=document.getElementById('emailField').value.trim();

    // ---Phone Number----
    let numberField = document.getElementById('numberField');  // Get the input element
    let numberValue = numberField.value.trim();  // Get the value of the input field
    let tempNumber = document.getElementById('tempContact');
    tempNumber.innerHTML = numberValue;

    // ---Address----
    let cityAddressField = document.getElementById('cityAddressField').value.trim();
    let distAddressField = document.getElementById('distAddressField').value.trim();
    let pinAddressField = document.getElementById('pinAddressField').value.trim();
    let countryAddressField = document.getElementById('countryAddressField').value.trim();

    // Combine the fields into a formatted string
    let formattedAddress = `${cityAddressField ? cityAddressField : ""} 
                        ${distAddressField ? distAddressField : ""} 
                        ${pinAddressField ? pinAddressField : ""} 
                        ${countryAddressField ? countryAddressField : ""}`.trim();
    let tempAddress = document.getElementById('tempAddress');
    tempAddress.innerHTML = formattedAddress;

    // ------LinkedIn Link------
    let linkedinField = document.getElementById('linkdinField').value.trim();
    let tempLinkdin = document.getElementById('tempLinkdin');
    tempLinkdin.href = linkedinField;
    tempLinkdin.innerHTML = linkedinField ? "LinkedIn" : "";  // Display "LinkedIn" text if a URL is provided

    // ------Portfolio Link------
    let portfolioField = document.getElementById('portfolioField').value.trim();
    let tempPortfolio = document.getElementById('tempPortfolio');
    tempPortfolio.href = portfolioField;
    tempPortfolio.innerHTML = portfolioField ? "Portfolio" : "";  // Display "Portfolio" text if a URL is provided

    // ------------Graduation ------------
    let graduationField = document.getElementById('graduationField').value;
    let tempGraduationClg = document.getElementById('tempGraduationClg');
    tempGraduationClg.innerHTML = graduationField;

    let graduationMarkField = document.getElementById('graduationMarkField').value;
    let tempGraduationMark = document.getElementById('tempGraduationMark');
    tempGraduationMark.innerHTML = graduationMarkField;

    // --------------Degree--------------
    let degreeField = document.getElementById('degreeField').value;
    let tempDegreeClg = document.getElementById('tempDegreeClg');
    tempDegreeClg.innerHTML = degreeField;

    let degreeMarkField = document.getElementById('degreeMarkField').value;
    let tempDegreemark = document.getElementById('tempDegreemark');
    tempDegreemark.innerHTML = degreeMarkField;



    // -------------------projects-----------
    let projectTitles = document.querySelectorAll('.projectTitleField');
    let projectDetails = document.querySelectorAll('.projectField');
    let projectList = document.getElementById('teamProject');

    projectList.innerHTML = '';


    projectTitles.forEach((titleField, index) => {
        let titleValue = titleField.value.trim();
        let detailsValue = projectDetails[index].value.trim();

        if (titleValue && detailsValue) {
            let projectItem = document.createElement('li');

            let projectTitleElement = document.createElement('div');
            projectTitleElement.classList.add('TempProjectTitle');
            projectTitleElement.innerHTML = `<strong>${titleValue}</strong>`;

            let projectDetailsElement = document.createElement('div');
            projectDetailsElement.classList.add('TempProjectDetails');
            projectDetailsElement.innerHTML = detailsValue;

            projectItem.appendChild(projectTitleElement);
            projectItem.appendChild(projectDetailsElement);

            projectList.appendChild(projectItem);
        }
    });



    // -----------------------------work experience--------------
    let companyNames = document.querySelectorAll('.companyNameField');
    let experiences = document.querySelectorAll('.experienceField');
    let companyList = document.querySelector('.companyList');

    // Clear any existing company details in the list
    companyList.innerHTML = '';

    // Loop through each added company and experience
    companyNames.forEach((companyField, index) => {
        let companyName = companyField.value.trim();
        let experience = experiences[index].value.trim();

        if (companyName && experience) {
            // Create a new list item for the company and experience
            let companyItem = document.createElement('li');

            let companyDiv = document.createElement('div');
            companyDiv.classList.add('flexbox');

            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');

            let colNameDiv = document.createElement('div');
            colNameDiv.classList.add('colName');
            colNameDiv.textContent = companyName;

            let colDetailsDiv = document.createElement('div');
            colDetailsDiv.classList.add('colDetails');
            colDetailsDiv.textContent = experience;

            // Append elements to the companyItem
            rowDiv.appendChild(colNameDiv);
            rowDiv.appendChild(colDetailsDiv);
            companyDiv.appendChild(rowDiv);
            companyItem.appendChild(companyDiv);

            // Append companyItem to the companyList
            companyList.appendChild(companyItem);
        }
    });

        // ---Skills----
        let skillField = document.getElementById('skillField').value.trim();
        let tempSkillList = document.getElementById('tempSkill');
    
        // Clear existing skills
        tempSkillList.innerHTML = '';
    
        // Split skills by comma and trim whitespace
        let skills = skillField.split(',').map(skill => skill.trim());
    
        // Loop through skills and create list items
        skills.forEach(skill => {
            if (skill) {
                let skillItem = document.createElement('li');
                skillItem.textContent = skill;
                tempSkillList.appendChild(skillItem);
            }
        });



        // --------------hide form  and show template ----------------
        document.getElementById('Resume-template').style.display = 'block' ;
        document.getElementById('Resume-form').style.display = 'none' ;


}


function printResume(){


window.print();



}



