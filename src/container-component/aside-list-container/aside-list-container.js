import React, {Component} from "react";
import './aside-list-container.sass'
import {connect} from 'react-redux'
import {asideLoaded,  eventsError} from "../../store/actions";
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




const mapDispatchToProps = {
    asideLoaded,
    eventsError,

};

export default
    connect(mapStateToProps, mapDispatchToProps)(AsideListContainer);

