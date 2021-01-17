import React, {useEffect} from "react";
import './aside-list-container.sass'
import {connect} from 'react-redux'
import {fetchAside} from "../../store/actions";
import Error from "../../component/error";
import AsideList from "../../component/aside-list";
import {getAsideEvents, getErrorAside, getLoadingAside} from "../../store/selectors/aside-list-selectors";


const AsideListContainer = ({asideEvents, error, fetchAside}) => {

    useEffect(() => {
        fetchAside()
    },);

    if (error) {
        return <Error/>
    }
    return (
        <AsideList asideEvents={asideEvents}/>
    )
};

const mapStateToProps = (state) => {

    return {
        asideEvents: getAsideEvents(state),
        loading: getLoadingAside(state),
        error: getErrorAside(state)
    }
};

const mapDispatchToProps = {
    fetchAside
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideListContainer);

