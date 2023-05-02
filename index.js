const handleEvent = (e) => {
    var inputValue = e.inputbox.value;
    document.getElementById("maincont").style.opacity = "0";
    document.getElementById("evaluate").style.zIndex = "100";

    const loader = ['Initializating Reader', 'Processing Input', "Calculating Possible Outcomes" , "Generating Response"]
    const loaderText = document.getElementById('loaderText');
    loaderText.innerHTML = "Initializating Reader";
    const myTimeout = setTimeout(secondAgrument, 1500);
    function secondAgrument() {
        loaderText.innerHTML = "Processing Input"
      }
    const my2ndTimeout = setTimeout(thirdAgrument, 1500);
    function thirdAgrument() {
        loaderText.innerHTML = "Processing Input"
    }
    const my3rdTimeout = setTimeout(fourthAgrument, 1500);
    function fourthAgrument() {
        loaderText.innerHTML = "Processing Input"
    }
    
}