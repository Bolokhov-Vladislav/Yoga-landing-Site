window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tabs = require('./parts/tabs'),
        calc = require('./parts/calc'),
        form = require('./parts/form'),
        timer = require('./parts/timer'),
        slider = require('./parts/slider'),
        openModal = require('./parts/open-modal'),
        formModal = require('./parts/form-modal');

        tabs();
        calc();
        form();
        timer();
        slider();
        openModal();
        formModal();
});
