import $ from 'jquery';

import image from './image.js';

export default class {
    constructor($container, total, type) {
        this.$container = $container;
        this.type = type;

        for (let i = 0; i < total; i++) {
            this.$container.append(this.generateDiv());
        }

        this.$singles = this.$container.find('.single-component');

        this.eventListener();
    }
    generateDiv() {
        const $div = `
            <div class="single-component">
                ${image[this.type]}
            </div>
        `;

        return $div;
    }
    changeRank(e, className = 'active') {
        const $this = $(e.currentTarget);

        const index = this.$singles.index($this);
        this.$singles.removeClass(className);

        this.$singles.each((i, item) => {
            if (i <= index) {
                $(item).addClass(className);
            }
        });
    }
    eventListener() {
        this.$singles
            .on('mouseover', e => {
                this.changeRank(e);
            })
            .on('mouseleave', () => {
                this.$singles.removeClass('active');
            })
            .on('click', e => {
                this.changeRank(e, 'selected');
            });
    }
    getValue() { }
    setValue() { }
}
