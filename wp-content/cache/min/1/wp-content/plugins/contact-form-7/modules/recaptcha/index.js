// document.addEventListener("DOMContentLoaded", (t=>{
//     var e;
//     wpcf7_recaptcha = {
//         ...null !== (e = wpcf7_recaptcha) && void 0 !== e ? e : {}
//     };
//     const c = wpcf7_recaptcha.sitekey
//       , {homepage: n, contactform: a} = wpcf7_recaptcha.actions
//       , o = t=>{
//         const {action: e, func: n, params: a} = t;
//         grecaptcha.execute(c, {
//             action: e
//         }).then((t=>{
//             const c = new CustomEvent("wpcf7grecaptchaexecuted",{
//                 detail: {
//                     action: e,
//                     token: t
//                 }
//             });
//             document.dispatchEvent(c)
//         }
//         )).then((()=>{
//             "function" == typeof n && n(...a)
//         }
//         )).catch((t=>console.error(t)))
//     }
//     ;

//     if (grecaptcha.enterprise.ready(() => {
//             o({action: n});
//         }),
//         document.addEventListener("change", (t => {
//             o({action: a});
//         })),
//         typeof wpcf7 !== "undefined" && typeof wpcf7.submit === "function") {
//         const originalSubmit = wpcf7.submit;
//         wpcf7.submit = function(e) {
//             o({
//                 action: a,
//                 func: originalSubmit,
//                 params: [e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}]
//             });
//         };
//     }

//     document.addEventListener("change", (t=>{
//         o({
//             action: a
//         })
//     }
//     )),
//     "undefined" != typeof wpcf7 && "function" == typeof wpcf7.submit) {
//         const t = wpcf7.submit;
//         wpcf7.submit = function(e) {
//             o({
//                 action: a,
//                 func: t,
//                 params: [e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}]
//             })
//         }
//     }
//     document.addEventListener("wpcf7grecaptchaexecuted", (t=>{
//         const e = document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');
//         for (let c = 0; c < e.length; c++)
//             e[c].setAttribute("value", t.detail.token)
//     }
//     ))
// }
// ));

// Function to send the reCAPTCHA token to the Google reCAPTCHA Enterprise API
// function sendRecaptchaTokenToServer(token) {
//     const requestBody = {
//         event: {
//             token: token,
//             expectedAction: "pageLoad",
//             siteKey: "6LeurB0pAAAAAGecpIepSzbAKv2Um9TkDw4CbMrp"
//         }
//     };

//     const apiKey = "AIzaSyCFuookbWqGuml0dyBQiWmAOR7ZWsDB_iI";
//     const apiEndpoint = `https://recaptchaenterprise.googleapis.com/v1/projects/umbrellaxact-1701178555044/assessments?key=${apiKey}`;

//     fetch(apiEndpoint, {
//         method: "POST",
//         body: JSON.stringify(requestBody),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("Assessment result:", data);
//         // Handle the assessment result as needed
//     })
//     .catch(error => {
//         console.error('Error verifying reCAPTCHA token:', error);
//     });
// }


// function executeRecaptchaForForm(form) {
//     grecaptcha.enterprise.ready(function() {
//         grecaptcha.enterprise.execute('6LeurB0pAAAAAGecpIepSzbAKv2Um9TkDw4CbMrp', {action: 'submit'}).then(function(token) {
//             var recaptchaResponse = document.createElement('input');
//             recaptchaResponse.type = 'hidden';
//             recaptchaResponse.name = '_wpcf7_recaptcha_response';
//             recaptchaResponse.value = token;
//             form.appendChild(recaptchaResponse);
//             form.submit(); // Programmatically submit the form after appending the token
//         });
//     });
// }

// // Example usage:
// // Assuming you have a form element, you can call:
// // executeRecaptchaForForm(yourFormElement);

// document.addEventListener("wpcf7grecaptchaexecuted", (event) => {
//     const recaptchaResponseInputs = document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');
//     for (let i = 0; i < recaptchaResponseInputs.length; i++) {
//         recaptchaResponseInputs[i].setAttribute("value", event.detail.token);
//     }
//     // Call the function to send the token to your server
//     sendRecaptchaTokenToServer(event.detail.token);
// });

// document.addEventListener("DOMContentLoaded", (t => {
//     var e;
//     wpcf7_recaptcha = {
//         ...null !== (e = wpcf7_recaptcha) && void 0 !== e ? e : {}
//     };
//     const c = wpcf7_recaptcha.sitekey,
//           {homepage: n, contactform: a} = wpcf7_recaptcha.actions,
//           o = async t => {
//             const {action: e, func: n, params: a} = t;
//             try {
//                 const token = await grecaptcha.enterprise.execute(c, {action: e});
//                 const customEvent = new CustomEvent("wpcf7grecaptchaexecuted", {
//                     detail: {
//                         action: e,
//                         token: token
//                     }
//                 });
//                 document.dispatchEvent(customEvent);

