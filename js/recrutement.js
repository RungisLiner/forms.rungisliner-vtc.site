fetch("https://forms.rungisliner-vtc.site/:8006/formulaire", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        pseudo: formData.get("pseudo"),
        iddiscord: formData.get("iddiscord"),
        age: formData.get("age"),
        tmp: formData.get("tmp"),
        software: formData.get("software"),
        holland: formData.get("holland"),
    })
});