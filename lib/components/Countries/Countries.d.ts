import { Component } from "react";
interface ICountryP {
    name: string;
    classname: string;
    label: string;
}
interface ICountryS {
    CountriesList: Array<{
        name: string;
        code: string;
    }>;
}
export declare class SelectCountries extends Component<ICountryP, ICountryS> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
