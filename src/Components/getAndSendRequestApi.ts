import axios from 'axios'

export type DataTypes = {
    done?: boolean;
    firstname?: string;
    lastname?: string;
    address?: string;
    ironwork?: string;
    modelNumber?: number;
    number?: string;
}[];

export async function getNumbersForCall(setState: React.Dispatch<React.SetStateAction<DataTypes>>, checkoutAndCall:string) {
    const res = await fetch(`http://localhost:4000${checkoutAndCall}`);
    const data = await res.json();
    setState(data.reverse());
    }


export interface handleDeleteTypes {
    checkoutAndCall: string;
    deleteTask?: { number: string };
    setDeleteTask: React.Dispatch<React.SetStateAction<{}>>;
    data: {
      done?: boolean;
      firstname?: string;
      lastname?: string;
      address?: string;
      ironwork?: string;
      modelNumber?: number;
      number?: string;
    };
  }
export function deleteNumbers({checkoutAndCall, data}:handleDeleteTypes) {
    axios.delete(`http://localehost:4000${checkoutAndCall}`).then((res) => console.log(res)).catch((err) => console.log(err))
}