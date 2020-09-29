import React, {Component} from 'react';

import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component {
  constructor(props){
    super(props)
    this.state = {
      pesan:"",
      tampil: false,
      jumlah: 0
      }
    this.pilihPesanan = this.pilihPesanan.bind(this);
    this.nasipadang = this.nasipadang.bind(this);
    this.sate = this.sate.bind(this);
    this.soto = this.soto.bind(this);
    this.uduk = this.uduk.bind(this);
    this.kuning = this.kuning.bind(this);
    this.batal = this.batal.bind(this);
  }
  pilihPesanan(pilih,i){

    this.setState({[pilih]:i.target.value , tampil:true})
  }
  nasipadang(){
    this.setState({
      pesan: "Nasi Padang",
      jumlah: this.state.jumlah + 1,
      tampil:true
    })
  }
  sate(){
    this.setState({
      pesan: "Sate",
      jumlah: this.state.jumlah + 1,
      tampil:true
    })
  }
  soto(){
    this.setState({
      pesan: "Soto Ayam Lamongan",
      jumlah: this.state.jumlah + 1,
      tampil:true
    })
  }
  uduk(){
    this.setState({
      pesan: "Nasi Uduk",
      jumlah: this.state.jumlah + 1,
      tampil:true
    })
  }
  kuning(){
    this.setState({
      pesan: "Nasi Kuning",
      jumlah: this.state.jumlah + 1,
      tampil:true
    })
  }
  batal(){
    this.setState({
      pesan: "",
      jumlah: 0,
      tampil:false
    })
  }
  render(){
		return(
			<div>
				<h3>Daftar Makanan Yang Kami Sediakan : </h3><br/>
				<center><table>
        <tbody>
					<tr>
						<td>
							<ListMakanan image="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
							<center>
								<button onClick = {(e) => this.nasipadang(e)}>Pesan Sekarang</button>
							</center>
						</td>
						<td>
							<ListMakanan image="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
							<center>
								<button onClick = {(e) => this.sate(e)}>Pesan Sekarang</button>
							</center>
						</td>
						<td>
							<ListMakanan image="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
							<center>
								<button onClick = {(e) => this.soto(e)}>Pesan Sekarang</button>
							</center>
						</td>
						<td>
							<ListMakanan image="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
							<center>
								<button onClick = {(e) => this.uduk(e)}>Pesan Sekarang</button>
							</center>
						</td>
						<td>
							<ListMakanan image="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
							<center>
								<button onClick = {(e) => this.kuning(e)}>Pesan Sekarang</button>
							</center>
						</td>
					</tr>
          </tbody>
				</table></center>
				<br/>
				<input type="text" placeholder = "Masukan Pesanan Anda" onChange={(i) => this.pilihPesanan("pesan", i)}/>
				<input type="number" placeholder = "Jumlah Pesanan" onChange={(i) => this.pilihPesanan("jumlah",i)}/>
				<button onClick={(e) => this.batal(e)}>Batalkan Semua Pesanan</button>

				{this.state.tampil === true ?
					(
						<>
						<h3>Pesanan Anda : {this.state.pesan}</h3>
						<h3>Jumlah : {this.state.jumlah}</h3>
						</>
					) : (
						<center>
							<h1>Anda Belum Memesan</h1>
						</center>
					)}
			</div>
		)
	}
}
export default MenuMakanan;
