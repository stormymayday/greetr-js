// IIFE (Immediately Invoked Function Expression) – A function that’s defined and executed right away to create a private scope, preventing global namespace pollution.
(function (global, $) {
    // Greetr Function – A constructor function that creates new instances of Greetr.init, which contains properties like firstName, lastName, and language.
    const Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // hidden within the scope of the IIFE and never directly accessible
    const supportedLangs = ["en", "es"];

    // informal greetings
    const greetings = {
        en: "Hello",
        es: "Hola",
    };

    // formal greetings
    const formalGreetings = {
        en: "Greetings",
        es: "Saludos",
    };

    // logger messages
    const logMessages = {
        en: "Logged in",
        es: "Inicio sesión",
    };

    // Greetr.prototype – The place where you define methods (to save memory space) that all Greetr instances can use.
    Greetr.prototype = {
        // 'this' refers to the calling object at execution time
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        validate() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (!supportedLangs.includes(this.language)) {
                throw "Invalid language";
            }
        },

        // retrieve messages from object by referring to properties using [] syntax
        greeting() {
            return `${greetings[this.language]} ${this.firstName}`;
        },

        formalGreeting() {
            return `${formalGreetings[this.language]} ${this.fullName()}`;
        },

        // chainable methods return their own containing object
        greet(formal) {
            // if undefined or null it will be coerced to 'false'
            const msg = formal ? this.formalGreeting() : this.greeting();
            console.log(msg);
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log() {
            console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            // makes the method chainable
            return this;
        },

        setLang(lang) {
            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        htmlGreet(selector, formal) {
            // determine the message
            const msg = formal ? this.formalGreeting() : this.greeting();

            if (typeof $ !== "undefined" && $(selector).length) {
                // inject the message in the chosen place in the DOM
                $(selector).text(msg);
            } else {
                const element = document.querySelector(selector);
                if (element) {
                    element.textContent = msg;
                } else {
                    throw "Invalid selector: " + selector;
                }
            }
            // make chainable
            return this;
        },
    };

    // Greetr.init Constructor – This is the actual constructor that gets used to initialize the instance and its properties without calling 'new'.
    Greetr.init = function (firstName, lastName, language) {
        const self = this;

        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

        self.validate();
    };

    // This line ensures that instances of Greetr.init (created by calling new Greetr.init(...)) will inherit the methods defined on Greetr.prototype.
    // // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // Exposing Greetr to the Global Scope
    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;
})(window, jQuery);
