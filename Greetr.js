// IIFE (Immediately Invoked Function Expression) – A function that’s defined and executed right away to create a private scope, preventing global namespace pollution.
(function (global, $) {
    // Greetr Function – A constructor function that creates new instances of Greetr.init, which contains properties like firstName, lastName, and language.
    const Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    const supportedLangs = ["en", "es"];

    // Greetings for supported languages
    const greetings = {
        en: "Hello",
        es: "Hola",
    };

    const formalGreetings = {
        en: "Greetings",
        es: "Saludos",
    };

    const logMessages = {
        en: "Logged in",
        es: "Inicio sesión",
    };

    // Greetr.prototype – The place where you define methods that all Greetr instances can use.
    Greetr.prototype = {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        validate() {
            if (!supportedLangs.includes(this.language)) {
                throw "Invalid language";
            }
        },

        greeting() {
            return `${greetings[this.language]} ${this.firstName}`;
        },

        formalGreeting() {
            return `${formalGreetings[this.language]} ${this.fullName()}`;
        },

        greet(formal) {
            const msg = formal ? this.formalGreeting() : this.greeting();
            console.log(msg);
            return this;
        },

        log() {
            console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            return this;
        },

        setLang(lang) {
            this.language = lang;
            this.validate();
            return this;
        },
    };

    // Greetr.init Constructor – This is the actual constructor that gets used to initialize the instance and its properties.
    Greetr.init = function (firstName, lastName, language) {
        const self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    };

    // This line ensures that instances of Greetr.init (created by calling new Greetr.init(...)) will inherit the methods defined on Greetr.prototype.
    Greetr.init.prototype = Greetr.prototype;

    // Exposing Greetr to the Global Scope
    global.Greetr = global.G$ = Greetr;
})(window, jQuery);
