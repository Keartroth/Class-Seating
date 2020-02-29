const student = (arrayObject) => {
    return`
    <div class="studentID" id="${arrayObject.id}">                    
        <div class="studentID--img">
            <img src="${arrayObject.image}" alt="${arrayObject.name}">
        </div>
        
        <dialog class="studentID--dialog" id="details-${arrayObject.id}">
            <img src="${arrayObject.image}" class="dialog--imgLarge" alt="${arrayObject.name}">
            <h3 class="dialog--name">${arrayObject.name}</h3>
            <button class="buttonClose" id="close-${arrayObject.id}">Close</button>
        </dialog>
    </div>
    `
}

export default student;