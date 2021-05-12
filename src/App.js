import React, {useState} from 'react'

function App() {
  const [keuntunganTotal, setKeuntunganTotal] = useState(0)
  const [totalProduksi, setTotalProduksi] = useState(0)
  const [profit, setProfit] = useState(null)

  const hitungProfit = () => {
    const result = keuntunganTotal - totalProduksi
    setProfit(result)
  }

  return (
    <div>
      <label>Keuntungan total</label> <br/>
      <input
        placeholder='Isi disini...'
        onInput={(e) => {setKeuntunganTotal(e.target.value)}}
        />
      <br/>

      <label>Total biaya produksi</label><br/>
      <input
        placeholder='Isi disini...'
        onInput={e => {setTotalProduksi(e.target.value)}}
        />

      <br/>
      <button
        onClick={e => hitungProfit()}
      >Hitung profit</button>
      <br/>
      <div>Jadi, profitnya adalah: Rp: {profit ? profit : '-'}</div>
    </div>
  );
}

export default App;
