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


export function isDoneTask (checkoutAndCall : string, doneTask:handleTypes) {
  axios
  .put(`http://localhost:4000${checkoutAndCall}`, doneTask)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
}


export interface handleTypes {
      done?: boolean;
      firstname?: string;
      lastname?: string;
      address?: string;
      ironwork?: string;
      modelNumber?: number;
      number?: string;
  }
export function deleteNumbers(checkoutAndCall:string, deleteTask: handleTypes ) {
  axios.delete(`http://localhost:4000${checkoutAndCall}/${deleteTask?.number}`)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
}