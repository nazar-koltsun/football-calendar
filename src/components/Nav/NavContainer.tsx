import { connect } from 'react-redux';
import Nav from './Nav';
import { openNav, closeNav } from '../Redux/nav-reducer';
import { getIsNavOpen } from '../Redux/nav-selectors';
import { AppStateType } from '../Redux/redux-store';

type MapStateToPropsType = {
    isNavOpen: boolean;
}

type MapDispatchPropsType = {
    openNav: () => void
    closeNav: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isNavOpen: getIsNavOpen(state),
    };
};

export default connect<MapStateToPropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, { openNav, closeNav })(Nav);
