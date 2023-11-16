import React from "react";
import { useRouteError } from "react-router-dom";

export const Error: React.FC = () => {
  const error: unknown = useRouteError();
  return (
    <div>
      <div>
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </div>
    </div>
  );
};
