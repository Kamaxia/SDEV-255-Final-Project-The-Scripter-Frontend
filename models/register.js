window.onload = () =>{
    getClass()
}

async function getClass(){
    let response = await fetch("http://localhost:3000/register")
    let data = await response.json()
    console.log(data)
    document.getElementById("classTitle").innerText = data.classes[0].title
    document.getElementById("classInstructor").innerText = data.classes[0].instructor

}