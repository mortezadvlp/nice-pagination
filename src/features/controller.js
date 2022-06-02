

export function calcButtons(currentpage, totalPages, minButtonsToDots) {

    var buttons = [];
    var buttons = [];
    if(totalPages < 2) {
        return buttons;
    }

    if(totalPages < minButtonsToDots) {
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(String(i))
        }
        return buttons;
    }

    buttons.push('1');

    if(currentpage <= 2) {
        buttons.push('2');
        buttons.push('3');
        buttons.push('+...');
    }
    else if(currentpage >= totalPages - 1) {
        buttons.push('-...');
        buttons.push(String(totalPages - 2));
        buttons.push(String(totalPages - 1));
    }
    else {
        if(currentpage > 3) {
            buttons.push('-...');
        }
        buttons.push(String(currentpage - 1));
        buttons.push(String(currentpage));
        buttons.push(String(currentpage + 1));
        if(currentpage < totalPages - 2) {
            buttons.push('+...');
        }
    }

    buttons.push(String(totalPages));
    
    return buttons;

}