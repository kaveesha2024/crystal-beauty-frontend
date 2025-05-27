export interface IManageProfileFormPropsTypes {
    currentUserDetails: ICurrentUserInformationTypes;
    handleManageProfileInputDetails: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleManageProfileSubmit: (image: File | null | string | unknown) => void;
}
