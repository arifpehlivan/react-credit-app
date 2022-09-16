import { useEffect } from 'react';
import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Popup from './components/Popup';
import { Context } from "./context.js";
import { modeContext } from "./modeContext";

function App() {
  const [popup, setPopup] = useState(false);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(false);
  const [form, setForm] = useState({
    amount: Number,
    times: "",
    time: Number,
    rate: Number,
    bsmv: "",
    kkdf: ""
  })
  const [table, setTable] = useState([])
  var dataTable = [
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    },
    {
      "taksitNo": Number,
      "taksitTutar": Number,
      "anaPara": Number,
      "kalanAnaPara": Number,
      "kar": Number,
      "kkdf": Number,
      "bsmv": Number,
    }
  ]
  // dataTable.length = 12;
  // var weeks = 30 / 30;
  // var karOranı = (form.amount * form.rate * weeks)
  // console.log("karOranı",karOranı)
  // console.log(form.amount);
  form.rate = 0.0228;
  form.time = 12;
  var taksitTutari = (form.amount * (form.rate * (Math.pow((1 + form.rate), (form.time)))) / (Math.pow((1 + form.rate), (form.time)) - 1));
  var timeFactor = 1;
  if (form.times === "weeks") {
    timeFactor = 7 / 30;
  } else if (form.times === "years") {
    timeFactor = 365 / 30;
  }
  var karTutari = (form.amount * form.rate * timeFactor)
  console.log("taksitTutari", taksitTutari);
  dataTable.map((item, index) => {
    dataTable[index].taksitNo = index + 1;
    dataTable[index].taksitTutar = taksitTutari.toFixed(2);
    dataTable[0].anaPara = (taksitTutari - ((karTutari) + (karTutari * 0.15) + (karTutari / 10))).toFixed(2);
    dataTable[0].kalanAnaPara = (form.amount - ((taksitTutari - (karTutari) + (karTutari * 0.15) + (karTutari / 10)))).toFixed(2);
    dataTable[0].kar = (karTutari).toFixed(2);
    dataTable[0].kkdf = (karTutari * 0.15).toFixed(2);
    dataTable[0].bsmv = (karTutari / 10).toFixed(2);
    if (index > 0) {
      var kar = dataTable[index].kar = (dataTable[index - 1].kalanAnaPara * form.rate).toFixed(2);
      var k = dataTable[index].kkdf = (dataTable[index].kar * 0.15).toFixed(2);
      var b = dataTable[index].bsmv = (dataTable[index].kar / 10).toFixed(2);
      kar = Number(kar)
      k = Number(k)
      b = Number(b)
      var total = kar + k + b;
      dataTable[index].anaPara = (taksitTutari - total).toFixed(2);
      dataTable[index].kalanAnaPara = (dataTable[index - 1].kalanAnaPara - dataTable[index].anaPara).toFixed(2);
    }

  })

  useEffect(() => {
    setTable(dataTable);
  }, [form])
  const column = [
    { heading: "Taksit No", value: "taksitNo" },
    { heading: "Taksit Tutarı", value: "taksitTutar" },
    { heading: "Ana Para", value: "anaPara" },
    { heading: "Kalan Ana Para", value: "kalanAnaPara" },
    { heading: "Kar Tutarı", value: "kar" },
    { heading: "KKDF", value: "kkdf" },
    { heading: "BSMV", value: "bsmv" },
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
  const modeData = {
    mode, setMode
  }
  return (
    <Context.Provider value={data}>
      <modeContext.Provider value={modeData}>
        <Header />
        <Popup />
        <Form />
        <Footer />
      </modeContext.Provider>
    </Context.Provider>
  );
}

export default App;
