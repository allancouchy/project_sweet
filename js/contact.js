/**
 * initialization of emailjs
 */

const emailjsInit = () => {
    emailjs.init("OIalrcCXkEjuF5cM9")
}
emailjsInit()

/**
 * create a function that allow users to send message
 * return an alert when the message has been sent or not
 */

const sendMessage = () => {
    const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function (e) {
            e.preventDefault();

            // recover the input value
            var name = document.getElementById("name").value
            var email = document.getElementById("email").value
            var subject = document.getElementById("subject").value
            var message = document.getElementById("message").value

            // return an alert if an element of the form has not been completed
            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Veuillez remplir tous les champs du formulaire avant d'essayer de le soumettre.")
            } else {

                // regex config
                const REGEX_MAIL = /^[a-zA-Z0-9_.-]+@+[a-zA-Z0-9]+\.+[a-z]{2,4}$/
                const REGEX_TEXT = /^[\w0-9][\w0-9\àéèëïôûù '.,;:()[\]\|\/-_]+$/;
                let isValid = true;

                // verify the input validity to send the user message
                if (!REGEX_TEXT.test(name)) {
                    alert("Un caractère non autorisé a été détectée lors de la saisie de votre nom et prénom. À savoir, seul les caractères suivants sont autorisés : '.,;:()[]|/-_");
                    return isValid = false;
                }

                if (!REGEX_MAIL.test(email)) {
                    alert("Une erreur a été détectée. Veuillez vérifier et reprendre la saisie de votre mail.");
                    return isValid = false;
                }

                if (!REGEX_TEXT.test(subject)) {
                    alert("Un caractère non autorisé a été détectée lors de la saisie de l'objet de votre demande. À savoir, seul les caractères suivants sont autorisés : '.,;:()[]|/-_");
                    return isValid = false;
                }

                if (!REGEX_TEXT.test(message)) {
                    alert("Attention, votre message comporte moins de 10 caractères et/ou un caractère spécial non autorisé. À savoir, seul les caractères spéciaux suivants sont autorisés : '.,;:()[]|/-_");
                    return isValid = false;
                }

                // send message when is valid
                if (isValid) {

                    // change the value of the button when the message is being sent
                    btn.value = 'En cours...';

                    const serviceID = 'service_3j9o43q';
                    const templateID = 'template_czb1cxy';

                    // send form
                    emailjs.sendForm(serviceID, templateID, this)
                        .then(() => {
                            btn.value = 'Envoyer';
                            alert('Merci ' + name + " ! Votre message a bien été envoyé.");
                            window.location.reload()
                        }, (err) => {
                            btn.value = 'Envoyer';
                            alert(JSON.stringify(err));
                        });
                }

            }
        });
}
sendMessage()