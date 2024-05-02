import axios, { AxiosResponse } from "axios"

const serverUrl : string = import.meta.env.VITE_SERVER_URL;
export type PaymentType =
    {id: number | null,
    amount: number,
        country: string,
        currency: string,
        date: string,
        orderId: string,
        taxCode: number,
        taxRate: number,
        type: string
    }


export const getCountries = () : Promise<AxiosResponse<string[]>> => {
    return axios<string[]>({
        url: `${serverUrl}/api/country`,
        method: "GET",
        headers: {'Accept': 'application/json'}
    });
}

export const getPaymentsForCountry = (country : string) : Promise<AxiosResponse<PaymentType[]>> => {
    return axios<PaymentType[]>({
        url: `https://payments.multicode.uk/api/payment?country=${country}`,
        method: "GET",
        headers: {'Accept': 'application/json'}
    });
}

export const addNewTransaction = (payment : PaymentType) : Promise<AxiosResponse<PaymentType>> => {
    return axios<PaymentType>({
        url : `${serverUrl}/api/payment`,
        method: "POST",
        headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'},
        data : payment
    })
}