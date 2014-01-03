window.onload = function ( ) {

    var text = document.getElementById( 'entry' );
    var submit = document.getElementById( 'submit' );
    var task = document.getElementById( 'task' );

    function addToDo( ) {
        var entry = text.value;
        var addItem = document.createElement( 'li' );
        // addItem.appendChild( document.createTextNode( entry ) );
        addItem.innerHTML = entry + ' <button class="btn delete"> delete </button>';
        task.appendChild( addItem );
        addItem.querySelector( '.btn.delete' ).onclick = function ( ) {
            addItem.remove( );
        }
    }
    submit.onclick = addToDo;
}
