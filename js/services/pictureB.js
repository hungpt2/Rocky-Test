angular
    .module('app')
    .service('pictureBService', pictureBService)

pictureBService.$inject = ['$http'];

function pictureBService($http) {

    var listEl = [{
            title: 'Construction contact sheet',
            listOpt: [{
                    key: 1,
                    value: 'Option #1'
                },
                {
                    key: 2,
                    value: 'Option #2'
                },
                {
                    key: 3,
                    value: 'Option #3'
                }
            ],
            description: 'Whether aconstruction contact sheet is placed'
        },
        {
            title: 'Wheel stopper',
            listOpt: [{
                    key: 1,
                    value: 'Option #1'
                },
                {
                    key: 2,
                    value: 'Option #2'
                },
                {
                    key: 3,
                    value: 'Option #3'
                }
            ],
            description: 'Is it appropriate to install wheel stops?'
        },
        {
            title: 'KY',
            listOpt: [{
                    key: 1,
                    value: 'Option #1'
                },
                {
                    key: 2,
                    value: 'Option #2'
                },
                {
                    key: 3,
                    value: 'Option #3'
                }
            ],
            description: 'Is advance KY implemented'
        },
        {
            title: 'Working zone',
            listOpt: [{
                    key: 1,
                    value: 'Option #1'
                },
                {
                    key: 2,
                    value: 'Option #2'
                },
                {
                    key: 3,
                    value: 'Option #3'
                }
            ],
            description: 'Whether you are building work zones according to site conditions'
        },
        {
            title: 'Security guard',
            listOpt: [{
                    key: 1,
                    value: 'Option #1'
                },
                {
                    key: 2,
                    value: 'Option #2'
                },
                {
                    key: 3,
                    value: 'Option #3'
                }
            ],
            description: 'Sercurity guards are deployed'
        },
    ]
    this.getListEl = function () {
        return listEl;
    };

}