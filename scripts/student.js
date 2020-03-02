const student = (arrayObject) => {
    return`
    <div class="studentID">                    
        <div class="studentID--img">
            <img id="details--${arrayObject.id}" src="${arrayObject.image}" alt="${arrayObject.name}">

            <dialog class="dialog--student" id="details-${arrayObject.id}">
                <img src="${arrayObject.image}" class="dialog--imgLarge" alt="${arrayObject.name}">
                <h3 class="dialog--name">${arrayObject.name}</h3>
                <button class="button--close">Close</button>
            </dialog>
        </div>
        
    </div>
    `
}

export default student;