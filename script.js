function calculateAge() {

    const birthDateInput =
        document.getElementById("birthDate").value;

    const result =
        document.getElementById("result");

    if (birthDateInput === "") {
        result.textContent =
            "Please enter your date of birth.";
        return;
    }

    const birthDate =
        new Date(birthDateInput);

    const today =
        new Date();

    if (birthDate > today) {
        result.textContent =
            "Please enter a valid date.";
        return;
    }

    let age =
        today.getFullYear() -
        birthDate.getFullYear();

    const month =
        today.getMonth() -
        birthDate.getMonth();

    if (
        month < 0 ||
        (
            month === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--;
    }

    result.textContent =
        "Your age is " + age + " years old";
}