const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".buttonClose")

    for (const button of allCloseButtons) {
        button.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

    const





    document.querySelector("#button--kermit").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--kermit")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--moped").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--moped")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--shenlong").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--shenlong")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--marieAntoinette").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--marieAntoinette")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--dapple").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dapple")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--brody").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--brody")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents;