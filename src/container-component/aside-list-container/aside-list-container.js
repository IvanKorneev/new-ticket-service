import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import './aside-list-container.sass'
import {fetchAside} from "../../store/actions";
import Error from "../../component/error";
import AsideList from "../../component/aside-list";
import {getAsideEvents} from "../../store/selectors/aside-list-selectors";

const AsideListContainer = ({error}) => {
    const asideState = useSelector(getAsideEvents);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAside());
    },[fetchAside]);

    if (error) {
        return <Error/>
    }
    return (
        <AsideList asideEvents={asideState}/>
    )
};

export default AsideListContainer;

