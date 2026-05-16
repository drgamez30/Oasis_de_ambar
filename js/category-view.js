const viewControls = document.querySelector(".view-controls");
const productsContainer = document.querySelector(".productos-container");

if(viewControls && productsContainer){

    const buttons = viewControls.querySelectorAll("[data-view-size]");
    const mobileQuery = window.matchMedia("(max-width: 700px)");

    const setActiveView = (size) => {

        productsContainer.classList.remove("view-small", "view-medium", "view-large");
        productsContainer.classList.add(`view-${size}`);

        buttons.forEach((control) => {

            const isActive = control.dataset.viewSize === size;

            control.classList.toggle("active", isActive);
            control.setAttribute("aria-pressed", isActive);

        });

    };

    const syncMobileDefault = () => {

        if(mobileQuery.matches && productsContainer.classList.contains("view-medium")){
            setActiveView("large");
        }

    };

    buttons.forEach((button) => {

        button.setAttribute("aria-pressed", button.classList.contains("active"));

        button.addEventListener("click", () => {

            const size = button.dataset.viewSize;

            setActiveView(size);

        });

    });

    syncMobileDefault();
    mobileQuery.addEventListener("change", syncMobileDefault);

}
