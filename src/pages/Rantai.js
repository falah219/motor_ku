

import { Card } from "../components/Card"
import lampuDepan1 from "../assets/images/Menyetel Kekenduran Rantai Roda 1.png"
import lampuBelakang1 from "../assets/images//Menyetel Kekenduran Rantai Roda 2.png"
import lampuBelakang2 from "../assets/images/Memeriksa Kekenduran Rantai 1.png"
import pelepasanrumahDepan1 from "../assets/images/Pelepasan Rumah Lampu depan 1.png"
import pelepasanrumahDepan2 from "../assets/images/Pelepasan Rumah Lampu depan 2.png"




export const Rantai = () => {

  // const [movies, setMovies] = useState([]);
  const myStyle = {
    listStyleType: 'square'
}

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-evenly flex-wrap">
            <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
              <img src={lampuBelakang2} />
              <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Memeriksa Kekenduran Rantai
              </h1>
              <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Pindahkan transmisi ke gigi netral. Matikan mesin</li>
                <li>Letakkan sepeda motor pada standar tengah</li>
                <li>
                  Periksa kekenduran pada suatu titik di bagian bawah tengah
                  antara sprocker depan dan belakang (kekenduran 25 – 35 mm)
                </li>
                <li>
                  Jangan mengendarai sepeda motor anda apabila kekenduran
                  melebihi 50 mm
                </li>
                <li>
                  Purat roda belakang dan periksa bahwa rantai bergerak dengan
                  lancer
                </li>
                <li>Periksa sprocket depan dan belakang</li>
                <li>Bersihkan dan lumasi rantai roda</li>
              </ul>
            </div>
            <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
              <img src={lampuDepan1} />
              <img className="mt-4" src={lampuBelakang1} alt="" />
              <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                Menyetel Kekenduran Rantai
              </h1>
              <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Pindahkan transmisi ke gigi netral. Matikan mesin</li>
                <li>Letakkan sepeda motor pada standar tengah</li>
                <li>Kendurkan mur as roda belakang</li>
                <li>Longgarkan mur pengunci pada kedua sisi lengan ayun</li>
                <li>
                  Putar kedua mur penyetelan dengan jumlah pemutaran yang sama
                  sampai kekenduran rantai roda yang benar diperoleh. Putar
                  mur-mur penyetel searah jarum jam untuk mengencangkan. Putar
                  berlawanan arah jarum jam dan dorong roda belakang ke depan
                  untuk mengendurkan rantai.
                </li>
                <li>Periksa ketepatan posisi as roda belakang</li>
                <li>Kencangkan mur as roda belakang (Torsi 59 N.m)</li>
                <li>
                  Kencangkan mur-mur penyetelan rantai roda secara perlahan
                  kemudian tahan mur penyetelan dan kencangkan mur pengunci
                </li>
                <li>Periksa ulang kekenduran rantai roda</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}