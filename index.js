let currentTab = 'all'
const tabActive = ['bg-blue-500', 'border-blue-500']
const tabInActive = ['bg-transparent', 'text-slate-600', 'border-slate-200']

const allSection = document.getElementById('all-sec')
const interviewSection = document.getElementById('inter-sec')
const rejectedSection = document.getElementById('reject-sec')
const emptyState = document.getElementById('empty-state')
const available = document.getElementById('available')
console.log(emptyState, 'empty')
function switchTab(tab) {
	const tabs = ['all', 'interview', 'rejected']
	currentTab = tab
	for (const t of tabs) {
	    const tabName = document.getElementById("tab-" + t)
	    if(t == tab){
            tabName.classList.remove(...tabInActive)
            tabName.classList.add(...tabActive)
        } else{
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInActive)
        }
	}
    const pages = [allSection, interviewSection, rejectedSection]
    for (const section of pages){
        section.classList.add('hidden')
    }
    if(tab == 'all'){
        allSection.classList.remove('hidden')
        
    } else if(tab== 'interview'){
        interviewSection.classList.remove('hidden')
    } else{
        rejectedSection.classList.remove('hidden')
    }
    updateStatus()
    checkEmpty()
}

// stat
const totalStat = document.getElementById('stat-total')
const totalInter = document.getElementById('stat-inter')
const totalReject = document.getElementById('stat-reject')


switchTab(currentTab)

document.getElementById('jobs-sec').addEventListener('click', function(event){
const clicked = event.target
const card = clicked.closest('.card')
if(!card) return

const status = card.querySelector('[data-status]')

if(clicked.classList.contains('interview')){
    status.innerText ='Interviewed'
    interviewSection.appendChild(card)
    updateStatus()
    checkEmpty()
}
if(clicked.classList.contains('rejected')){
     status.innerText ='Rejected'
    rejectedSection.appendChild(card)
    updateStatus()
    checkEmpty()
}
if(clicked.classList.contains('delete')){
    card.remove()
    updateStatus()
    checkEmpty()
}
})
function updateStatus() {
    const allCount = allSection.querySelectorAll('.card').length
    const interCount = interviewSection.querySelectorAll('.card').length
    const rejectCount = rejectedSection.querySelectorAll('.card').length
    totalStat.innerText = allCount
    totalInter.innerText = interCount
    totalReject.innerText = rejectCounts
    let availableCount
    if(currentTab === 'all'){
        availableCount = allCount
    } else if(currentTab === 'interview'){
        availableCount = interCount
    } else {
        availableCount = rejectCount
    }

    available.innerText = availableCount + (availableCount === 1 ? " job" : " jobs")
}
updateStatus()
function checkEmpty(){
    let section

    if(currentTab === 'all'){
        section = allSection
    } 
    else if(currentTab === 'interview'){
        section = interviewSection
    } 
    else{
        section = rejectedSection
    }

    const totalCards = section.querySelectorAll('.card').length

    if(totalCards === 0){
        emptyState.classList.remove('hidden')
    }else{
        emptyState.classList.add('hidden')
    }
}
checkEmpty()