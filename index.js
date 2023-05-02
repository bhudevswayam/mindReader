const handleEvent = (e) => {
    var inputValue = e.inputbox.value;
    if (inputValue == "" ) {
        alert("You must think of a proper number before proceding");
        return false;
      }
    document.getElementById("maincont").style.opacity = "0";
    document.getElementById("evaluate").style.zIndex = "100";

    // const loader = ['Initializating Reader', 'Processing Input', "Calculating Possible Outcomes" , "Generating Response"]
    const loaderText = document.getElementById('loaderText');
    loaderText.innerHTML = "Initializating Reader";
    const myTimeout = setTimeout(secondAgrument, 1500);
    function secondAgrument() {
        loaderText.innerHTML = "Processing Input"
      }
    const my2ndTimeout = setTimeout(thirdAgrument, 3000);
    function thirdAgrument() {
        loaderText.innerHTML = "Calculating Possible Outcomes"
    }
    const my3rdTimeout = setTimeout(fourthAgrument, 4500);
    function fourthAgrument() {
        loaderText.innerHTML = "Generating Response"
    }
    const my4rdTimeout = setTimeout(finalAgrument, 6000);
    function finalAgrument() {
        document.getElementById('imageLoad').src = "https://images.idgesg.net/images/article/2017/10/brain-computer_interface_binary_mind_telepathic_computing_thinkstock_845092266-100740659-large.jpg"
        loaderText.innerHTML = `The number you were thinking was ${inputValue}`
    }
}