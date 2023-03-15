type DataTypes = {
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
    setState(data);
    }
