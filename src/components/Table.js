import React from 'react'
import "./table.css"
import { Context, useContext } from '../context';

const Table = () => {
    const { data1, column, table } = useContext(Context);
    
    // var dataTable = [
    //     {
    //         "a": "2",
    //         "b": "2",
    //         "c": "2",
    //         "d": "2",
    //         "e": "2",
    //         "f": "2",
    //         "g": "2",
    //     }
    // ]
    // setTable(dataTable);
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
            return <td key={index}>{item[`${columnItem.value}`]}</td>
            // {`${index}`}
        })}
    </tr>
)

export default Table