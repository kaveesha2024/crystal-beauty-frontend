export interface ISignInInputDetailsTypes {
    email: string;
    password: string;
}
export interface SignInFormProps {
    handleSignInInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSignInSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
