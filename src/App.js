import "./styles.css";
import { WithUpperCaseProps } from "./WithUpperCaseProps";
import { MyComponent } from "./MyComponent";
export default function App() {
  const WrappedComponent = WithUpperCaseProps(MyComponent);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>HOC usage</h2>
      <WrappedComponent propValue="Hello Nagendra" />
    </div>
  );
}
