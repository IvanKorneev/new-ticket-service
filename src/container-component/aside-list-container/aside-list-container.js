import React, {Component} from "react";
import './aside-list-container.sass'
import {connect} from 'react-redux'
import {fetchAside} from "../../store/actions";
import Spinner from "../../component/spinner";
import Error from "../../component/error";
import AsideList from "../../component/aside-list";


class AsideListContainer extends Component {
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
            <AsideList asideEvents={asideEvents}/>
        )
    };
}

const mapStateToProps = (state) => {

    return {
        asideEvents: state.aside.asideState,
        loading: state.aside.loading,
        error: state.aside.error
    }
};

const mapDispatchToProps = {
    fetchAside
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideListContainer);

