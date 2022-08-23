window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
          modals = require('./modules/modals'),
          timers = require('./modules/timers'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          sliders = require('./modules/sliders');

    tabs();
    modals();
    timers();
    cards();
    calc();
    forms();
    sliders();
});
    




