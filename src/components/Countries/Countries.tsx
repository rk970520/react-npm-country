import React, { Component } from "react";
import countries from './countries.json';
interface ICountryP {
    name: string;
    classname: string;
    label: string;
}
interface ICountryS {
    CountriesList: Array<{ name: string; code: string }>;
}

export class SelectCountries extends Component<ICountryP, ICountryS> {
    constructor(props: any) {
        super(props);
        this.state = { CountriesList: countries };
    }

    render() {
        const { CountriesList } = this.state;
        return (
            <div className="countries-list">
                <label>{this.props.label}</label>
                <select name={this.props.name} className={this.props.classname}>
                    {
                        CountriesList.map((country, index) => (
                            <option key={index} value={country.code}>{country.name}</option>
                        ))
                    }
                </select>
            </div>
        );
    }
}