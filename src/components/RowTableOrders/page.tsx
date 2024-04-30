import './style.scss';
export interface RowTableOrderProps {
    orderNum?: string;
    date?: string;
    user?: string;
    status?: string;
    amount?: number;
}
function RowTableOrder({ orderNum,date,user,status,amount }: RowTableOrderProps) {
    return (
        <div className="div-rows">
            <div className="rows-order-table">
                <p>#{orderNum}</p>
                <p>{date}</p>
                <p>{user}</p>
                <p>{status}</p>
                <p>R$ {amount}</p>
                <p>Ver mais</p>
            </div>
        </div>
    )
}
export default RowTableOrder;