function check() {
    let playerName = document.getElementById("playerName").value
    let loverName = document.getElementById("loverName").value
    let count = Math.round(Math.random()*100)
    let compa = `${count}%`
    if (playerName ==""  ) {
        document.getElementById("errOne").style.display = "block"
        document.getElementById("playerName").value = ""
        document.getElementById("loverName").value = ""
        setTimeout(() => {
            document.getElementById("errOne").style.display = "none"
        }, 3000);
    }else if(loverName ==""){
        document.getElementById("errTwo").style.display = "block"
        document.getElementById("playerName").value = ""
        document.getElementById("loverName").value = ""
        setTimeout(() => {
            document.getElementById("errTwo").style.display = "none"
        }, 3000);
    }else{
        if (playerName != "" || loverName != "") {
            document.getElementById('resultSection').style.display = "block"
            document.getElementById("chance").innerHTML = `${compa} Chance`
            document.getElementById("chance").innerHTML = `${compa} Chance`
            if (count == 0 || count <= 40) {
                document.getElementById("advice").innerHTML = `You're not compatable😥😭`
                document.getElementById("compat").innerHTML = `<p style="text-transform:uppercase;">${playerName} and ${loverName} this is your percentage</p>`
                document.getElementById("advice").innerHTML = `You're not compatable😥😭`
            } else if (count == 41 || count <= 60) {
                document.getElementById("compat").innerHTML = `<p style="text-transform:uppercase;">${playerName} and ${loverName} this is your percentage</p>`
                
                document.getElementById("advice").innerHTML = `You're not really compatable, You can give it a try with some prayer`
             } else if (count == 61 || count <= 70) {
                document.getElementById("compat").innerHTML = `<p style="text-transform:uppercase;">${playerName} and ${loverName} this is your percentage</p>`

                document.getElementById("advice").innerHTML = `You're compatable, but you still need prayer😑`
            }
             else if (count == 71 || count <= 100) {
                document.getElementById("compat").innerHTML = `<p style="text-transform:uppercase;">${playerName} and ${loverName} this is your percentage</p>`
                document.getElementById("advice").innerHTML = `Just Get Marry🥰`
            }
    
            document.getElementById("playerName").value = ""
            document.getElementById("loverName").value = ""
        }else if (playerName == " " || loverName == "") {
            document.getElementById("errMsg").style.display = "block"
    
            setTimeout(() => {
                document.getElementById("errMsg").style.display = "none"
            }, 3000);
        }
    }

}