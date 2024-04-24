

import { Card } from "../components/Card"
import lampuDepan1 from "../assets/images/Bolam lampu depan .png"
import lampuBelakang1 from "../assets/images/Bolam lampu Sein belakang 1 .png"
import lampuBelakang2 from "../assets/images/Bolam lampu Sein belakang 2 .png"
import pelepasanrumahDepan1 from "../assets/images/Pelepasan Rumah Lampu depan 1.png"
import pelepasanrumahDepan2 from "../assets/images/Pelepasan Rumah Lampu depan 2.png"


import pelepasanrodaDepan1 from "../assets/images/Pelepasan Roda depan 1.png"
import pelepasanrodaDepan2 from "../assets/images/Pelepasan Roda depan 2.png"
import pemasanganrodaDepan1 from "../assets/images/Pemasangan Roda Depan 1.png"



export const Rantai = () => {

  // const [movies, setMovies] = useState([]);
  const myStyle = {
    listStyleType: 'square'
}

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="ml-4 sm:ml-8 mt-4 mb-4 text-3xl dark:text-white">Bohlam Lampu Depan</h1>
            <div className="flex justify-evenly flex-wrap">
                <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
                    <img src={lampuDepan1} />
                    <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Perawatan Bohlam Lampu Depan</h1>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Lepaskan rumah lampu depan</li>
                            <li>Lepaskan karet penutup debu</li>
                            <li>Tekan socket dan bohlam</li>
                            <li>Pasang bohlam baru dan part – part dengan urutan terbalik dari pelepasan</li>
                            <li>Pasang kembali karet penutup debu dengan tanda TOP nya menghadap ke atas</li>
                            <li>Jangan menyentuh permukaan kaca dengan jari Anda. Jika menyentuh bohlam tanpa sarung tangan, bersihkan bohlam dengan kain yang dibasahi dengan alcohol</li>
                        </ul>
                </div>
                <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
                    <img src={pelepasanrumahDepan1} />
                    <img className="mt-4" src={pelepasanrumahDepan2} />
                    <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Pelepasan Rumah Lampu Depan</h1>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Tarik karet penutup debu</li>
                            <li>Longgarkan mur pengunci dengan memutarnya berlawanan arah jarum jam</li>
                            <li>Longgarkan kaca spion dan lepaskan</li>
                            <li>Lepaskan sekrup A, sekrup B, dan sekrup C</li>
                            <li>Lepaskan boss-boss dengan menekan cover stang kemudi belakang</li>
                            <li>Lepaskan rumah lampu depan kemudian lepaskan konektor</li>
                        </ul>

                    <h1 className="ml-3 mt-6 text-lg font-semibold text-gray-900 dark:text-white">Pemasangan Rumah Lampu Depan</h1>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Pasang kaca spion dengan memutarnya searah jarum jam sampai tidak berputar lagi</li>
                            <li>Kendurkan kaca spion sekitar 2 putaran</li>
                            <li>Setel kaca spion</li>
                            <li>Kencangkan mur pengunci dan pasang kembali karet penutup debu</li>
                        </ul>
                </div>
            </div>

        </div>

        <div className="border mt-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="ml-4 sm:ml-8 mt-4 mb-4 text-3xl dark:text-white">Bohlam Lampu Belakang</h1>
            <div className="flex justify-evenly flex-wrap">
                <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
                    <img src={lampuBelakang1} />
                    <img className="mt-4" src={lampuBelakang2} />
                    <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Pelepasan Roda Depan</h1>
                    <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Bohlam lampu sein kanan dan kiri dapat dilepaskan dengan cara yang sama</h1>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Buka jok</li>
                            <li>Lepaskan rakitan lampu rem/belakang dengan melepaskan sekrup-sekrup dan melepaskan konektor-konektor</li>
                            <li>Putar socket berlawanan arah jarum jam dan Tarik socket ke luar</li>
                            <li>Tarik keluar bohlam tanpa memutarnya</li>
                            <li>Pasang bohlam baru dan part-part dengan urutan terbalik dari pelepasan</li>
                            <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-inside dark:text-gray-400" style={myStyle}>
                                <li>Pastikan untuk meletakkan kabel bodi pada dudukan</li>
                                <li>Pastikan untuk memasang boss-boss pada grommet</li>
                                <li>Pastikan hanya bohlam kuning</li>
                                <li>Pastikan socket dengan memutar searah jarum jam</li>
                            </ul>
                        </ul>
                </div>
            </div>

        </div>
      </section>
    </main>
  )
}