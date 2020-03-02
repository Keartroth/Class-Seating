const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const button of allCloseButtons) {
        button.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

    const allDetailImages = document.querySelectorAll("img[id^='details--']");

    for (const image of allDetailImages) {
        image.addEventListener(
            "click",
            theClickEvent => {
            const dialogSiblingSelector = `#${theClickEvent.target.id}+dialog`;
            const theDialog = document.querySelector(dialogSiblingSelector);
            theDialog.showModal();
            }
        )
    }
}

export default initializeDetailButtonEvents;