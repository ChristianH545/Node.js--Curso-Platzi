//!AQUI TRABAJAREMOS LA PARTE LOGICA:

function addMessage(user, message) {
  new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController]  No hay Usuario o Mensaje");
      reject("Los Datos son Incorrecto");
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      data: new Date(),
    };
    console.log(fullMessage);
    resolve(fullMessage);
  });
}

//EXPORTAMOS LAS FUNCTION DE LA SIGUIENTE MANERA:

module.exports = {
  addMessage,
};