//                 if (typeof n === "function") {
//                     n(...a);
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//           };
//     }));

// if (grecaptcha.enterprise.ready(() => {
//         o({action: n});
//     }),
//     document.addEventListener("change", (t => {
//         o({action: a});
//     })),
//     typeof wpcf7 !== "undefined" && typeof wpcf7.submit === "function") {
//         const originalSubmit = wpcf7.submit;
//         wpcf7.submit = function(e) {
//             o({
//                 action: a,
//                 func: originalSubmit,
//                 params: [e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}]
//             });
//         };
//     }

// document.addEventListener("wpcf7grecaptchaexecuted", (t => {
//     const recaptchaResponseInputs = document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');
//     for (let i = 0; i < recaptchaResponseInputs.length; i++) {
//         recaptchaResponseInputs[i].setAttribute("value", t.detail.token);
//     }
// }));

// Function to send the reCAPTCHA token to the Google reCAPTCHA Enterprise API
function sendRecaptchaTokenToServer(token) {
    console.log("Sending reCAPTCHA token to server:", token);  // Log token being sent
    const requestBody = {
        event: {
            token: token,
            expectedAction: "pageLoad",
            siteKey: "6LeurB0pAAAAAGecpIepSzbAKv2Um9TkDw4CbMrp"
        }
    };

    const apiKey = "AIzaSyCFuookbWqGuml0dyBQiWmAOR7ZWsDB_iI";
    const apiEndpoint = `https://recaptchaenterprise.googleapis.com/v1/projects/umbrellaxact-1701178555044/assessments?key=${apiKey}`;

    fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Assessment result:", data);  // Log the response from the server
    })
    .catch(error => {
        console.error('Error verifying reCAPTCHA token:', error);  // Log any errors
    });
}

function executeRecaptchaForForm(form) {
    console.log("Executing reCAPTCHA for form:", form);  // Log which form is being processed
    grecaptcha.enterprise.ready(function() {
        grecaptcha.enterprise.execute('6LeurB0pAAAAAGecpIepSzbAKv2Um9TkDw4CbMrp', {action: 'submit'}).then(function(token) {
            console.log("Received token for form submission:", token);  // Log received token
            var recaptchaResponse = document.createElement('input');
            recaptchaResponse.type = 'hidden';
            recaptchaResponse.name = '_wpcf7_recaptcha_response';
            recaptchaResponse.value = token;
            form.appendChild(recaptchaResponse);
            form.submit(); // Programmatically submit the form after appending the token
        });
    });
}

document.addEventListener("wpcf7grecaptchaexecuted", (event) => {
    console.log("Form reCAPTCHA executed event triggered:", event.detail);  // Log event details
    const recaptchaResponseInputs = document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');
    for (let i = 0; i < recaptchaResponseInputs.length; i++) {
        recaptchaResponseInputs[i].setAttribute("value", event.detail.token);
    }
    // Call the function to send the token to your server
    sendRecaptchaTokenToServer(event.detail.token);
});

document.addEventListener("DOMContentLoaded", (t => {
    console.log("DOMContentLoaded event triggered");  // Log when DOM is fully loaded
    var e;
    wpcf7_recaptcha = {
        ...null !== (e = wpcf7_recaptcha) && void 0 !== e ? e : {}
    };
    const c = wpcf7_recaptcha.sitekey,
          {homepage: n, contactform: a} = wpcf7_recaptcha.actions,
          o = async t => {
            try {
                const token = await grecaptcha.enterprise.execute(c, {action: t.action});
                console.log("Received token for action:", t.action, token);  // Log token received for specific action
                const customEvent = new CustomEvent("wpcf7grecaptchaexecuted", {
                    detail: {
                        action: t.action,
                        token: token
                    }
                });
                document.dispatchEvent(customEvent);
            } catch (error) {
                console.error("Error during reCAPTCHA execution:", error);  // Log any execution errors
            }
        };

    grecaptcha.enterprise.ready(() => {
        console.log("reCAPTCHA enterprise ready");  // Log when reCAPTCHA is ready
        o({action: n});
    });

    document.addEventListener("change", (t => {
        o({action: a});
    }));

    if (typeof wpcf7 !== "undefined" && typeof wpcf7.submit === "function") {
        const originalSubmit = wpcf7.submit;
        wpcf7.submit = function(e) {
            console.log("Intercepting form submission");  // Log form submission interception
            o({
                action: a,
                func: originalSubmit,
                params: [e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}]
            });
        };
    }
}));


// Function to execute reCAPTCHA on page load
// function executeRecaptchaOnLoad() {
//     grecaptcha.enterprise.ready(async () => {
//         const token = await grecaptcha.enterprise.execute('6LeurB0pAAAAAGecpIepSzbAKv2Um9TkDw4CbMrp', {action: 'pageLoad'});
//         sendRecaptchaTokenToServer(token);
//     });
// }

// Call this function when the page loads
// executeRecaptchaOnLoad();