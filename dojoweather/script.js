console.log("Page loade..")











function deleteElement( event ){
    console.log( event.target );
    let entireElement = event.target.closest( '.cookies' );
    console.log( entireElement );
    entireElement.remove();
}



