

import { Card } from "../components/Card"
import pelepasanrodaBelakang1 from "../assets/images/Pelepasan Roda belakang 1.png"
import pelepasanrodaBelakang2 from "../assets/images/Pelepasan Roda belakang 2.png"
import pemasanganrodaBelakang1 from "../assets/images/Pemasangan Roda Belakang 1.png"

import pelepasanrodaDepan1 from "../assets/images/Pelepasan Roda depan 1.png"
import pelepasanrodaDepan2 from "../assets/images/Pelepasan Roda depan 2.png"
import pemasanganrodaDepan1 from "../assets/images/Pemasangan Roda Depan 1.png"




export const Roda = () => {

  // const [movies, setMovies] = useState([]);
  
    const myStyle = {
        listStyleType: 'square'
    }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="ml-4 sm:ml-8 mt-4 mb-4 text-3xl dark:text-white">Roda Belakang</h1>
            <div className="flex justify-evenly flex-wrap">
                <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
                    <img src={pelepasanrodaBelakang1} />
                    <img className="mt-4" src={pelepasanrodaBelakang2} />
                    <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Pelepasan Roda Belakang</h1>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Letakkan Sepeda motor anda pada standar tengah</li>
                            <li>Sanggah sepeda motor anda denga naman dan naikkan roda depan ke atas permukaan dengan menggunakan balok penyangga atau peralatan penyangga lainya</li>
                            <li>Lepaskan kabel speedometer dengan menekan tab</li>
                            <li>Lepaskan mur as roda depan</li>
                            <li>Lepaskan poros as roda depan, roda depan, gearbox speedometer dan collar samping</li>
                            <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-inside dark:text-gray-400" style={myStyle}>
                                <li>Jagalah agar permukaan cakram atau kampas rem tidak terkena geuk pelumas, oli atau kotoran.</li>
                                <li>Jangan Tarik hendel rem pada saat roda depan dilepaskan</li>
                            </ul>
                        </ul>
                </div>
                <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
                    <img src={pemasanganrodaBelakang1} />
                    
                    <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Pemasangan Roda Belakang</h1>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Pasang collar samping dan gearbox speedometer pada roda</li>
                            <li>Posisiskan roda di antara kaki-kaki garpu dan sisipkan poros as roda depan dan sisi sebelah kanan, melalui kaki garpu kanan dan hub roda</li>]
                                <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-inside dark:text-gray-400" style={myStyle}>
                                    <li>Perhatian memasang roda, memasuki cakram rem di antara kedua kampas rem depan dengan hati hati </li>
                                </ul>
                            <li>Pastikan bahwa tonjolan pada kaki garpu kiri berada di dalam celah gearbox</li>
                            <li>Kencangkan mur as roda depan </li>
                            <li>Setelah measang roda, coba rem beberapa kalikemudian periksa apakah roda berputar dengan bebas periksa Kembali jika rem menyangkut atau jika roda tidak dapat berputar</li>
                            <li>Pasang kabel speedometer dengan erat.</li>
                        </ul>
                </div>
            </div>

        </div>

        <div className="border mt-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="ml-4 sm:ml-8 mt-4 mb-4 text-3xl dark:text-white">Roda Depan</h1>
            <div className="flex justify-evenly flex-wrap">
                <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
                    <img src={pelepasanrodaDepan1} />
                    <img className="mt-4" src={pelepasanrodaDepan2} />
                    <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Pelepasan Roda Depan</h1>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Sanggalah sepeda motor anda denga naman dan naikkan roda belakag dari atas permukaan dengan menggunakan balok penyangga atau peralatan lain </li>
                            <li>Kendurkan mur as roda belakang, mur pengunci dan putar mur penyetel sehingga roda belakang dapat bergerak maju sepenuhnya ke depan agar kekenduran rantai roda maksimal </li>
                            <li>Lepaskan mur as roda belakang </li>
                            <li>Lepaskan rantai roda dari sprocket roda belakang dengan mendorog roda belakang ke arah  depan.</li>
                            <li>Lepaskan poros as roda belakang, washer as roda, collar samping dan roda belakang </li>
                            <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-inside dark:text-gray-400" style={myStyle}>
                                <li>Sanggah rakitan clipper rem sehingga tidak menggantung dari selang rem. (jangan memelintir selang rem)</li>
                                <li>Jagalah agar permukaan cakram atau kampas rem tidak terkena gemuk pelumas, oli atau kotoran.</li>
                                <li>Jangan menginjak pedal rem selama caliper rem dilepaskan</li>
                            </ul>
                        </ul>
                </div>
                <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
                    <img src={pemasanganrodaDepan1} />
                    
                    <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Pemasangan Roda Depan</h1>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Untuk memasang roda belakang, pasanglah kebalikan dari proses pelepasan</li>
                                <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-inside dark:text-gray-400" style={myStyle}>
                                    <li>Berhati – hatilah agar clipper rem tidak enggoren selama pemasangan</li>
                                </ul>
                            <li>Pastikan bahwa slot pada dudukan caliper rem berada pada tonjolan pada lengan ayun</li>
                            <li>Setel kekenduran rantau roda</li>
                            <li>Pasang dan kencangkan mur as roda belakang</li>
                            <li>Setelah measang roda, coba rem beberapa kalikemudian periksa apakah roda berputar dengan bebas periksa Kembali jika rem menyangkut atau jika roda tidak dapat berputar</li>
                        </ul>
                </div>
            </div>

        </div>
      </section>
    </main>
  )
}