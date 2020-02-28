const student = (arrayObject) => {
    return`
    <div class="studentID" id="${arrayObject.id}">                    
        <div class="studentID--img">
            <img src="${arrayObject.image}" alt="${arrayObject.name}">
        </div>                    
    </div>
    `
}

export default student;