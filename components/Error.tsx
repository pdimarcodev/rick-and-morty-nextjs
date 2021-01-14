import { ApolloError } from "@apollo/client";

interface Props {
  error: ApolloError;
}

const ErrorComponent: React.FC<Props> = ({ error }) => {
  const message =
    error.message === "404: Not Found"
      ? "No search results."
      : "Something went wrong, Please try again later!";

  return <p style={{ color: "red" }}>{message}</p>;
};

export default ErrorComponent;
