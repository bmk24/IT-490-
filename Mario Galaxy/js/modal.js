var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        //return false; // nothing happens
    }
});
modal.setContent('<h1>About</h1><div id="credits">Mario Galaxy - NJIT IT490 Game<br> designed by:<br>Tim Chuba<br>Ryan Winston<br>Brandon Koenig<br>Eric Meyer<br>Akm Islam<br><p>How to Play:</p><p>Arrow Keys - Navigation and Player Control</p><p>Enter Key  - Select Option</p><p>Escape Key - Main Menu</p><h3>Press Escape to Exit</h3></div>');



    


    
    
    
    
    