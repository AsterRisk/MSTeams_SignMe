window.onload = function(){
    let previews = document.getElementsByClassName("preview");
    let signings = document.getElementsByClassName("signing");
    let x = 0;
    let document_modal = document.getElementById("document-modal");
    let signing_modal = document.getElementById("signing-modal");
    for(x=0;x<previews.length;x++)
    {
        previews[x].addEventListener("click", function(){
            document_modal.style.display = "inline-block";
        })
    }
    for(x=0;x<signings.length;x++)
    {
        signings[x].addEventListener("click", function(){
            console.log("sign")
            signing_modal.style.display = "inline-block";
        })
    }
    let close = document.getElementById("close_preview");
    close.addEventListener("click", function(){
        document_modal.style.display = "none";
    })
    let close_sign = document.getElementById("close_sign_preview");
    close_sign.addEventListener("click", function(){
        signing_modal.style.display = "none";
    })
}
