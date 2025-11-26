function ventanaAdopciones() {
    window.location.href = "adopcion/adopciones.html";
}
function ventanaInicio() {
    window.location.href = "index.html";
}

async function cargarPerritos() {
    const contenedor = document.getElementById("pet-container");
    contenedor.innerHTML = "";
    try {
        const res = await fetch('https://api-mascotas-production.up.railway.app/api/mascotas/mascotasAdopcion');
        if (!res.ok) {
            throw new Error('Error en la solicitud: ' + res.status);
        }
        const data = await res.json();
        if (data.length === 0) {
            contenedor.innerHTML = "<p>No hay perritos disponibles para adopción en este momento.</p>";
            return;
        } else {
            data.forEach(element => {
                const card = document.createElement("div");
                card.classList.add("col-12", "mt-3");
                card.innerHTML = `
                <div class="card notas-card">
                    <div class="card-body text-center">
                        <div class="card-icon">
                        <i class="fa-solid fa-triangle-exclamation fa-2x"></i>
                        <img src="${element.fotoURL}" class="img-fluid rounded" alt="Foto de ${element.nombre}" style="max-height: 200px; object-fit: cover;">
                        </div>
                        <label class="fw-bold"> ${element.nombre} </label>
                        <p class="card-text">Edad: ${element.edad} años</p>
                        <p class="card-text">Raza: ${element.raza}</p>
                        <p class="card-text">Descripción: ${element.descripcion}</p>
                        <a href="#" class="btn btn-primary">Adoptar</a>
                    </div>
                </div>
            `;
                contenedor.appendChild(card);
            });
            return data;
        }
    } catch (error) {
        console.log("Error al cargar los perritos: " + error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    cargarPerritos();
});