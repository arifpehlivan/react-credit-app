import React from 'react'
import "./table.css"
import { Context, useContext } from '../context';

const Table = () => {
    const { column, table } = useContext(Context);
    return (
        <table>
            <thead>
                <tr>
                    {column.map((item, index) => <TableHeadItem key={index} item={item} />)}
                </tr>
            </thead>
            <tbody>
                {table?.map((item, index) => <TableRow key={index} item={item} column={column} />)}
            </tbody>
        </table>
    )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column }) => (
    <tr>
        {column.map((columnItem, index) => {
            return <td key={index}>{item[`${columnItem.value}`]}{columnItem.value === "taksitNo" || columnItem.value === "kar" || columnItem.value === "kkdf" || columnItem.value === "bsmv" ? " " : " TL"}</td>
        })}
    </tr>
)

export default Table