export interface StateProps {
  firstName: string;
  lastName: string;
}

export interface DispatchProps {
  logout: () => void;
}
