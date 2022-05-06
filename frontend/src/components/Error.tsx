import React from 'react';
import { IErrorApiResponse } from "../interfaces/error";

interface IErrorProps {
    error: IErrorApiResponse;
}

export const Error: React.FunctionComponent<IErrorProps> = ({ error }: IErrorProps) => {
    return (
        <p>
            {error?.data?.message}
        </p>
    )
};
