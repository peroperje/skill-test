import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { compose } from 'recompose';

import withShouldFetch from '../../HoC/withShouldFetch';
import { ApplicationState } from '../../state';
import { fetchFilesRequest } from '../../state/files/actions';
import { shouldFetch } from '../../state/files/selectors';

import Files from './Files';

interface DispatchProps {
  fetchFn: () => void;
}

interface StateProp {
  shouldFetch: boolean;
}

const mapStateToProps: MapStateToProps<
  StateProp,
  null,
  ApplicationState
> = state => ({
  shouldFetch: shouldFetch(state)
});

const dispatchStateToProps: MapDispatchToProps<
  DispatchProps,
  null
> = dispatch => ({
  fetchFn: (): void => {
    dispatch(fetchFilesRequest());
  }
});

export default compose(
  connect(
    mapStateToProps,
    dispatchStateToProps
  ),
  withShouldFetch('shouldFetch', 'fetchFn')
)(Files);
