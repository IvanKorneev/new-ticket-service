import React from "react";
import TicketsServiceContext from "../ticket-service-context";

const WithTicketsService = () => (Wrapped) => {
    return (props) => {
        return (
            <TicketsServiceContext.Consumer>
                {
                    (TicketService) => {
                        return <Wrapped{...props} TicketService={TicketService}/>
                    }
                }
            </TicketsServiceContext.Consumer>
        )
    }
};
export default WithTicketsService