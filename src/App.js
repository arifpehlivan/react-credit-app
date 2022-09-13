import { useEffect } from 'react';
import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Popup from './components/Popup';
import { Context } from "./context.js";

function App() {
  const [popup, setPopup] = useState(false);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    amount: "",
    times: "",
    time: "",
    rate: "",
    bsmv: "",
    kkdf: ""
  })
  const [table, setTable] = useState([])
  var dataTable = [
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
    {
        
        "taksitNo": "2",
        "taksitTutar": "2",
        "anaPara": "2",
        "kalanAnaPara": "2",
        "kar": "2",
        "k": "2",
        "b": "2",
    },
]
useEffect(() => {
  setTable(dataTable);
},[])

console.log(table)
  const column = [
    { heading: "Taksit No", value: "taksitNo" },
    { heading: "Taksit Tutarı", value: "taksitTutar" },
    { heading: "Ana Para", value: "anaPara" },
    { heading: "Kalan Ana Para", value: "kalanAnaPara" },
    { heading: "Kar Tutarı", value: "kar" },
    { heading: "KKDF", value: "k" },
    { heading: "BSMV", value: "b" },
  ]
  const tableArray = [[]];
  const data = {
    popup,
    setPopup,
    show,
    setShow,
    form,
    setForm,
    table,
    setTable,
    column,
    tableArray,
    dataTable
  }
  return (
    <Context.Provider value={data}>
      <Header />
      <Popup />
      <Form />
      <Footer />
    </Context.Provider>
  );
}

export default App;
