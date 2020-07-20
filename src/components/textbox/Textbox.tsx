import * as React from "react";
import { Input } from "@material-ui/core";

interface TextboxProps {
  autoComplete?: string;
}

export const Textbox: React.FC<TextboxProps> =
    ({ autoComplete }) => (
        <Input autoComplete={autoComplete} />
    );