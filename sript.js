let interviewList = []
let rejectedList = []
let currentStatus = 'all'

const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")


const mainContainer = document.querySelector('main')

const allcards = document.getElementById("allcards")

const filterSection = document.getElementById("filterSection")




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
    
    currentStatus = id ;
    
    console.log(currentStatus);

      const noAvailable = document.getElementById("noAvailable")


    selected.classList.remove("bg-[#FFFFFF]" , "text-[#64748B]")
    selected.classList.add("bg-[#3B82F6]" , "text-white")



    if(id == "interview-toggle-btn"){
        allcards.classList.add("hidden")
        filterSection.classList.remove("hidden")
        interviewRender()
    }
    else if(id == "all-toggle-btn"){
        allcards.classList.remove("hidden")
        filterSection.classList.add("hidden")
        noAvailable.classList.add("hidden")
    }
    else if (id == "reject-toggle-btn"){
        allcards.classList.add("hidden")
        filterSection.classList.remove("hidden")
        rejectRender()
    }
    


}




mainContainer.addEventListener("click", function(event){

    
  if(event.target.classList.contains('interview-btn')){
      const parentNode = event.target.parentNode.parentNode;


    const companyName = parentNode.querySelector(".companyName").innerText
    const position = parentNode.querySelector(".position").innerText
    const salary = parentNode.querySelector(".salary").innerText
    const statusUpdate = parentNode.querySelector(".status-update").innerText
    const description = parentNode.querySelector(".description").innerText
    
    




    const card = event.target.closest(".bg-white")

    card.classList.remove("border-[#EF4444]")

    card.classList.add("border-l-3", "border-[#10B981]")




    const update = parentNode.querySelector(".status-update").innerHTML = `
        <p class="px-[12px] py-[8px] bg-[#10b981] text-[#ffffff]  font-semibold rounded-md">INTERVIEW</p>
    `

    


    const cardInfo = {
        companyName,
        position,
        salary,
        statusUpdate:update,
        description
    }

    
    
    const companyExist = interviewList.find(item=> item.companyName.trim() == cardInfo.companyName.trim())

    
    
    if(!companyExist){
        interviewList.push(cardInfo)
    }
    

    rejectedList = rejectedList.filter(item=> item.companyName.trim() != cardInfo.companyName.trim())


    
    
    calculateCount()

    console.log(currentStatus);
    if(currentStatus == "reject-toggle-btn"){
        rejectRender()
    }

    
    

  }

  else if(event.target.classList.contains('reject-btn')){
      const parentNode = event.target.parentNode.parentNode;


    const companyName = parentNode.querySelector(".companyName").innerText
    const position = parentNode.querySelector(".position").innerText
    const salary = parentNode.querySelector(".salary").innerText
    const statusUpdate = parentNode.querySelector(".status-update").innerText
    const description = parentNode.querySelector(".description").innerText



    const update = parentNode.querySelector(".status-update").innerHTML = `
        <p class="px-[12px] py-[8px] bg-[#EF4444] text-[#ffffff] font-semibold rounded-md ">REJECTED</p>
    `



    const card = event.target.closest(".bg-white")

    card.classList.remove("border-[#10B981]")
    card.classList.add("border-l-3", "border-[#EF4444]")




    const cardInfo = {
        companyName,
        position,
        salary,
        statusUpdate:update,
        description
    }

    
    
    const companyExist = rejectedList.find(item=> item.companyName == cardInfo.companyName)

   

    if(!companyExist){
        rejectedList.push(cardInfo)
    }

    interviewList = interviewList.filter(item=> item.companyName != cardInfo.companyName);
    
    
    calculateCount()

    console.log(currentStatus);
    if(currentStatus == "interview-toggle-btn"){
        interviewRender()
    }
    

  }






  else if(event.target.closest('.delete-btn')){

    const card = event.target.closest(".bg-white")
    const companyName = card.querySelector(".companyName").innerText.trim()


    card.remove()


    interviewList = interviewList.filter(item => item.companyName.trim() !== companyName)

    rejectedList = rejectedList.filter(item => item.companyName.trim() !== companyName)


    calculateCount()


    if(currentStatus === "interview-toggle-btn"){
        interviewRender()
    }

    if(currentStatus === "reject-toggle-btn"){
        rejectRender()
    }

    if(allcards.children.length === 0){
        noAvailable.classList.remove("hidden")
        return
    }
    
}

})



function interviewRender(){
    filterSection.innerHTML = ''

    if(interviewList.length === 0){
        noAvailable.classList.remove("hidden")
        return
    }
    noAvailable.classList.add("hidden")


    for(let interview of interviewList){

        console.log(interview);

        let div =  document.createElement('div')
        div.className = 'bg-white rounded-[8px] p-[24px] space-y-[16px] flex justify-between'
        div.innerHTML = `
                    <div class="space-y-[16px]">
                        <div class="">
                            <p class="companyName font-semibold text-[#002C5C] text-[18px]">${interview.companyName}</p>
                            <p class="position text-[#64748B] text-[16px]">${interview.position}</p>
                        </div>
                        <p class="salary text-[#64748B] text-[14px]">${interview.salary}</p>
                        <div>
                            <button
                                class="status-update px-[12px] py-[8px] bg-[#EEF4FF] text-[#002C5C] font-[500] rounded-[4px] mb-[16px]">${interview.statusUpdate}</button>
                            <p class="description  text-[#323B]">${interview.description}</p>
                        </div>
                        <div>
                            <button
                                class="interview-btn px-[12px] py-[8px] border border-[#10B981] text-[#10B981] font-semibold mr-[8px] ">INTERVIEW</button>
                            <button
                                class="reject-btn px-[12px] py-[8px] border border-[#EF4444] text-[#EF4444] font-semibold ">REJECTED</button>
                        </div>
                    </div>
                    <div>
                        <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
        
        `

        filterSection.appendChild(div)

        console.log(div);
    }
}


function rejectRender(){
    filterSection.innerHTML = ''

    if(rejectedList.length === 0){
        noAvailable.classList.remove("hidden")
        return
    }
    noAvailable.classList.add("hidden")

    for(let reject of rejectedList){

        console.log(reject);

        let div =  document.createElement('div')
        div.className = 'bg-white rounded-[8px] p-[24px] space-y-[16px] flex justify-between'
        div.innerHTML = `
                    <div class="space-y-[16px]">
                        <div class="">
                            <p class="companyName font-semibold text-[#002C5C] text-[18px]">${reject.companyName}</p>
                            <p class="position text-[#64748B] text-[16px]">${reject.position}</p>
                        </div>
                        <p class="salary text-[#64748B] text-[14px]">${reject.salary}</p>
                        <div>
                            <button
                                class="status-update px-[12px] py-[8px] bg-[#EEF4FF] text-[#002C5C] font-[500] rounded-[4px] mb-[16px]">${reject.statusUpdate}</button>
                            <p class="description  text-[#323B]">${reject.description}</p>
                        </div>
                        <div>
                            <button
                                class="interview-btn px-[12px] py-[8px] border border-[#10B981] text-[#10B981] font-semibold mr-[8px] ">INTERVIEW</button>
                            <button
                                class="reject-btn px-[12px] py-[8px] border border-[#EF4444] text-[#EF4444] font-semibold ">REJECTED</button>
                        </div>
                    </div>
                    <div>
                        <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
        
        `

        filterSection.appendChild(div)

        console.log(div);
    }
}







