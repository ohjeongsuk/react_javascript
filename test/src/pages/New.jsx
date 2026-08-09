import { useSearchParams } from "react-router-dom";

const New = () => {
  const [params, setParams] = useSearchParams();

  return <div>New{param.get("value")}</div>;
};

export default New;
