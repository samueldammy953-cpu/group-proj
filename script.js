     const input = document.getElementById("Input");
        const word = document.getElementById("word");
        const char = document.getElementById("char");
        input.addEventListener("input", function () {
            let text = input.value;
            text = text.replace(/[0-9]/g, "");
            text = text.toUpperCase();
            input.value = text;
            const totalWords = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
            const totalChars = text.length;
            word.textContent = totalWords;
            char.textContent = totalChars;
        });