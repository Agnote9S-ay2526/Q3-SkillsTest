
    function seePayment () {
         
        // Var Declaration
        const TICKET_PRICE =250.00;
        const ADMIN_FEE =50.00; 
        let ticketQTY= Number(document.getElementById("ticketQTY").value);
        let subTotal = Number(TICKET_PRICE * ticketQTY);
        let totalPrice = Number(subTotal + ADMIN_FEE);

        // Display Result
        document.getElementById("subTotal").value = subTotal;
        document.getElementById("ticketQTY").value = ticketQTY;
        document.getElementById("totalPrice").value = totalPrice;
    }
    
    
  