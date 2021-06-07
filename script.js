let input = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () 
{
    getRepos();
};

// Get Repos Function 
function getRepos() 
{
    // console.log("Function Get Repos");

    if (input.value == "") { // If Value Is Empty
        // console.log('Value Cant Be Empty')
        reposData.innerHTML = "Please Write GitHub Username"

    }
    else {
        console.log(input.value)

        fetch(`https://api.github.com/users/${input.value}/repos`)

        .then((response) => response.json())

        .then((data) => {

            if (data.message) {
                document.querySelector(".show-data").innerHTML = `
                <h3>Profile Not Found</h3>
                `
            }
            else {

                console.log(data)

                reposData.innerHTML = '';

                //Loop On Data
                data.forEach(repo => {
                    // console.log(repo.name)


                    //Img De Profil
                    document.querySelector(".img").innerHTML = `
                    <a target="_blank" href="https://github.com/${input.value}"><img src="${repo.owner.avatar_url}" alt="img-github" width=250></a>
                    <h1>${repo.owner.login}</h1>
                    `;
                

                    //Create The Main Div Element
                    let mainDiv = document.createElement("div");

                    //Create Repo Name Text
                    let repoName = document.createTextNode(repo.name);

                    //Append The Text To Main Div
                    mainDiv.appendChild(repoName);


                    
                    //Create Repo URL Anchor
                    let theUrl = document.createElement('a');

                    //Create Repo URL Text
                    let theUrlText = document.createTextNode('lien');

                    //Append the Repo Url Text To Anchor Tag
                    theUrl.appendChild(theUrlText);

                    //Add The Hypertext Reference "href"
                    theUrl.href = `https://github.com/${input.value}/${repo.name}`;

                    //Set Attribute Blank 
                    theUrl.setAttribute('target', '_blank');

                    //Append URL Anocher To Main Div 
                    mainDiv.appendChild(theUrl);




                    //Create Stars Count Span
                    let starSpan = document.createElement("span");

                    //Create The Stars Count Text 
                    let starText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                    //Add Stars Count Text To Stars Span
                    starSpan.appendChild(starText);

                    //Append Stars Count Span To Main Div 
                    mainDiv.appendChild(starSpan);



                    //Add Class On Main Div
                    mainDiv.className = 'repo-box';





                    //Append The Main Div To Container
                    reposData.appendChild(mainDiv);

                })

            }



            

        })
    }

}

































// var form = document.querySelector("#search-frm")
// var button = document.querySelector("#butn")


// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     var search = document.querySelector("#lname").value

//     console.log(search);


//     // alert(search)

//     fetch(`https://api.github.com/users/${search}/repos`)
//     .then((a) => a.json())//=>function 
//     .then((data) => {
//         if (data.message) {
//             document.querySelector("#content").innerHTML = `
//             <h3>Profile Not Found</h3>
//             `
//         }
//         else {
//             document.querySelector("#content").innerHTML = `
//             <img src="${data[0].owner.avatar_url}" alt="img-github">
//             <h1>${data[0].owner.login}</h1>
//             `;
    
//             console.log(data)


            
//         }
//     })
// })















// $(document).ready(function(){
//     $("#search-frm").on("submit", function (e) {

//         e.preventDefault();

//         var search = $("#lname").val();

//         $.ajax({
//             url: "https://api.github.com/users/"+search+"/repos",
//             method: "GET",
//             success: function (data) {
                
//             }
            
//         });

//     });
    
// });