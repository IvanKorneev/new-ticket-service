import React, {Component} from "react";
import './aside-list-container.sass'
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {asideLoaded,  eventsError} from "../../actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import AsideList from "../../component/aside-list";
import {getUpcomingEvents} from "../../api/api";



class AsideListContainer extends Component {
    componentDidMount() {
        const { eventsError, asideLoaded,} = this.props;

        getUpcomingEvents().then((response) => asideLoaded(response.data.events))
            .catch((error) => eventsError(error))

    };


    render() {
        const {asideEvents, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <Error/>
        }
        return (
            <AsideList asideEvents={asideEvents}/>
        )
    };
}

const mapStateToProps = (state) => {

    return {
        asideEvents: state.asideState,
        loading: state.loading,
        error: state.error
    }
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//     const {TicketService} = ownProps;
//     return {
//         fetchAside: fetchAside(TicketService, dispatch)
//     };
// };


const mapDispatchToProps = {
    asideLoaded,
    eventsError,

};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(AsideListContainer)
);

