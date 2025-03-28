document
  .getElementById("hubspot-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita que la página se recargue
    const formData = {
      fields: [
        {
          name: "firstname",
          value: document.querySelector("[name='firstname']").value,
        },
        {
          name: "lastname",
          value: document.querySelector("[name='lastname']").value,
        },
        {
          name: "company",
          value: document.querySelector("[name='company']").value,
        },
        {
          name: "cuil_cuit",
          value: document.querySelector("[name='cuil_cuit']").value,
        },
        {
          name: "email",
          value: document.querySelector("[name='email']").value,
        },
        {
          name: "phone",
          value:
            document.querySelector("[name='phone_area_code']").value +
            document.querySelector("[name='phone_number']").value,
        },
        {
          name: "message",
          value: document.querySelector("[name='message']").value,
        },
      ],
    };
    const portalId = "49459402";
    const formId = "c3b2cd60-3f9d-486c-90b5-c4b633f21786";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    console.log("Enviando datos a:", url);
    console.log("Payload:", JSON.stringify(formData));
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Respuesta de HubSpot:", response);
      if (response.ok) {
        alert("Formulario enviado con éxito!");
        document.getElementById("hubspot-form").reset();
      } else {
        const errorData = await response.json();
        console.error("Error en la API:", errorData);
        alert(
          `Error: ${errorData.message || "No se pudo enviar el formulario."}`
        );
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un problema al enviar el formulario.");
    }
  });

//PRUEBA DE QUE LA CONEXIÓN SEA EXITOSA
