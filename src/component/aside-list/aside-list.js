import React, {Component} from "react";
import './aside-list.sass'
import Calendar from 'react-calendar';
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {fetchAside} from "../../actions";
import AsideItem from "../aside-items";
import Spinner from "../spinner";
import Error from "../error";


class AsideList extends Component {

    componentDidMount() {
       this.props.fetchAside()
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
            <section className='aside'>
                <div className='aside-calendar'>
                    <Calendar/>
                </div>
                <div className='aside-upcoming-events'>
                    <h2>Upcoming Events</h2>
                    {
                        asideEvents.map((asideEvents) => {
                            return <AsideItem key={asideEvents.eventId} eventsPropsItem={asideEvents}/>
                        })
                    }
                </div>
            </section>
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
const mapDispatchToProps = (dispatch, ownProps) => {
    const {TicketService} = ownProps;
    return {
        fetchAside: fetchAside(TicketService,dispatch)
    };
};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(AsideList)
);

