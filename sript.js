const interviewList = []
const rejectedList = []


const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")


const mainContainer = document.querySelector('main')

const allcards = document.getElementById("allcards")




const allToggleBtn = document.getElementById("all-toggle-btn")
const interviewToggleBtn = document.getElementById("interview-toggle-btn")
const rejectToggleBtn = document.getElementById("reject-toggle-btn")



function calculateCount(){
    totalCount.innerText = allcards.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

calculateCount()



function toggleStyle(id){
    
    allToggleBtn.classList.remove("bg-[#3B82F6]" , "text-white")
    interviewToggleBtn.classList.remove("bg-[#3B82F6]" , "text-white")
    rejectToggleBtn.classList.remove("bg-[#3B82F6]" , "text-white")


    allToggleBtn.classList.add("bg-[#FFFFFF]" , "text-[#64748B]")
    interviewToggleBtn.classList.add("bg-[#FFFFFF]" , "text-[#64748B]")
    rejectToggleBtn.classList.add("bg-[#FFFFFF]" , "text-[#64748B]")


    const selected =document.getElementById(id)
    console.log(selected);

    selected.classList.remove("bg-[#FFFFFF]" , "text-[#64748B]")
    selected.classList.add("bg-[#3B82F6]" , "text-white")


}


mainContainer.addEventListener("click", function(){

    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText
    const position = parentNode.querySelector(".position").innerText
    const salary = parentNode.querySelector(".salary").innerText
    const statusUpdate = parentNode.querySelector(".status-update").innerText
    const description = parentNode.querySelector(".companyName").innerText
    

    const cardInfo = {
        companyName,
        position,
        salary,
        statusUpdate,
        description
    }

    
    
    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)

    if(!companyExist){
        interviewList.push(cardInfo)
    }

    console.log(interviewList);

})