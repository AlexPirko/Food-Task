window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
<<<<<<< HEAD
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');
=======
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
    




>>>>>>> d1f62ac0fa738e2b6ba16ce8d506d14870a3f0f5

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
});