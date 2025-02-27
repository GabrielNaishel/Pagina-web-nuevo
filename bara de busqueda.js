document.addEventListener("DOMContentLoaded", function () { //!Es un evento que se activa cuando el navegador carga y analiza el documento html
    document.querySelector("form[role='search']").addEventListener("submit", function (event) {
        event.preventDefault();

        let input = document.querySelector("input[type='search']").value.toLowerCase();

        // Diccionario con las rutas de cada página
        let paginas = {
            "notebook": "Notebook.html",
            "Notebook": "Notebook.html",
            "HP": "Notebook.html",
            "hp": "Notebook.html",
            "Lenovo": "Notebook.html",
            "lenovo": "Notebook.html",
            "celulares": "celulares.html",
            "Celulares": "celulares.html",
            "Motorola": "celulares.html",
            "motorola": "celulares.html",
            "Samsung": "celulares.html",
            "samsung": "celulares.html",
            "sillas": "sillas.html",
            "Sillas": "sillas.html",
            "Noblechair": "sillas.html",
            "noblechair": "sillas.html",
            "Sillas Gamer": "sillas.html",
            "sillas gamer": "sillas.html",
            "Vertagear": "sillas.html",
            "vertagear": "sillas.html",
            "consolas": "consola.html",
            "Consolas": "consola.html",
            "xbox": "consola.html",
            "retro": "consola.html",
            "consolas retro": "consola.html",
            "Consolas Retro": "consola.html",
            "consola retro": "consola.html",
            "Consola Retro": "consola.html",
            "miniconsolas": "consola.html",
            "televisores": "televisores.html",
            "Televisores": "televisores.html",
            "samsung": "televisores.html",
        };

        if (paginas[input]) {
            window.location.href = paginas[input]; // Redirige a la página correspondiente
        } else {
            alert("No se encontraron resultados. Prueba con: Notebook, Consolas, etc.");
        }
    });
});

