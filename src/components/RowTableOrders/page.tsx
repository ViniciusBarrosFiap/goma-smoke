import './style.scss';
export interface RowTableOrderProps {
    orderNum?: string;
    date?: string;
    user?: string;
    status?: string;
    amount?: number;
}
function RowTableOrder({ orderNum = "",
    date = "",
    user = "",
    status = "",
    amount = 0 }: RowTableOrderProps) {
    return (
        <div className="div-rows">
            <div className="rows-order-table">
                <h4>#{orderNum}</h4>
                <h4>{date}</h4>
                <h4>{user}</h4>
                <h4>{status}</h4>
                <h4>{amount}</h4>
                <h4>Ver mais</h4>
            </div>
        </div>
    )
}
export default RowTableOrder;