import React, {Component} from "react";
import './aside-list-container.sass'
import {connect} from 'react-redux'
import WithTicketsService from "../../hoc";
import {fetchAside} from "../../actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import AsideList from "../../component/aside-list";



class AsideListContainer extends Component {

    componentDidMount() {
        this.props.fetchAside();
    };


    render() {
        const {asideEvents, loading, error} = this.props;
        // if (loading) {
        //     return <Spinner/>
        // }
        // // if (error) {
        // //     return <Error/>
        // // }
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
const mapDispatchToProps = (dispatch, ownProps) => {
    const {TicketService} = ownProps;
    return {
        fetchAside: fetchAside(TicketService, dispatch)
    };
};

export default WithTicketsService()(
    connect(mapStateToProps, mapDispatchToProps)(AsideListContainer)
);

