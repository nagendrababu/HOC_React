export const WithUpperCaseProps = (WrappedComponent) => {
  return (props) => {
    const upperCaseVal = props.propValue.toUpperCase();
    return <WrappedComponent {...props} upperCaseVal={upperCaseVal} />;
  };
};
