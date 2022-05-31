let selectLabel = function () {
    let labelLink = document.querySelectorAll('.link');
    let labelItem = document.querySelectorAll('.item');
    let labelValue;

    labelLink.forEach(function(item) {
        item.addEventListener('click', selectLabelLink)
    });

    function selectLabelLink(event) {
        event.preventDefault();

        labelLink.forEach(function(item) {
            item.classList.remove('active');
        });

        this.classList.add('active');
        labelValue = this.getAttribute('data-label');
        selectLabelItem(labelValue);
    }

    function selectLabelItem(labelValue) {
        labelItem.forEach(function(item) {
            item.classList.contains(labelValue) ? item.classList.add('active') : item.classList.remove('active');
        })
    }
};

document.addEventListener('DOMContentLoaded', selectLabel);