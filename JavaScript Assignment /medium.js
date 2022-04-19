function checkInput(input) {

    if (input == input.toUpperCase()) {
        return "Why are you shouting?";
    }
    if (input == input.toLowerCase()) {
        return "Why are you whispering?"
    }
        return "Thanks for talking normally."
}

console.log(checkInput("AAshsh"));