import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues, RegisterOptions } from "react-hook-form";
import Button from "./button";

type FieldProps = {
    type: string,
    name: string,
    label: string,
    validate: RegisterOptions
}

interface FormProps {
    fields: FieldProps[];
    onSubmit: SubmitHandler<FieldValues>;
}

export default function Form({ fields, onSubmit }: FormProps) {
    const { register, handleSubmit, reset, formState } = useForm();
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    const handleFormSubmit = (form: any) => {
        setFormSubmitted(true)
        onSubmit(form);
        reset();

        setTimeout(() => {
            setFormSubmitted(false);
        }, 1500)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {formSubmitted &&
                <div className="bg-green-100 text-base text-green-800 p-3 rounded-lg mt-2" role="alert">
                    The form has been submitted!
                </div>
            }
            {fields.map(field => (
                <Field
                    key={`input_${field.name}`}
                    register={register}
                    error={formState.errors[field.name]?.message as string}
                    {...field}
                />
            ))}
            <Button type="submit" loading={formSubmitted} disabled={formSubmitted}>Save</Button>
        </form>
    );
}

const Field = ({
    name,
    type,
    label,
    validate,
    error,
    register
}: FieldProps & { error: string; register: any }) => {
    return (
        <div className="mt-4">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <div className="flex flex-col items-start">
                <input
                    type={type}
                    placeholder={label}
                    className="block w-full mt-1 border border-gray-400 rounded-md shadow-sm focus:border-pink-700 p-2"
                    {...register(name, validate)}
                />
            </div>
            {error &&
                <div className="text-base text-red-700 mt-2" role="alert">
                    {error}
                </div>
            }
        </div>
    )
}