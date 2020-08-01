import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form Pembelian Buah</h1> 

      <form>
        <div className="form-group">
          <label forName="nama"><b>Nama Pelanggan</b></label>

          <div className="input"> 
            <input type="text" name="nama"></input>
          </div>
        </div>

        <div className="form-group">
          <label className="atribute" forName="item"><b>Daftar Item</b></label> 

          <div className="input">
            <input type="checkbox" id="item1" name="item1" value="Semangka"></input>
            <label className="check" forName="item1">Semangka</label>
            <br />

            <input type="checkbox" id="item2" name="item2" value="Jeruk"></input>
            <label className="check" forName="item2">Jeruk</label>
            <br />

            <input type="checkbox" id="item3" name="item3" value="Nanas"></input>
            <label className="check" forName="item3">Nanas</label>
            <br />

            <input type="checkbox" id="item4" name="item4" value="Salak"></input>
            <label className="check" forName="item4">Salak</label>
            <br />

            <input type="checkbox" id="item5" name="item5" value="Anggur"></input>
            <label className="check" forName="item5">Anggur</label>
            <br />
          </div>

          <input type="submit" value="Kirim"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
