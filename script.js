const image = document.querySelector("#file");
        const display = document.querySelector("#Display");

        display.addEventListener("click", () => image.click());

        image.addEventListener("change", function () {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                display.style.backgroundImage = `url(${reader.result})`;
                display.textContent = ""; // Clear text once an image is uploaded
            });
            reader.readAsDataURL(this.files[0]);
        });